# PlayStation, Xbox, and 8BitDo Controllers

EmuHub's controller targets include **PlayStation, Xbox, and 8BitDo**, not only
the on-screen gamepads. The physical device, connection mode, platform driver,
and selected emulator profile all participate in the final mapping.

## Know the positions

| Physical position / control | PlayStation-style pad | Xbox-style pad | Nintendo-style 8BitDo pad |
| --- | --- | --- | --- |
| South face | Cross | A | B |
| East face | Circle | B | A |
| West face | Square | X | Y |
| North face | Triangle | Y | X |
| Left / right shoulder | L1 / R1 | LB / RB | L / R |
| Left / right trigger | L2 / R2 | LT / RT | ZL / ZR or L2 / R2 |
| Left / right stick click | L3 / R3 | LS / RS click | L3 / R3 |
| Select-like control | Share / Create, or Select on older pads | View / Back | Minus / Select |
| Start-like control | Options, or Start on older pads | Menu / Start | Plus / Start |
| System button | PS | Xbox / Guide | Home |

Names vary by model. This table identifies physical controls; it does **not**
promise that a system button is forwarded by the OS or that its action is the
same in every client. Refer to [Controller Mapping](Controller-Mapping.md) for
the actual application shortcuts and guest bindings.

For example, default RetroPad south is `b`: Xbox A, PlayStation Cross, and
Nintendo-layout B occupy that position. GameCube, N64, 3DO, and pointer profiles
can intentionally override the default. Never fix a label mismatch by globally
swapping every A/B binding.

## Controller families to qualify

| Family | Qualification scope |
| --- | --- |
| DualShock 4 | Standard buttons, sticks, triggers, Share/Options, reconnect, and rumble where exposed |
| DualSense / DualSense Edge | Standard gamepad controls first; extra buttons and advanced haptics are separate capabilities |
| Xbox One / Xbox Series | Verify the exact Bluetooth-capable or wired model and the platform's detected profile |
| Xbox Elite | Verify the exact model and mode; do not assume paddles arrive as independent guest buttons |
| 8BitDo SF30 Pro / SN30 Pro family | Record firmware and input mode; a different mode may change identification or mapping |
| DualShock 3, Xbox 360, older pads/adapters | Legacy compatibility is unqualified unless an exact device/OS/adapter combination is tested |

These are test targets, not a blanket supported-device list. A successful button
test on one pad does not certify another model, firmware, transport, or OS.

## Input boundary

Apple GameController profiles feed EmuHub bindings and the native adapter. L3/R3 require exposed stick-click elements and an enabled guest profile. Home/PS availability is OS-dependent.

## Rumble and advanced controls

Treat device vibration, ordinary controller rumble, advanced haptics, and adaptive
triggers as separate features. They need a complete guest-to-runtime-to-platform
path and physical testing in this client. A result on one controller does not
prove rumble support on every Bluetooth controller.

Do not claim touchpad, gyro, paddles, adaptive triggers, or independent accessory
buttons unless the specific implementation and device test are documented.
Standard L3/R3 means physically clicking a stick; touchscreen pressure is not a
substitute. Proposed touch gestures must be labeled as planned until shipped.

## Test record

Record the controller model, firmware if known, selected input mode, connection
type, client build, device/OS, core, and game. Verify every position, diagonals,
full stick range, analog triggers, clicks, held combinations, menus, reconnect,
player assignment, and rumble stop on exit. No serial numbers or pairing data
belong in a public report.
