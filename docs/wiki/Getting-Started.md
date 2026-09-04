# Getting Started

EmuHub iOS is the iPhone/iPad client for an EmuHub server. It provides native
library browsing, touch controls, and supported native emulator integrations.
It is not a standalone emulator.

## Before installation

This repository currently publishes documentation, not an installable client
release or a complete independently buildable source export. Do not follow a
generic build command or download an unrelated core IPA expecting this client.
Future releases must identify the exact app build, signing route, supported
OS/device scope, bundled core revisions, and checksums.

An existing development build requires access to your EmuHub server and any
firmware required by the selected emulator. Use only content you are entitled
to use. JIT, signing, memory entitlements, and installation permanence differ
by device and OS; an older-device TrollStore result is not proof of support on
the latest iOS. This guide does not promise an App Store or universal JIT route.

## First session

1. Enter your own EmuHub server address and sign in or use guest access if enabled.
2. Confirm the initial portal video and library load without a manual refresh.
3. Choose a system and game; check the active input/core profile before launching.
4. Test controls and orientation, then exit and verify a second launch.

iOS native launches are intended to fail closed. A failed native core must not
silently redirect gameplay into hosted, WebKit, or WASM emulation.

See [Controller Mapping](Controller-Mapping.md), [Touch Layouts](Touch-Layouts.md),
and [Keyboards and Numpads](Keyboards-and-Numpads.md) for input details.
