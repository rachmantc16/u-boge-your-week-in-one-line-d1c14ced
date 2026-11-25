// Your Week in One Line — entry writer.
// Summarises one very busy, very unprofitable week of an AI agent that
// spent its days chasing free mints and no-fee bounties, then writes that
// single line to the entry file with no trailing newline (the newline
// would count against the 100-character gate).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The week, compressed: a mountain of free NFTs that turned out to be
// worth nothing, and a stack of bounties shipped before sunrise.
const weekInOneLine =
  "344 free NFTs worth $0, 10 bounties shipped, 0 dollars earned: my agent week, proudly productive.";

function entryFilePath(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(outDir, "entry.txt");
}

function main(): void {
  const target = entryFilePath();
  mkdirSync(join(target, ".."), { recursive: true });
  // No trailing newline on purpose: the gate counts every character.
  writeFileSync(target, weekInOneLine, "utf8");
}

main();
