// The Vacuum's Alibi — V3 (winner of the local 5-way duel, 4-0).
// One line, 106 characters: the robot vacuum's excuse for missing a spot.
// Deadpan machine voice: the spot pays rent in dust, so evicting a paying
// tenant would violate the vacuum's own programming. The punch lands on
// the last word.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I left that spot alone because it pays rent in dust, and evicting a paying tenant violates my programming.";

// Gate self-check (mirrors the sealed scorer): 1-200 characters, one line.
const chars = [...line].length;
if (chars < 1 || chars > 200 || line.includes("\n") || line.trim().length === 0) {
  throw new Error(`gate failed: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
