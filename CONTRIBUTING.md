# Contributing

Keep changes specific to this EmuHub client. Server/admin changes belong in the
EmuHub server project; reusable emulator changes belong in the relevant core
project. Do not import another project's private history or replace its license.

## Documentation

The Markdown files in `docs/wiki/` are the version-controlled wiki sources.
Update those through a pull request so the repository and published wiki remain
aligned. Describe implemented, tested, and planned behavior separately. Use
redacted examples and link to exact public releases when they exist.

## Controls

Explain the complete path from visible label or physical input to logical
binding and core input. A change to artwork dimensions, coordinates, or input
semantics requires matching geometry/mapping tests and a device test plan.
Do not replace a system-specific layout with a generic pad or declare all
controllers supported after testing one model.

## Review checklist

- The change stays within the client/core/server ownership boundary.
- No secrets, private paths, logs, games, firmware, or signing material appear.
- Documentation links and mapping references are current.
- Verification states exactly what ran and what remains untested.
- Existing themes, layouts, saves, and rollback artifacts remain preserved.
