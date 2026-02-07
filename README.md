# PanelBench

A comprehensive test suite for evaluating the correctness of visual design panels in code-first design tools. Run these tests against any design-in-code tool to verify that what the panel displays actually matches the underlying CSS.

![Example: Tailwind variable fallback not detected](https://qjiu9iejnualtydd.public.blob.vercel-storage.com/blog/code-first-design-tools/if_fill_is_twvar_fails-rBMMsL48NlVlE78vsEjhAAdVVRTZzq.png)

*Example failure: a `bg-blue-500` element using a Tailwind CSS variable fallback renders as `#000000` in the panel.*

---

## Why This Exists

Design-in-code tools promise to let designers work directly in the browser. But a design panel is only useful if it's **correct**. If clicking an element shows the wrong alignment, the wrong color, or the wrong border weight, the tool is worse than having no panel at all.

We built this test gym to hold ourselves — and others — accountable. Every test case checks a single, unambiguous property. Either the panel reports the correct value, or it doesn't.

---

## Results

We evaluated **Cursor's design sidebar** and **[Inspector](https://tryinspector.com)** against 89 core test cases drawn from this gym.

### Overall Score

| Tool | Passed | Failed | Pass Rate |
|------|--------|--------|-----------|
| **Inspector** | 85 / 89 | 4 | **95.5%** |
| **Cursor** | 46 / 89 | 43 | **51.7%** |

### Breakdown by Category

| Category | Tests | Cursor | Inspector | What's Tested |
|----------|-------|--------|-----------|---------------|
| Auto Layout | 18 | 7 fail | 1 fail | Flow direction, alignment detection, gap, padding, margins, distribution, size constraints |
| Fill | 8 | 3 fail | 0 fail | Solid colors, RGB/HSL formats, opacity, CSS variables, Tailwind classes, gradients |
| Stroke | 12 | 6 fail | 1 fail | Border colors, widths, styles, individual sides, mixed widths, inside/center/outside positioning |
| Typography | 10 | 3 fail | 0 fail | Font family, weight, size (px/rem/em), line height, letter spacing, text alignment |
| Appearance | 10 | 4 fail | 1 fail | Opacity, uniform radius, individual corners, mixed corners, elliptical radius, visibility |
| Effects | 12 | 8 fail | 1 fail | Tailwind shadows, custom box-shadow, inner shadows, blur, backdrop blur, stacked effects |
| Position | 10 | 6 fail | 0 fail | Static/relative/absolute, rotation, flip (scaleX/scaleY), combined transforms, translate |
| Text Layout | 5 | 3 fail | 0 fail | Auto width/height, fixed size, block vs inline, flex-grow text, multi-line |
| Element Types | 4 | 3 fail | 0 fail | Semantic elements, containers, interactive elements, typography panel relevance |

---

## Test Categories

The gym contains **9 sections** covering every property a visual design panel needs to get right.

### 1. Position
Position types (static, relative, absolute, sticky), rotation transforms, scale and flip, combined transforms, flex and grid alignment context, translate offsets, sibling relationships.

### 2. Auto Layout
Flow types (block, flex row, flex column, grid), flex wrap, gap values, grid column/row gap, padding, margins, size constraints (min/max), overflow/clip, alignment grid (9-point for both horizontal and vertical flow), distributed alignment (space-between, space-around, space-evenly), dimension units (px, %, rem, calc, var).

### 3. Text Layout
Text resizing modes (auto width, auto height, fixed size), block vs inline elements, padding and asymmetric padding, margins and negative margins, width constraints, multi-line wrapping, text in flex containers (flex-grow, flex row).

### 4. Appearance
Opacity levels (0%–100% in fine increments), uniform border radius, individual corner radius, mixed corner values, large radius values, visibility states, combined opacity + radius, radius units (px, rem, em, %, elliptical).

### 5. Typography
Font families (Inter, Georgia, Fira Code, Playfair Display, system-ui, Arial), font weights (100–900), font sizes (10px–48px), font size units (rem, em, clamp), line heights (ratio and px), letter spacing (em and px), text alignment (left, center, right, justify), vertical text alignment, block element behavior, combined styles.

### 6. Fill
Solid hex colors, neutral/grayscale, RGB/RGBA, HSL/HSLA, background opacity, transparent/none, CSS variables, Tailwind variable fallbacks, Tailwind color classes, linear/radial/Tailwind gradients, fill visibility.

### 7. Stroke
Border colors, widths (1–12px), styles (solid, dashed, dotted), border opacity, individual sides (top/right/bottom/left only), mixed border widths, border position (inside via `border`, center via `box-shadow`, outside via `outline`), no-border states, border with radius, Tailwind border classes, stroke visibility, mutation test cases.

### 8. Effects
Tailwind shadow presets (sm through 2xl, none), custom drop shadows (subtle/medium/heavy), shadow offset directions, blur values, spread values, colored shadows, inner shadows (inset), layer blur (`filter: blur`), backdrop blur (`backdrop-filter`), stacked/multiple effects, no-effect states, effect visibility.

### 9. Element Types
Text elements (h1–h4, p, span, label, strong/em), container elements (div, section, article, nav, header, footer, main, aside), layout containers (flex, grid), image elements (img, svg, picture), interactive elements (button, anchor, inputs, select, textarea, range), replaced elements (iframe, video), lists, tables, forms, semantic elements (figure, blockquote, code, pre).

---

## Usage

### Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser alongside your design-in-code tool's panel.

### How to Test

1. Click on the **lighter-colored box** inside each test case
2. Compare what your design panel reports to the expected value shown in the test label
3. If the panel reports the wrong value, check the **Failed** checkbox
4. Optionally add a note describing what went wrong
5. When done, click **Copy Test IDs** or **Copy Prompts** to export your failures

### Automated Testing

The repo includes integration tests you can run with:

```bash
npx vitest run --config vitest.integration.config.ts
```

---

## Common Failure Patterns

From our evaluation, design panels tend to fail in predictable ways:

- **Alignment detection in horizontal flow** — The panel swaps axes or shows wrong positions
- **Unit preservation** — REM and percentage values get converted to incorrect px values
- **Border position detection** — `outline` and `box-shadow` borders get misclassified as shadows
- **Distribution detection** — `space-between`, `space-around`, `space-evenly` aren't recognized
- **CSS variable resolution** — Tailwind variable fallbacks show as black or missing
- **Color format support** — RGB and HSL values aren't parsed
- **Shadow class detection** — Tailwind shadow utilities are decomposed into individual shadows instead of recognized as a class

---

## Contributing

Add new test cases by creating a `<TestItem>` in the appropriate section file under `src/sections/`. Each test case should:

1. Apply a single, unambiguous CSS property to the target element
2. Have a clear `testId` and `label` describing the expected value
3. Be visually verifiable by clicking the element and checking the panel
4. Include in the pull-request what the expect output is for that selection.

---

## License

MIT

---

Built by the [Inspector](https://tryinspector.com) team.
