import fs from 'node:fs/promises';
import path from 'node:path';
const extensions = new Set(['.js', '.mjs', '.ts', '.tsx']);
const violations = [];
async function walk(directory) {
  let entries = [];
  try { entries = await fs.readdir(directory, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(target);
    else if (extensions.has(path.extname(entry.name))) {
      const source = await fs.readFile(target, 'utf8');
      if (/\t| +$/m.test(source)) violations.push(target);
    }
  }
}
for (const root of ['src', 'tests', 'scripts']) await walk(root);
if (violations.length) { console.error('Formatting violations:', violations); process.exitCode = 1; }
else console.log('source formatting validated');
