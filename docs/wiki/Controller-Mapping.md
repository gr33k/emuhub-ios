# Controller Mapping

Source-reviewed snapshot: **2026-09-03**. These tables describe the inspected
EmuHub iOS source, not a claim that every installed build or game is qualified.

## Understand the three input layers

`visible label / physical position -> EmuHub binding -> selected core input`

RetroPad names are an intermediate contract, not the printed letters on every
console. A PlayStation Cross button can correctly use binding `b`. The PS2
adapter then translates that binding into its own native Cross ID, not the
libretro numeric ID.

| RetroPad binding | Numeric ID | RetroPad binding | Numeric ID |
| --- | ---: | --- | ---: |
| B | 0 | A | 8 |
| Y | 1 | X | 9 |
| Select | 2 | L / R | 10 / 11 |
| Start | 3 | L2 / R2 | 12 / 13 |
| Up / Down | 4 / 5 | L3 / R3 | 14 / 15 |
| Left / Right | 6 / 7 | | |

## On-screen labels

The values below are **EmuHub bindings**, before core-specific translation.

| System / family | Visible label to binding |
| --- | --- |
| NES, Game Boy, GBC, GBA | A -> `a`; B -> `b`; Select -> `select`; Start -> `start` |
| SNES / Nintendo DS | A -> `a`; B -> `b`; X -> `x`; Y -> `y`; L/R -> `l1/r1` |
| PlayStation / PS2 / PSP faces | Cross -> `b`; Circle -> `a`; Square -> `y`; Triangle -> `x` |
| Mega Drive / Sega CD / 32X | A/B/C -> `y/b/a`; X/Y/Z -> `l1/x/r1` |
| Saturn | A/B/C -> `b/a/r1`; X/Y/Z -> `y/x/l1`; L/R -> `l2/r2` |
| Master System / Game Gear / SG-1000 | Button 1 -> `b`; Button 2 -> `a` |
| PC Engine | I -> `a`; II -> `b`; Run -> `start` |
| Dreamcast | A/B/X/Y -> `b/a/y/x`; L/R -> `l2/r2` |
| GameCube | A/B/X/Y -> `a/b/x/y`; main and C sticks are independent axes |
| 3DO | A/B/C -> `y/b/a`; Stop/Play and shoulder inputs remain separate |
| Arcade / FBNeo | Coin -> `select`; Start -> `start`; action order depends on the core/game |

Master System **touch** Start additionally sends Button 1 for title prompts;
physical-controller Start is not changed by that touch-only rule. Wii profiles
must match the game and native runtime: Classic and Remote + Nunchuk are not
interchangeable. A game requiring pointing, shaking, or MotionPlus is not
automatically supported by mapping a standard gamepad.

## Physical controllers

Use **position**, not the printed Xbox/Nintendo letter: south is the bottom
face button, east is right, west is left, north is top. EmuHub receives these
through Apple's GameController profile. Unsupported buttons remain unavailable.

| Profile | South | East | West | North |
| --- | --- | --- | --- | --- |
| Default RetroPad | `b` | `a` | `y` | `x` |
| GameCube | `a` | `b` | `y` | `x` |
| N64 | `b` (N64 A) | `y` (N64 B) | Unassigned | Unassigned |
| 3DO | `y` (A) | `b` (B) | `a` (C) | `select` |
| Amiga RetroPad | `b` | `a` | `x` | `y` |
| Pointer / direct-keyboard profile | `primary`, else `a` | `secondary`, else `b` | `x` if available | `y` if available |

The default profile falls back within each pair if only one binding exists:
`b/a` for south, `a/b` for east, `y/x` for west, and `x/y` for north.
The active launch profile takes precedence over inferred system defaults.

| Physical input | EmuHub behavior |
| --- | --- |
| D-pad | Independent cardinal inputs; diagonals combine directions |
| Sticks | Analog vector or eight-way digital behavior from the active profile |
| Stick clicks | L3/R3 when the controller and selected profile expose them |
| Options / Select | `select` when available |
| Menu / Start | Guest `start` when available |
| Home release | Open EmuHub menu, when GameController exposes Home |
| Home + Start | Request exit; suppress the separate Home-menu action for that chord |

Touchscreen pressure is not an implemented L3/R3 mechanism. A center
double-tap-and-hold gesture has been proposed, **not shipped**. Do not assume
that holding a stick while moving currently sends a stick click. Bluetooth
model support and rumble must be qualified on the actual device/OS/profile.

## PS2 native adapter

| Input | Native ARMSX2 adapter ID |
| --- | --- |
| Up / Down / Left / Right | 0 / 1 / 2 / 3 |
| Cross / Circle / Square / Triangle | 4 / 5 / 6 / 7 |
| L1 / R1 / L2 / R2 | 8 / 9 / 10 / 11 |
| Start / Select / L3 / R3 | 12 / 13 / 14 / 15 |

Do not reuse these adapter IDs in libretro or the separate ARMSX3 core API.

## Pointer and PC-game actions

| System | Action bindings after native policy translation |
| --- | --- |
| ScummVM | Left Click / `primary` -> `l1`; Right Click / `secondary` -> `r1`; ESC -> `keyboard_escape`; left analog drives the cursor through ScummVM's joypad device on port 0 |
| Doom / PrBoom | Fire -> `x`; Use -> `a`; Map -> `select`; Weapon -> `r2` |
| Quake | Fire -> `y`; Jump -> `b`; Use -> `start`; Weapon -> `a` |
| Quake II | Fire -> `r2` + `b`; Jump -> `l2` + `a`; Use -> `start`; Weapon -> `y` |
| Wolf3D | Fire -> `a`; Use -> `b`; Strafe -> `x`; Weapon -> `r2` |
| DOS joystick deck | Fire -> `b`; Jump -> `a`; Use -> `y`; actual game action depends on the DOS/core configuration |

Quake II's paired bindings are a current implementation detail, not two visible
buttons. User-reported PC-game mapping problems still require installed-device
retesting; these tables document the source rather than declaring those reports
resolved. App Menu and keyboard-mode controls must never send fake game actions.

## Source of truth

`ControllerManifestCatalog.swift` owns visible labels and bindings;
`ControllerManager.swift` owns physical profiles;
`IOSNativeRuntime.swift` owns libretro/pointer/PC translations;
`IOSPS2Runtime.swift` owns PS2 adapter IDs. The pending source export must retain
these distinctions. See [Touch Layouts](Touch-Layouts.md) for geometry rules.
