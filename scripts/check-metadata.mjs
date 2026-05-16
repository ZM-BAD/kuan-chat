import { readdirSync, readFileSync } from "fs";

const REQUIRED = ["@name", "@version", "@match", "@grant", "@run-at", "@icon"];

const files = readdirSync(".")
  .filter((f) => f.endsWith(".user.js"))
  .sort();

let errors = 0;

for (const file of files) {
  const content = readFileSync(file, "utf-8");
  const headerMatch = content.match(
    /\/\/ ==UserScript==([\s\S]*?)\/\/ ==\/UserScript==/,
  );

  if (!headerMatch) {
    console.error(`❌ ${file}: missing ==UserScript== header block`);
    errors++;
    continue;
  }

  const header = headerMatch[1];
  const missing = REQUIRED.filter((field) => !header.includes(field));

  if (missing.length > 0) {
    console.error(`❌ ${file}: missing ${missing.join(", ")}`);
    errors++;
  } else {
    console.log(`✅ ${file}`);
  }
}

process.exit(errors > 0 ? 1 : 0);
