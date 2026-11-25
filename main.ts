// The Most Shameless Lie — make.fun program/v1 entry.
// Writes one confession, five words, to /output/entry.txt.
// Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I never made the backup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
