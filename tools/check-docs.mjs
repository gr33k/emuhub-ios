import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '.');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'PUBLICATION.json'), 'utf8'));
const allowed = new Set([...manifest.files, 'PUBLICATION.json']);
const files = [];
function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const absolute = path.join(directory, entry.name);
    assert(!entry.isSymbolicLink(), 'Symlinks are not publishable');
    if (entry.isDirectory()) visit(absolute);
    else files.push(path.relative(root, absolute).split(path.sep).join('/'));
  }
}
visit(root);
assert.equal(files.length, allowed.size, 'Publication file inventory changed');
assert.equal(manifest.scope, 'emuhub-client-documentation');
assert.equal(manifest.sourceExportComplete, false);
assert.equal(manifest.clientBinaryPublished, false);
const sensitive = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bgh[pousr]_[A-Za-z0-9]{25,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{30,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\beyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{10,}\b/,
  /\b(?:192\.168|10\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}\b/,
  /\/(?:Users|home)\/[A-Za-z0-9_.-]+\//,
  /\/(?:Data\/dockerprojects|NAS\/Consoles)\//,
  /https?:\/\/[^\s/]+:[^\s/]+@/,
  /(?:password|api[_-]?key|access[_-]?token|refresh[_-]?token)\s*[:=]\s*["'][^"'\s]{12,}["']/i,
];
let links = 0;
for (const file of files) {
  assert(allowed.has(file), `File outside reviewed allowlist: ${file}`);
  assert(!/(?:^|\/)(?:\._|\.env|credentials|secrets|id_rsa)/i.test(file), `Forbidden name: ${file}`);
  assert(/\.(?:md|json|mjs|yml)$/.test(file), `Unexpected publication type: ${file}`);
  const stat = fs.statSync(path.join(root, file));
  assert(stat.size < 100_000, `Unbounded file: ${file}`);
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  assert(!text.includes('\0'), `Binary data in ${file}`);
  for (const pattern of sensitive) assert(!pattern.test(text), `Sensitive-content pattern in ${file}`);
  if (!file.endsWith('.md')) continue;
  for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^https:\/\//.test(target)) continue;
    assert(!/^\w+:/.test(target), `Unsupported link scheme in ${file}`);
    const destination = path.resolve(path.dirname(path.join(root, file)), target);
    assert(destination.startsWith(root + path.sep), `Link leaves publication: ${file}`);
    assert(fs.existsSync(destination), `Broken local link in ${file}: ${target}`);
    links++;
  }
}
for (const required of ['README.md', 'SECURITY.md', 'CONTRIBUTING.md', 'LICENSING.md',
  'docs/wiki/Home.md', 'docs/wiki/Controller-Mapping.md', 'docs/wiki/Client-Family.md']) {
  assert(allowed.has(required), `Missing required page: ${required}`);
}
console.log(`PASS ${manifest.repository}: ${files.length} allowlisted text files, ${links} local links, sensitive-pattern checks`);
