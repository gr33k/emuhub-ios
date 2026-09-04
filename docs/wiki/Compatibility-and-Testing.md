# Compatibility and Testing

**A listed system, a mapped button, and a playable game are different claims.**

| Evidence level | What it establishes | What it does not establish |
| --- | --- | --- |
| Source reviewed | A specific mapping or code path exists | That the installed build behaves correctly |
| Automated check | The tested contract passed at a recorded revision | Thumb comfort, sustained speed, or every game |
| Packaged | An artifact contains the expected files and versions | Successful installation or gameplay |
| Device tested | An identified build, device, game, and scenario were observed | Other devices, titles, controllers, or settings |
| Release qualified | All stated release gates passed for a bounded support scope | Universal compatibility |

The control guides are source-reviewed snapshots dated **2026-09-03**, not a
claim of complete controller certification. Published client source and public
release manifests are still pending. Never treat the PS3 standalone test list
as the compatibility list of the EmuHub iOS client.

## Input qualification checklist

1. Record app build, OS version, device model, system, core, game version,
   controller model, and connection mode. Do not include serial numbers.
2. Test every printed button against the intended in-game action, including
   Coin, Start, Select, shoulders, triggers, and stick clicks where supported.
3. Sweep each D-pad and stick through all cardinal and diagonal directions.
   Check neutral return, full travel, and simultaneous movement plus actions.
4. On touch devices, test centers and visible edges, nearby misses, multiple
   fingers, portrait/landscape rotation, and return from the app menu.
5. Disconnect and reconnect the controller. Background/foreground the app.
   Confirm no stuck keys, buttons, axes, or rumble after release or exit.
6. Exit normally, launch a second game, and repeat after a failed launch.
   Confirm session cleanup and saves before declaring the lifecycle stable.

## Application release gates

- Verify the complete artifact identity, signing route, bundled dependencies,
  and installation instructions on the stated device/OS combination.
- Test first-login media without relying on reload or restored sessions.
- Verify orientation, aspect ratio, game viewport, and controller visibility.
- Test loading, active gameplay, sound, thermal/memory behavior, and safe exit.
- Verify achievements, cheats, saves, and cloud restore only where claimed.
- Publish unresolved issues and device-specific restrictions alongside results.

Report results through the repository's issue templates. A screenshot of a
menu or an FPS counter alone is not sufficient performance qualification.
