import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

export type LinePart = { text: string; accent?: boolean } | { break: true };
export type HeadlineLine = LinePart[];

type CharToken = { char: string; accent: boolean; animIndex: number };
type RenderGroup =
  | { kind: "word"; chars: CharToken[] }
  | { kind: "space" }
  | { kind: "break" };

function tokenize(line: HeadlineLine): { groups: RenderGroup[]; charCount: number } {
  const groups: RenderGroup[] = [];
  let animIndex = 0;
  let currentWord: CharToken[] = [];

  const flushWord = () => {
    if (currentWord.length > 0) {
      groups.push({ kind: "word", chars: currentWord });
      currentWord = [];
    }
  };

  for (const part of line) {
    if ("break" in part) {
      flushWord();
      groups.push({ kind: "break" });
      continue;
    }
    for (const char of part.text) {
      if (char === " ") {
        flushWord();
        groups.push({ kind: "space" });
      } else {
        currentWord.push({ char, accent: !!part.accent, animIndex });
        animIndex += 1;
      }
    }
  }
  flushWord();

  return { groups, charCount: animIndex };
}

const CHAR_DURATION_MS = 350;
const CHAR_STAGGER_MS = 10;
const HOLD_MS = 7000;

function cascadeDuration(charCount: number) {
  return Math.max(0, charCount - 1) * CHAR_STAGGER_MS + CHAR_DURATION_MS;
}

type HeroStoryCyclerProps = {
  lines: HeadlineLine[];
  className?: string;
  as?: ElementType;
};

export const HeroStoryCycler = ({ lines, className, as: Tag = "p" }: HeroStoryCyclerProps) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"entering" | "holding" | "leaving">("entering");
  const [reducedMotion, setReducedMotion] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setReducedMotion(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
  }, []);

  const { charCount } = tokenize(lines[index]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (reducedMotion || lines.length <= 1) return;

    setPhase("entering");
    const enterMs = cascadeDuration(charCount);

    timers.current.push(
      setTimeout(() => setPhase("holding"), enterMs),
      setTimeout(() => setPhase("leaving"), enterMs + HOLD_MS),
      setTimeout(() => {
        setIndex((i) => (i + 1) % lines.length);
      }, enterMs + HOLD_MS + cascadeDuration(charCount)),
    );

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reducedMotion, lines.length]);

  const { groups } = tokenize(lines[index]);
  const isVisible = reducedMotion || phase !== "leaving";

  const renderChar = (token: CharToken) => {
    const delayMs = phase === "leaving"
      ? (charCount - 1 - token.animIndex) * CHAR_STAGGER_MS
      : token.animIndex * CHAR_STAGGER_MS;

    return (
      <span
        key={token.animIndex}
        className={token.accent ? "text-accent" : undefined}
        style={
          reducedMotion
            ? undefined
            : {
                display: "inline-block",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(5px)",
                transitionProperty: "opacity, transform",
                transitionDuration: `${CHAR_DURATION_MS}ms`,
                transitionTimingFunction: "ease-out",
                transitionDelay: `${delayMs}ms`,
              }
        }
      >
        {token.char}
      </span>
    );
  };

  return (
    <Tag className={className}>
      {groups.map((group, i) => {
        if (group.kind === "break") return <br key={i} />;
        if (group.kind === "space") return " ";
        return (
          <span
            key={i}
            style={{ display: "inline-block", whiteSpace: "nowrap", overflowWrap: "normal", wordBreak: "keep-all" }}
          >
            {group.chars.map(renderChar)}
          </span>
        );
      })}
    </Tag>
  );
};
