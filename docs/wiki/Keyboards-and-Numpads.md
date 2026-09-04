# Keyboards and Numpads

Keyboard and numpad styling follows the system's EmuHub controller theme.
Printed keycaps and input paths are generated from the same manifest, not from
separately guessed rectangles. Compact portrait artwork is never stretched
into a landscape keyboard.

## Available layout families in source

Computer keyboard profiles are declared for DOS, MSX, MSX2, Amiga, C64, C128,
VIC-20, PET, Plus/4, ScummVM, ZX81, PC-88, Sharp X1, P2000, Amstrad CPC, and
ZX Spectrum. Compact numpad artwork is declared for DOS, Amiga, C128, PET, and
Amstrad CPC. Other systems' numeric console keypads are **not** PC numpads.

Joystick, Keyboard, and Numpad switches change the local input surface. They
must not send a fake guest button. Unsupported modes must not be advertised.

## Keyboard events

Ordinary keys use libretro keyboard codes, with distinct modifier, navigation,
function, and keypad codes. For example, Escape is 27, Enter is 13, Space is
32, and keypad digits use their separate 256-265 range. Labels such as
`keyboard_escape` are semantic bindings, not RetroPad face buttons.

The UI and runtime must agree about press, release, modifiers, repeat, and focus.
On-screen input remains independent of a connected physical keyboard. Mode
switching, view removal, and app exit must release held keys.

## Console keypad exceptions

| System | Core-specific mapping in the inspected manifest |
| --- | --- |
| Intellivision | 5 -> `r3`; 0 -> `l3`; Clear -> `l2`; Enter -> `r2`; other numeric keys use designated right-axis vectors |
| ColecoVision | 1/2/3/4/5/6/7/8 -> `y/select/start/x/l1/r1/l2/r2`; star/hash -> `l3/r3`; 9/0 use designated left-axis vectors |
| Jaguar | 0/1/2/3/4/5/6 -> `x/l1/r1/l2/r2/l3/r3`; remaining keys use the Jaguar keyboard translation |
| Atari 5200 | Direct-keypad device; star/hash/0/1/3/5/7/9 -> `y/x/r1/r2/l2/r3/l3/l1`; 2/4/6/8 use designated right-axis vectors; Pause and Reset are separate |

Do not replace those bindings with ASCII digits or reuse a different core's
device subtype. They are source mappings, not a claim of physical keypad QA.

## Acceptance

Check every displayed key, operators, Enter, modifiers, function keys, and mode
switches in both orientations. Test nearby misses and simultaneous modifiers.
Verify a real game's response, not just a highlight animation. User-requested
perfect alignment remains a physical test gate even when static tests pass.
