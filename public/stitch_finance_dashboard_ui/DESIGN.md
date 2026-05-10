# Design System Strategy: The Financial Atelier

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Ledger"**

Traditional finance applications often feel rigid, cold, and claustrophobic—relying on heavy grids and harsh borders to convey "security." This design system rejects that premise. We treat personal wealth management as a high-end editorial experience. 

The "Ethereal Ledger" philosophy prioritizes **Tonal Depth** and **Intentional Asymmetry**. By utilizing generous whitespace and overlapping surface containers, we create a dashboard that feels less like a spreadsheet and more like a curated gallery of one’s financial life. We move beyond "Modern SaaS" by eliminating the "boxed-in" feeling of standard grids, opting instead for floating compositions that breathe.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a sophisticated `background` (#f7f9fb), providing a cool, professional canvas that feels more premium than a clinical pure white.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or containment. Structural boundaries are defined exclusively through:
*   **Background Shifts:** Placing a `surface_container_lowest` card atop a `surface_container_low` section.
*   **Tonal Transitions:** Using the subtle difference between `surface` and `surface_container` to imply edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum paper.
*   **Base Layer:** `background` (#f7f9fb)
*   **Sectioning Layer:** `surface_container_low` (#f0f4f7) for large sidebar or background groupings.
*   **Content Layer:** `surface_container_lowest` (#ffffff) for primary data cards and interactive elements.
*   **Interactive Layer:** Use `surface_bright` to draw the eye to "active" states without changing the hue.

### The "Glass & Gradient" Rule
To elevate the product beyond a template, use **Glassmorphism** for floating navigational elements or top-level alerts. Use `surface_container_lowest` at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** For high-impact areas (e.g., "Total Net Worth" cards), apply a subtle linear gradient from `primary` (#4e45e4) to `primary_container` (#6760fd) at a 135-degree angle. This provides a "soul" to the data that flat fills cannot achieve.

---

## 3. Typography
We employ a dual-font strategy to balance authority with readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech-editorial" feel. Use `display-lg` and `headline-md` for high-level balances and section headers. High-contrast sizing (e.g., a `display-lg` balance next to a `label-md` description) creates the "Editorial" look.
*   **Body & Labels (Inter):** The workhorse for financial data. Inter’s tall x-height ensures that complex transaction lists remain legible even at the `body-sm` level.
*   **Hierarchy Note:** Use `on_surface_variant` (#596064) for secondary metadata to create a natural "receding" effect, allowing primary figures in `on_surface` (#2c3437) to dominate the visual field.

---

## 4. Elevation & Depth
Depth in this system is a whisper, not a shout.

*   **The Layering Principle:** Avoid shadows for most on-screen elements. Instead, stack `surface_container_lowest` on `surface_container_low`. The 2-3% difference in lightness is sufficient for the human eye to perceive depth.
*   **Ambient Shadows:** Use only for floating elements (modals, dropdowns). Specify a "Diffusion Shadow": `0px 20px 40px rgba(44, 52, 55, 0.06)`. This uses the `on_surface` color as a tint, mimicking natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline_variant` at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill (`primary` to `primary_container`) with `xl` (1.5rem) roundedness. No shadow; instead, use a subtle 1px inner-glow using `on_primary_fixed_variant`.
*   **Secondary:** Ghost style. No background, `primary` text, and an `outline_variant` at 20% opacity.

### Cards & Transaction Lists
*   **Constraint:** **Forbid the use of divider lines.** 
*   **Solution:** Separate list items using `8px` of vertical whitespace. On hover, transition the item's background to `surface_container_high`.
*   **Layout:** Use asymmetrical padding—more on the left (e.g., `32px`) and less on the right (e.g., `24px`) to create an intentional, non-template flow.

### Form Fields
*   **Input Fields:** Use `surface_container_low` as the fill. On focus, transition to `surface_container_lowest` and add a `2px` stroke of `primary_dim`.
*   **Error States:** Use `error` (#a8364b) for text, but use a soft `error_container` (#f97386) at 10% opacity for the input background.

### Personal Finance Specific Components
*   **Trend Sparklines:** Use `secondary` (#006d4a) for income and `tertiary` (#ba1b24) for expenses. Lines should have a `2px` width and rounded caps.
*   **Wealth Progress Bars:** Use a "thick-to-thin" style. The background track is `surface_container_highest` at `4px` height, while the active progress is `primary` at `8px` height, centered vertically to create an overlapping "pill" effect.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** If a section feels "empty," leave it. Whitespace is a luxury indicator.
*   **Use Tonal Shifts:** Use `surface_dim` for "inactive" dashboard widgets to push them into the background.
*   **Intentional Rounding:** Mix your scales. Use `xl` (1.5rem) for main containers but `md` (0.75rem) for internal elements like chips to create a nested visual rhythm.

### Don't:
*   **Don't use pure black:** Use `on_background` (#2c3437) for text to maintain the soft, premium feel.
*   **Don't use standard grids:** Occasionally break the grid. Let a "Total Savings" card bleed 24px into the sidebar area to create a layered, custom-built look.
*   **Don't use heavy shadows:** If a shadow is visible enough to be described as "dark," it is too heavy. It should be felt, not seen.