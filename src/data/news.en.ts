// Thêm 2 bài news này vào mảng newsData trong file news.ts của bạn
// (hoặc thêm vào ENewCategory.KNOWLEDGE nếu đây là bài kiến thức chuyên môn)

import { INew } from '@/types/news';
import { ENewCategory } from '@/enum/new';
import { HeroSectionProps, TabItem } from './about';

// =====================================================
// THÊM VÀO newsData HIỆN TẠI:
// =====================================================
export const newsTabData: TabItem[] = [
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Hoạt động công ty', href: '/hoat-dong-cong-ty' },
];

export const heroSectionData: HeroSectionProps = {
  breadcrumbs: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức', href: '/tin-tuc', isActive: true },
  ],
  imageUrl: '/images/news/hero-section.jpg',
  imageAlt: 'Tin tức - Đại Phong',
};
export const newsData: INew[] = [
  {
    id: 'ong-gio-la-gi-phan-loai-cau-tao-ung-dung',
    title:
      'What Is a Duct? Classification, Structure and Detailed Applications',
    images: ['/images/news/ong-gio/1.jpg'],
    createdAt: '23/03/2026',
    slug: 'ong-gio-la-gi-phan-loai-cau-tao-ung-dung',
    category: ENewCategory.NEWS,
    tags: ['DUCT', 'HVAC', 'VENTILATION', 'AIR CONDITIONING'],
    paragraphs: [
      `In modern HVAC systems, <strong>"air ducts"</strong> are not merely a technical component — they serve as the <strong>"circulatory system"</strong> that transports air, directly affecting the quality of the living environment and the operational efficiency of the entire building. So what are air ducts? Let's find out with Dai Phong Air Ducts!`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/1.jpg" alt="Ống Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">What Are Air Ducts?</h2>
      <p>Air ducts (Ducts) are specialized pipeline systems used to <strong>transmit and distribute air</strong> in ventilation and air conditioning systems (HVAC). They can transport fresh air, cold air, hot air, or exhaust air depending on the intended purpose.</p>
      <blockquote class="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">Simply put, if the HVAC system is the "heart," then air ducts are the "circulatory system" that keeps air flowing continuously and efficiently.</blockquote>
      <p>In practice, air ducts are designed in various shapes and materials to suit each installation space and specific technical requirements.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/2.jpg" alt="Cửa Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">The Role of Air Ducts in Ventilation Systems</h2>
      <p>Air ducts are not simply air channels — they also perform many important functions:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
      <li><strong>Fresh air supply:</strong> Bringing clean air from outside into the building, improving air quality.</li>
      <li><strong>Exhaust air extraction:</strong> Removing toxic gases, dust, and unpleasant odors from the space.</li>
      <li><strong>Air conditioning:</strong> Distributing cool or warm air evenly to all areas.</li>
      </ul>
      <p class="mt-3">As a result, air duct systems help maintain an environment that is <strong>well-ventilated, safe, and energy-efficient</strong> — an especially critical factor in enclosed buildings or manufacturing facilities.</p>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Air Duct Construction</h2>
      <p>Understanding air duct construction not only helps you choose the right product but also optimizes operational performance and long-term costs. In practice, a standard air duct system is always composed of appropriate materials and tightly connected components.</p>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">1. Duct Body</h3>
      <ul class="list-disc pl-6 space-y-2">
      <li>The main component, which can be made from galvanized steel, stainless steel, or aluminum alloy, responsible for conducting airflow.</li>
      <li>Designed in round, square, or rectangular shapes depending on the installation location and required airflow volume.</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">2. Joints and Fittings</h3>
      <ul class="list-disc pl-6 space-y-2">
      <li>Includes elbows, tees, dampers, flanges, grilles, and hoods — used to redirect airflow and connect duct sections.</li>
      <li>Joints must be airtight, ensuring no leakage to maintain stable pressure throughout the system.</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">3. Insulation Layer <em>(if applicable)</em></h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>For insulated air ducts, the duct body is wrapped with an additional insulation layer made of fiberglass, vulcanized rubber, or PU Foam.</li>
        <li>Helps prevent condensation, reduce heat loss, and minimize noise during system operation.</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">4. Supports and Hangers</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>A system of steel or stainless steel frames and hangers fixed to the ceiling or structural framework.</li>
        <li>Ensures stable duct operation without vibration, maintaining safety during long-term use.</li>
      </ul>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/3.jpg" alt="Ống Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Air Duct Materials</h2>
      <p>Depending on the operating environment and technical requirements, air ducts are manufactured from various materials:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li><strong>Galvanized steel:</strong> The most common choice due to its reasonable cost, good corrosion resistance, and suitability for most construction projects.</li>
        <li><strong>Stainless steel:</strong> High durability and absolute rust resistance — typically used in high-humidity environments or those with strict hygiene requirements (food processing, medical).</li>
        <li><strong>Aluminum:</strong> Lightweight and easy to install, ideal for systems requiring high flexibility.</li>
      </ul>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Operating Principle</h2>
      <p>Air ducts operate based on the principle of pressure differential:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li>Air is pressurized and pushed by fans or the HVAC system</li>
        <li>Airflow travels through the ducts in the designed direction</li>
        <li>Airflow volume and velocity are controlled through duct size and structure</li>
      </ul>
      <p class="mt-3">The balance between <strong>pressure – flow rate – friction</strong> is the key factor determining the efficiency of the entire system.</p>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Common Air Duct Classifications</h2>
      <p>Air ducts on the market today are classified by various criteria. Understanding each type will help you choose the right solution for your project.</p>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">Classification by Shape</h3>

      <h4 class="font-bold text-gray-800 mt-4 mb-1">Rectangular Air Ducts</h4>
      <p><strong>Characteristics:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Box-shaped, either square or rectangular</li>
        <li>Easy to install flush against the ceiling, saving space</li>
      </ul>
      <p class="mt-2"><strong>Advantages:</strong> Optimized installation footprint, suitable for residential construction.</p>
      <p class="mt-1"><strong>Disadvantages:</strong> Higher pressure loss, lower airflow efficiency compared to round ducts.</p>

      <h4 class="font-bold text-gray-800 mt-4 mb-1">Round Air Ducts</h4>
      <p><strong>Characteristics:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Cylindrical shape</li>
        <li>Fewer sharp corners, smoother airflow movement</li>
      </ul>
      <p class="mt-2"><strong>Advantages:</strong> High airflow efficiency, reduced noise and pressure loss.</p>
      <p class="mt-1"><strong>Disadvantages:</strong> Takes up more space during installation, difficult to fit in low-ceiling areas.</p>

      <h4 class="font-bold text-gray-800 mt-4 mb-1">Flexible Air Ducts</h4>
      <p><strong>Flexibility:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Can be bent and shaped easily</li>
        <li>Suitable for complex spaces</li>
      </ul>
      <p class="mt-2"><strong>Applications:</strong> Connecting rigid duct sections, used in residential air conditioning systems.</p>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">Classification by Material</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Galvanized steel ducts:</strong> Common, low cost</li>
        <li><strong>Stainless steel ducts:</strong> Durable, high corrosion resistance</li>
        <li><strong>Aluminum ducts:</strong> Lightweight, flexible</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">Classification by Function</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Supply ducts:</strong> Deliver clean air into the space</li>
        <li><strong>Return ducts:</strong> Collect air for reprocessing</li>
        <li><strong>Exhaust ducts:</strong> Remove waste air and dust</li>
      </ul>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/4.jpg" alt="Ống Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Real-World Applications of Air Ducts</h2>
      <p>Air ducts are present in virtually every sector, from industry to everyday life.</p>

      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Industrial Applications</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Manufacturing plants</li>
        <li>Food processing facilities</li>
        <li>Power plants and chemical factories</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Residential Applications</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Houses</li>
        <li>Apartment buildings</li>
        <li>Shopping centers</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Air Conditioning and Ventilation Systems</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Comprehensive HVAC systems</li>
        <li>Smoke extraction and fire suppression systems</li>
      </ul>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Tips for Choosing the Right Air Duct</h2>
      <p>Selecting the correct type of air duct will help reduce costs and ensure long-term performance.</p>

      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Choose by Installation Space</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Small spaces → rectangular ducts</li>
        <li>Large spaces → round ducts</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Choose by Budget</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Low budget → galvanized steel</li>
        <li>Premium → stainless steel</li>
      </ul>

      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Choose by Performance Requirements</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Priority on airflow volume → round ducts</li>
        <li>Priority on space saving → rectangular ducts</li>
      </ul>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/5.jpg" alt="Ống Gió" />`,

      `<p class="mt-4">Dai Phong VN has helped you understand "what air ducts are." It's clear that air ducts are an indispensable component in any ventilation or air conditioning system. As construction projects increasingly demand higher air quality standards, investing in the right air duct system is no longer optional — it is essential to ensuring an ideal living and working environment.</p>`,

      `<div class="mt-8 pt-6">
        <p class="font-bold text-gray-900 mb-3">Customers wishing to place an order, please contact:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>DAI PHONG VN INDUSTRIAL JOINT STOCK COMPANY</strong></li>
          <li><strong>Specializing in:</strong> Fabrication and manufacturing of ventilation ducts, air ducts, cable trays, cable ladders, electrical cabinets, and distribution panels</li>
          <li><strong>Address:</strong> Lot 3.2, Street No. 2, Tan Dong Hiep A Industrial Zone, Di An Ward, HCMC</li>
          <li><strong>Phone:</strong> (+84) 937 299 828</li>
          <li><strong>Website:</strong> onggiodaiphong.com</li>
        </ul>
      </div>`,
    ],
    order: 1,
  },

  {
    id: 'cua-gio-la-gi-phan-loai-ung-dung',
    title: 'What Is an Air Vent? Types and Most Common Applications Today',
    images: ['/images/news/cua-gio/1.jpg'],
    createdAt: '25/03/2026',
    slug: 'cua-gio-la-gi-phan-loai-ung-dung',
    category: ENewCategory.NEWS,
    tags: ['AIR VENT', 'HVAC', 'VENTILATION', 'AIR CONDITIONING'],
    paragraphs: [
      `In ventilation and air conditioning systems, <strong>air vents</strong> may seem like small components, but they play an essential role in distributing and controlling airflow. Let Dai Phong Duct explore the details below!`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/1.jpg" alt="Cửa Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">What Is an Air Vent?</h2>
      <p>An air vent is a device installed at the supply or return point of a duct system, responsible for delivering clean air into a space and removing polluted air to the outside. This keeps living and working environments consistently fresh and comfortable.</p>
      <p class="mt-3">Beyond simply circulating air, air vents also contribute to:</p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>Regulating indoor temperature</li>
        <li>Controlling airflow direction as needed</li>
        <li>Improving the overall efficiency of the HVAC system</li>
      </ul>
      <p class="mt-3">In modern buildings such as apartments, shopping centers, and factories, air vents are an indispensable component for maintaining air quality standards.</p>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">What Is a Supply Air Vent?</h2>
      <p>Among all types of air vents, the <strong>supply air vent</strong> is the most common and important. It is specifically designed to deliver fresh or treated air to areas where it is needed.</p>
      <p class="mt-3">Supply air vents are typically installed in:</p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>High-occupancy areas</li>
        <li>Enclosed spaces with limited natural airflow</li>
        <li>Areas generating significant heat or humidity</li>
      </ul>
      <p class="mt-3">Supply air vents do more than simply push air into a room — they deliver meaningful benefits:</p>
      <ul class="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Oxygen replenishment:</strong> Maintains a healthy indoor environment</li>
        <li><strong>Temperature stabilization:</strong> Supports more efficient air conditioning operation</li>
        <li><strong>Improved air quality:</strong> Reduces feelings of stuffiness and discomfort</li>
      </ul>
      <p class="mt-3">As a result, indoor spaces maintain a balanced atmosphere that promotes health and enhances work performance.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/2.jpg" alt="Cửa Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Common Types of Air Vents</h2>
      <p>The market currently offers a wide variety of air vents with different designs and functions. Below are the most widely used types.</p>

      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">1. Square Diffuser</h3>
      <p>This is the most familiar type found in residential and commercial buildings.</p>
      <p class="mt-2"><strong>Key features:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Square or rectangular design</li>
        <li>Air distributed evenly in multiple directions</li>
      </ul>
      <p class="mt-2"><strong>Advantages:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Easy to install and maintain</li>
        <li>Compatible with most modern ceiling types</li>
        <li>Ensures even air distribution throughout the space</li>
      </ul>
      <p class="mt-2">This type is commonly used for both supply and return air, keeping spaces consistently well-ventilated.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/3.jpg" alt="Cửa Gió" />`,

      `<h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">2. Z-Blade Vent</h3>
      <p>Z-blade vents are recognized by their Z-shaped angled blades, providing strong system protection.</p>
      <p class="mt-2"><strong>Notable strengths:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Prevents rainwater from entering the system</li>
        <li>Typically installed on building exteriors</li>
        <li>High durability, withstands harsh weather conditions</li>
      </ul>
      <p class="mt-2">Their affordable cost is another reason many project owners prefer this type.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/4.jpg" alt="Cửa Gió" />`,

      `<h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">3. Single / Double Deflection Grille</h3>
      <p>A flexible design commonly used in large open spaces.</p>
      <p class="mt-2"><strong>Design characteristics:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Parallel blade arrangement</li>
        <li>Available in single or double blade layers</li>
        <li>Common shapes: square or rectangular</li>
      </ul>
      <p class="mt-2"><strong>Applications:</strong> Return air systems for air conditioning, offices, showrooms, and large lobbies.</p>
      <p class="mt-1">This type provides effective airflow direction control and stable air circulation.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/5.jpg" alt="Cửa Gió" />`,

      `<h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">4. Round Diffuser</h3>
      <p>Unlike traditional designs, the round diffuser offers high aesthetic appeal and strong operational performance. Its concentric ring structure distributes airflow evenly in all directions, significantly reducing pressure loss.</p>
      <p class="mt-2"><strong>Key advantages:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Wide and even air distribution</li>
        <li>Reduced operational noise</li>
        <li>Modern design suited for high-end buildings</li>
      </ul>
      <p class="mt-2">Typically installed in: factories, shopping centers, and spaces with high ceilings.</p>`,

      `<p>Although air vents are small components within a ventilation system, they play a key role in airflow control and distribution. Choosing the right type not only optimizes operational performance but also improves the quality of the living and working environment.</p>
      <p class="mt-3">As construction projects increasingly prioritize air quality standards, investing in the right air vent system is a sustainable and long-term solution.</p>`,

      `<div class="mt-8 pt-6">
        <p class="font-bold text-gray-900 mb-3">Customers wishing to place an order, please contact:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>DAI PHONG VN INDUSTRIAL JOINT STOCK COMPANY</strong></li>
          <li><strong>Specializing in:</strong> Fabrication and manufacturing of ventilation ducts, air ducts, cable trays, cable ladders, electrical cabinets, and distribution panels</li>
          <li><strong>Address:</strong> Lot 3.2, Street No. 2, Tan Dong Hiep A Industrial Zone, Di An Ward, HCMC</li>
          <li><strong>Phone:</strong> (+84) 937 299 828</li>
          <li><strong>Website:</strong> onggiodaiphong.com</li>
        </ul>
      </div>`,
    ],
    order: 2,
  },
];
