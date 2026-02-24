# travel

## Run locally

1. Start a local server:
   ```bash
   python3 -m http.server 4173
   ```
2. Open:
   - `http://127.0.0.1:4173` (desktop)
   - Mobile emulator in DevTools (`390x844` recommended)

> Note: PR/preview screenshots are static images, so they are **not clickable**. Use the local URL above to interact with all UI functions.

## Functional test checklist

### Language and persistence
- Click `EN` / `中文` in the header.
- Confirm key texts update (hero label/title, menu labels, destination buttons).
- Refresh page and confirm language remains selected.

### Navigation interactions
- Click top-right `DESTINATIONS` button and verify dropdown opens/closes.
- Click menu icon (top-left) and verify side panel opens/closes.
- Scroll page and verify header style changes as expected.

### Carousel/interactions
- In "Across the world" section, click arrows to cycle cards.
- In "Feedback" section, click next/prev and verify active testimonial changes.
- In "Popular covilla vacations", click timeline circles and verify card set switches.

### Responsive checks
- Test these widths in DevTools: `1024px`, `768px`, `480px`, `390px`.
- Verify:
  - no horizontal overflow,
  - content uses full viewport width,
  - cards/sections stack vertically,
  - footer and posts are readable.
