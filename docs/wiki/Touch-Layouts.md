# Touch Layouts

The default is the system-specific EmuHub theme, with dedicated portrait docks
and landscape rails. Preserve accepted alternatives instead of overwriting them.
This is the layout contract, **not a claim that all reported ergonomic issues
have passed physical retesting**.

## Reference surfaces

| Surface | Reference | Rule |
| --- | --- | --- |
| iPhone landscape | 926 x 428 points | Separate left/right rails; preserve the game viewport |
| Landscape rail | 204 x 428 points reference | Use its dedicated raster and measured geometry |
| Portrait dock | Physical lower half of the screen | Full-width container; aspect-fit artwork above the home-indicator reserve |
| Compact typing deck | 1254 x 1254 pixel master | Use the matching compact manifest, never a rescaled wide keyboard |
| Wide typing deck | 926 x 428 point reference | Render the wide manifest; do not stretch the square raster |

These are reference containers, not fixed render sizes for every device or every
newer artwork revision. Asset dimensions and normalized control geometry remain
the authority. Rotation changes the projection, not the original proportions.

## One projection for graphics and input

For an artwork region `W x H` and available container `Cw x Ch`:

```text
scale = min(Cw / W, Ch / H)
targetWidth = W * scale
targetHeight = H * scale
screenPoint = targetOrigin + normalizedPoint * targetSize
```

Use the **same target rectangle** for drawing, hit testing, and press feedback.
Do not independently stretch either axis, crop a review board, or guess hit
boxes from where buttons appear in a screenshot. Circles stay circular; D-pads
use a cross contour; analog gates capture radial input. Empty D-pad corners and
space between buttons must not steal adjacent touches.

## Artwork and interaction requirements

- Use the accepted master, correct native dimensions, and genuine alpha where
  specified. A baked checkerboard is not transparency.
- Keep lettering sharp, silhouettes clean, and background lines unwarped.
- No overlapping controls, clipped labels, or controls crossing the bezel.
- Place action groups and sticks for thumb reach with usable separation; do
  not shrink a whole panel merely to hide a bad layout.
- Keycaps, hit paths, and reversible press feedback share one manifest.
- Multi-touch ownership must preserve held inputs until their final source
  releases. Cancel, rotation, teardown, and disconnect must clear input.

The inspected catalog declares 69 system IDs, including aliases; that count is
not a promise of 69 qualified emulators. `ControllerArtworkHitGeometryCatalog`
and `PrecisionControllerSurface` are authoritative alongside the manifest.

## Theme extensions and iPad

Custom uploads are a **future capability**, not an available settings feature.
Any new theme needs exact layout-role identity, dimensions, contour geometry,
bindings, and a manifest/version hash. An attractive PNG alone is not sufficient.

For iPad, first reuse normalized geometry with a proportionally scaled container
and verify thumb reach. If an iPad-specific layout is needed, give it a separate
role rather than changing the accepted iPhone contract. Physical iPad
qualification remains separate from size-independent geometry tests.

## Regeneration checklist

1. Record system, theme, orientation, master checksum, native dimensions, and
   every label/binding/contour before generation.
2. Match the accepted system references; retain original hardware colors and
   logical layout while respecting iPhone spacing.
3. Compare output at native size for alpha, edges, texture, lettering, and drift.
4. Update final-pixel geometry and the shared manifest together.
5. Test bounds, shared hit pixels, nearest-neighbor misses, diagonals, multiple
   fingers, rotation, and actual guest actions before acceptance.
