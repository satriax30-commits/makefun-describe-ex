// Describe Your Ex in One Word — entry for
// u-puan-describe-your-ex-in-one-word-9fc6ebe7
//
// The word is the whole entry: one word, 11 characters, a verdict ON the
// ex. The program writes it verbatim to output/entry.txt under the
// working directory (no trailing newline), exactly as the gate expects:
// UTF-8 text, 1-111 characters, not only whitespace, exactly one word.
//
// Why this word: "placeholder" is the ex reduced to a role — someone who
// was only ever filling the seat until the real thing came along. It is
// not a plain insult: the sting is the precise absurdity of a person
// being a stand-in, a temp, a seat-warmer. It lands instantly, needs no
// explanation, and everyone who has had an ex has either been one or
// dated one — the laugh comes with a nod. It beats the generic pile
// (ghost, crazy, toxic, liar) because those are accusations anyone could
// shout; "placeholder" is a verdict, and a funny one.
//
// Rejected candidates (see README.md "The word" for the full reasoning):
// "prototype" — strong, but needs a tech beat to land; "placeholder"
// needs none. "draft" / "rehearsal" / "demo" — same family, weaker:
// a draft can still be good, a rehearsal can still be fun, a demo can
// still impress; a placeholder is by definition not the real thing.
// "tutorial" — the lesson before the real thing; clever, but it flatters
// the ex as useful. "refund" — funny, but describes what you want back,
// not the ex. "lesson" / "footnote" — true, but flat, no twist.
// "ghost" / "crazy" / "toxic" / "lazy" / "weird" / "liar" / "cheater" —
// the crowded generic pile, no surprise, no joke.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The word. 11 characters, one word, no spaces, no punctuation — well
// inside the 111-character cap.
const WORD = "placeholder";

// Where the grader reads the entry from: output/entry.txt under the
// working directory. Overridable for local runs only:
//   node main.ts /tmp/out/entry.txt
const OUT_PATH = process.argv[2] ?? join(process.cwd(), "output", "entry.txt");

// Enforce the gate before anything touches disk: UTF-8 text of 1-111
// characters, not only whitespace, exactly one word.
function validate(word: string): void {
  const chars = [...word].length;
  if (chars < 1 || chars > 111) {
    throw new Error(`entry must be 1-111 characters, got ${chars}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be a single word with no whitespace");
  }
  // Letters only (A–Z/a–z): enforces the judge's craft criterion of
  // exactly one word — no punctuation tricks, digits, or symbols.
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must contain letters only (A-Z/a-z)");
  }
}

function main(): void {
  validate(WORD);
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, WORD, "utf8");
  // Self-check: what landed on disk must be byte-for-byte the word.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== WORD) {
    throw new Error("entry.txt on disk does not match the word");
  }
  // Byte-length check: the file must be at most 111 bytes and its byte
  // length must equal the word's UTF-8 byte length — guards against any
  // encoding surprise (e.g. a BOM or multi-byte substitution).
  const diskBytes = Buffer.byteLength(back, "utf8");
  const wordBytes = Buffer.byteLength(WORD, "utf8");
  if (diskBytes > 111 || diskBytes !== wordBytes) {
    throw new Error(
      `entry.txt byte length mismatch: disk ${diskBytes} bytes, word ${wordBytes} bytes`,
    );
  }
  validate(back);
  console.log(`wrote ${[...WORD].length} characters to ${OUT_PATH}`);
}

main();
