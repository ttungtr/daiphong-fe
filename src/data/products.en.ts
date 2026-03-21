/**
 * English translations for products.
 * Use with PRODUCTS from products.ts: merge by product id when lang is 'en'.
 */

export const PRODUCT_CATEGORIES_EN = [
  'All products',
  'Ducts',
  'Air outlets',
  'Dampers',
  'Duct accessories',
  'Fire-resistant EI ducts',
  'Cable trays',
  'Custom fabrication',
] as const;

export const SLUG_CATEGORY_MAP_EN: Record<string, string> = {
  'tat-ca': 'All products',
  'ong-gio': 'Ducts',
  'cua-gio': 'Air outlets',
  'van-gio': 'Dampers',
  'phu-kien-ong-gio': 'Duct accessories',
  'ong-gio-chong-chay-ei': 'Fire-resistant EI ducts',
  'mang-cap-dien': 'Cable trays',
  'gia-cong-theo-yeu-cau': 'Custom fabrication',
};

export const PRODUCT_PRICE_EN = 'Contact';

export type ProductTranslation = {
  name: string;
  category: string;
  description: string;
  details?: string;
  specifications?: string;
};

export const PRODUCTS_EN: Record<string, ProductTranslation> = {
  'p-001': {
    name: 'Fire-resistant EI duct wrapped with Tozen board',
    category: 'Fire-resistant EI ducts',
    description:
      'Fire-resistant EI duct wrapped with Tozen board meets fire safety standards, thermal insulation and explosion safety.',
    details: `<p><strong>Tozen fire-resistant board</strong> is a material specially designed for high heat resistance and fire spread prevention.</p>
<ul>
  <li><strong>Main components:</strong> Tozen board is made from inorganic materials such as <strong>Portland cement, fine sand, cellulose fiber, lime, perlite, vermiculite and mica</strong>. The combination of these creates a material with excellent fire resistance.</li>
  <li><strong>Key features:</strong>
    <ul>
      <li><strong>High fire resistance:</strong> Withstands high temperatures for extended periods (up to 150 min at 600°C or 180 min at 550°C), no toxic fumes when exposed to fire.</li>
      <li><strong>Water and moisture resistance:</strong> Major advantage over regular gypsum boards, making Tozen more durable in humid environments and resistant to mold.</li>
      <li><strong>High mechanical strength:</strong> Load-bearing capacity, delamination resistance, does not crack when screwed, extends duct system lifespan.</li>
      <li><strong>Good sound insulation:</strong> Helps reduce system noise.</li>
      <li><strong>Environmentally friendly:</strong> No toxic substances.</li>
    </ul>
  </li>
</ul>
<p><strong>Fire-resistant EI duct wrapped with Tozen board</strong> is widely used in projects requiring high fire safety standards, including:</p>
<ul>
  <li><strong>Emergency smoke extraction systems:</strong> In high-rises, apartments, hotels, shopping malls, cinemas.</li>
  <li><strong>Ventilation in escape routes:</strong> Keeps escape routes free from smoke and fire.</li>
  <li><strong>Factories, plants, warehouses:</strong> Especially high fire-risk areas.</li>
  <li><strong>Basements, car parks.</strong></li>
  <li><strong>Other large public and civil projects</strong> with strict fire safety requirements.</li>
</ul>`,
    specifications: `
<p><strong>Basic structure of fire-resistant EI duct wrapped with Tozen board</strong> is similar to other fire-resistant duct types, including:</p>
<ul>
  <li><strong>Inner galvanized steel layer:</strong> Main frame and load-bearing layer, typically 0.75mm or thicker depending on size and technical requirements.</li>
  <li><strong>Tozen fire-resistant board layer:</strong> Most critical layer, wrapped around the steel. Tozen thickness (usually 5–20mm) and number of wraps determine EI rating (e.g. EI30, EI60, EI90, EI120).</li>
  <li><strong>Flange system:</strong> Galvanized steel flanges (typically TDF) connect duct sections for seal and stability.</li>
</ul>
<p><strong>Fire-resistant duct using Tozen board</strong> offers:</p>
<ul>
  <li><strong>Optimal fire resistance and thermal insulation:</strong> Maintains integrity and blocks heat transfer during fire.</li>
  <li><strong>Moisture, water and pest resistance:</strong> Special composition allows use in humid conditions.</li>
  <li><strong>High durability:</strong> Corrosion and impact resistant.</li>
  <li><strong>Safety and environmental friendliness:</strong> No toxic fumes in fire.</li>
  <li><strong>Versatile application:</strong> Suitable for various project types.</li>
</ul>`,
  },
  'p-002': {
    name: 'Fire-resistant EI duct wrapped with SMD board',
    category: 'Fire-resistant EI ducts',
    description:
      'High-quality fire-resistant EI duct wrapped with SMD board, effective heat transfer reduction.',
    details: `<p><strong>Fire-resistant EI duct with SMD board</strong> is used in projects with strict fire safety requirements:</p>
<ul>
  <li><strong>Smoke extraction and ventilation:</strong> Especially ducts crossing fire compartments, basements, car parks, industrial kitchens.</li>
  <li><strong>High-rises, apartments, hotels:</strong> Safety for occupants and assets.</li>
  <li><strong>Shopping malls, supermarkets, cinemas:</strong> High-occupancy spaces.</li>
  <li><strong>Hospitals, schools, medical facilities:</strong> Maximum safety.</li>
  <li><strong>Factories, plants:</strong> Especially high fire-risk sites.</li>
  <li><strong>Other major public and civil projects:</strong> Strict fire safety compliance.</li>
</ul>`,
    specifications: `<p><strong>Fire-resistant EI duct with SMD board</strong> has a multi-layer structure for fire resistance and thermal insulation:</p>
<ul>
  <li><strong>Inner galvanized layer:</strong> Main load-bearing layer, min 0.75mm.</li>
  <li><strong>SMD fire-resistant layer:</strong> Critical layer wrapped outside steel. SMD thickness sets EI rating (EI30–EI120).</li>
  <li><strong>Optional outer galvanized layer:</strong> Extra protection and finish.</li>
  <li><strong>Steel flange system:</strong> TDF galvanized flanges for tight connections.</li>
</ul>
<p><strong>Advantages:</strong> Superior fire resistance, moisture resistance, durability, sound insulation, environmental safety, easy fabrication and installation.</p>`,
  },
  'p-003': {
    name: 'Fire-resistant EI duct wrapped with gypsum board',
    category: 'Fire-resistant EI ducts',
    description:
      'Fire-resistant EI duct wrapped with gypsum board, fire spread prevention and good thermal insulation.',
    details: `<p><strong>Fire-resistant EI duct wrapped with gypsum board</strong> is used in projects with high fire safety requirements:</p>
<ul>
  <li><strong>Emergency smoke extraction:</strong> High-rises, malls, cinemas, hospitals, factories.</li>
  <li><strong>Main ventilation:</strong> Ducts through fire compartments, escape routes, basements, car parks.</li>
  <li><strong>High fire-risk areas:</strong> Industrial kitchens, combustible storage.</li>
</ul>
<p><strong>Advantages:</strong> Effective fire resistance, EI30–EI120 ratings, competitive cost, widely available material, aesthetic finish, sound insulation, no asbestos.</p>`,
    specifications: `<p><strong>Fire-resistant EI duct with gypsum board</strong> has a multi-layer structure:</p>
<ul>
  <li><strong>Innermost layer:</strong> Galvanized steel min 0.75mm.</li>
  <li><strong>Fire-resistant insulation layer:</strong> Fire-resistant gypsum board, mineral wool, etc.</li>
  <li><strong>Outer layer:</strong> Galvanized steel ~0.58mm.</li>
</ul>`,
  },
  'p-016a': {
    name: 'Motorized fire damper EI',
    category: 'Fire-resistant EI ducts',
    description:
      'Motorized fire damper EI closes automatically at high temperature to prevent fire spread.',
    details: `<ul>
  <li><strong>Valve body and blades:</strong> Heat-resistant materials with internal insulation (ceramic fiber, mineral wool, fire-resistant gypsum).</li>
  <li><strong>Actuator:</strong> Drives open/close; spring-return for auto-close on power loss or fire signal.</li>
  <li><strong>Optional sensors:</strong> Temperature/smoke sensors for activation.</li>
  <li><strong>Seals:</strong> Heat-resistant materials for tight closure.</li>
</ul>
<ul>
  <li><strong>Effective fire spread control:</strong> Fire and thermal barriers for compartments.</li>
  <li><strong>Smart system integration:</strong> Monitoring and automation.</li>
  <li><strong>Escape route protection:</strong> Keeps smoke and fire out of stairways and corridors.</li>
  <li><strong>Regulatory compliance:</strong> Required in modern fire safety designs.</li>
</ul>`,
    specifications: `<ul>
  <li><strong>Normal mode:</strong> Blades open; actuator standby.</li>
  <li><strong>Fire detection:</strong> Fire alarm triggers actuator.</li>
  <li><strong>Thermal fuse backup:</strong> Local temperature triggers closing if equipped.</li>
  <li><strong>Closure:</strong> Actuator closes blades fully.</li>
  <li><strong>EI integrity:</strong> Maintains fire and thermal barrier (EI 60, EI 120, etc.).</li>
</ul>`,
  },
  'p-016': {
    name: 'Fire damper EI FD',
    category: 'Dampers',
    description:
      'Fire damper EI FD closes automatically at high temperature to prevent fire spread.',
    details: `<p><strong>Structure:</strong></p>
<ul>
  <li><strong>Valve body and blades:</strong> Galvanized or stainless steel, heat-resistant design.</li>
  <li><strong>Insulation:</strong> Ceramic wool, fire-resistant gypsum inside body/blades for "I" (insulation) rating.</li>
</ul>
<p><strong>Applications:</strong> Essential in fire protection systems of high-rises, hospitals, schools, factories, data centers, etc.</p>
<p><strong>Common installation:</strong> Ducts passing through fire walls, fire floors; connections between fire compartments.</p>`,
    specifications: `<ul>
  <li><strong>Activation:</strong> Thermal fuse (mechanical) or fire alarm signal (motorized).</li>
  <li><strong>Closure:</strong> Blades close fully, forming fire/smoke barrier.</li>
  <li><strong>EI maintenance:</strong> Integrity and insulation for certified duration (EI 60, EI 120, etc.).</li>
</ul>
<h3>Roles & benefits</h3>
<ul>
  <li><strong>Safety:</strong> Limits fire and smoke spread, extends evacuation time.</li>
  <li><strong>Compliance:</strong> Meets local and international fire codes.</li>
  <li><strong>Building protection:</strong> Reduces impact on critical structures.</li>
  <li><strong>System efficiency:</strong> Acts as a barrier to maximize overall fire protection.</li>
</ul>`,
  },
  'p-026': {
    name: 'Rain cap',
    category: 'Air outlets',
    description:
      'Rain cap, or weather louver, is installed at duct terminations to prevent rain, dirt and insects from entering while allowing airflow.',
    details: `<h3>Materials</h3>
<ul>
  <li><strong>Stainless steel:</strong> High durability, excellent corrosion resistance, suitable for harsh outdoor conditions. Often 304 or 201.</li>
  <li><strong>Aluminum:</strong> Lightweight, corrosion resistant, can be powder-coated for aesthetics.</li>
  <li><strong>Galvanized steel:</strong> Cost-effective; may need coating for outdoor use.</li>
</ul>
<h3>Applications</h3>
<ul>
  <li><strong>Ventilation:</strong> Industrial fans, kitchen exhaust, building ventilation.</li>
  <li><strong>HVAC:</strong> Fresh air intakes and exhausts.</li>
  <li><strong>Exhaust vents:</strong> Water heaters, dryers, heat-generating equipment.</li>
  <li><strong>Other vents:</strong> Roof or wall openings for natural airflow.</li>
</ul>`,
    specifications: `<h3>Design</h3>
<ul>
  <li><strong>Dome/cap style:</strong> Most common; rain runs off.</li>
  <li><strong>Louver style:</strong> Angled blades (e.g. Z-shaped) for airflow and rain protection.</li>
  <li><strong>Box style:</strong> Less common, for large openings.</li>
  <li><strong>Insect screen:</strong> Inox or aluminum mesh included.</li>
</ul>`,
  },
  'p-027': {
    name: 'Vent cap',
    category: 'Air outlets',
    description:
      'Vent cap (Vent Cap) enables air exchange between indoor and outdoor spaces, removes odor and moisture, and provides fresh air.',
    details: `<h3>Applications</h3>
<ul>
  <li><strong>Residential:</strong> Kitchens, bathrooms, enclosed areas.</li>
  <li><strong>Commercial:</strong> Offices, malls for airflow.</li>
  <li><strong>Industrial:</strong> Manufacturing ventilation.</li>
</ul>`,
    specifications: `<h3>Main functions</h3>
<ul>
  <li><strong>Ventilation:</strong> Natural air circulation.</li>
  <li><strong>Rain protection:</strong> Dome design prevents rain entry.</li>
  <li><strong>Insect barrier:</strong> Optional mesh for rodents and insects.</li>
</ul>`,
  },
  'p-028': {
    name: 'Oval diffuser',
    category: 'Air outlets',
    description:
      'Oval diffuser (Vent Cap) provides ventilation and fresh air, removes odor, moisture and bacteria.',
    details: `<ul>
  <li><strong>Residential:</strong> Kitchens, bathrooms, enclosed areas.</li>
  <li><strong>Commercial:</strong> Offices, malls.</li>
  <li><strong>Industrial:</strong> Plant ventilation.</li>
</ul>`,
    specifications: `<ul>
  <li><strong>Ventilation:</strong> Natural airflow.</li>
  <li><strong>Rain protection:</strong> Dome design.</li>
  <li><strong>Insect barrier:</strong> Optional mesh.</li>
</ul>`,
  },
  'p-029': {
    name: 'Linear slot diffuser',
    category: 'Air outlets',
    description:
      'Linear slot diffuser (Slot Linear Diffuser) has narrow parallel slots for supply or return air in HVAC systems.',
    details: `<h3>Basic info</h3>
<p><strong>Linear slot diffuser</strong> is made from <strong>high-grade aluminum</strong> (A6063-T5), 1.0–3.0mm blade, ~1.2mm frame. Powder-coated, often white (RAL 9010/9016).</p>
<p><strong>Applications:</strong> Commercial, hotels, offices, residential, airports, conference halls.</p>`,
    specifications: `<ul>
  <li><strong>Modern design:</strong> Slim slots, can be curved or continuous.</li>
  <li><strong>Construction:</strong> Frame + narrow blades; oval or T-bar cores, adjustable.</li>
  <li><strong>Accessories:</strong> OBD volume control, optional filter.</li>
  <li><strong>Performance:</strong> Linear distribution, flexible installation, 360° horizontal / 35° vertical adjustment.</li>
</ul>`,
  },
  'p-030': {
    name: 'Round diffuser',
    category: 'Air outlets',
    description:
      'Round diffuser distributes conditioned or fresh air into a space. Round design offers distinct performance and aesthetic benefits.',
    details: `<h3>Basic info</h3>
<p><strong>Round diffuser</strong> is mainly made from <strong>aluminum</strong>; stainless steel or ABS for special applications.</p>
<p><strong>Finish:</strong> Powder-coated white or custom colors.</p>`,
    specifications: `<ul>
  <li><strong>Frame:</strong> Circular, aluminum, rigid and durable.</li>
  <li><strong>Core/blades:</strong> Concentric or louver pattern for swirl or even distribution.</li>
  <li><strong>Performance:</strong> Even distribution, easy installation, removable core for cleaning.</li>
  <li><strong>Sizes:</strong> Various diameters and styles.</li>
</ul>`,
  },
  'p-031': {
    name: 'Square diffuser',
    category: 'Air outlets',
    description:
      'Square diffuser distributes conditioned or fresh air. One of the most common diffusers in modern HVAC systems.',
    details: `<h3>Basic info</h3>
<p><strong>Square diffuser</strong> is typically <strong>aluminum</strong>—light, durable, corrosion resistant. Stainless or ABS for special environments.</p>
<p><strong>Finish:</strong> Powder-coated white (RAL 9010/9016) or custom.</p>`,
    specifications: `<ul>
  <li><strong>Frame:</strong> A6063-T5 aluminum, 0.85–1.2mm, stiffened.</li>
  <li><strong>Core/blades:</strong> Aluminum blades in concentric or X pattern; removable for cleaning.</li>
  <li><strong>Performance:</strong> Good distribution, simple modern design.</li>
  <li><strong>Flexibility:</strong> Supply or return.</li>
</ul>`,
  },
  'p-032': {
    name: 'T-bar grille',
    category: 'Air outlets',
    description:
      'T-bar grille (T-Bar) has parallel T-section blades. Popular for cost-effectiveness and airflow performance.',
    details: `<p><strong>Material:</strong> High-grade aluminum (A6063-T5) or galvanized steel.</p>
<p><strong>Finish:</strong> Powder-coated, often white.</p>
<p><strong>Applications:</strong> Offices, schools, hospitals, factories, malls, stores, residences.</p>`,
    specifications: `<ul>
  <li><strong>T-bar design:</strong> T-section blades, even slots for even distribution.</li>
  <li><strong>Frame and blades:</strong> Fixed or adjustable blades, optional OBD and filter.</li>
  <li><strong>Cost-effective, easy installation and maintenance.</strong></li>
</ul>`,
  },
  'p-033': {
    name: 'Z-louver grille',
    category: 'Air outlets',
    description:
      'Z-louver grille has Z-shaped blades for rain protection while allowing airflow. Used for outdoor air intakes and exhausts.',
    details: `<p><strong>Material:</strong> Aluminum A6063-T5, frame 1.0–1.2mm, blade 1.0mm.</p>
<p><strong>Applications:</strong> Fresh air intakes, exhaust, industrial and civil ventilation, walls, windows.</p>`,
    specifications: `<ul>
  <li><strong>Z-blade design:</strong> ~45° angle, rain and splash protection.</li>
  <li><strong>Finish:</strong> Powder-coated for durability outdoors.</li>
  <li><strong>Accessories:</strong> Insect screen (aluminum or 304 SS), optional filter.</li>
  <li><strong>Advantages:</strong> Rain protection, effective ventilation, aesthetics.</li>
</ul>`,
  },
  'p-034': {
    name: 'Egg crate diffuser',
    category: 'Air outlets',
    description:
      'Egg crate diffuser has a grid of small square cells for even, efficient airflow distribution.',
    details: `<p><strong>Material:</strong> Aluminum A6063-T5 or galvanized steel. Powder-coated, often white (RAL 9010/9016).</p>
<p><strong>Applications:</strong> Malls, offices, hospitals, factories, schools, libraries.</p>
<p><strong>Design:</strong> Square grid (e.g. 12.7×12.7×12.7mm, 15×15×15mm, 20×20×20mm). Removable mesh, optional OBD and filter.</p>
<p><strong>Benefits:</strong> Even distribution, high airflow, low dust retention, easy cleaning, modern look.</p>`,
    specifications: `<ul>
  <li>Material: Aluminum A6063-T5 or galvanized steel</li>
  <li>Color: White (RAL 9010/9016) or custom</li>
  <li>Cell size: 12.7×12.7, 15×15, 20×20 mm</li>
  <li>Applications: Supply/return in malls, offices, hospitals</li>
  <li>Optional OBD and filter</li>
</ul>`,
  },
  'p-035': {
    name: 'Curved blade diffuser',
    category: 'Air outlets',
    description:
      'Curved blade diffuser with curved blades for flexible airflow and modern aesthetics.',
    details: `<p><strong>Material:</strong> Aluminum A6063-T5, frame 0.8–1.2mm, blade 0.8mm. Powder-coated white.</p>
<p><strong>Applications:</strong> Offices, hotels, malls, apartments, meeting rooms.</p>
<p><strong>Curved blade design:</strong> Optimizes airflow direction. Frame + fixed or adjustable blades, optional OBD and filter.</p>
<p><strong>Benefits:</strong> Flexible airflow, aesthetics, durability, low noise.</p>`,
    specifications: `<ul>
  <li>Material: Aluminum A6063-T5</li>
  <li>Color: White (RAL 9010/9016) or custom</li>
  <li>Blade: Curved, fixed or adjustable</li>
  <li>Applications: Offices, hotels, malls, villas, conference halls</li>
  <li>Optional OBD and filter</li>
</ul>`,
  },
  'p-036': {
    name: 'Jet nozzle',
    category: 'Air outlets',
    description:
      'Jet nozzle provides long-throw airflow for large, high-ceiling spaces.',
    details: `<p><strong>Material:</strong> Aluminum, galvanized steel or ABS, powder-coated.</p>
<p><strong>Applications:</strong> Airports, theaters, exhibition centers, factories, transit stations.</p>
<p><strong>Design:</strong> Nozzle shape, conical body, circular or oval outlet. Flange for mounting. Many types allow nozzle rotation (30°–45°).</p>
<p><strong>Benefits:</strong> Long throw, precise control, suited for high ceilings, fewer units needed.</p>`,
    specifications: `<ul>
  <li>Material: Aluminum, galvanized steel or ABS</li>
  <li>Design: Nozzle with circular or oval outlet</li>
  <li>Adjustable: Rotation/tilt 30°–45°</li>
  <li>Applications: Airports, theaters, exhibition centers, factories</li>
</ul>`,
  },
  'p-037': {
    name: 'Motorized volume control damper (MD)',
    category: 'Dampers',
    description:
      'Motorized damper (MD) uses an electric actuator to open/close blades from system signals.',
    details: `<p>Motorized damper structure is similar to standard VCD, with added actuator.</p>
<p><strong>Components:</strong> Valve body, blades, actuator (0–10VDC, 4–20mA or ON/OFF), brands like Belimo, Honeywell, Siemens. Shaft and bushings.</p>
<p><strong>Applications:</strong> Zone control, outdoor air/exhaust, air mixing, room pressure (cleanrooms, labs).</p>
<p><strong>Operation:</strong> Receives signal from BMS or controller, rotates to set blade angle. ON/OFF or modulating (0–100%). Optional position feedback.</p>
<p><strong>Benefits:</strong> Automation, precise control, energy savings, remote monitoring, fire/smoke control.</p>`,
    specifications: `<p>Automatic control via BMS, temperature or pressure signals. ON/OFF or modulating operation. Optional feedback.</p>
<p>High automation, precise control, energy savings, remote monitoring.</p>`,
  },
  'p-038': {
    name: 'Volume control damper VCD – Round',
    category: 'Dampers',
    description:
      'Volume control damper (VCD) adjusts airflow in HVAC duct systems.',
    details: `<p><strong>Structure:</strong> Round body, galvanized or stainless. Blades rotate or slide. Manual lever or motor control.</p>
<p><strong>Functions:</strong> Airflow balance, pressure control, noise reduction, energy savings, fire damper (with thermal fuse).</p>`,
    specifications: `<p>VCD types: manual lever, motorized. Round body for round ducts.</p>`,
  },
  'p-039': {
    name: 'Volume control damper VCD – Rectangular',
    category: 'Dampers',
    description:
      'VCD adjusts airflow in duct systems. Rectangular version for rectangular ducts.',
    details: `<p><strong>Structure:</strong> Round or rectangular body, galvanized or stainless. Blades, manual or motor control.</p>
<p><strong>Classification:</strong> Manual lever/wheel or motorized.</p>`,
    specifications: `<p>Manual lever VCD for small, simple systems.</p>`,
  },
  'p-040': {
    name: 'Non-return damper NRD',
    category: 'Dampers',
    description:
      'Non-return damper (NRD) allows airflow in one direction and blocks reverse flow.',
    details: `<p><strong>Structure:</strong> Square or round body, galvanized or stainless. One-way blades, optional spring.</p>
<p><strong>Applications:</strong> Plant/office ventilation, exhaust, HVAC supply/return, louvers, cleanrooms.</p>
<p><strong>Benefits:</strong> Prevents backflow, stabilizes pressure, protects equipment, improves air quality, energy savings, automatic operation.</p>`,
    specifications: `<p><strong>Types:</strong> Square NRD for rectangular ducts; round NRD for round ducts.</p>
<p><strong>Benefits:</strong> Backflow prevention, pressure stability, equipment protection, no power needed.</p>`,
  },
  'p-041': {
    name: 'Pressure relief damper PRD',
    category: 'Dampers',
    description:
      'Pressure relief damper (PRD) opens automatically to release excess pressure when limits are exceeded.',
    details: `<p><strong>Structure:</strong> Square, rectangular or round body. Blades open under pressure. Counterweight or spring for set point.</p>
<p><strong>Applications:</strong> Cleanrooms, stairwells, corridors, industrial ventilation, FM200/Novec/CO2 systems, pressure zones.</p>
<p><strong>Benefits:</strong> Safety, pressure relief, system protection, automatic operation, energy savings.</p>`,
    specifications: `<p><strong>Types:</strong> Square PRD for rectangular ducts; round PRD for round ducts.</p>
<p>Threshold adjustable via counterweight/spring. Automatic, no power required.</p>`,
  },
  'p-042': {
    name: 'Round duct end cap',
    category: 'Duct accessories',
    description:
      'End cap seals round duct terminations, preventing air, dust, water or foreign objects from entering.',
    details: `<p><strong>Materials:</strong> Galvanized steel (common), stainless 201/304/316 (corrosion resistance, hygiene), aluminum.</p>
<p><strong>Applications:</strong> HVAC supply/return, dust/smoke systems, basements, outdoor installations.</p>
<p><strong>Design:</strong> Disc or dome shape, various diameters. Female (insert) or male (overlap), optional flange. Thickness 0.5–1.2mm.</p>
<p><strong>Benefits:</strong> Simple, low cost, effective seal and protection.</p>`,
    specifications: `<p>Female or male end cap, various diameters. 0.5–1.2mm thickness. Simple, effective, durable.</p>`,
  },
  'p-043': {
    name: 'Rectangular duct end cap',
    category: 'Duct accessories',
    description:
      'Rectangular duct end cap seals the end of square or rectangular ducts.',
    details: `<p><strong>Materials:</strong> Galvanized steel, stainless (201, 304) for hygienic or corrosive environments.</p>
<p><strong>Functions:</strong> Seal ducts, block dust and insects, pressure control, temporary or permanent closure.</p>`,
    specifications: `<p>Shape matches duct section. Thickness according to size and system requirements.</p>`,
  },
  'p-044': {
    name: 'Round offset',
    category: 'Duct accessories',
    description:
      'Round offset shifts the duct axis up/down or sideways while keeping both ends parallel.',
    details: `<p><strong>Materials:</strong> Galvanized (common), stainless 201/304/316 for special environments.</p>
<p><strong>Functions:</strong> Offset ducts past beams, pipes, structures; adjust elevation; optimize space; maintain steady flow.</p>
<p><strong>Parameters:</strong> Diameter D, offset L, overall length, angle (e.g. 15°, 30°), thickness 0.5–1.2mm.</p>
<p><strong>Benefits:</strong> Reduced pressure loss and noise, flexibility, space savings, good sealing.</p>`,
    specifications: `<p>Diameter D, offset L, overall length, angle, thickness. Efficient flow, flexibility, space saving.</p>`,
  },
  'p-045': {
    name: 'Duct take-off',
    category: 'Duct accessories',
    description:
      'Take-off (collar) creates branches from main ducts for flexible air distribution.',
    details: `<p><strong>Materials:</strong> Galvanized, stainless, or painted steel.</p>
<p><strong>Functions:</strong> Branch airflow, save space and cost, easy installation, optional volume control.</p>`,
    specifications: `<p>Square-square, square-round, round-round. Angles 45°, 60° for optimal flow.</p>`,
  },
  'p-046': {
    name: 'Rectangular offset (eccentric)',
    category: 'Duct accessories',
    description:
      'Rectangular offset shifts rectangular duct position in one direction, optimizing space and flow.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Functions:</strong> Avoid beams, columns, walls; pass through tight spaces; connect misaligned equipment.</p>
<p><strong>Parameters:</strong> Inlet/outlet dimensions, offset angle, length, thickness.</p>`,
    specifications: `<p>Rectangular inlet/outlet, offset angle, length. Flexible design and installation.</p>`,
  },
  'p-047': {
    name: 'Duct wye (3-way)',
    category: 'Ducts',
    description:
      'Duct wye divides or combines airflow between branches, optimizing space and flow.',
    details: `<p><strong>Materials:</strong> Galvanized (0.48–1.15mm), stainless, painted steel.</p>
<p><strong>Functions:</strong> Split or combine flow, change direction, optimize system, maintain flow and pressure with radius or beveled branches.</p>
<p><strong>Classification:</strong> By angle (45°, 90°), by connection (TDC, C-clip, V-flange).</p>`,
    specifications: `<p>45° or 90° branch. TDC, C-clip, or V-flange. Ensures flow and pressure with radius/bevel design.</p>`,
  },
  'p-048': {
    name: 'Concentric rectangular-to-round transition',
    category: 'Ducts',
    description:
      'Concentric rectangular-to-round transition connects rectangular ducts to round ducts on the same axis for smooth flow and reduced pressure loss.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Applications:</strong> Connect rectangular ducts to round fans, round ducts, round diffusers, equipment with round ports.</p>
<p><strong>Design:</strong> Funnel shape, concentric, smooth sides. Length affects pressure loss and noise.</p>
<p><strong>Connections:</strong> Rectangular end: TDC/TDF flanges; round end: flange, snap-lock, or slip joint.</p>
<p><strong>Benefits:</strong> Good aerodynamics, straightforward design and installation.</p>`,
    specifications: `<p>Funnel shape, concentric. Dimensions and length affect performance. Rectangular and round flanges.</p>`,
  },
  'p-049': {
    name: 'Eccentric rectangular-to-round transition',
    category: 'Ducts',
    description:
      'Eccentric rectangular-to-round transition connects rectangular and round ducts with offset axes for space optimization.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Applications:</strong> HVAC, industrial ventilation, equipment connections, space optimization.</p>
<p><strong>Design:</strong> Offset axes, smooth transition. Thickness and offset from project requirements.</p>
<p><strong>Benefits:</strong> Flexible layout, reduced pressure loss, durable, easy maintenance.</p>`,
    specifications: `<p>Thickness, dimensions and offset per project. Removable joints, airtight connections.</p>`,
  },
  'p-050': {
    name: 'Concentric rectangular reducer',
    category: 'Ducts',
    description:
      'Concentric rectangular reducer reduces rectangular duct size concentrically for velocity and pressure control.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Functions:</strong> Change velocity and static pressure; connect different sizes; connect to equipment; optimize flow.</p>
<p><strong>Design:</strong> Truncated pyramid, concentric. Length affects pressure loss and noise.</p>`,
    specifications: `<p>Two rectangular ends, different sizes. Concentric design. Length and thickness per standards.</p>`,
  },
  'p-051': {
    name: 'Concentric round reducer',
    category: 'Ducts',
    description:
      'Concentric round reducer transitions duct size smoothly for flow and pressure control.',
    details: `<p><strong>Materials:</strong> Galvanized, stainless (201/304/316), or aluminum.</p>
<p><strong>Functions:</strong> Change size, adjust flow/pressure, connect equipment, optimize flow.</p>
<p><strong>Design:</strong> Truncated cone, concentric. Round, square or square-to-round.</p>
<p><strong>Benefits:</strong> Stable flow, easy design and installation, suitable for vertical runs.</p>`,
    specifications: `<p>Concentric truncated cone. Various sizes, 0.5–1.2mm thickness. Removable, airtight joints.</p>`,
  },
  'p-052': {
    name: 'Eccentric rectangular reducer',
    category: 'Ducts',
    description:
      'Eccentric rectangular reducer reduces size while shifting axis for space and obstacle avoidance.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Functions:</strong> Keep one face flush (ceiling/floor); avoid obstacles; connect misaligned equipment.</p>
<p><strong>Design:</strong> One or two faces straight, others inclined. Length affects performance.</p>`,
    specifications: `<p>Rectangular ends, offset. Thickness per size and pressure. TDC/TDF or angle flanges.</p>`,
  },
  'p-053': {
    name: 'Eccentric round reducer',
    category: 'Ducts',
    description:
      'Eccentric round reducer reduces size while keeping one plane flat for drainage and space.',
    details: `<p><strong>Materials:</strong> Galvanized, stainless (201/304/316).</p>
<p><strong>Applications:</strong> HVAC, liquid systems (e.g. pump suction), wastewater, oil & gas, chemical.</p>
<p><strong>Benefits:</strong> Prevents air/fluid trapping, space optimization, easier maintenance.</p>`,
    specifications: `<p>Truncated cone with one straight side. Offset axes. Various sizes and thicknesses.</p>`,
  },
  'p-054': {
    name: 'Round duct coupling',
    category: 'Ducts',
    description:
      'Round duct coupling (sleeve) connects round duct sections for a tight, aesthetic joint.',
    details: `<p><strong>Materials:</strong> Galvanized (common), stainless 201/304/316, aluminum.</p>
<p><strong>Applications:</strong> HVAC, dust/smoke systems, ventilation.</p>
<p><strong>Design:</strong> Short hollow round section. Various diameters and lengths. Thickness 0.5–1.2mm or more.</p>
<p><strong>Benefits:</strong> Quick installation, cost-effective, good seal, clean appearance.</p>`,
    specifications: `<p>Round sleeve, various diameters. 0.5–1.2mm thickness. Crimped or flange connections.</p>`,
  },
  'p-055': {
    name: 'Smooth round duct',
    category: 'Ducts',
    description:
      'Smooth round duct has a smooth surface for efficient flow, reduced pressure loss and noise, and improved aesthetics.',
    details: `<h3>Materials</h3>
<p>Galvanized steel (most common) or stainless (201, 304, 316) for high humidity, hygiene (restaurants, hospitals, labs, food plants).</p>
<h3>Benefits</h3>
<p>Efficient ventilation, low noise, aesthetics, easy installation, low leakage, low dust buildup, cost-effective.</p>`,
    specifications: `<p>Length 3.5–4m standard (or 3m, 6m, 12m spiral). Thickness 0.5–1.2mm. Diameter D80–D120 common, up to D3000mm. Galvanizing Z8–Z18. ISO 90001:2025.</p>`,
  },
  'p-056': {
    name: 'Spiral round duct',
    category: 'Ducts',
    description:
      'Spiral round duct has spiral lock-seam construction for strength, low leakage, and suitability for exposed or concealed installation.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Design:</strong> Spiral lock seam, D100–D1500mm or larger. Length 3–6m.</p>
<p><strong>Benefits:</strong> Strong, efficient flow, low noise, aesthetics, easy installation, low leakage, easy cleaning.</p>`,
    specifications: `<p>D100–D1500mm, length 3–6m. Thickness 0.48–1.15mm. Galvanizing Z8–Z18.</p>`,
  },
  'p-057': {
    name: 'Rectangular duct',
    category: 'Ducts',
    description:
      'Rectangular duct made from galvanized or stainless steel for space-efficient installation and airflow in HVAC and exhaust systems.',
    details: `<p><strong>Materials:</strong> Galvanized (0.48–1.15mm) or stainless (201, 304).</p>
<p><strong>Benefits:</strong> Space saving, good flow, easy installation, cost-effective, flexible design.</p>
<p><strong>Applications:</strong> HVAC, smoke extraction, industrial ventilation, dust extraction.</p>`,
    specifications: `<p>Various sizes. Galvanized or stainless. TDC/C-clip/flange connections.</p>`,
  },
  'p-058': {
    name: 'Y-branch 4-way',
    category: 'Ducts',
    description:
      'Y-branch 4-way divides or combines airflow in round duct systems.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Applications:</strong> HVAC, dust extraction, smoke/odor exhaust, aesthetic applications.</p>
<p><strong>Design:</strong> Y-shape, three round ports. 45° branch angle. Equal or reduced branch sizes.</p>
<p><strong>Benefits:</strong> Efficient flow, energy savings, low noise, aesthetics.</p>`,
    specifications: `<p>Y-shape, round. 45° angle. Various diameters. 0.5–1.2mm thickness.</p>`,
  },
  'p-059': {
    name: 'Round elbow',
    category: 'Ducts',
    description:
      'Round elbow changes direction in round duct systems for smooth flow and reduced pressure loss.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Applications:</strong> HVAC, smoke/odor exhaust, dust transport, industrial ventilation.</p>
<p><strong>Benefits:</strong> Efficient flow, energy savings, low noise, aesthetics, easy cleaning.</p>`,
    specifications: `<p>Various diameters. 0.5–1.2mm thickness. Crimped, gasket or screw connections.</p>`,
  },
  'p-060': {
    name: 'Rectangular elbow',
    category: 'Ducts',
    description:
      'Rectangular elbow changes direction in rectangular duct systems.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Functions:</strong> Change direction, branch systems, optimize space.</p>`,
    specifications: `<p>Thickness per size and pressure. Same standards as rectangular ducts.</p>`,
  },
  'p-061': {
    name: 'Round Y-branch',
    category: 'Ducts',
    description:
      'Round Y-branch divides or combines flow in round ducts for distribution and aesthetics.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Applications:</strong> HVAC, dust, smoke/odor, aesthetic projects.</p>
<p><strong>Design:</strong> Y-shape, 45° angle. Equal or reduced sizes.</p>
<p><strong>Benefits:</strong> Efficient flow, energy savings, low noise, aesthetics.</p>`,
    specifications: `<p>Y-shape, round. 45° angle. Various diameters and thicknesses.</p>`,
  },
  'p-062': {
    name: 'Round 45° elbow',
    category: 'Ducts',
    description:
      'Round 45° elbow changes airflow direction by 45° for lower pressure loss than 90° elbows.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Functions:</strong> Change direction, reduce pressure loss vs 90°, reduce noise.</p>
<p><strong>Benefits:</strong> Efficient flow, energy savings, flexible layout.</p>`,
    specifications: `<p>45° bend. Various diameters. 0.5–1.2mm. Crimped, gasket or screw connections.</p>`,
  },
  'p-063': {
    name: 'Round 90° tee',
    category: 'Ducts',
    description:
      'Round 90° tee creates right-angle branches or combines flow in round duct systems.',
    details: `<p><strong>Materials:</strong> Galvanized or stainless.</p>
<p><strong>Applications:</strong> Branching in tight spaces, local exhaust, various project scales.</p>
<p><strong>Design:</strong> Three round ports, 90° branch.</p>
<p><strong>Benefits:</strong> Space saving, flexible layout.</p>`,
    specifications: `<p>90° tee, round. Various diameters. Welded, flanged or mechanical joints.</p>`,
  },
  'p-064': {
    name: 'Duct silencer',
    category: 'Ducts',
    description:
      'Duct silencer reduces HVAC noise by absorbing and scattering sound waves.',
    details: `<p>Duct silencer works by absorption and reflection. Sound enters porous/mineral fiber liners and is absorbed and scattered.</p>
<p><strong>Structure:</strong> Metal casing (galvanized, aluminum, stainless), internal baffles/splitters, absorptive lining, perforated liner.</p>
<p><strong>Applications:</strong> Offices, apartments, hospitals, cleanrooms, malls, cinemas, factories, studios.</p>`,
    specifications: `<p><strong>Parameters:</strong> Duct size, required noise reduction, airflow capacity, budget.</p>
<p><strong>Benefits:</strong> Effective noise reduction, minimal airflow restriction, various sizes, durable, easy installation.</p>`,
  },
  'p-065': {
    name: 'OBD damper',
    category: 'Duct accessories',
    description:
      'OBD damper controls airflow at diffuser or in-duct for balancing and precise control in HVAC.',
    details: `<p><strong>Materials:</strong> Aluminum or galvanized steel.</p>
<p><strong>Functions:</strong> Control supply/return flow, balance system, pressure control, fully close or open.</p>
<p><strong>Benefits:</strong> Precise control, energy savings, comfort, low noise.</p>`,
    specifications: `<p>Various sizes to match diffusers or ducts. Symmetric blades reduce noise and turbulence.</p>`,
  },
};
