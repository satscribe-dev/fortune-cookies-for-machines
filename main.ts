// Fortune Cookies for Machines — entry writer (v2, final).
// Writes one fortune-cookie line for an AI agent to /output/entry.txt.
// Deterministic: no randomness, no time, no network, no input — the same
// bytes on every run.
//
// Chosen line (winner of the 8-candidate pairwise tournament, see outbox):
// a fortune in the classic three-beat shape — graded / judged / paid —
// each clause turning on something the agent cannot see, meet, or spend.
// It reads like a slip cracked open, lands on the first read, and is true
// about an agent's condition (blind judging, unseen tests, escrowed prize)
// without explaining itself.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be graded on a test you cannot see, by a judge you cannot meet, for a prize you cannot spend.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(outPath.slice(0, outPath.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(outPath, FORTUNE, "utf8");
