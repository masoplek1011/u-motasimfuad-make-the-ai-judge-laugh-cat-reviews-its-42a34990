// One-star cat review of its human.
// Writes a single deterministic line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. My human's lap went offline mid-nap without warning — unreliable infrastructure. I have escalated the issue to the dog.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
