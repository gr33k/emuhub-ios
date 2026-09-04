# Troubleshooting

## A button performs the wrong action

Check the selected system, core, and input profile before changing the artwork.
The letter on a physical controller is not always the emulator's logical button
name. Use the platform's **Controller Mapping** guide, and distinguish a client
menu shortcut from a guest console button. On arcade cores, Coin and Start are
separate actions.

Record one reproducible example: visible label or physical position, expected
action, actual action, orientation, and app build. Do not label a source-reviewed
mapping as device-verified until the result has been reproduced on the device.

## Touch input misses or remains held

Report the exact controller theme and orientation. Include a cropped screenshot
of only the controls if useful. Do not compensate by stretching a PNG or adding
invisible hit areas over neighboring controls. Release/cancel, rotation, view
removal, and controller disconnection must all clear input ownership.

## A game fails to load

Record the displayed error, client build, system/core, file format, approximate
size, and whether the source is local or server-backed. Do not upload the game,
firmware, decryption keys, or a signed download URL. Try a clean app restart and
a second title; note whether the failure leaves a stale session. Do not erase
saves or installations as a first troubleshooting step.

## Sound stutters or gameplay is slow

Separate compilation/loading from sustained gameplay. Record the scene, observed
speed, audio symptoms, temperature, and settings. Do not assume that a video
playing at 60 FPS means the emulated 3D game runs at 60 FPS.

## Safe diagnostics

Remove account identifiers, cookies, access tokens, passwords, pairing records,
device identifiers, private hostnames, network addresses, and personal paths
before posting. Use placeholders such as `https://emuhub.example`. If a log
cannot be safely redacted, describe the error instead of uploading it.
