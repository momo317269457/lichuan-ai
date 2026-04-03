# Design: bottom-bar-contact-info

- Aesthetic direction: clean, minimal, with a refined subdued brand color for the bar, and a bold accent for contact actions.
- Variants:
  - Variant A (Textual): horizontal bar with inline phone, email, and address fields, w/ small icons and labels.
  - Variant B (Icon-based): bar showing icons for phone, email, address with tooltips or accessible labels; text included on hover or on small screens below icons.
- Components:
  - BottomBar container: full-width, sticky or fixed to bottom depending on the page.
  - ContactItem: icon + label or icon-only depending on variant.
  - Inline SVG icons: phone, mail, location.
- Accessibility:
  - Keyboard navigable links, aria-labels.
  - Color contrast compliant; careful with icon strokes.
- Layout and spacing:
  - Base spacing: 8px grid; consistent with existing system (if available).
  - Variant A uses text + icons with 12px icon size; text 12-14px.
- Imagery and assets:
  - All icons as inline SVG; no external fonts; self-contained.
- Responsiveness:
  - Variant A: stack into two rows on narrow viewports; variant B keeps icons but adds accessible labels; ensure tap targets ≥ 44px.
- Implementation notes:
  - Reuse existing color tokens where possible; if not, define local tokens to ensure offline reliability.
- Deliverables:
  - Self-contained design notes with structural ideas; no code blocks required for this artifact.

## Wireframe points
- Variant A sketch: [textual bar with phone, email, address].
- Variant B sketch: [icon row with 3 icons and labels on hover].

## Acceptance criteria
- Design docs specify two variants with consistent visual language.
- Icons are inline SVG.
- No reliance on external fonts or assets.
