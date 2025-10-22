export interface Product {
  id: string;
  name: string;
  category: string;
  price?: number | string;
  image: string;
  slug: string;
  description: string;
  code?: string;
  details?: string;
}

export const PRODUCT_CATEGORIES = [
  'Tất cả',
  'Ống gió',
  'Cửa gió',
  'Van gió',
  'Phụ kiện ống gió',
  'Ống gió chống cháy EI',
  'Máng cáp điện',
  'Gia công theo yêu cầu',
] as const;

// Mapping between category names and URL slugs
export const CATEGORY_SLUG_MAP: Record<string, string> = {
  'Tất cả': 'tat-ca',
  'Ống gió': 'ong-gio',
  'Cửa gió': 'cua-gio',
  'Van gió': 'van-gio',
  'Phụ kiện ống gió': 'phu-kien-ong-gio',
  'Ống gió chống cháy EI': 'ong-gio-chong-chay-ei',
  'Máng cáp điện': 'mang-cap-dien',
  'Gia công theo yêu cầu': 'gia-cong-theo-yeu-cau',
};

// Reverse mapping from slug to category name
export const SLUG_CATEGORY_MAP: Record<string, string> = {
  'tat-ca': 'Tất cả',
  'ong-gio': 'Ống gió',
  'cua-gio': 'Cửa gió',
  'van-gio': 'Van gió',
  'phu-kien-ong-gio': 'Phụ kiện ống gió',
  'ong-gio-chong-chay-ei': 'Ống gió chống cháy EI',
  'mang-cap-dien': 'Máng cáp điện',
  'gia-cong-theo-yeu-cau': 'Gia công theo yêu cầu',
};

export const PRODUCTS: Product[] = [
  {
    id: 'p-001',
    name: 'Ống gió chống cháy EI bọc tấm Tozen',
    category: 'Ống gió chống cháy EI',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-chong-chay-ei-boc-tam-tozen.png',
    slug: 'ong-gio-chong-chay-ei-boc-tam-tozen',
    description:
      'Ống gió chống cháy EI bọc tấm Tozen đạt tiêu chuẩn PCCC, cách nhiệt và an toàn cháy nổ.',
    code: 'EI-TOZEN',
    details: '',
  },
  {
    id: 'p-002',
    name: 'Ống gió chống cháy EI bọc tấm SMD',
    category: 'Ống gió chống cháy EI',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-chong-chay-ei-boc-tam-smd.png',
    slug: 'ong-gio-chong-chay-ei-boc-tam-smd',
    description:
      'Ống gió chống cháy EI bọc tấm SMD chất lượng cao, giảm truyền nhiệt hiệu quả.',
    code: 'EI-SMD',
    details: '',
  },
  {
    id: 'p-003',
    name: 'Ống gió chống cháy EI bọc tấm thạch cao',
    category: 'Ống gió chống cháy EI',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-chong-chay-ei-boc-tam-thach-cao.png',
    slug: 'ong-gio-chong-chay-ei-boc-tam-thach-cao',
    description:
      'Ống gió chống cháy EI bọc tấm thạch cao, chống cháy lan, đảm bảo cách nhiệt tốt.',
    code: 'EI-THACHCAO',
    details: '',
  },
  {
    id: 'p-004',
    name: 'Tiêu âm ống gió',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/tieu-am-ong-gio.png',
    slug: 'tieu-am-ong-gio',
    description:
      'Thiết bị tiêu âm ống gió giúp giảm độ ồn, đảm bảo không gian yên tĩnh.',
    code: 'OG-TA',
    details: '',
  },
  {
    id: 'p-005',
    name: 'Bịt ống gió vuông',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/bit-ong-gio-vuong.png',
    slug: 'bit-ong-gio-vuong',
    description:
      'Bịt ống gió vuông bảo vệ đầu ống, ngăn bụi và côn trùng xâm nhập.',
    code: 'OG-BITV',
    details: `<h3>Vật liệu chế tạo</h3>
<p><strong>Tôn mạ kẽm:</strong> Phổ biến nhất do giá thành hợp lý và khả năng chống gỉ sét tốt trong môi trường thông thường.</p>
<p><strong>Inox (SUS 201, 304):</strong> Dùng trong môi trường yêu cầu độ vệ sinh cao, chống ăn mòn hoặc có hóa chất (như nhà máy thực phẩm, y tế, phòng sạch).</p>
<h3>Chức năng chính của việc bịt kín ống gió</h3>
<p><strong>Đóng kín hệ thống:</strong> Ngăn chặn không khí thoát ra ngoài hoặc đi vào từ đầu ống, đảm bảo luồng không khí được điều hướng chính xác trong hệ thống.</p>
<p><strong>Ngăn bụi bẩn, côn trùng:</strong> Ngăn chặn bụi bẩn, côn trùng, hoặc các vật thể lạ khác xâm nhập vào bên trong hệ thống ống gió, đảm bảo chất lượng không khí và vệ sinh.</p>
<p><strong>Kiểm soát áp suất:</strong> Tạo ra một hệ thống kín, giúp duy trì áp suất cần thiết bên trong đường ống.</p>
<p><strong>Tạm thời hoặc vĩnh viễn:</strong> Có thể được sử dụng để đóng kín tạm thời một nhánh ống không sử dụng, hoặc bịt kín vĩnh viễn cuối một đường ống.</p>`,
  },
  {
    id: 'p-006',
    name: 'Ống gió tròn tôn mạ kẽm',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-tron-ton-ma-kem.png',
    slug: 'ong-gio-tron-ton-ma-kem',
    description:
      'Ống gió tròn bằng tôn mạ kẽm, dễ lắp đặt, độ bền cao và lưu thông khí tốt.',
    code: 'OG-TMK',
    details: '',
  },
  {
    id: 'p-007',
    name: 'Ống gió vuông bích TDC',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-vuong-bich-tdc.png',
    slug: 'ong-gio-vuong-bich-tdc',
    description:
      'Ống gió vuông bích TDC lắp ghép nhanh, kín khí tốt, dùng cho hệ thống HVAC.',
    code: 'OG-TDC',
    details: '',
  },
  {
    id: 'p-008',
    name: 'Ống gió vuông bích TDF',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-vuong-bich-tdf.png',
    slug: 'ong-gio-vuong-bich-tdf',
    description:
      'Ống gió vuông bích TDF có độ bền cao, dễ bảo trì và thay thế.',
    code: 'OG-TDF',
    details: '',
  },
  {
    id: 'p-009',
    name: 'Ống gió Co 90',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-co-90.png',
    slug: 'ong-gio-co-90',
    description:
      'Ống gió Co 90 dùng để đổi hướng luồng khí vuông góc trong hệ thống.',
    code: 'OG-C90',
    details: '',
  },
  {
    id: 'p-010',
    name: 'Ống gió Co 45',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-co-45.png',
    slug: 'ong-gio-co-45',
    description:
      'Ống gió Co 45 thay đổi hướng luồng khí linh hoạt, giảm áp lực gió.',
    code: 'OG-C45',
    details: '',
  },
  {
    id: 'p-011',
    name: 'Ống gió co giảm vuông',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-co-giam-vuong.png',
    slug: 'ong-gio-co-giam-vuong',
    description:
      'Ống gió co giảm vuông dùng để chuyển tiết diện, đảm bảo luồng khí ổn định.',
    code: 'OG-CGV',
    details: '',
  },
  {
    id: 'p-012',
    name: 'Cửa gió nan T',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-nan-t.png',
    slug: 'cua-gio-nan-t',
    description: 'Cửa gió nan T phân phối luồng khí đều, thẩm mỹ cao.',
    code: 'CG-NT',
    details: '',
  },
  {
    id: 'p-013',
    name: 'Cửa gió sọt trứng',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-sot-trung.png',
    slug: 'cua-gio-sot-trung',
    description: 'Cửa gió sọt trứng cho hệ thống hồi gió, giảm ồn tốt.',
    code: 'CG-ST',
    details: '',
  },
  {
    id: 'p-014',
    name: 'Cửa gió 1 lớp nan',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-1-lop-nan.png',
    slug: 'cua-gio-1-lop-nan',
    description:
      'Cửa gió 1 lớp nan cấp gió tươi, dễ lắp đặt và điều chỉnh hướng gió.',
    code: 'CG-1L',
    details: '',
  },
  {
    id: 'p-015',
    name: 'Cửa gió 2 lớp nan',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-2-lop-nan.png',
    slug: 'cua-gio-2-lop-nan',
    description:
      'Cửa gió 2 lớp nan điều hướng gió linh hoạt, tăng hiệu quả lưu thông khí.',
    code: 'CG-2L',
    details: '',
  },
  {
    id: 'p-016',
    name: 'Van chặn lửa EI FD',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-chan-lua-ei-fd.png',
    slug: 'van-chan-lua-ei-fd',
    description:
      'Van chặn lửa EI FD tự động đóng khi nhiệt cao, ngăn cháy lan.',
    code: 'VG-FD',
    details: '',
  },
  {
    id: 'p-017',
    name: 'Van điều chỉnh gắn động cơ MD',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-dieu-chinh-gan-dong-co-md.png',
    slug: 'van-dieu-chinh-gan-dong-co-md',
    description:
      'Van điều chỉnh gắn động cơ MD kiểm soát lưu lượng khí chính xác.',
    code: 'VG-MD',
    details: '',
  },
  {
    id: 'p-018',
    name: 'Van điều chỉnh tay tròn OBD',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-dieu-chinh-tay-tron-obd.png',
    slug: 'van-dieu-chinh-tay-tron-obd',
    description:
      'Van điều chỉnh tay tròn OBD cho phép điều chỉnh lưu lượng khí thủ công.',
    code: 'VG-OBD',
    details: '',
  },
  {
    id: 'p-019',
    name: 'Van 1 chiều vuông',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-1-chieu-vuong.png',
    slug: 'van-1-chieu-vuong',
    description:
      'Van 1 chiều vuông ngăn luồng khí chảy ngược, hoạt động tự động.',
    code: 'VG-V1C',
    details: '',
  },
  {
    id: 'p-020',
    name: 'Van 1 chiều tròn',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-1-chieu-tron.png',
    slug: 'van-1-chieu-tron',
    description:
      'Van 1 chiều tròn bằng nhôm, dùng cho hệ thống thông gió công nghiệp.',
    code: 'VG-T1C',
    details: '',
  },
  {
    id: 'p-021',
    name: 'Chạc 3 ống gió',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/chac-3-ong-gio.png',
    slug: 'chac-3-ong-gio',
    description: 'Chạc 3 ống gió dùng để chia luồng khí, độ kín khít tốt.',
    code: 'PK-CHAC3',
    details: '',
  },
  {
    id: 'p-022',
    name: 'Chuyển vuông tròn đồng tâm',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/chuyen-vuong-tron-dong-tam.png',
    slug: 'chuyen-vuong-tron-dong-tam',
    description:
      'Chuyển vuông tròn đồng tâm kết nối ống gió, đảm bảo luồng khí lưu thông mượt.',
    code: 'PK-CVTD',
    details: '',
  },
  {
    id: 'p-023',
    name: 'Ke vuông ống gió',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/ke-vuong-ong-gio.png',
    slug: 'ke-vuong-ong-gio',
    description:
      'Ke vuông ống gió dùng để lắp ghép khung bích TDC, đảm bảo chắc chắn.',
    code: 'PK-KV',
    details: '',
  },
  {
    id: 'p-024',
    name: 'Mặt bích TDF rời',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/mat-bich-tdf-roi.png',
    slug: 'mat-bich-tdf-roi',
    description: 'Mặt bích TDF rời giúp liên kết các đoạn ống gió vững chắc.',
    code: 'PK-TDFR',
    details: '',
  },
  {
    id: 'p-025',
    name: 'Bộ treo ống gió',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/bo-treo-ong-gio.png',
    slug: 'bo-treo-ong-gio',
    description:
      'Bộ treo ống gió cố định ống gió lên trần, đảm bảo an toàn khi vận hành.',
    code: 'PK-BT',
    details: '',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(
  category: string,
  excludeId?: string
): Product[] {
  return PRODUCTS.filter((p) => p.category === category && p.id !== excludeId);
}
