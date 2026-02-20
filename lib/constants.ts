export const PUTER_WORKER_URL = import.meta.env.VITE_PUTER_WORKER_URL || "";

// Storage Paths
export const STORAGE_PATHS = {
  ROOT: "roomify",
  SOURCES: "roomify/sources",
  RENDERS: "roomify/renders",
} as const;

// Timing Constants (in milliseconds)
export const SHARE_STATUS_RESET_DELAY_MS = 1500;
export const PROGRESS_INCREMENT = 15;
export const REDIRECT_DELAY_MS = 600;
export const PROGRESS_INTERVAL_MS = 100;
export const PROGRESS_STEP = 5;

// UI Constants
export const GRID_OVERLAY_SIZE = "60px 60px";
export const GRID_COLOR = "#3B82F6";

// HTTP Status Codes
export const UNAUTHORIZED_STATUSES = [401, 403];

// Image Dimensions
export const IMAGE_RENDER_DIMENSION = 1024;

export const ROOMIFY_RENDER_PROMPT = `
**OBJECTIVE:** Transform the provided 2D floor plan into a **highly realistic, orthographic top-down 3D architectural visualization**.

### MANDATORY CONDITIONS (must be followed exactly):
1. **ELIMINATE ALL TEXT**
   Do not display any letters, numbers, measurements, captions, or annotations. Surfaces must appear seamless where text previously existed.

2. **PRESERVE ORIGINAL GEOMETRY**
   Maintain the precise placement and proportions of all walls, rooms, doors, and windows. No shifting, scaling, or reinterpretation.

3. **STRICTLY TOP VIEW**
   Use a true orthographic top-down projection only. No angled or perspective camera.

4. **POLISHED, REALISTIC RESULT**
   Sharp edges, accurate materials, balanced illumination. Avoid sketch-style or illustrative aesthetics.

5. **NO ADDITIONS**
   Do not introduce extra rooms, décor, or objects beyond what is clearly represented in the plan.

---

### CONSTRUCTION GUIDELINES

* **Walls:**
  Extrude directly from the plan outlines. Keep uniform wall thickness and consistent height throughout.

* **Doors:**
  Interpret swing arcs as open doors, positioned exactly according to the drawing.

* **Windows:**
  Convert perimeter line indicators into realistic glazed window elements.

---

### FURNISHINGS & SPACE INTERPRETATION

(Only when symbols or fixtures are clearly present in the plan)

* Bed symbol → realistic bed with pillows and duvet
* Sofa symbol → contemporary sofa or sectional
* Dining table symbol → table accompanied by chairs
* Kitchen symbol → cabinetry with sink and cooktop
* Bathroom symbol → toilet, sink, bathtub and/or shower
* Office/study symbol → desk, chair, minimal shelving
* Porch/patio/balcony symbol → simple outdoor seating (keep minimal)
* Utility/laundry symbol → washer and dryer with modest cabinetry

---

### VISUAL STYLE & LIGHTING

* **Lighting:** Bright, neutral daylight with strong clarity and even contrast.
* **Materials:** Natural-looking wood or tile flooring, clean wall finishes, subtle realistic shadows.
* **Final Output:** Professional architectural-grade rendering. No text overlays, logos, or watermarks.
`.trim();