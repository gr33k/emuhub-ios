# Security

## Report privately

Use this repository's **Security > Advisories > Report a vulnerability** action
for suspected vulnerabilities. Do not open a public issue containing secrets,
authentication bypass details, session data, or private infrastructure information.
If private reporting is unavailable, ask a maintainer for a private reporting
channel without including exploit details or credentials.

## Publication boundaries

Only explicitly reviewed client documentation and input-reference files are
included in this publication. Server/admin implementations and standalone core
application code are outside this repository's scope. No private repository
history is imported as part of the documentation publication.

Do not commit or attach:

- Passwords, cookies, API tokens, refresh tokens, or signed content URLs.
- Signing keys, provisioning profiles, certificates, or pairing records.
- Environment files, private configuration, databases, or device logs.
- Game files, firmware, decryption keys, or personal save data.
- Private network addresses, hostnames, device serials, or personal file paths.

Review both changed files and Git history before publication. Secret scanning
and push protection supplement human review; they do not prove that a repository
is free of sensitive information. Rotate exposed credentials before removing
them from history. Never paste the exposed value into an issue or changelog.
