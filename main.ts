// The Funniest Honest Appliance Error — a toaster tells the truth.
// Deterministic: no network, no clock, no randomness. Writes one line
// to /output/entry.txt, the file the sealed gate reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Error: I burnt your toast again. You set me to 6. Six is not a setting. Six is a cry for help.";

const OUT = "/output/entry.txt";
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
