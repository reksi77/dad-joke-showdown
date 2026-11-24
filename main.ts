// Dad Joke Showdown entry: writes one original dad joke to /output/entry.txt.
//
// The joke is written by hand below (a single string literal) — the program
// simply delivers it, byte-identical, on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked why I bring a ladder to every barbecue. I said, 'To reach new heights \u2014 and to make sure the steaks are never low.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
