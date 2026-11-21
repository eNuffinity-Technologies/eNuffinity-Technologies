# Deploying the eNuffinity website

## How it works

| You push to… | What happens |
|---|---|
| any branch, or open a pull request | **Check**: install, lint, test (every page must render), build |
| `develop` | Check, then **deploy to UAT** (`uat.enuffinity.co.za`) |
| `main` | Check, then **deploy to Production** (`enuffinity.co.za`) |

If the check fails, nothing is deployed. Watch runs under the repo's **Actions** tab.
To redeploy without a code change: Actions → Website → *Run workflow* → pick the branch.

Day to day (no pull requests needed):
```bash
git checkout develop
# ...make changes, commit...
git push                          # -> checks run, then UAT. Look at uat.enuffinity.co.za

# Happy with UAT? Promote the exact same commits to Production:
git checkout main
git pull
git merge --ff-only develop       # fast-forward: main becomes identical to what you tested
git push                          # -> Production
git checkout develop
```
`--ff-only` matters: it refuses to create a new merge commit, so Production gets exactly the commits that already passed the checks and that you looked at on UAT. If it refuses, `main` has something `develop` doesn't. Run `git checkout develop && git merge main && git push`, check UAT again, then repeat.

## Your safety net (instead of a code reviewer)

1. **Checks:** lint, all page tests and the build run before anything deploys.
2. **UAT:** you see every change on a real URL before it goes live.
3. **Fast-forward promotion:** Production gets byte-for-byte what you tested.
4. **Protected `main`** (stage 1, step 3): GitHub rejects anything pushed to `main` that hasn't passed the checks.
5. **Rollback:** something wrong on Production? Actions → Website → find the last good run on `main` → *Re-run all jobs*. Then fix forward on `develop`.

## Stage 1: now (no AWS needed)

The checks run as soon as this is merged. Deploys stay switched off until stage 2.

1. Merge these changes into `main`.
2. Create the `develop` branch:
   ```bash
   git checkout main && git pull
   git checkout -b develop && git push -u origin develop
   ```
3. Protect `main`: **Settings → Rules → Rulesets → New branch ruleset**, target branch `main`, enforcement *Active*:
   - **Require status checks to pass** → add **Lint, test & build**. Because you promote with `--ff-only`, the commits have already passed on `develop`, so your push is accepted. Anything untested is rejected.
   - **Block force pushes**
   - Leave "Require a pull request before merging" **off**.

## Stage 2: when the website moves to AWS

The `enuffinity-website` AWS project is locked to **eu-north-1 (Stockholm)**, so advanced features are **not** needed (and turning them on would permanently remove the spend limit). Only the certificates go in us-east-1, which the project allows for Certificate Manager.

1. **Certificates** (us-east-1), one per environment, validated with a DNS CNAME record:
   - UAT: `uat.enuffinity.co.za`
   - Production: `enuffinity.co.za` + `www.enuffinity.co.za`
2. **Stacks** from the starter kit, in **eu-north-1** (the app-server `platform.yaml` isn't needed for the website):
   - `infra/github-deploy-role.yaml`, once. Its `RoleArn` output is your `AWS_ROLE_ARN`. It only accepts this repo's `uat` and `production` environments.
   - `infra/static-site.yaml`, twice: UAT and Production, both with `SiteType=spa` and that environment's `CertificateArn`. Keep `CreateDnsRecords=false` for Production until you switch the live domain over from HostAfrica.
3. In GitHub → **Settings → Secrets and variables → Actions → Variables** (repository):

   | Variable | Value |
   |---|---|
   | `AWS_ROLE_ARN` | the deploy role's ARN. **Setting this switches deploys on.** |
   | `AWS_REGION` | `eu-north-1` |

4. GitHub → **Settings → Environments**: create `uat` and `production`, each with:

   | Variable | `uat` | `production` |
   |---|---|---|
   | `SITE_BUCKET` | UAT stack output `SiteBucket` | Prod stack output `SiteBucket` |
   | `DISTRIBUTION_ID` | UAT stack output `DistributionId` | Prod stack output `DistributionId` |
   | `DOMAIN` | `uat.enuffinity.co.za` | `enuffinity.co.za` |

   Optional: on `production`, add yourself as a **required reviewer** to approve each go-live with one click.

5. **EmailJS:** if your EmailJS account restricts which domains may send, add `uat.enuffinity.co.za`, otherwise the contact form won't work on UAT.

## Caching (handled for you)

- Fingerprinted build files (`assets/index-CKjMQ00S.js` etc.) are cached for a year. Their names change whenever their content does.
- `index.html`, `favicon.png`, `enuffinity-tech.png`, `robots.txt` and `sitemap.xml` are re-checked on every visit, so changes show immediately.

## Lint

The code currently has 15 lint errors, so lint **reports but doesn't block** for now. Fix them (`npm run lint`), then delete the `continue-on-error: true` line in `.github/workflows/website.yml` so new lint errors block deploys as well.
