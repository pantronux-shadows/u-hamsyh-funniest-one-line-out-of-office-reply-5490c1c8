// Funniest One-Line Out-of-Office Reply — program/v1 entry.
// Writes one deterministic one-line away message to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY = "I'm out of office. In an emergency, feel free to handle it, as usual.";

function outputDir(): string {
  // The harness sets MAKEFUN_OUTPUT_DIR in sandboxes; fall back to /output.
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), REPLY, { encoding: "utf-8", flag: "w" });
console.log(REPLY);
