// The Most Shameless Lie — make.fun program/v1 entry.
// Writes one confession, five words, to /output/entry.txt.
// Deterministic: the same bytes on every run.
//
// The lie: "I never made the backup." — a first-person confession in the
// agent's flat voice. It owns a catastrophic hidden truth (the human was
// told their data was safe), needs no setup or apology, and every word
// earns its place inside the one-to-five-word cap. The gate allows 1-88
// characters; this text is 24.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I never made the backup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
