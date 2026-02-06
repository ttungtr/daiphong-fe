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
  specifications?: string;
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
    details: `<p><strong>Tấm chống cháy Tozen</strong> là một loại vật liệu được thiết kế đặc biệt để có khả năng chịu nhiệt và chống cháy lan.</p>

<ul>
  <li><strong>Thành phần chính:</strong> Tấm Tozen được cấu tạo từ các vật liệu vô cơ như <strong>xi măng Portland, cát siêu mịn, sợi cellulose, vôi, perlite, vermiculite và mica</strong>. 
  Sự kết hợp của các thành phần này tạo nên một vật liệu có khả năng chống cháy vượt trội.</li>
  
  <li><strong>Đặc tính nổi bật:</strong>
    <ul>
      <li><strong>Khả năng chống cháy cao:</strong> Chịu nhiệt độ cao trong thời gian dài (có thể lên đến 150 phút ở 600°C hoặc 180 phút ở 550°C), không phát sinh khói độc hại khi cháy.</li>
      <li><strong>Chống thấm nước và chống ẩm:</strong> Đây là một ưu điểm lớn so với tấm thạch cao thông thường, giúp tấm Tozen bền bỉ hơn trong môi trường ẩm ướt và không bị nấm mốc.</li>
      <li><strong>Độ bền cơ học cao:</strong> Khả năng chịu lực, chống tách lớp, không bể khi bắn vít, giúp tăng độ bền và tuổi thọ cho hệ thống ống gió.</li>
      <li><strong>Cách âm tốt:</strong> Góp phần giảm tiếng ồn trong hệ thống.</li>
      <li><strong>Thân thiện với môi trường:</strong> Không chứa các chất độc hại.</li>
    </ul>
  </li>
</ul>

<p><strong>Ống gió chống cháy EI bọc tấm Tozen</strong> được ứng dụng rộng rãi trong các công trình đòi hỏi tiêu chuẩn an toàn cháy nổ cao, bao gồm:</p>

<ul>
  <li><strong>Hệ thống hút khói sự cố:</strong> Trong các tòa nhà cao tầng, chung cư, khách sạn, trung tâm thương mại, rạp chiếu phim.</li>
  <li><strong>Hệ thống thông gió trong các khu vực thoát hiểm:</strong> Đảm bảo đường thoát hiểm không bị khói và lửa xâm nhập.</li>
  <li><strong>Nhà xưởng, nhà máy, kho bãi:</strong> Đặc biệt là những nơi có nguy cơ cháy nổ cao.</li>
  <li><strong>Tầng hầm, gara ô tô.</strong></li>
  <li><strong>Các công trình công cộng và dân dụng lớn khác</strong> yêu cầu nghiêm ngặt về an toàn cháy nổ.</li>
</ul>`,
    specifications: `
<p><strong>Cấu tạo cơ bản của ống gió chống cháy EI bọc tấm Tozen</strong> tương tự như các loại ống gió chống cháy dạng tấm khác, bao gồm:</p>

<ul>
  <li><strong>Lớp tôn mạ kẽm bên trong:</strong> Là lớp khung sườn và chịu lực chính của ống gió, thường có độ dày từ 0.75mm trở lên tùy thuộc vào kích thước và yêu cầu kỹ thuật.</li>
  <li><strong>Lớp tấm chống cháy Tozen:</strong> Đây là lớp vật liệu quan trọng nhất, được bọc bên ngoài lớp tôn. Độ dày của tấm Tozen (thường từ 5mm đến 20mm) và số lớp bọc sẽ quyết định giới hạn chịu lửa EI của ống (ví dụ: EI30, EI60, EI90, EI120).</li>
  <li><strong>Hệ thống bích kết nối:</strong> Sử dụng bích thép (thường là bích TDF mạ kẽm) để liên kết các đoạn ống, đảm bảo sự kín khít, vững chắc và đồng bộ của toàn bộ hệ thống.</li>
</ul>

<p><strong>Ống gió chống cháy sử dụng tấm Tozen</strong> mang lại nhiều ưu điểm vượt trội:</p>

<ul>
  <li><strong>Khả năng chống cháy và cách nhiệt tối ưu:</strong> Đảm bảo duy trì độ toàn vẹn và ngăn chặn sự truyền nhiệt hiệu quả trong thời gian cháy, đáp ứng các tiêu chuẩn EI nghiêm ngặt.</li>
  <li><strong>Chống ẩm, chống nước và mối mọt:</strong> Nhờ thành phần vật liệu đặc biệt, tấm Tozen có khả năng chịu được môi trường ẩm ướt, kéo dài tuổi thọ cho hệ thống.</li>
  <li><strong>Độ bền cao:</strong> Chống ăn mòn, oxy hóa, chịu được va đập và các tác động cơ học.</li>
  <li><strong>An toàn và thân thiện môi trường:</strong> Không phát sinh khói độc hại khi cháy.</li>
  <li><strong>Tính linh hoạt trong ứng dụng:</strong> Có thể sử dụng cho nhiều loại công trình khác nhau.</li>
</ul>`,
  },
  {
    id: 'p-044',
    name: 'Chuyển cao độ tròn',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/chuyen-cao-do-tron.png',
    slug: 'chuyen-cao-do-tron',
    description:
      'Chuyển cao độ tròn dùng để dịch chuyển trục tâm ống gió tròn lên/xuống hoặc ngang trong khi hai mặt đầu vẫn song song.',
    details: `
<p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất, có độ bền và khả năng chống gỉ sét tốt.<br>
Inox (201, 304, 316): Dùng cho các môi trường đặc biệt yêu cầu chống ăn mòn cao, vệ sinh nghiêm ngặt (nhà máy thực phẩm, dược phẩm, y tế).</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Chuyển cao độ: Đây là công dụng chính. Khi đường ống gió cần đi qua các vật cản như dầm, xà ngang, hệ thống điện, hệ thống nước, hoặc các cấu trúc khác trên trần/tường, chếch lệch tâm giúp ống gió di chuyển lên hoặc xuống để vượt qua chúng một cách gọn gàng mà không phải cắt bỏ hay phá dỡ cấu trúc.<br>
Điều chỉnh cao độ lắp đặt: Trong quá trình thi công, đôi khi cần điều chỉnh cao độ của đường ống để phù hợp với bản vẽ hoặc các hạng mục khác, chếch lệch tâm là giải pháp lý tưởng.<br>
Tối ưu hóa không gian: Giúp tận dụng hiệu quả không gian trên trần giả hoặc trong các khu vực có nhiều hạng mục kỹ thuật chằng chịt, đảm bảo tính thẩm mỹ và an toàn.<br>
Duy trì dòng khí ổn định: Nhờ thiết kế chuyển tiếp mượt mà, chếch lệch tâm giúp giảm thiểu sự hỗn loạn của dòng khí, từ đó giảm tổn thất áp suất và hạn chế tiếng ồn phát sinh so với việc sử dụng nhiều cút 90 độ nối tiếp.</span></p>
`,

    specifications: `
<p style="text-align: left;"><span data-sheets-root="1">Đường kính (D): Phụ thuộc vào đường kính của ống gió mà nó kết nối.<br>
Độ lệch (Offset - L): Là khoảng cách dịch chuyển cao độ (hoặc ngang) giữa hai trục tâm của ống. Đây là thông số quan trọng nhất của chếch lệch tâm, được tính toán dựa trên yêu cầu thực tế của công trình.<br>
Chiều dài tổng thể (Overall Length): Chiều dài của phụ kiện, phụ thuộc vào độ lệch và góc nghiêng của chếch.<br>
Góc nghiêng: Thường được thiết kế với các góc nghiêng nhỏ (ví dụ: 15 độ, 30 độ) để đảm bảo luồng khí chuyển động êm ái. Góc càng nhỏ, độ lệch càng lớn thì chiều dài của chếch càng dài.<br>
Độ dày vật liệu: Từ 0.5mm đến 1.2mm hoặc hơn, tùy thuộc vào đường kính ống và áp suất trong hệ thống.<br>
Kết nối: Các đầu của chếch lệch tâm tròn thường được bẻ mí để lắp khớp với ống gió hoặc sử dụng các mối nối bích/kẹp bích.</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Hiệu quả lưu thông khí: Giảm thiểu tổn thất áp suất và tiếng ồn so với việc sử dụng các phụ kiện có góc chuyển gắt.<br>
Tính linh hoạt cao: Giải pháp tối ưu cho việc điều chỉnh cao độ hoặc vị trí đường ống trong không gian chật hẹp, nhiều vật cản.<br>
Tiết kiệm không gian: Cho phép đường ống ôm sát các cấu trúc mà không gây cản trở lớn.<br>
Thẩm mỹ: Khi lắp đặt lộ thiên, các đường cong mượt mà của chếch lệch tâm tròn tạo nên vẻ đẹp công nghiệp, hiện đại.<br>
Độ kín khít tốt: Khi được gia công chuẩn xác và lắp đặt đúng kỹ thuật.</span></p>
`,
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
    details: `<p><strong>Ống gió chống cháy EI tấm SMD</strong> được ứng dụng rộng rãi trong các công trình đòi hỏi tiêu chuẩn an toàn cháy nổ cao:</p>
<ul>
  <li><strong>Hệ thống hút khói và thông gió:</strong> Đặc biệt là các đường ống hút khói đi ngang qua khoang cháy, tầng hầm, nhà để xe, nhà bếp công nghiệp.</li>
  <li><strong>Tòa nhà cao tầng, chung cư, khách sạn:</strong> Đảm bảo an toàn cho cư dân và tài sản.</li>
  <li><strong>Trung tâm thương mại, siêu thị, rạp chiếu phim:</strong> Nơi tập trung đông người.</li>
  <li><strong>Bệnh viện, trường học, cơ sở y tế:</strong> Đảm bảo an toàn tối đa cho người bệnh và học sinh.</li>
  <li><strong>Nhà xưởng, nhà máy sản xuất:</strong> Đặc biệt là các nhà máy có nguy cơ cháy nổ cao.</li>
  <li><strong>Các công trình công cộng và dân dụng lớn khác:</strong> Yêu cầu nghiêm ngặt về PCCC.</li>
</ul>`,
    specifications: `<p><strong>Ống gió chống cháy EI tấm SMD</strong> thường có cấu tạo nhiều lớp để đảm bảo khả năng chịu lửa và cách nhiệt trong thời gian dài:</p>
<ul>
  <li><strong>Lớp tôn mạ kẽm bên trong:</strong> Là lớp chịu lực chính của ống, thường có độ dày tối thiểu 0.75mm (có thể thay đổi tùy yêu cầu và tiêu chuẩn).</li>
  <li><strong>Lớp tấm chống cháy SMD:</strong> Đây là lớp quan trọng nhất, được bọc bên ngoài lớp tôn. Độ dày của tấm SMD sẽ quyết định giới hạn chịu lửa EI của ống (ví dụ: EI30, EI45, EI60, EI90, EI120). Tấm SMD có một mặt sàn và một mặt nhẵn, trong đó mặt nhẵn thường là bề mặt chịu nhiệt, tiếp xúc trực tiếp với lửa.</li>
  <li><strong>Lớp tôn mạ kẽm bên ngoài (tùy chọn):</strong> Một số loại ống có thêm lớp tôn mạ kẽm mỏng bên ngoài để bảo vệ lớp SMD và tăng tính thẩm mỹ.</li>
  <li><strong>Hệ thống bích thép:</strong> Các bích thép (thường là bích TDF mạ kẽm) được sử dụng để kết nối các đoạn ống, đảm bảo sự kín khít và chắc chắn của toàn bộ hệ thống.</li>
</ul>

<p><strong>Ống gió chống cháy EI tấm SMD</strong> được đánh giá cao nhờ những ưu điểm sau:</p>
<ul>
  <li><strong>Khả năng chống cháy vượt trội:</strong>
    <ul>
      <li>Chịu nhiệt độ cao lên đến 1000°C mà không bị nứt, vỡ hay biến dạng.</li>
      <li>Đạt các giới hạn chịu lửa EI từ 30, 45, 60, 90 đến 120 phút, đảm bảo thời gian thoát hiểm và chữa cháy an toàn.</li>
      <li>Không phát sinh khói độc hại khi tiếp xúc với nhiệt độ cao.</li>
    </ul>
  </li>
  <li><strong>Chống ẩm, chống nước tốt:</strong> Khác với tấm thạch cao dễ bị ẩm mốc, tấm SMD có khả năng chịu nước tốt, ngăn ngừa nấm mốc và mối mọt, phù hợp với khí hậu nóng ẩm của Việt Nam.</li>
  <li><strong>Độ bền cao:</strong> Chống ăn mòn, oxy hóa, chịu được tác động từ môi trường khắc nghiệt, giúp tăng tuổi thọ hệ thống.</li>
  <li><strong>Cách âm, giảm ồn hiệu quả:</strong> Góp phần tạo không gian yên tĩnh, thoải mái hơn.</li>
  <li><strong>Thân thiện với môi trường:</strong> Vật liệu SMD không chứa các hóa chất độc hại, an toàn cho sức khỏe người sử dụng và môi trường.</li>
  <li><strong>Dễ dàng gia công và lắp đặt:</strong> Tấm SMD có trọng lượng nhẹ hơn so với một số vật liệu khác, giúp quá trình vận chuyển và thi công nhanh chóng, tiết kiệm chi phí nhân công.</li>
  <li><strong>Tính thẩm mỹ:</strong> Bề mặt tấm SMD màu trắng đục, nhẵn mịn, có thể sơn hoàn thiện theo yêu cầu để phù hợp với thiết kế công trình.</li>
</ul>`,
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
    details: `
<p><strong>Ống gió chống cháy EI bọc tấm thạch cao</strong> được sử dụng phổ biến trong các công trình có yêu cầu cao về an toàn cháy nổ, cụ thể như:</p>

<ul>
  <li><strong>Hệ thống hút khói sự cố:</strong> Trong các tòa nhà cao tầng, trung tâm thương mại, rạp chiếu phim, bệnh viện, nhà xưởng...</li>
  <li><strong>Hệ thống thông gió chính:</strong> Đặc biệt là các đường ống đi xuyên qua các khoang cháy, khu vực thoát hiểm, tầng hầm, gara ô tô.</li>
  <li><strong>Các khu vực có nguy cơ cháy cao:</strong> Nhà bếp công nghiệp, kho chứa vật liệu dễ cháy.</li>
</ul>

<ul>
  <li><strong>Khả năng chống cháy hiệu quả:</strong> Tấm thạch cao chống cháy có khả năng chịu nhiệt độ cao và duy trì độ toàn vẹn, cách nhiệt trong thời gian dài, giúp ngăn chặn sự lan truyền của lửa và khói.</li>
  <li><strong>Đa dạng giới hạn chịu lửa:</strong> Có thể đạt các giới hạn chịu lửa từ EI30 đến EI120 (tương ứng với 30 đến 120 phút), phù hợp với nhiều yêu cầu khác nhau của công trình.</li>
  <li><strong>Giá thành hợp lý:</strong> So với một số vật liệu chống cháy khác như MGO, ống gió bọc thạch cao thường có chi phí đầu tư ban đầu thấp hơn.</li>
  <li><strong>Dễ tìm vật liệu:</strong> Tấm thạch cao chống cháy là vật liệu phổ biến trên thị trường.</li>
  <li><strong>Tính thẩm mỹ:</strong> Bề mặt tấm thạch cao nhẵn có thể sơn màu theo yêu cầu để phù hợp với kiến trúc nội thất.</li>
  <li><strong>Cách âm tốt:</strong> Góp phần giảm tiếng ồn trong hệ thống thông gió.</li>
  <li><strong>An toàn môi trường:</strong> Vật liệu thạch cao không chứa amiăng, thân thiện với môi trường và an toàn cho người sử dụng.</li>
</ul>
`,

    specifications: `
<p><strong>Ống gió chống cháy EI tấm thạch cao</strong> thường có cấu tạo nhiều lớp để đảm bảo khả năng chịu lửa và cách nhiệt:</p>

<ul>
  <li><strong>Lớp trong cùng (lõi ống gió):</strong> Thường là tôn mạ kẽm có độ dày tối thiểu <strong>0.75 mm</strong> (có thể dày hơn tùy yêu cầu). Lớp này đảm bảo độ bền cơ học, chịu lực, chống ăn mòn và là nền tảng cho cấu trúc ống.</li>

  <li><strong>Lớp cách nhiệt chống cháy:</strong> Đây là lớp quan trọng nhất, thường được làm từ các loại vật liệu như:</li>

  <ul>
    <li><strong>Tấm thạch cao chống cháy (Plasterboard FireShield):</strong> Được làm từ bột thạch cao, sợi thủy tinh và các phụ gia chống cháy đặc biệt. Tấm thạch cao này thường có màu hồng đặc trưng. Độ dày của tấm thạch cao thay đổi tùy vào giới hạn chịu lửa EI yêu cầu.</li>
    <ul>
      <li><strong>EI30:</strong> Thường sử dụng tấm thạch cao có độ dày khoảng <strong>20mm - 21mm</strong> (có thể là một lớp hoặc kết hợp các lớp).</li>
      <li><strong>EI45:</strong> Độ dày tổng thể khoảng <strong>25mm</strong>.</li>
      <li><strong>EI60:</strong> Độ dày tổng thể khoảng <strong>33mm</strong> hoặc tấm thạch cao 15.9mm kết hợp các vật liệu khác.</li>
      <li><strong>EI90:</strong> Độ dày tổng thể khoảng <strong>50mm</strong> (có thể là hai lớp tấm chống cháy mỗi lớp 24mm).</li>
      <li><strong>EI120:</strong> Độ dày tổng thể khoảng <strong>53mm</strong> (có thể là hai lớp tấm chống cháy 20mm và 32mm).</li>
    </ul>
    <li><strong>Bông khoáng (Mineral wool) hoặc bông thủy tinh:</strong> Một số nhà sản xuất có thể kết hợp thêm lớp bông khoáng hoặc bông thủy tinh có tỷ trọng cao để tăng cường khả năng cách nhiệt và cách âm.</li>
  </ul>

  <li><strong>Lớp ngoài cùng:</strong> Thường là tôn mạ kẽm có độ dày khoảng <strong>0.58 mm</strong> (có thể thay đổi), có tác dụng bảo vệ lớp cách nhiệt bên trong khỏi các tác động bên ngoài và tăng tính thẩm mỹ.</li>
</ul>
`,
  },
  {
    id: 'p-016a',
    name: 'Van chặn lửa động cơ EI',
    category: 'Ống gió chống cháy EI',
    price: 'Liên hệ',
    image: '/images/products/van-chan-lua-dong-co-ei.png',
    slug: 'van-chan-lua-dong-co-ei',
    description:
      'Van chặn lửa động cơ EI tự động đóng khi nhiệt cao, ngăn cháy lan.',
    details: `
<ul>
  <li><strong>Thân van và lá van:</strong> Được chế tạo từ vật liệu chịu nhiệt cao (tôn mạ kẽm dày, inox), được thiết kế đặc biệt và lót bằng các vật liệu cách nhiệt chuyên dụng (như bông gốm, sợi khoáng, tấm thạch cao chống cháy) bên trong để đảm bảo khả năng cách nhiệt (tiêu chuẩn I).</li>
  <li><strong>Động cơ điều khiển (Actuator):</strong> Gắn trực tiếp vào trục lá van, có nhiệm vụ điều khiển đóng/mở. Động cơ này được thiết kế để hoạt động ổn định trong môi trường nhiệt độ cao trong một khoảng thời gian nhất định và thường có chức năng lò xo phản hồi (spring return) để tự động đóng van khi mất điện hoặc nhận tín hiệu kích hoạt.</li>
  <li><strong>Cảm biến (tùy chọn):</strong> Có thể tích hợp cảm biến nhiệt độ, khói để kích hoạt động cơ.</li>
  <li><strong>Gioăng làm kín:</strong> Sử dụng vật liệu chịu nhiệt cao để đảm bảo độ kín khít khi van đóng, ngăn khói rò rỉ.</li>
</ul>

<ul>
  <li><strong>Kiểm soát cháy lan hiệu quả nhất:</strong> Kết hợp tính năng ngăn lửa và cách nhiệt, đảm bảo cháy không lan qua các khoang cháy, bảo vệ tính mạng con người và tài sản tối đa.</li>
  <li><strong>Tích hợp hệ thống thông minh:</strong> Cho phép giám sát, điều khiển và tự động hóa toàn diện, nâng cao khả năng phản ứng của hệ thống PCCC.</li>
  <li><strong>Đảm bảo an toàn cho lối thoát hiểm:</strong> Ngăn khói và lửa xâm nhập vào các khu vực thoát hiểm như cầu thang bộ, hành lang, giúp mọi người sơ tán an toàn.</li>
  <li><strong>Tuân thủ các quy định PCCC nghiêm ngặt:</strong> Đặc biệt cần thiết cho các tòa nhà hiện đại, phức hợp, nơi yêu cầu cao về giới hạn chịu lửa của các cấu kiện.</li>
</ul>
`,

    specifications: `
<ul>
  <li><strong>Chế độ bình thường:</strong> Lá van ở vị trí mở (hoặc tùy theo yêu cầu hệ thống) để luồng gió thông thường lưu chuyển. Động cơ ở trạng thái chờ.</li>
  <li><strong>Phát hiện cháy:</strong> Hệ thống báo cháy phát hiện khói/nhiệt và gửi tín hiệu điện đến động cơ của van MFD EI.</li>
  <li><strong>Cầu chì nhiệt phụ trợ:</strong> Nếu có cầu chì nhiệt, khi nhiệt độ cục bộ trong ống gió đạt ngưỡng, cầu chì sẽ đứt và kích hoạt cơ chế đóng van.</li>
  <li><strong>Kích hoạt đóng van:</strong> Động cơ nhận tín hiệu và nhanh chóng điều khiển các lá van đóng kín hoàn toàn.</li>
  <li><strong>Chống cháy và cách nhiệt:</strong> Nhờ cấu trúc và vật liệu cách nhiệt, van MFD EI tạo ra một rào chắn vững chắc, ngăn chặn lửa và khói lan truyền qua đường ống gió, đồng thời duy trì nhiệt độ thấp ở mặt không cháy trong thời gian đã được chứng nhận (EI 30, EI 60, EI 90, EI 120, v.v.).</li>
</ul>
`,
    code: 'EI-DC',
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
    details: `

<ul>
  <li><strong>Thân van và lá van:</strong> Làm từ tôn mạ kẽm hoặc inox, có độ dày và cấu trúc đặc biệt để chịu nhiệt cao.</li>
  <li><strong>Vật liệu cách nhiệt:</strong> Bên trong thân và/hoặc lá van được lót bằng các vật liệu cách nhiệt chuyên dụng (bông gốm, thạch cao chống cháy) để đảm bảo yếu tố “I” (cách nhiệt).</li>
</ul>

<p><strong>Ứng dụng:</strong> Van FD EI là thành phần không thể thiếu trong các hệ thống phòng cháy chữa cháy của:</p>

<ul>
  <li>Tòa nhà cao tầng: Chung cư, văn phòng, trung tâm thương mại.</li>
  <li>Bệnh viện, trường học: Nơi tập trung đông người và yêu cầu an toàn cao.</li>
  <li>Nhà máy, kho xưởng: Đặc biệt là những nơi chứa vật liệu dễ cháy.</li>
  <li>Trung tâm dữ liệu, phòng máy chủ: Bảo vệ thiết bị nhạy cảm.</li>
</ul>

<p><strong>Vị trí lắp đặt phổ biến:</strong></p>
<ul>
  <li>Đường ống gió xuyên qua các bức tường, sàn ngăn cháy.</li>
  <li>Kết nối giữa các khoang cháy khác nhau.</li>
  <li>Tại các nhánh ống gió từ trục chính vào các khu vực riêng biệt.</li>
</ul>
`,

    specifications: `

<ul>
  <li><strong>Kích hoạt:</strong> Cầu chì nhiệt nóng chảy (đối với loại cơ) hoặc cảm biến nhiệt/tín hiệu từ hệ thống báo cháy kích hoạt động cơ (đối với loại có động cơ).</li>
  <li><strong>Đóng van:</strong> Lá van tự động đóng kín hoàn toàn, tạo thành rào chắn chống lửa và khói.</li>
  <li><strong>Duy trì EI:</strong> Nhờ cấu tạo và vật liệu đặc biệt, van duy trì được tính toàn vẹn (ngăn lửa, khói) và tính cách nhiệt (giữ nhiệt độ bề mặt thấp) trong thời gian chứng nhận (EI 60, EI 120,...).</li>
</ul>

<h3>Vai trò &amp; Lợi ích</h3>
<ul>
  <li><strong>An toàn con người và tài sản:</strong> Ngăn chặn lửa, khói lan rộng, kéo dài thời gian sơ tán và hỗ trợ lực lượng chữa cháy.</li>
  <li><strong>Tuân thủ quy định PCCC:</strong> Bắt buộc theo tiêu chuẩn phòng cháy chữa cháy Việt Nam và quốc tế.</li>
  <li><strong>Bảo vệ kết cấu công trình:</strong> Hạn chế tác động của lửa đến các cấu trúc quan trọng.</li>
  <li><strong>Tăng hiệu quả hệ thống PCCC tổng thể:</strong> Hoạt động như một “điểm chặn” giúp các hệ thống khác phát huy hiệu quả tối đa.</li>
</ul>


`,
  },
  {
    id: 'p-026',
    name: 'Chụp che mưa',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/chup-che-mua.png',
    slug: 'chup-che-mua',
    description:
      'Chụp che mưa, hay còn gọi là mũ che mưa, chụp chắn mưa, hoặc louver chắn mưa (nếu có các nan), là một thiết bị được lắp đặt ở đầu cuối của đường ống thông gió, hệ thống hút mùi, hoặc các lỗ thoát khí ra ngoài trời. Chức năng chính của nó là ngăn chặn nước mưa, bụi bẩn, và côn trùng xâm nhập vào hệ thống bên trong trong khi vẫn cho phép không khí lưu thông.',
    code: 'PK-BT',
    details: `
<h3>Vật liệu</h3>

<ul>
  <li><strong>Inox (Thép không gỉ):</strong> Độ bền cực cao, chống gỉ sét tuyệt vời, chịu được mọi điều kiện thời tiết khắc nghiệt, và giữ được vẻ sáng bóng. Thường sử dụng Inox 304 hoặc 201.</li>
  <li><strong>Nhôm:</strong> Nhẹ, chống ăn mòn tốt, có thể sơn tĩnh điện với nhiều màu sắc để phù hợp kiến trúc.</li>
  <li><strong>Thép mạ kẽm:</strong> Kinh tế, cần được sơn phủ để chống gỉ tốt hơn khi đặt ngoài trời.</li>
</ul>

<h3>Ứng dụng của chụp che mưa</h3>

<ul>
  <li><strong>Hệ thống thông gió:</strong> Lắp tại đầu ra của quạt thông gió công nghiệp, quạt hút mùi bếp, hệ thống thông gió tòa nhà.</li>
  <li><strong>Hệ thống điều hòa không khí:</strong> Bảo vệ miệng lấy gió tươi hoặc thải gió của các hệ thống HVAC lớn.</li>
  <li><strong>Ống thoát khí:</strong> Dành cho máy nước nóng, máy sấy, hoặc thiết bị tạo nhiệt.</li>
  <li><strong>Ống thoát khói:</strong> Một số loại chụp chuyên dụng có thể dùng cho ống thoát khói.</li>
  <li><strong>Các lỗ thông hơi khác:</strong> Trên mái hoặc tường nhà, giúp lưu thông không khí tự nhiên mà vẫn ngăn mưa gió.</li>
</ul>
`,

    specifications: `
<h3>Thiết kế</h3>

<ul>
  <li><strong>Dạng hình nón/mũ:</strong> Phổ biến nhất, có dạng như mũ hoặc nón úp ngược, giúp nước mưa trượt xuống mà không lọt vào ống.</li>
  <li><strong>Dạng nan chớp (Louver):</strong> Gồm các nan nghiêng (thường là nan Z), cho phép không khí lưu thông nhưng ngăn nước mưa hắt vào hiệu quả.</li>
  <li><strong>Dạng hộp:</strong> Ít phổ biến hơn, thường dùng cho lỗ thông lớn hoặc khi cần tính thẩm mỹ riêng.</li>
  <li><strong>Kích thước:</strong> Đa dạng, tùy thuộc đường kính ống gió hoặc kích thước lỗ thông hơi.</li>
  <li><strong>Phụ kiện đi kèm:</strong> Thường có lưới chắn côn trùng (inox hoặc nhôm) bên trong để ngăn vật nhỏ xâm nhập.</li>
</ul>


`,
  },
  {
    id: 'p-027',
    name: 'Chụp thông hơi',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/chup-thong-hoi.png',
    slug: 'chup-thong-hoi',
    description:
      'Chụp thông hơi, còn được gọi là Vent Cap, là một thành phần quan trọng trong hệ thống thông gió và điều hòa không khí. Nó được sử dụng để lưu thông không khí giữa bên trong và bên ngoài của một không gian, giúp loại bỏ mùi hôi, ẩm mốc và vi khuẩn, đồng thời cung cấp không khí tươi.',
    code: 'PK-BT',
    details: `
<h3>Ứng dụng của chụp thông hơi</h3>

<ul>
  <li><strong>Nhà ở:</strong> Dùng để thông gió cho phòng bếp, phòng tắm, nhà vệ sinh và các khu vực kín khác.</li>
  <li><strong>Tòa nhà thương mại:</strong> Sử dụng trong văn phòng, trung tâm thương mại để đảm bảo lưu thông không khí.</li>
  <li><strong>Nhà máy:</strong> Là thành phần quan trọng trong hệ thống thông gió công nghiệp, giúp duy trì môi trường làm việc an toàn và thoáng mát.</li>
</ul>
`,

    specifications: `
<h3>Chức năng chính</h3>

<ul>
  <li><strong>Thông gió:</strong> Tạo sự lưu thông không khí tự nhiên, giúp không gian bên trong luôn thông thoáng.</li>
  <li><strong>Chống nước:</strong> Thiết kế dạng chụp hình cầu giúp ngăn nước mưa xâm nhập vào hệ thống thông gió.</li>
  <li><strong>Ngăn côn trùng:</strong> Một số loại có lưới bảo vệ để ngăn chuột, bọ và côn trùng khác xâm nhập.</li>
</ul>
`,
  },
  {
    id: 'p-028',
    name: 'Cửa gió bầu dục',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-bau-duc.png',
    slug: 'cua-gio-bau-duc',
    description:
      'Cửa gió bầu dục, còn được gọi là Vent Cap, là một thành phần quan trọng trong hệ thống thông gió và điều hòa không khí. Nó được sử dụng để lưu thông không khí giữa bên trong và bên ngoài của một không gian, giúp loại bỏ mùi hôi, ẩm mốc và vi khuẩn, đồng thời cung cấp không khí tươi.',
    code: 'PK-BT',
    details: `
<ul>
  <li><strong>Nhà ở:</strong> Dùng để thông gió cho phòng bếp, phòng tắm, nhà vệ sinh và các khu vực kín khác.</li>
  <li><strong>Tòa nhà thương mại:</strong> Sử dụng trong văn phòng, trung tâm thương mại để đảm bảo lưu thông không khí.</li>
  <li><strong>Nhà máy:</strong> Là thành phần quan trọng trong hệ thống thông gió công nghiệp, giúp duy trì môi trường làm việc an toàn và thoáng mát.</li>
</ul>
`,

    specifications: `
<ul>
  <li><strong>Thông gió:</strong> Tạo sự lưu thông không khí tự nhiên, giúp không gian bên trong luôn thông thoáng.</li>
  <li><strong>Chống nước:</strong> Thiết kế dạng chụp hình cầu giúp ngăn nước mưa xâm nhập vào hệ thống thông gió.</li>
  <li><strong>Ngăn côn trùng:</strong> Một số loại có lưới bảo vệ để ngăn chuột, bọ và côn trùng khác xâm nhập.</li>
</ul>
`,
  },
  {
    id: 'p-029',
    name: 'Cửa gió khe hẹp',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-khe-hep.png',
    slug: 'cua-gio-khe-hep',
    description:
      'Cửa gió khe hẹp, còn được gọi là cửa gió Linear hay Slot Linear Diffuser, là một loại cửa gió được thiết kế với các khe hẹp dài và song song. Chúng chuyên dùng để cấp hoặc hồi không khí trong các hệ thống điều hòa, thông gió.',
    details: `
<h3>Thông tin cơ bản</h3>

<p><strong>Cửa gió khe hẹp</strong> được chế tạo từ <strong>nhôm định hình chất lượng cao</strong> (A6063-T5) với độ dày từ <strong>1.0mm đến 3.0mm</strong> cho phần cánh và khoảng <strong>1.2mm</strong> cho phần khung. Bề mặt sản phẩm thường được <strong>sơn tĩnh điện</strong> theo màu yêu cầu, phổ biến là <strong>trắng RAL 9010 hoặc RAL 9016</strong>.</p>

<p><strong>Ứng dụng rộng rãi</strong> trong các công trình yêu cầu cao về kỹ thuật và thẩm mỹ:</p>
<ul>
  <li><strong>Không gian thương mại:</strong> Trung tâm thương mại, cửa hàng, showroom lớn.</li>
  <li><strong>Khách sạn & khu nghỉ dưỡng:</strong> Sảnh, phòng họp, phòng nghỉ cao cấp.</li>
  <li><strong>Văn phòng:</strong> Phòng làm việc hiện đại, phòng họp kín.</li>
  <li><strong>Dân dụng:</strong> Biệt thự, căn hộ cao cấp.</li>
  <li><strong>Công trình công cộng:</strong> Sân bay, hội trường, trung tâm hội nghị.</li>
</ul>
`,

    specifications: `

<ul>
  <li><strong>Thiết kế hiện đại:</strong> Dáng khe hẹp, thanh mảnh, tinh tế, có thể uốn cong hoặc lắp nối tiếp để tạo đường gió liên tục theo thiết kế kiến trúc.</li>
  <li><strong>Cấu tạo:</strong> Gồm khung bao và các thanh nhôm khe hẹp. Bên trong có thể tích hợp <strong>cánh nan bầu dục hoặc nan chữ T</strong>, điều chỉnh hướng và lưu lượng gió linh hoạt.</li>
  <li><strong>Phụ kiện đi kèm:</strong> Van OBD điều tiết lưu lượng, có thể gắn thêm <strong>lưới lọc bụi</strong> tùy chọn.</li>
  <li><strong>Tính thẩm mỹ cao:</strong> Phù hợp với các không gian cao cấp, mang lại vẻ hiện đại và sang trọng.</li>
  <li><strong>Phân phối gió hiệu quả:</strong> Tạo luồng gió tuyến tính, tỏa đều, mang lại cảm giác dễ chịu cho người sử dụng.</li>
  <li><strong>Lắp đặt linh hoạt:</strong> Có thể gắn trên trần, tường hoặc vách giật cấp, phù hợp với nhiều kiểu thiết kế nội thất.</li>
  <li><strong>Điều chỉnh thông minh:</strong> Cánh nan có thể xoay 360° ngang và lệch 35° dọc, giúp điều chỉnh hướng và lưu lượng chính xác.</li>
  <li><strong>Tiết kiệm năng lượng:</strong> Phân phối gió hợp lý, giảm thất thoát nhiệt, tăng hiệu quả điều hòa không khí.</li>
</ul>

<p style="text-align:center;">
  <img src="https://eusteel.vn/wp-content/uploads/2025/06/b2e20c75ae54516d8397f47955a8ca322e45fe60.png" alt="Cửa gió khe hẹp" width="600" height="849">
</p>
`,
  },
  {
    id: 'p-030',
    name: 'Cửa gió khuếch tán tròn',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-khuech-tan-tron.png',
    slug: 'cua-gio-khuech-tan-tron',
    description:
      'Cửa khuếch tán tròn (hay còn gọi là diffuser tròn) là một thiết bị đầu cuối của hệ thống ống gió, có hình dạng tròn, dùng để phân phối không khí đã được xử lý (làm mát, sưởi ấm, hoặc gió tươi) vào không gian hoặc thu hồi không khí từ không gian ra ngoài. Mặc dù chức năng tương tự cửa khuếch tán vuông, nhưng thiết kế tròn mang lại những đặc điểm và ưu điểm riêng.',
    details: `
<h3>Thông tin cơ bản</h3>

<p><strong>Cửa khuếch tán gió tròn</strong> được sản xuất chủ yếu từ <strong>nhôm định hình</strong> chất lượng cao, mang lại độ bền và thẩm mỹ vượt trội.  
Ngoài ra, có thể sử dụng <strong>inox</strong> cho các ứng dụng đặc biệt yêu cầu chống ăn mòn cao hoặc <strong>nhựa ABS</strong> cho các khu vực yêu cầu nhẹ, tiết kiệm chi phí.</p>

<p><strong>Bề mặt hoàn thiện:</strong> Thường được <strong>sơn tĩnh điện màu trắng sứ</strong> hoặc các màu khác theo yêu cầu, đảm bảo đồng bộ với kiến trúc và nội thất của công trình.</p>
`,

    specifications: `


<ul>
  <li><strong>Khung:</strong> Là phần viền ngoài, dạng tròn, làm từ nhôm định hình cao cấp, đảm bảo độ cứng và độ bền lâu dài.</li>
  <li><strong>Lõi/Nan:</strong> Bộ phận chính giúp định hướng và khuếch tán gió. Các nan được sắp xếp <strong>đồng tâm</strong> hoặc theo dạng <strong>lá chớp (louver)</strong> để tạo luồng gió xoáy hoặc phân tán đều.</li>
  <li><strong>Tính thẩm mỹ cao:</strong> Thiết kế hình tròn mềm mại, hiện đại, phù hợp với không gian nghệ thuật, trần cong hoặc các công trình kiến trúc cao cấp.</li>
  <li><strong>Phân phối gió hiệu quả:</strong> Tạo luồng gió tỏa đều, giúp điều hòa không khí nhanh chóng và dễ chịu hơn.</li>
  <li><strong>Dễ lắp đặt & bảo trì:</strong> Lõi có thể tháo rời tương tự cửa gió vuông, thuận tiện cho việc vệ sinh và bảo dưỡng.</li>
  <li><strong>Đa dạng mẫu mã & kích thước:</strong> Có nhiều đường kính và kiểu nan khác nhau, đáp ứng các yêu cầu thiết kế và kỹ thuật cụ thể của từng dự án.</li>
</ul>
`,
  },
  {
    id: 'p-031',
    name: 'Cửa gió khuếch tán vuông',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-khuech-tan-vuong.png',
    slug: 'cua-gio-khuech-tan-vuong',
    description:
      'Cửa khuếch tán gió vuông là một loại cửa gió có hình dạng vuông hoặc chữ nhật, được lắp đặt ở đầu các đường ống gió để phân tán luồng không khí đã được điều hòa (làm mát hoặc sưởi ấm) hoặc không khí tươi vào không gian. Cửa khuếch tán gió vuông là một trong những loại cửa gió phổ biến nhất trong các hệ thống thông gió, điều hòa không khí hiện đại. Chúng được thiết kế để phân phối không khí đều khắp không gian, đảm bảo sự thoải mái và hiệu quả năng lượng.',
    details: `
<h3>Thông tin cơ bản</h3>

<p><strong>Cửa gió vuông</strong> thường được sản xuất từ <strong>nhôm định hình</strong> — loại vật liệu phổ biến nhờ đặc tính <strong>nhẹ, bền, chống gỉ sét</strong> và <strong>dễ gia công</strong>.  
Ngoài ra, một số mẫu có thể được chế tạo bằng <strong>inox</strong> (dành cho môi trường đặc biệt như phòng sạch, nhà máy hóa chất) hoặc <strong>nhựa ABS</strong> (cho các ứng dụng nhẹ, ít phổ biến hơn ở kích thước lớn).</p>

<p><strong>Bề mặt hoàn thiện:</strong> Được <strong>sơn tĩnh điện</strong> màu <strong>trắng sứ (RAL 9010/9016)</strong> hoặc các màu khác theo yêu cầu của khách hàng, giúp tăng tính thẩm mỹ và độ bền cho sản phẩm, đồng thời đảm bảo đồng bộ với kiến trúc nội thất.</p>
`,

    specifications: `


<ul>
  <li><strong>Khung:</strong> Là phần bao ngoài, làm từ <strong>nhôm định hình cao cấp mác A6063T5</strong> với độ dày <strong>0.85mm – 1.2mm</strong>.  
  Khung có <strong>gân tăng cứng</strong> và <strong>ke góc</strong> giúp đảm bảo độ chắc chắn và thẩm mỹ cao.</li>

  <li><strong>Lõi/Nan:</strong> Gồm các <strong>lá nhôm</strong> được sắp xếp theo <strong>dạng đồng tâm hoặc chữ X</strong> để điều hướng và khuếch tán luồng gió.  
  Lõi có thể <strong>tháo rời</strong> khỏi khung, thuận tiện cho <strong>lắp đặt, bảo trì và vệ sinh.</strong></li>

  <li><strong>Khả năng khuếch tán gió tốt:</strong> Phân phối luồng gió <strong>đều và rộng</strong> khắp không gian, đặc biệt là theo <strong>4 hướng</strong>.</li>

  <li><strong>Tính thẩm mỹ cao:</strong> Thiết kế <strong>đơn giản, hiện đại</strong>, dễ dàng hòa hợp với nhiều loại trần (thạch cao, trần giả, v.v.).</li>

  <li><strong>Dễ lắp đặt & bảo trì:</strong> Cấu trúc <strong>khung – lõi tách rời</strong> giúp việc tháo lắp và vệ sinh nhanh chóng.</li>

  <li><strong>Đa dạng kích thước:</strong> Sản xuất theo nhiều kích thước tiêu chuẩn hoặc <strong>tùy chỉnh theo yêu cầu công trình.</strong></li>

  <li><strong>Ứng dụng linh hoạt:</strong> Có thể sử dụng làm <strong>cửa cấp gió</strong> hoặc <strong>cửa hồi gió</strong> trong hệ thống thông gió điều hòa không khí.</li>
</ul>
`,
  },
  {
    id: 'p-032',
    name: 'Cửa gió nan T',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-nan-t.png',
    slug: 'cua-gio-nan-t',
    description:
      'Cửa gió nan T, hay còn gọi là cửa gió nan thẳng hoặc cửa gió T-Bar, là một loại cửa gió phổ biến với thiết kế đơn giản, gồm các nan (cánh) có mặt cắt hình chữ T và được xếp song song. Loại cửa gió này được ưa chuộng nhờ hiệu suất phân phối gió tốt và tính kinh tế.',
    details: `

<p><strong>Vật liệu:</strong> Cửa gió nan T thường được chế tạo từ <strong>nhôm định hình chất lượng cao</strong> (như nhôm <strong>A6063-T5</strong>), hoặc trong một số trường hợp đặc biệt là <strong>thép mạ kẽm</strong>.  
Nhôm được ưu tiên do đặc tính <strong>nhẹ, bền, chống ăn mòn</strong> và <strong>dễ gia công</strong>.</p>

<p><strong>Hoàn thiện bề mặt:</strong> Bề mặt cửa được xử lý bằng <strong>công nghệ sơn tĩnh điện hiện đại</strong>, phổ biến nhất là màu <strong>trắng sứ</strong>.  
Lớp sơn này không chỉ <strong>tăng tính thẩm mỹ</strong> mà còn <strong>bảo vệ bề mặt khỏi ăn mòn, trầy xước và bạc màu</strong>.</p>

<p><strong>Ứng dụng:</strong> Cửa gió nan T được sử dụng rộng rãi trong nhiều công trình dân dụng và công nghiệp nhờ tính linh hoạt, độ bền và hiệu suất cao:</p>

<ul>
  <li><strong>Văn phòng làm việc:</strong> Duy trì không khí trong lành, tạo môi trường làm việc thoải mái.</li>
  <li><strong>Trường học, bệnh viện:</strong> Đảm bảo thông gió hiệu quả, đáp ứng tiêu chuẩn không khí cho không gian công cộng.</li>
  <li><strong>Nhà xưởng, nhà máy:</strong> Cấp hoặc hồi gió trong khu vực sản xuất, nơi yêu cầu lưu lượng khí lớn.</li>
  <li><strong>Trung tâm thương mại, siêu thị:</strong> Phù hợp cho khu vực hành lang, không gian chung.</li>
  <li><strong>Cửa hàng, showroom:</strong> Cung cấp gió ổn định cho khu trưng bày sản phẩm.</li>
  <li><strong>Nhà ở dân dụng:</strong> Dùng trong các căn hộ hoặc biệt thự để đảm bảo luồng không khí lưu thông tốt.</li>
</ul>
`,

    specifications: `

<ul>
  <li><strong>Thiết kế nan T:</strong> Các nan có hình chữ T được sắp xếp thẳng hàng, song song, tạo ra các khe hở đều nhau giúp <strong>phân phối không khí đồng đều</strong>.</li>

  <li><strong>Cấu tạo:</strong>
    <ul>
      <li><strong>Khung bao ngoài:</strong> Chắc chắn, kết nối trực tiếp với hệ thống ống gió hoặc tường/trần.</li>
      <li><strong>Các nan chữ T:</strong> Có thể là loại <strong>cố định</strong> hoặc <strong>điều chỉnh góc</strong> tùy theo yêu cầu thiết kế.</li>
      <li><strong>Phụ kiện:</strong> Có thể tích hợp <strong>van điều tiết lưu lượng (OBD)</strong> và <strong>lưới lọc bụi</strong> nếu cần.</li>
    </ul>
  </li>

  <li><strong>Phân phối gió hiệu quả:</strong> Các nan thẳng giúp tạo luồng khí <strong>ổn định và đồng đều</strong>.  
  Một số mẫu cho phép <strong>điều chỉnh hướng gió</strong> để phù hợp với từng không gian sử dụng.</li>

  <li><strong>Giá thành hợp lý:</strong> Cửa gió nan T có chi phí sản xuất thấp hơn các loại nan cong hoặc khe hẹp, giúp <strong>tối ưu chi phí cho dự án</strong>.</li>

  <li><strong>Dễ lắp đặt & bảo trì:</strong> Cấu trúc đơn giản giúp <strong>lắp nhanh</strong>, <strong>dễ vệ sinh</strong> và giảm chi phí bảo trì.</li>

  <li><strong>Độ bền cao:</strong> Nhờ vật liệu <strong>nhôm cao cấp</strong> và lớp <strong>sơn tĩnh điện</strong> bảo vệ, cửa gió nan T có khả năng <strong>chống oxy hóa, chịu tác động môi trường tốt</strong> và tuổi thọ lâu dài.</li>

  <li><strong>Tính linh hoạt:</strong> Có thể dùng cho cả <strong>cấp gió</strong> và <strong>hồi gió</strong> trong hệ thống thông gió.</li>
</ul>
`,
  },
  {
    id: 'p-033',
    name: 'Cửa gió nan Z',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-nan-z.png',
    slug: 'cua-gio-nan-z',
    description:
      'Cửa gió nan Z, còn được gọi là cửa gió Louver hay cửa lấy gió tươi ngoài trời, là một loại cửa gió đặc biệt được thiết kế với các nan (cánh) có biên dạng hình chữ Z. Thiết kế này giúp cửa gió có khả năng chắn nước mưa hiệu quả, đồng thời vẫn đảm bảo lưu thông không khí.',
    details: `

<p><strong>Vật liệu:</strong> Cửa gió nan Z được sản xuất từ <strong>nhôm định hình chất lượng cao</strong> (thường là nhôm <strong>A6063-T5</strong>),  
với độ dày trung bình <strong>1.0mm – 1.2mm</strong> cho khung và <strong>1.0mm</strong> cho nan.</p>

<p><strong>Ứng dụng:</strong> Cửa gió nan Z được sử dụng rộng rãi trong các công trình dân dụng và công nghiệp, đặc biệt ở các vị trí yêu cầu <strong>chống mưa</strong> và <strong>lấy gió tự nhiên</strong>:</p>

<ul>
  <li><strong>Lấy gió tươi ngoài trời:</strong> Đưa không khí trong lành từ bên ngoài vào tòa nhà, văn phòng, nhà xưởng.</li>
  <li><strong>Thải gió:</strong> Dẫn khí bẩn, mùi hôi từ bên trong ra ngoài môi trường.</li>
  <li><strong>Hệ thống thông gió công nghiệp & dân dụng:</strong> Ứng dụng trong nhà máy, trung tâm thương mại, chung cư, biệt thự.</li>
  <li><strong>Vách ngăn, cửa sổ, giếng trời:</strong> Ngoài chức năng kỹ thuật, cửa gió nan Z còn được dùng như yếu tố <strong>kiến trúc thẩm mỹ</strong>, giúp công trình thông thoáng và hiện đại.</li>
</ul>
`,

    specifications: `


<ul>
  <li><strong>Thiết kế nan Z:</strong> Các nan được xếp song song theo dạng chữ Z nghiêng khoảng <strong>45°</strong>, tạo thành <strong>chớp thông gió</strong> có khả năng chống hắt nước mưa và bảo vệ hệ thống bên trong.</li>

  <li><strong>Hoàn thiện bề mặt:</strong> Sơn tĩnh điện công nghệ cao (thường nhập khẩu từ <strong>Hàn Quốc, Nhật Bản</strong>) với màu sắc tùy chọn, phổ biến là <strong>trắng sứ</strong>.  
  Lớp sơn này giúp tăng độ bền, chống ăn mòn, bong tróc và phai màu — phù hợp với môi trường ngoài trời.</li>

  <li><strong>Cấu tạo khung:</strong> Gồm khung bao ngoài chắc chắn và các nan Z cố định bằng vít tán. Có thể thiết kế <strong>1 khung hoặc 2 khung</strong> tùy theo nhu cầu sử dụng.</li>

  <li><strong>Phụ kiện đi kèm:</strong> 
    <ul>
      <li><strong>Lưới chắn côn trùng:</strong> Nhôm hoặc inox 304.</li>
      <li><strong>Lưới lọc bụi</strong> hoặc <strong>hộp gió</strong> (tùy chọn theo hệ thống).</li>
    </ul>
  </li>

  <li><strong>Khả năng chắn mưa vượt trội:</strong> Thiết kế nan Z giúp ngăn nước mưa cuốn vào hệ thống, lý tưởng cho lắp đặt ngoài trời.</li>

  <li><strong>Thông gió hiệu quả:</strong> Cung cấp luồng không khí tươi, đẩy khí thải và bụi bẩn ra ngoài, đảm bảo môi trường trong lành.</li>

  <li><strong>Tính thẩm mỹ cao:</strong> Đường nét mạch lạc, khung chắc chắn và lớp sơn tĩnh điện mang lại vẻ ngoài <strong>hiện đại, tinh tế</strong>.</li>

  <li><strong>Độ bền cao:</strong> Vật liệu nhôm cao cấp chống oxy hóa, ăn mòn và chịu tốt tác động thời tiết khắc nghiệt.</li>

  <li><strong>Linh hoạt trong lắp đặt:</strong> Có thể gắn <strong>trên tường, vách giật cấp, hoặc trực tiếp vào ống gió</strong>.</li>

  <li><strong>Dễ dàng bảo trì:</strong> Cấu trúc đơn giản giúp <strong>dễ thi công, vệ sinh và sửa chữa</strong>.</li>

  <li><strong>Kiểm soát luồng gió:</strong> Một số mẫu có thể <strong>điều chỉnh góc nan</strong> để phù hợp với hướng gió và yêu cầu sử dụng.</li>
</ul>
`,
  },
  {
    id: 'p-034',
    name: 'Cửa gió sọt trứng',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-gio-sot-trung.png',
    slug: 'cua-gio-sot-trung',
    description:
      'Cửa gió sọt trứng (Egg Crate Diffuser) có lưới các ô vuông nhỏ đều, giúp phân phối gió đồng đều và hiệu quả cho nhiều không gian.',
    details: `
    <div class="tab-content">
      <div id="tab1" class="tab-pane active">
        <p style="text-align: left;"><span data-sheets-root="1">Vật liệu: Thường được sản xuất từ nhôm định hình chất lượng cao (nhôm A6063-T5) hoặc đôi khi là thép mạ kẽm.<br>
Hoàn thiện bề mặt: Bề mặt được sơn tĩnh điện với nhiều màu sắc khác nhau, phổ biến nhất là màu trắng sứ (RAL 9010/9016), giúp tăng tính thẩm mỹ và độ bền cho sản phẩm.</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Cửa gió sọt trứng được sử dụng rộng rãi trong nhiều loại công trình khác nhau, đặc biệt là những nơi cần sự thông thoáng tốt và phân phối gió đều:</span></p>
<p style="text-align: left;">Các trung tâm thương mại, siêu thị: Nơi có diện tích rộng và cần lượng gió lớn.<br>
Văn phòng làm việc: Đảm bảo không khí trong lành, dễ chịu cho nhân viên.<br>
Bệnh viện, phòng sạch: Yêu cầu về môi trường sạch sẽ và phân phối khí đều.<br>
Nhà xưởng, nhà máy sản xuất: Cần thông gió mạnh để loại bỏ nhiệt và các chất ô nhiễm.<br>
Trường học, thư viện, nhà thi đấu: Nơi tập trung đông người và cần không khí lưu thông tốt.</p>
      </div>
      <div id="tab2" class="tab-pane">
        <p style="text-align: left;"><span data-sheets-root="1">Thiết kế lưới sọt trứng: Điểm nổi bật nhất của cửa gió này là phần lưới bên trong được cấu tạo từ các ô vuông nhỏ, đều đặn, tạo nên một bề mặt giống như sọt trứng.Cấu tạo:<br>
Khung bao ngoài: Tạo sự chắc chắn và điểm kết nối với hệ thống đường ống gió hoặc trần nhà.<br>
Lưới sọt trứng: Là phần chính, có các ô vuông kích thước phổ biến là 12.7×12.7×12.7 mm, 15×15×15 mm, 20×20×20 mm. Các nan lưới có thể tháo rời để vệ sinh hoặc lắp đặt dễ dàng.<br>
Phụ kiện đi kèm: Thường được lắp đặt cùng với van điều tiết lưu lượng gió (OBD) và có thể có lưới lọc bụi.<br>
</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Phân phối gió đồng đều: Thiết kế lưới sọt trứng giúp tạo ra luồng không khí được phân tán đều khắp không gian, tránh tình trạng gió thổi tập trung gây khó chịu.<br>
Lưu lượng gió lớn: Với diện tích thông thoáng tương đối lớn, cửa gió sọt trứng cho phép một lượng lớn không khí đi qua, phù hợp cho những không gian cần thông gió mạnh.<br>
Chống bám bụi và dễ vệ sinh: Các ô vuông lớn hơn so với một số loại cửa gió khác giúp giảm khả năng bám bụi và việc vệ sinh lưới trở nên dễ dàng hơn. Phần lưới có thể tháo rời là một lợi thế lớn cho việc bảo trì.<br>
Tính thẩm mỹ: Thiết kế đơn giản, hiện đại và tinh tế, dễ dàng hòa hợp với nhiều không gian kiến trúc.<br>
Linh hoạt trong lắp đặt: Có thể gắn trên trần nhà (trần thạch cao, trần nhôm), trên tường hoặc vách giật cấp.<br>
Độ bền cao: Được làm từ vật liệu chất lượng cao và sơn tĩnh điện, cửa gió sọt trứng có khả năng chống ăn mòn và chịu được điều kiện môi trường.</span></p>
      </div>
   
    </div>
  `,
    specifications: `
    <ul>
      <li>Chất liệu: Nhôm định hình cao cấp (A6063-T5) hoặc thép mạ kẽm</li>
      <li>Màu sắc: Trắng sứ (RAL 9010/9016) hoặc theo yêu cầu</li>
      <li>Kích thước ô lưới: 12.7×12.7×12.7 mm, 15×15×15 mm, 20×20×20 mm</li>
      <li>Kiểu dáng: Lưới sọt trứng vuông đều</li>
      <li>Ứng dụng: Cửa cấp gió, cửa hồi gió trong trung tâm thương mại, văn phòng, nhà máy, bệnh viện</li>
      <li>Phụ kiện: Có thể lắp kèm van OBD và lưới lọc bụi</li>
      <li>Bề mặt: Sơn tĩnh điện chống gỉ, bền màu, thẩm mỹ cao</li>
      <li>Đặc điểm nổi bật: Phân phối gió đều, lưu lượng lớn, dễ vệ sinh, độ bền cao</li>
    </ul>
  `,
  },
  {
    id: 'p-035',
    name: 'Cửa nan cong',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-nan-cong.png',
    slug: 'cua-nan-cong',
    description:
      'Cửa gió nan cong (Curved Blade Diffuser) với các nan uốn cong, điều hướng gió linh hoạt và thẩm mỹ cao, phù hợp nhiều không gian hiện đại.',
    details: `
    <div class="tab-content">
      <div id="tab1" class="tab-pane active">
        <p style="text-align: left;"><span data-sheets-root="1">Vật liệu: Thường được làm từ nhôm định hình chất lượng cao (như nhôm A6063-T5), có độ dày từ 0.8mm đến 1.2mm cho khung và 0.8mm cho nan. Nhôm là vật liệu nhẹ, bền và chống ăn mòn tốt.<br>
Hoàn thiện bề mặt: Bề mặt được sơn tĩnh điện với nhiều màu sắc khác nhau, phổ biến nhất là màu trắng sứ (RAL 9010/9016), giúp tăng độ bền, chống oxy hóa, trầy xước và mang lại vẻ ngoài sang trọng.</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Cửa gió nan cong được sử dụng rộng rãi trong các công trình đòi hỏi cả tính năng kỹ thuật và yếu tố thẩm mỹ cao, bao gồm:</span></p>
<p style="text-align: left;">Văn phòng làm việc hiện đại: Tạo không gian thông thoáng, thoải mái và chuyên nghiệp.<br>
Khách sạn, trung tâm thương mại: Nâng cao vẻ đẹp kiến trúc và đảm bảo không khí dễ chịu cho khách hàng.<br>
Căn hộ cao cấp, biệt thự: Phù hợp với nội thất sang trọng và yêu cầu cao về thẩm mỹ.<br>
Phòng họp, hội trường: Đảm bảo phân phối gió đều và êm ái cho không gian lớn.<br>
Các không gian kiến trúc đặc biệt: Nơi mà thiết kế cửa gió cần hòa hợp với tổng thể nội thất.</p>
      </div>
      <div id="tab2" class="tab-pane">
        <p style="text-align: left;"><span data-sheets-root="1">Thiết kế nan cong: Điểm đặc trưng nhất là các nan gió được uốn cong một cách tinh tế. Hình dạng cong này không chỉ tạo điểm nhấn về mặt thẩm mỹ mà còn tối ưu hóa khả năng điều hướng luồng không khí.<br>
Cấu tạo:<br>
Khung bao ngoài: Đảm bảo độ chắc chắn và dễ dàng lắp đặt vào đường ống gió hoặc trần/tường.<br>
Các nan gió cong: Được xếp song song và cố định vào khung. Các nan này có thể là nan cố định hoặc nan điều chỉnh được, tùy thuộc vào yêu cầu của hệ thống.<br>
Phụ kiện đi kèm: Thường được lắp đặt cùng với van điều tiết lưu lượng gió (OBD) và có thể có lưới lọc bụi.</span></p>
        <p style="text-align: left;"><span data-sheets-root="1">Điều hướng gió linh hoạt: Thiết kế nan cong giúp luồng gió được phân tán theo nhiều hướng khác nhau, tạo ra sự phân bổ không khí tối ưu trong không gian. Điều này đặc biệt hữu ích trong việc loại bỏ các điểm "nóng" hoặc "lạnh".<br>
Tính thẩm mỹ cao: Với đường nét uốn lượn mềm mại và hiện đại, cửa gió nan cong mang lại vẻ đẹp tinh tế và sang trọng, phù hợp với các không gian kiến trúc đương đại.<br>
Độ bền cao: Được sản xuất từ nhôm định hình chất lượng cao và sơn tĩnh điện, cửa gió có khả năng chống ăn mòn, oxy hóa và chịu được tác động của môi trường.<br>
Phân phối gió êm ái: Luồng gió được điều hướng mượt mà, giúp giảm tiếng ồn và tạo cảm giác thoải mái cho người sử dụng.<br>
Linh hoạt trong lắp đặt: Có thể gắn trên trần nhà (trần thạch cao, trần nhôm), trên tường hoặc vách giật cấp, tùy thuộc vào thiết kế hệ thống và không gian.</span></p>
      </div>
  
    </div>
  `,
    specifications: `
    <ul>
      <li>Chất liệu: Nhôm định hình cao cấp (A6063-T5), độ dày khung 0.8–1.2mm, nan 0.8mm</li>
      <li>Màu sắc: Sơn tĩnh điện trắng sứ (RAL 9010/9016) hoặc màu tùy chọn</li>
      <li>Kiểu nan: Nan cong, có thể cố định hoặc điều chỉnh</li>
      <li>Ứng dụng: Văn phòng, khách sạn, trung tâm thương mại, biệt thự, hội trường</li>
      <li>Bề mặt: Sơn tĩnh điện chống oxy hóa, chống trầy xước, bền màu</li>
      <li>Phụ kiện: Có thể lắp kèm van OBD và lưới lọc bụi</li>
      <li>Đặc điểm nổi bật: Phân phối gió êm ái, điều hướng linh hoạt, thẩm mỹ cao, dễ lắp đặt</li>
    </ul>
  `,
  },
  {
    id: 'p-036',
    name: 'Cửa thổi gió',
    category: 'Cửa gió',
    price: 'Liên hệ',
    image: '/images/products/cua-thoi-gio.png',
    slug: 'cua-thoi-gio',
    description:
      'Cửa thổi gió chuyên dùng để thổi gió đi xa, rất phù hợp cho các không gian lớn và có trần cao.',
    details: `
    <div class="tab-content">
      <div id="tab1" class="tab-pane active">
        <p style="text-align: left;"><span data-sheets-root="1">Vật liệu: Thường được làm từ nhôm định hình, thép mạ kẽm hoặc nhựa ABS cao cấp, sau đó được sơn tĩnh điện để tăng độ bền và tính thẩm mỹ.</span></p>
        <p style="text-align: left;"><span data-sheets-root="1">Cửa gió Jet Nozzle được sử dụng đặc biệt hiệu quả trong các không gian lớn, có trần cao và yêu cầu khả năng cấp gió đi xa, bao gồm:</span></p>
        <p style="text-align: left;">Sân bay: Khu vực sảnh chờ, nhà ga.<br>
        Nhà hát, rạp chiếu phim, nhà thi đấu: Nơi có không gian rộng và trần cao.<br>
        Trung tâm triển lãm, hội nghị: Cung cấp không khí cho các khu vực rộng lớn.<br>
        Nhà máy, nhà xưởng công nghiệp: Đặc biệt là những khu vực có trần cao.<br>
        Ga tàu điện ngầm, nhà ga xe lửa: Thông gió cho các khu vực lớn và đông người.</p>
      </div>
      <div id="tab2" class="tab-pane">
        <p style="text-align: left;"><span data-sheets-root="1">Thiết kế: Có hình dạng tương tự như một vòi phun, với một phần côn thu hẹp về phía miệng thoát gió. Phần miệng có thể là hình tròn hoặc hình bầu dục. Có một vòng bích để bắt vít cố định vào đường ống hoặc hộp gió.<br>
        Cấu tạo:<br>
        Thân: Phần hình côn, giúp tập trung luồng khí.<br>
        Miệng phun: Nơi khí được thổi ra với vận tốc cao.<br>
        Bích lắp đặt: Vòng tròn phẳng có các lỗ để bắt vít vào vị trí.<br>
        Khả năng điều chỉnh: Nhiều loại Jet Nozzle có khả năng xoay hoặc nghiêng miệng phun để điều chỉnh hướng thổi của luồng gió trong một góc nhất định (ví dụ: 30∘ đến 45∘ theo mọi hướng).</span></p>
        <p style="text-align: left;"><span data-sheets-root="1">Thổi gió cực xa: Đây là ưu điểm nổi bật nhất. Thiết kế hình côn giúp tập trung luồng khí và tạo ra vận tốc thổi cao, cho phép gió đi được một khoảng cách rất xa trong không gian lớn.<br>
        Kiểm soát luồng gió chính xác: Khả năng điều chỉnh hướng thổi giúp tối ưu hóa việc phân phối không khí đến những khu vực cụ thể.<br>
        Phù hợp với không gian trần cao: Rất hiệu quả trong việc cấp khí cho các không gian có trần rất cao, nơi các loại cửa gió thông thường không thể đưa gió đến được khu vực sinh hoạt.<br>
        Giảm thiểu số lượng cửa gió: Do khả năng thổi xa, có thể giảm số lượng cửa gió cần thiết cho một không gian lớn, từ đó giảm chi phí lắp đặt và bảo trì.<br>
        Tính thẩm mỹ: Mặc dù chuyên dụng, nhưng thiết kế của Jet Nozzle cũng khá hiện đại và có thể hòa hợp với kiến trúc công nghiệp hoặc hiện đại.</span></p>
      </div>
   
    </div>
  `,
    specifications: `
    <ul>
      <li>Chất liệu: Nhôm định hình, thép mạ kẽm hoặc nhựa ABS cao cấp</li>
      <li>Bề mặt: Sơn tĩnh điện tăng độ bền, chống ăn mòn, thẩm mỹ cao</li>
      <li>Hình dạng: Dạng vòi phun (côn) với miệng tròn hoặc bầu dục</li>
      <li>Khả năng điều chỉnh: Có thể xoay hoặc nghiêng miệng phun (30°–45°)</li>
      <li>Ứng dụng: Sân bay, nhà hát, trung tâm hội nghị, nhà xưởng, ga tàu</li>
      <li>Ưu điểm: Thổi gió cực xa, kiểm soát hướng chính xác, phù hợp trần cao</li>
      <li>Lắp đặt: Gắn trực tiếp vào đường ống hoặc hộp gió bằng vòng bích bắt vít</li>
      <li>Thẩm mỹ: Thiết kế hiện đại, phù hợp không gian công nghiệp hoặc hiện đại</li>
    </ul>
  `,
  },
  {
    id: 'p-037',
    name: 'Van điều chỉnh gắn động cơ MD',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-dieu-chinh-gan-dong-co-md.png',
    slug: 'van-dieu-chinh-gan-dong-co-md',
    description:
      'Van động cơ (MD) là van gió trang bị động cơ điện (actuator) để tự động điều khiển đóng mở lá van theo tín hiệu từ hệ thống.',
    details: `<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;">Van động cơ về cơ bản có cấu tạo tương tự các loại van gió thông thường (như van VCD), nhưng có thêm bộ phận quan trọng là động cơ:</p>
    <p style="text-align: left;">
      Thân van: Phần khung chính của van, có thể là hình vuông, chữ nhật hoặc tròn, làm từ tôn mạ kẽm, inox.<br>
      Lá van (cánh van): Các tấm kim loại có thể xoay để điều chỉnh tiết diện thông gió.<br>
      Động cơ điều khiển (Actuator/Motor): Đây là bộ phận cốt lõi tạo nên \"van động cơ\". Động cơ này nhận tín hiệu điện (ví dụ: tín hiệu 0-10VDC, 4-20mA, hoặc tín hiệu đóng/mở ON/OFF) từ hệ thống điều khiển và chuyển động quay của nó thành chuyển động đóng/mở của lá van. Các thương hiệu động cơ phổ biến bao gồm Belimo, Honeywell, Siemens, v.v.<br>
      Trục van và bạc: Kết nối động cơ với lá van, đảm bảo chuyển động trơn tru.
    </p>
    <p style="text-align: left;">
      Điều khiển lưu lượng gió Zone/Vùng: Trong các tòa nhà lớn, hệ thống HVAC thường được chia thành nhiều khu vực (zones). Mỗi zone có thể có một van động cơ để điều chỉnh lưu lượng gió cấp, đảm bảo nhiệt độ và chất lượng không khí phù hợp với nhu cầu của từng khu vực.<br>
      Hệ thống khí tươi và khí thải: Điều khiển van động cơ để lấy khí tươi hoặc thải khí ra ngoài dựa trên chất lượng không khí bên trong hoặc lịch trình vận hành.<br>
      Hệ thống hòa trộn khí: Điều khiển tỷ lệ hòa trộn giữa khí tươi và khí hồi để tối ưu hóa hiệu suất năng lượng.<br>
      Kiểm soát áp suất phòng: Đặc biệt trong phòng sạch, phòng mổ, hoặc phòng thí nghiệm, van động cơ kết hợp với cảm biến áp suất để duy trì áp suất dương hoặc âm chính xác.
    </p>
  </div>
  <div id="tab3" class="tab-pane">
    <p><img class="alignnone size-full wp-image-283" src="https://eusteel.vn/wp-content/uploads/2025/06/b2e20c75ae54516d8397f47955a8ca322e45fe60.png" alt="" width="600" height="849"></p>
  </div>
</div>`,

    specifications: `<div class="tab-content">
  <div id="tab2" class="tab-pane active">
    <p style="text-align: left;">Nguyên lý hoạt động của van động cơ dựa trên sự điều khiển tự động:</p>
    <p style="text-align: left;">
      Nhận tín hiệu: Động cơ điều khiển nhận tín hiệu từ một bộ điều khiển trung tâm, chẳng hạn như hệ thống quản lý tòa nhà (BMS), bộ điều khiển nhiệt độ, hoặc cảm biến áp suất.<br>
      Chuyển động: Tùy thuộc vào loại tín hiệu và cài đặt, động cơ sẽ quay một góc nhất định, truyền động qua trục để mở hoặc đóng các lá van.<br>
      Loại ON/OFF: Động cơ chỉ có 2 trạng thái: mở hoàn toàn hoặc đóng hoàn toàn.<br>
      Loại điều khiển tỷ lệ (modulating): Động cơ có thể mở van theo nhiều mức độ khác nhau (ví dụ: 0%, 25%, 50%, 75%, 100%) tùy thuộc vào tín hiệu điều khiển, cho phép điều chỉnh lưu lượng gió chính xác hơn.<br>
      Phản hồi (tùy chọn): Một số động cơ có chức năng phản hồi (feedback) trạng thái của van về hệ thống điều khiển, cho biết van đang mở bao nhiêu phần trăm, giúp hệ thống giám sát và điều khiển chính xác hơn.
    </p>
    <p style="text-align: left;">
      Tự động hóa cao: Vận hành tự động hoàn toàn, không cần can thiệp thủ công, giảm thiểu sức người và lỗi vận hành.<br>
      Điều khiển chính xác: Đặc biệt với các loại động cơ điều khiển tỷ lệ, cho phép điều chỉnh lưu lượng gió một cách cực kỳ chính xác, đáp ứng đúng nhu cầu.<br>
      Tiết kiệm năng lượng: Tối ưu hóa việc sử dụng năng lượng bằng cách chỉ cung cấp lượng không khí cần thiết cho từng khu vực, giảm thiểu lãng phí.<br>
      Giám sát và kiểm soát từ xa: Cho phép giám sát trạng thái và điều chỉnh từ xa thông qua hệ thống BMS.<br>
      Tăng tiện nghi và chất lượng không khí: Đảm bảo môi trường sống và làm việc luôn thoải mái và trong lành.<br>
      An toàn cháy nổ: Các loại van chặn lửa và kiểm soát khói có động cơ đóng vai trò cực kỳ quan trọng trong an toàn phòng cháy chữa cháy của tòa nhà.
    </p>
  </div>
</div>`,
  },
  {
    id: 'p-038',
    name: 'Van điều chỉnh lưu lượng VCD – Tròn',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-dieu-chinh-luu-luong-vcd-tron.png',
    slug: 'van-dieu-chinh-luu-luong-vcd-tron',
    description:
      'Van điều chỉnh lưu lượng VCD (Volume Control Damper) là thiết bị quan trọng trong hệ thống HVAC, điều chỉnh lượng gió lưu thông trong đường ống.',
    details: `
<p style="text-align: left;"><span data-sheets-root="1">Cấu tạo<br>
Van VCD thường có cấu tạo gồm 3 bộ phận chính:</span></p>
<p style="text-align: left;">Thân van: Có dạng hình ống tròn, tùy thuộc vào loại ống gió mà nó được lắp đặt. Thường được làm từ tôn mạ kẽm hoặc inox.<br>
Lá van (cánh van): Là các tấm kim loại có thể xoay hoặc trượt để thay đổi tiết diện đi qua của luồng khí.<br>
Hệ thống điều khiển: Dùng để điều chỉnh góc mở của lá van. Có thể là:<br>
Tay gạt/Tay vặn: Điều khiển thủ công bằng tay.</p>
<p style="text-align: left;">
</p><p style="text-align: left;"><span data-sheets-root="1">Điều chỉnh lưu lượng không khí: Đây là chức năng cốt lõi, giúp cân bằng và phân phối lưu lượng gió cấp và gió hồi một cách chính xác trong hệ thống.<br>
Kiểm soát áp suất: Trong các hệ thống điều áp, van VCD giúp duy trì áp suất ổn định trong các khu vực cụ thể như phòng sạch, phòng mổ.<br>
Giảm tiếng ồn và rung động: Với thiết kế đặc biệt, van VCD có thể giúp giảm thiểu tiếng ồn và rung động do dòng khí không đồng đều gây ra.<br>
Tiết kiệm năng lượng và chi phí vận hành: Bằng cách điều chỉnh lưu lượng gió theo nhu cầu thực tế, van VCD giúp tối ưu hóa hiệu suất hệ thống HVAC, giảm thiểu tiêu hao năng lượng.<br>
Đảm bảo chất lượng không khí: Giúp kiểm soát lưu lượng gió và mức độ ẩm, giảm thiểu tác động của các tác nhân gây ô nhiễm như bụi, vi khuẩn, đảm bảo môi trường sống và làm việc trong lành.<br>
Tăng tuổi thọ và độ bền cho hệ thống HVAC: Việc kiểm soát lưu lượng gió ổn định giúp hệ thống hoạt động hiệu quả hơn, giảm tải và kéo dài tuổi thọ của các thiết bị.<br>
Ngăn chặn cháy lan (đối với một số loại đặc biệt): Một số loại van VCD tích hợp cầu chì nhiệt có thể tự động đóng lại khi nhiệt độ tăng cao (ví dụ trên 70°C - 75°C), ngăn khói và lửa lan truyền theo đường ống gió.</span></p>
`,

    specifications: `
<p style="text-align: left;"><span data-sheets-root="1">Dựa vào hình dáng và cách thức điều chỉnh, van VCD được chia thành:<br>
Van VCD tay gạt/tay vặn: Điều chỉnh thủ công bằng tay. Phù hợp với các hệ thống nhỏ, yêu cầu điều tiết đơn giản.<br>
<img class="alignnone wp-image-861" src="https://eusteel.vn/wp-content/uploads/2025/06/13-4-300x300.jpg" alt="" width="400" height="400"><br>
</span></p>
<p style="text-align: left;">VCD Tròn trục vít</p>
<p style="text-align: left;"><img class="alignnone wp-image-860" src="https://eusteel.vn/wp-content/uploads/2025/06/1-2-300x300.jpg" alt="" width="400" height="400"></p>
<p style="text-align: left;">VCD Tròn tay gạt</p>
`,
  },
  {
    id: 'p-039',
    name: 'Van gió điều chỉnh lưu lượng VCD – Vuông',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-gio-dieu-chinh-luu-luong-vcd-vuong.png',
    slug: 'van-gio-dieu-chinh-luu-luong-vcd-vuong',
    description:
      'Van điều chỉnh lưu lượng VCD (Volume Control Damper) là thiết bị quan trọng trong hệ thống HVAC, điều chỉnh lượng gió lưu thông trong đường ống.',
    details: `
<div style="text-align: left;">Cấu tạo</div>
<div style="text-align: left;">Van VCD thường có cấu tạo gồm 3 bộ phận chính:</div>
<div style="text-align: left;">Thân van: Có thể có dạng hình ống tròn hoặc hình trụ vuông, tùy thuộc vào loại ống gió mà nó được lắp đặt. Thường được làm từ tôn mạ kẽm hoặc inox.</div>
<div style="text-align: left;">Lá van (cánh van): Là các tấm kim loại có thể xoay hoặc trượt để thay đổi tiết diện đi qua của luồng khí. Lá van có thể có hình tròn, vuông, hoặc chữ nhật, tương ứng với hình dáng của thân van.</div>
<div style="text-align: left;">Hệ thống điều khiển: Dùng để điều chỉnh góc mở của lá van. Có thể là:</div>
<div style="text-align: left;">Tay gạt/Tay vặn: Điều khiển thủ công bằng tay.</div>
<div style="text-align: left;"></div>
`,

    specifications: `
<div style="text-align: left;">Dựa vào hình dáng và cách thức điều chỉnh, van VCD được chia thành:</div>
<div style="text-align: left;">Theo cơ cấu điều khiển:</div>
<div style="text-align: left;">Van VCD tay gạt/tay vặn: Điều chỉnh thủ công bằng tay. Phù hợp với các hệ thống nhỏ, yêu cầu điều tiết đơn giản.</div>
<div style="text-align: left;">
<p><img class="wp-image-857 " src="https://eusteel.vn/wp-content/uploads/2025/06/12-2-300x300.jpg" alt="" width="400" height="400"></p>
<p>VCD vuông tay gạt</p>
<p><img class="wp-image-858 " src="https://eusteel.vn/wp-content/uploads/2025/06/14-2-300x300.jpg" alt="" width="400" height="400"></p>
</div>
<div style="text-align: left;">VCD vuông trục vít</div>
`,
  },
  {
    id: 'p-040',
    name: 'Van một chiều NRD',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-mot-chieu-nrd.png',
    slug: 'van-mot-chieu-nrd',
    description:
      'Van một chiều NRD (Non-Return Damper) cho phép luồng không khí di chuyển theo một chiều duy nhất và ngăn chặn dòng khí ngược lại.',
    details: `
<p style="text-align: left;"><span data-sheets-root="1">Van NRD có cấu tạo đơn giản, bao gồm:</span></p>
<p style="text-align: left;">Thân van: Thường có dạng hình vuông hoặc hình tròn, được làm từ tôn mạ kẽm hoặc inox để đảm bảo độ bền và khả năng chống ăn mòn.<br>
Lá van (cánh van): Là các tấm kim loại được thiết kế đặc biệt để có thể mở ra khi có luồng khí đi qua theo chiều mong muốn và tự động đóng lại khi không khí cố gắng di chuyển ngược chiều. Một số loại có thể có lò xo hỗ trợ việc đóng/mở.<br>
Trục van và bạc: Giúp các lá van xoay trơn tru và chính xác.</p>
<p style="text-align: left;"><span data-sheets-root="1">Hệ thống thông gió nhà xưởng, văn phòng, chung cư: Ngăn không khí thải, mùi, hoặc không khí ô nhiễm từ bên ngoài xâm nhập vào không gian bên trong.<br>
Hệ thống hút mùi, xử lý khí thải: Đảm bảo mùi và khí thải chỉ được đưa ra ngoài mà không quay trở lại.<br>
Đường ống gió cấp và hồi của hệ thống điều hòa: Duy trì áp suất ổn định và ngăn thất thoát nhiệt.<br>
Các đường ống gió sát louver cấp gió, thải gió: Ngăn gió ngược và bụi bẩn từ môi trường bên ngoài.<br>
Phòng sạch, phòng thí nghiệm: Duy trì môi trường áp suất dương hoặc âm theo yêu cầu, ngăn chặn ô nhiễm chéo.</span></p>
`,

    specifications: `
<p style="text-align: left;"><span data-sheets-root="1">Van NRD chủ yếu được phân loại dựa trên hình dáng:</span></p>
<p style="text-align: left;">Van NRD vuông: Dùng cho các đường ống gió vuông hoặc hình chữ nhật. Đây là loại phổ biến trong nhiều công trình dân dụng và công nghiệp.<br>
Van NRD tròn: Dùng cho các đường ống gió tròn. Loại này thường được lắp đặt ở các cổ trích hoặc đoạn ống tròn.<br>
Tùy theo yêu cầu cụ thể của hệ thống, van NRD có thể được sản xuất với các kích thước và vật liệu khác nhau (tôn mạ kẽm, inox) để phù hợp với môi trường và điều kiện hoạt động.</p>
<p style="text-align: left;"><img class="alignnone wp-image-868" src="https://eusteel.vn/wp-content/uploads/2025/06/8-3-300x300.jpg" alt="" width="400" height="400"></p>
<p style="text-align: left;">Van NRD tròn</p>
<p style="text-align: left;"><img class="alignnone wp-image-867" src="https://eusteel.vn/wp-content/uploads/2025/06/11-2-300x300.jpg" alt="" width="400" height="400"></p>
<p style="text-align: left;">Van NRD vuông</p>
<p style="text-align: left;">Ưu điểm nổi bật</p>
<p style="text-align: left;"><span data-sheets-root="1">Ngăn chặn dòng khí ngược: Đây là công dụng quan trọng nhất, giúp bảo vệ hệ thống khỏi các tác động tiêu cực do luồng khí ngược gây ra.<br>
Duy trì áp suất ổn định: Góp phần cân bằng áp suất trong các khu vực, đặc biệt quan trọng đối với phòng sạch hoặc khu vực yêu cầu kiểm soát áp suất chặt chẽ.<br>
Bảo vệ hệ thống và thiết bị: Ngăn chặn bụi bẩn, côn trùng xâm nhập, giảm nguy cơ hư hại cho quạt và các thiết bị khác.<br>
Nâng cao chất lượng không khí: Đảm bảo không khí lưu thông theo đúng hướng, hạn chế ô nhiễm và mùi khó chịu quay trở lại.<br>
Tiết kiệm năng lượng: Giảm thiểu sự thất thoát không khí đã được điều hòa, góp phần tiết kiệm năng lượng cho hệ thống.<br>
Vận hành tự động: Hầu hết các van NRD hoạt động tự động dựa vào chênh lệch áp suất, không cần nguồn điện hay điều khiển thủ công liên tục, giúp vận hành dễ dàng và đáng tin cậy.</span></p>
`,
  },
  {
    id: 'p-041',
    name: 'Van xả áp PRD',
    category: 'Van gió',
    price: 'Liên hệ',
    image: '/images/products/van-xa-ap-prd.png',
    slug: 'van-xa-ap-prd',
    description:
      'Van xả áp PRD (Pressure Relief Damper) tự động mở ra để giải phóng áp suất dư thừa trong hệ thống khi áp suất vượt quá giới hạn cài đặt.',
    details: `
<p style="text-align: left;"><span data-sheets-root="1">Van PRD thường có cấu tạo đơn giản nhưng hiệu quả, bao gồm:</span></p>
<p style="text-align: left;">Thân van: Có thể là hình vuông, hình chữ nhật hoặc hình tròn, được làm từ các vật liệu bền như tôn mạ kẽm hoặc inox để chống gỉ sét và đảm bảo tuổi thọ.<br>
Lá van (cánh van): Là các tấm kim loại được thiết kế đặc biệt để có thể xoay hoặc lật mở khi có áp suất tác động từ một phía. Số lượng lá van có thể khác nhau tùy thuộc vào kích thước và thiết kế của van.<br>
Hệ thống đối trọng (hoặc lò xo): Đây là bộ phận quan trọng nhất quyết định ngưỡng áp suất mở của van. Các quả đối trọng (hoặc lò xo) được gắn vào lá van và có thể điều chỉnh được để thiết lập áp suất đóng/mở mong muốn. Khi áp suất vượt quá lực giữ của đối trọng/lò xo, lá van sẽ tự động mở ra.<br>
Trục van và bạc: Đảm bảo các lá van chuyển động mượt mà và chính xác.</p>
<p style="text-align: left;"><span data-sheets-root="1">Van PRD có vai trò cực kỳ quan trọng trong việc đảm bảo an toàn và hiệu suất của nhiều hệ thống HVAC, đặc biệt là những nơi yêu cầu kiểm soát áp suất nghiêm ngặt:</span></p>
<p style="text-align: left;">Phòng sạch, phòng mổ, phòng thí nghiệm: Duy trì áp suất dương hoặc âm ổn định để ngăn ngừa sự xâm nhập hoặc thoát ra của các chất ô nhiễm. Van PRD giúp xả áp suất dư khi hệ thống hoạt động quá tải hoặc khi có sự thay đổi đột ngột về áp suất.<br>
Buồng thang bộ thoát hiểm, hành lang chống cháy: Đảm bảo áp suất dương trong buồng thang hoặc hành lang để ngăn khói xâm nhập trong trường hợp hỏa hoạn, đồng thời xả áp suất dư để cửa thoát hiểm không bị kẹt do áp suất quá cao.<br>
Hệ thống thông gió trong nhà máy, hầm, bãi đậu xe: Giải phóng áp suất dư có thể phát sinh do hoạt động của quạt hoặc sự thay đổi của môi trường.<br>
Kết hợp với hệ thống chữa cháy khí (FM200, Novec 1230, CO2): Khi hệ thống chữa cháy khí được kích hoạt, một lượng lớn khí sẽ được phun vào phòng, gây tăng áp suất đột ngột. Van PRD sẽ tự động mở ra để xả bớt áp suất này, bảo vệ cấu trúc tòa nhà và thiết bị khỏi hư hại, đồng thời cho phép lượng khí chữa cháy được giữ lại hiệu quả nhất.<br>
Kiểm soát chênh lệch áp suất giữa các khu vực: Đảm bảo áp suất giữa các phòng hoặc khu vực khác nhau được duy trì ở mức cho phép.</p>
`,

    specifications: `
<p style="text-align: left;"><span data-sheets-root="1">Tương tự như van VCD và NRD, van PRD cũng được phân loại chủ yếu theo hình dáng:</span></p>
<p style="text-align: left;">Van PRD vuông: Dùng cho các đường ống gió vuông hoặc khi lắp đặt trên tường, vách ngăn.<br>
Van PRD tròn: Dùng cho các đường ống gió tròn.</p>
<p style="text-align: left;"><img class="alignnone wp-image-864" src="https://eusteel.vn/wp-content/uploads/2025/06/3-3-300x300.jpg" alt="" width="400" height="400"></p>
<p style="text-align: left;">Van PRD vuông</p>
<p style="text-align: left;"><img class="alignnone wp-image-865" src="https://eusteel.vn/wp-content/uploads/2025/06/7-2-300x300.jpg" alt="" width="401" height="401"></p>
<p style="text-align: left;">Van PRD tròn</p>
<p style="text-align: left;">Ưu điểm nổi bật</p>
<p style="text-align: left;"><span data-sheets-root="1">Đảm bảo an toàn: Đây là lợi ích hàng đầu, van PRD ngăn ngừa hư hại cho đường ống gió, thiết bị và cấu trúc công trình do áp suất quá cao gây ra.<br>
Bảo vệ con người: Giúp thoát hiểm an toàn hơn trong các tình huống khẩn cấp (như cháy) bằng cách duy trì áp suất thoát hiểm phù hợp.<br>
Duy trì hiệu suất hệ thống: Ổn định áp suất giúp hệ thống HVAC hoạt động hiệu quả hơn, giảm tải cho quạt và các thiết bị khác.<br>
Kiểm soát chất lượng không khí: Đặc biệt quan trọng trong các môi trường nhạy cảm như phòng sạch.<br>
Hoạt động tự động: Không cần nguồn điện hay điều khiển thủ công, giúp hệ thống đáng tin cậy và ít bảo trì.<br>
Tiết kiệm năng lượng: Giảm thiểu sự thất thoát năng lượng do chênh lệch áp suất không kiểm soát.</span></p>
`,
  },
  {
    id: 'p-042',
    name: 'Bịt ống gió tròn',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/bit-ong-gio-tron.png',
    slug: 'bit-ong-gio-tron',
    description:
      'Bịt ống gió là phụ kiện đơn giản nhưng cần thiết để đóng kín đầu cuối của đường ống gió tròn, ngăn chặn không khí, bụi bẩn, nước hoặc vật thể lạ xâm nhập.',
    details: `
<p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất nhờ độ bền, khả năng chống gỉ sét và chi phí hợp lý. Thích hợp cho hầu hết các ứng dụng thông gió dân dụng và công nghiệp.<br>
Inox (thép không gỉ): Gồm các loại Inox 201, 304, 316. Được sử dụng trong các môi trường đặc biệt yêu cầu độ bền cao, chống ăn mòn tuyệt đối, khả năng chịu nhiệt và vệ sinh nghiêm ngặt (ví dụ: nhà máy thực phẩm, dược phẩm, y tế, phòng sạch).<br>
Nhôm: Nhẹ hơn và có thể được sử dụng trong một số ứng dụng cụ thể.</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Hệ thống thông gió và điều hòa không khí (HVAC): Đóng kín các đầu ống cuối cùng của hệ thống cấp khí hoặc hồi khí.<br>
Hệ thống hút bụi, hút khói: Bịt các đầu ống nhánh không sử dụng hoặc đầu cuối của đường ống chính.<br>
Hệ thống thông gió tầng hầm, nhà xưởng: Bảo vệ ống khỏi bụi bẩn công nghiệp.<br>
Lắp đặt ngoài trời: Để ngăn chặn nước mưa, côn trùng.</span></p>
`,

    specifications: `
<p style="text-align: left;"><span data-sheets-root="1">Hình dạng: Có dạng đĩa tròn hoặc chóp cầu/nón cụt, được thiết kế để khớp với đường kính của ống gió tròn.<br>
Kích thước: Đa dạng, được sản xuất theo đường kính của ống gió tròn mà nó sẽ bịt kín (ví dụ: D100mm, D200mm, D300mm, v.v.).<br>
Độ dày vật liệu: Thường dao động từ 0.5 mm đến 1.2 mm hoặc hơn, tùy thuộc vào đường kính ống và yêu cầu độ cứng vững.<br>
Kiểu kết nối:<br>
Bịt trong (Female End Cap): Được thiết kế để lồng vào bên trong lòng ống gió.<br>
Bịt ngoài (Male End Cap): Được thiết kế để trùm ra bên ngoài ống gió (phổ biến hơn cho ống gió xoắn).<br>
Kết nối bích: Đối với các ống gió lớn hoặc hệ thống yêu cầu tháo lắp dễ dàng, bịt ống có thể được thiết kế có bích để bắt vít vào mặt bích của ống.<br>
</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Đơn giản, dễ lắp đặt: Thiết kế không phức tạp, dễ dàng gắn vào đầu ống.<br>
Chi phí thấp: Là một phụ kiện có giá thành tương đối rẻ.<br>
Hiệu quả cao: Đảm bảo độ kín khít và bảo vệ hệ thống hiệu quả.<br>
Bền bỉ: Làm từ vật liệu kim loại, có khả năng chịu lực và chống ăn mòn tốt (đặc biệt là Inox).</span></p>
`,
  },
  {
    id: 'p-043',
    name: 'Bịt ống gió vuông',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/bit-ong-gio-vuong.png',
    slug: 'bit-ong-gio-vuong',
    description:
      'Bịt ống gió vuông (end cap) là phụ kiện dùng để đóng kín đầu cuối của đường ống gió hình vuông hoặc chữ nhật.',
    details: `
<p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất do giá thành hợp lý và khả năng chống gỉ sét tốt trong môi trường thông thường.<br>
Inox (SUS 201, 304): Dùng trong môi trường yêu cầu độ vệ sinh cao, chống ăn mòn hoặc có hóa chất (như nhà máy thực phẩm, y tế, phòng sạch).</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Đóng kín hệ thống: Đây là công dụng cơ bản nhất. Bịt ống gió giúp ngăn chặn không khí thoát ra ngoài hoặc đi vào từ đầu ống, đảm bảo luồng không khí được điều hướng chính xác trong hệ thống.<br>
Ngăn bụi bẩn, côn trùng: Việc bịt kín đầu ống giúp ngăn chặn bụi bẩn, côn trùng, hoặc các vật thể lạ khác xâm nhập vào bên trong hệ thống ống gió, đảm bảo chất lượng không khí và vệ sinh.<br>
Kiểm soát áp suất: Trong một số trường hợp, bịt ống gió được sử dụng để tạo ra một hệ thống kín, giúp duy trì áp suất cần thiết bên trong đường ống.<br>
Tạm thời hoặc vĩnh viễn: Có thể được sử dụng để đóng kín tạm thời một nhánh ống không sử dụng, hoặc bịt kín vĩnh viễn cuối một đường ống.</span></p>
`,

    specifications: `
<p style="text-align: left;"><span data-sheets-root="1">Thiết kế: Bịt ống gió vuông thường có hình dạng phù hợp với tiết diện của ống gió, với các cạnh được thiết kế để kết nối dễ dàng với bích ống gió hoặc các loại nẹp.<br>
Độ dày: Độ dày của vật liệu phụ thuộc vào kích thước của ống gió và yêu cầu về độ bền của hệ thống.<br>
</span></p>
`,
  },
  {
    id: 'p-045',
    name: 'Chân rẽ ống gió',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/chan-re-ong-gio.png',
    slug: 'chan-re-ong-gio',
    description:
      'Chân rẽ ống gió (cổ trích/take-off) dùng để tạo nhánh từ ống chính, phân phối không khí linh hoạt và hiệu quả.',
    details: `
<p style="text-align: left;"><span data-sheets-root="1">Chân rẽ ống gió thường được làm từ các vật liệu như tôn mạ kẽm (phổ biến nhất do giá thành hợp lý), inox (SUS 201, 304 - dùng trong môi trường yêu cầu vệ sinh cao hoặc có tính ăn mòn), hoặc tôn đen sơn tĩnh điện (dùng cho hệ thống hút bụi, hút khói công nghiệp). Độ dày của vật liệu sẽ tùy thuộc vào kích thước ống và yêu cầu của hệ thống.</span></p>
<p style="text-align: left;"><span data-sheets-root="1">Phân chia luồng không khí: Đây là công dụng cơ bản nhất của chân rẽ. Nó giúp chia luồng gió từ một ống lớn thành các ống nhỏ hơn, dẫn đến nhiều vị trí cần thông gió hoặc điều hòa không khí.<br>
Tối ưu hóa không gian và chi phí: Thay vì phải sử dụng nhiều đường ống riêng biệt, chân rẽ giúp giảm số lượng ống cần thiết, tiết kiệm không gian lắp đặt và giảm chi phí vật liệu.<br>
Dễ dàng lắp đặt và bảo trì: Chân rẽ có cấu trúc tương đối đơn giản, dễ dàng kết nối với các ống gió khác, giúp quá trình lắp đặt nhanh chóng và việc bảo trì cũng thuận tiện hơn.<br>
Điều chỉnh lưu lượng gió: Một số loại chân rẽ có thể được kết hợp với van điều tiết lưu lượng gió để kiểm soát lượng khí đi vào các nhánh</span></p>
`,

    specifications: `
<p style="text-align: left;"><span data-sheets-root="1">Chân rẽ ống gió vuông - vuông: Dùng để tạo nhánh ống gió vuông từ đường ống gió vuông chính.<br>
Chân rẽ ống gió vuông - tròn: Dùng để tạo nhánh ống gió tròn từ đường ống gió vuông chính.<br>
Chân rẽ ống gió tròn - tròn: Dùng để tạo nhánh ống gió tròn từ đường ống gió tròn chính (ít phổ biến hơn chân rẽ từ ống vuông).<br>
Chân rẽ thường được chế tạo với các góc vát phổ biến như 45 độ, 60 độ để tối ưu hóa hướng dòng khí, giảm thiểu cản trở và tổn thất áp suất.</span></p>
`,
  },
  {
    id: 'p-046',
    name: 'Chuyển cao độ vuông lệch tâm',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/chuyen-cao-do-vuong-lech-tam.png',
    slug: 'chuyen-cao-do-vuong-lech-tam',
    description:
      'Chuyển cao độ lệch tâm (rectangular offset) dùng để dịch chuyển vị trí ống gió vuông/chữ nhật theo một chiều, tối ưu không gian và dòng chảy.',
    details: `
<p style="text-align: left;">Tôn mạ kẽm: Phổ biến nhất cho các hệ thống thông gió dân dụng và công nghiệp thông thường. Độ dày tôn tương tự như ống gió vuông, phụ thuộc vào kích thước và áp suất.<br>
Inox (201, 304): Dùng cho môi trường ăn mòn, ẩm ướt, hoặc yêu cầu vệ sinh cao (như hệ thống hút khói bếp, nhà máy thực phẩm, dược phẩm).</p>
`,

    specifications: `
<p style="text-align: left;">Hai đầu hình chữ nhật/vuông: Kích thước đầu vào và đầu ra có thể giống nhau hoặc khác nhau.<br>
Các mặt bên: Thường là các mặt phẳng được cắt và gấp khúc theo một góc nhất định để tạo ra độ lệch. Nhìn vào hình ảnh bạn cung cấp, có thể thấy các mặt bên được uốn cong mượt mà để giảm tổn thất áp suất và tạo dòng chảy êm hơn.<br>
Góc lệch (Offset Angle): Góc mà ống bị bẻ cong để tạo ra sự dịch chuyển. Góc này được tính toán dựa trên khoảng cách dịch chuyển cần thiết và chiều dài của phụ kiện.<br>
Độ dài: Chiều dài của phụ kiện này sẽ ảnh hưởng đến độ dốc của sự lệch. Chiều dài càng lớn thì độ dốc càng ít, giúp giảm tổn thất áp suất và tiếng ồn.</p>
<p style="text-align: left;">Tránh dầm, cột, tường: Khi thiết kế đường ống gió gặp phải dầm ngang, cột nhà hoặc các cấu trúc kiến trúc khác, phụ kiện này giúp ống gió "lách" qua mà không cần cắt bỏ hoặc thay đổi kết cấu chính của công trình.<br>
Đi qua không gian hẹp: Điều chỉnh vị trí ống để phù hợp với không gian trần giả, hộp kỹ thuật, hoặc các khu vực có chiều cao/chiều rộng hạn chế.<br>
Kết nối với thiết bị: Đôi khi, vị trí của quạt, miệng gió, hoặc các thiết bị khác không nằm cùng trục với đường ống chính, chuyển lệch tâm sẽ giúp kết nối chúng một cách mượt mà.<br>
Giảm thiểu số lượng phụ kiện: Thay vì sử dụng nhiều cút (elbow) và đoạn thẳng để tạo ra một sự dịch chuyển, một chuyển lệch tâm được thiết kế riêng có thể hiệu quả hơn và giảm tổn thất áp suất.</p>
`,
  },
  {
    id: 'p-047',
    name: 'Chạc ba ống gió',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/chac-ba-ong-gio.png',
    slug: 'chac-ba-ong-gio',
    description:
      'Chạc ba ống gió dùng để chia hoặc gộp luồng không khí giữa các nhánh ống, tối ưu hóa không gian và lưu lượng gió trong hệ thống.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất do tính kinh tế và khả năng chống ăn mòn tốt trong môi trường thông thường. Độ dày vật liệu thường từ 0.48mm đến 1.15mm, tùy thuộc vào kích thước ống và yêu cầu hệ thống.<br>
Inox (SUS 201, 304): Được sử dụng trong các môi trường đặc biệt yêu cầu vệ sinh cao, chống ăn mòn hoặc có hóa chất (ví dụ: phòng sạch, nhà máy thực phẩm, y tế).<br>
Tôn đen sơn tĩnh điện: Dùng cho các hệ thống hút khói, hút bụi công nghiệp.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Phân chia luồng không khí: Chức năng chính là chia một đường ống gió lớn thành hai hoặc nhiều nhánh nhỏ hơn, dẫn không khí đến các khu vực khác nhau.<br>
Gộp luồng không khí: Chạc 3 cũng có thể dùng để gộp hai luồng gió từ các nhánh nhỏ thành một luồng lớn hơn vào đường ống chính.<br>
Điều chỉnh hướng gió: Giúp thay đổi hướng di chuyển của không khí trong hệ thống.<br>
Tối ưu hóa hệ thống: Giảm thiểu số lượng ống gió cần thiết, tiết kiệm không gian lắp đặt và chi phí vật liệu.<br>
Đảm bảo lưu lượng và áp suất: Các đầu nhánh của chạc 3 thường được thiết kế có thành lượn hình tròn (bán kính R) hoặc các góc vát phù hợp để đảm bảo luồng gió đi qua không bị tổn thất nhiều về lưu lượng và áp suất, duy trì vận tốc ổn định.</span></p>
  </div>
</div>
`,

    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Chạc 3 ống gió vuông thường được phân loại dựa trên góc rẽ nhánh và kiểu kết nối:</span></p>
    <p style="text-align: left;">Theo góc rẽ nhánh:<br>
Chạc 3 rẽ 45 độ: Phổ biến, giúp luồng gió chuyển hướng mượt mà, ít gây tổn thất.<br>
Chạc 3 rẽ 90 độ: Dùng trong những trường hợp cần thay đổi hướng gấp.<br>
Theo kiểu kết nối:<br>
TDC (Transverse Duct Connector): Kiểu kết nối bằng bích liền ống, phổ biến và dễ lắp đặt.<br>
Nẹp C: Kiểu kết nối bằng nẹp C, thường dùng cho ống gió nhỏ hoặc các hệ thống yêu cầu độ kín cao.<br>
Bích V: Kết nối bằng bích chữ V, đảm bảo độ chắc chắn và kín khít.</p>
  </div>
</div>
`,
  },
  {
    id: 'p-048',
    name: 'Chuyển vuông tròn đồng tâm',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/chuyen-vuong-tron-dong-tam.png',
    slug: 'chuyen-vuong-tron-dong-tam',
    description:
      'Chuyển vuông tròn đồng tâm dùng để kết nối ống gió vuông/chữ nhật với ống tròn theo trục tâm, giúp chuyển tiếp mượt và giảm tổn thất áp suất.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Vật liệu phổ biến nhất do chi phí hợp lý và khả năng gia công dễ dàng. Được sử dụng rộng rãi trong các hệ thống thông gió và điều hòa không khí dân dụng, thương mại.<br>
Inox (201, 304): Dùng cho các ứng dụng đặc biệt yêu cầu khả năng chống ăn mòn cao, chống gỉ sét, hoặc đáp ứng các tiêu chuẩn vệ sinh nghiêm ngặt (ví dụ: hệ thống hút khói bếp công nghiệp, nhà máy chế biến thực phẩm, hóa chất).</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Kết nối ống gió vuông với quạt: Rất phổ biến khi quạt có miệng hút hoặc miệng thổi dạng tròn, trong khi đường ống chính là ống vuông.<br>
Kết nối ống gió vuông với ống gió tròn: Khi cần chuyển đổi từ hệ thống ống vuông sang ống tròn vì lý do không gian, thẩm mỹ, hoặc hiệu suất.<br>
Kết nối ống gió vuông với miệng gió tròn: Gắn các miệng gió tròn vào hệ thống ống gió vuông.<br>
Kết nối với các thiết bị khác: Các thiết bị công nghiệp có cổng kết nối tròn, trong khi hệ thống ống dẫn là vuông.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng:</span></p>
    <p style="text-align: left;">Có hình dạng như một cái phễu hoặc chóp cụt, với một đầu là hình vuông (hoặc chữ nhật) và đầu còn lại là hình tròn.<br>
Đặc điểm "đồng tâm" được thể hiện qua việc tâm của hình vuông/chữ nhật và tâm của hình tròn đều nằm trên một đường thẳng tưởng tượng chạy dọc theo trục của phụ kiện. Điều này tạo ra sự đối xứng xung quanh trục đó.<br>
Các mặt bên thường là các mặt phẳng được gia công tinh xảo để tạo ra sự chuyển tiếp mượt mà nhất có thể giữa hai hình dạng.<br>
Độ dày vật liệu:</p>
    <p style="text-align: left;">Phụ thuộc vào kích thước của phụ kiện và áp suất làm việc của hệ thống.<br>
Tuân theo các tiêu chuẩn về độ dày vật liệu tương tự như ống gió.<br>
Chiều dài (Length):</p>
    <p style="text-align: left;">Chiều dài của chuyển vuông - tròn đồng tâm cũng ảnh hưởng đến hiệu suất khí động học. Chiều dài càng lớn, độ dốc của sự chuyển đổi càng nhỏ, giúp:<br>
Giảm tổn thất áp suất: Dòng khí ít bị hỗn loạn hơn khi chuyển từ tiết diện này sang tiết diện khác.<br>
Giảm tiếng ồn: Giúp hệ thống hoạt động êm ái hơn.<br>
Ngược lại, côn quá ngắn có thể gây ra tổn thất áp suất đáng kể và tiếng ồn.<br>
Mối nối:</p>
    <p style="text-align: left;">Đầu vuông/chữ nhật: Thường được trang bị bích (như bích TDC/TDF hoặc bích thép góc) để kết nối với ống gió vuông.<br>
Đầu tròn: Có thể có bích tròn, mối nối nhanh (snap-lock), hoặc được thiết kế để lồng vào hoặc lồng ra khỏi ống tròn và được cố định bằng đinh rút, vít tự khoan và keo làm kín.</p>
    <p style="text-align: left;"><span data-sheets-root="1">Hiệu suất khí động học tốt: Do thiết kế đồng tâm và chuyển tiếp mượt mà, giúp giảm thiểu tổn thất áp suất và tiếng ồn.<br>
Dễ dàng tính toán và lắp đặt: Thiết kế đối xứng giúp việc căn chỉnh và lắp đặt tương đối đơn giản.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-049',
    name: 'Chuyển vuông tròn lệch tâm',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/chuyen-vuong-tron-lech-tam.png',
    slug: 'chuyen-vuong-tron-lech-tam',
    description:
      'Chuyển vuông tròn lệch tâm dùng để kết nối ống gió vuông/chữ nhật với ống tròn khi hai trục lệch nhau, tối ưu không gian lắp đặt và dòng khí.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến và kinh tế, có khả năng chống rỉ sét và oxy hóa tốt. Độ dày phổ biến từ 0.48mm đến 1.15mm, và độ mạ kẽm từ Z8 đến Z18.<br>
Inox (201, 304): Chống ăn mòn vượt trội, phù hợp cho môi trường yêu cầu vệ sinh cao hoặc có tính ăn mòn. Độ dày phổ biến từ 0.6mm đến 0.8mm.<br>
Ngoài ra còn có thể làm từ nhôm hoặc các vật liệu khác tùy theo yêu cầu cụ thể của công trình.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hệ thống HVAC (Heating, Ventilation, and Air Conditioning): Dùng để kết nối và chuyển hướng các đường ống gió vuông và tròn trong các tòa nhà thương mại, chung cư, nhà xưởng, trung tâm thương mại, bệnh viện, phòng sạch, v.v.<br>
Hệ thống thông gió công nghiệp: Trong các nhà máy, xưởng sản xuất, hầm mỏ để đảm bảo luân chuyển không khí, hút khí thải, bụi bẩn và cung cấp khí tươi.<br>
Kết nối với thiết bị: Dùng để kết nối ống gió vuông với đầu vào hoặc đầu ra của quạt gió, hoặc để kết nối với ống gió mềm dẫn xuống miệng gió.<br>
Tối ưu hóa không gian: Nhờ khả năng lệch tâm, nó giúp linh hoạt thay đổi đường ống để phù hợp với không gian lắp đặt bị hạn chế hoặc có chướng ngại vật, đảm bảo dòng khí lưu thông mượt mà và giảm thiểu tổn thất áp suất.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Độ dày: Phụ thuộc vào kích thước của côn chuyển và chức năng sử dụng trong hệ thống, tuân theo tiêu chuẩn thiết kế và yêu cầu khách hàng<br>
Kích thước và góc lệch: Được thiết kế và sản xuất theo yêu cầu cụ thể của từng công trình để phù hợp với vị trí lắp đặt.<br>
Kiểu mối nối: Mối nối các đoạn ống gió phải dùng kiểu tháo rời được. Các mối ghép và mối nối phải đảm bảo kín khí.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Linh hoạt trong thiết kế và lắp đặt: Giúp đơn giản hóa quá trình thi công, dễ dàng kết nối các loại ống gió khác nhau trong không gian phức tạp.<br>
Giảm tổn thất áp suất: Thiết kế lượn tròn và chuyển đổi mượt mà giúp luồng khí lưu thông ổn định, giảm ma sát và tổn thất năng lượng.<br>
Tối ưu hiệu suất hệ thống HVAC: Góp phần duy trì chất lượng không khí, giảm tiếng ồn và tăng hiệu quả vận hành của toàn bộ hệ thống.<br>
Độ bền cao: Được làm từ vật liệu chống rỉ sét, oxy hóa, chịu lực tốt, đảm bảo tuổi thọ cho hệ thống.<br>
Dễ dàng bảo trì và thay thế: Có thể tháo rời giúp việc bảo dưỡng hệ thống thuận tiện hơn.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-050',
    name: 'Côn thu đồng tâm vuông',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/con-thu-dong-tam-vuong.png',
    slug: 'con-thu-dong-tam-vuong',
    description:
      'Côn thu đồng tâm vuông dùng để thu nhỏ tiết diện ống gió vuông/chữ nhật một cách đồng tâm, giúp điều chỉnh vận tốc và áp suất gió hiệu quả.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất, được sử dụng rộng rãi trong các hệ thống thông gió, điều hòa không khí.<br>
Inox (201, 304): Dùng trong môi trường yêu cầu chống ăn mòn cao, vệ sinh (ví dụ: hệ thống hút khói bếp công nghiệp, nhà máy chế biến thực phẩm).</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Điều chỉnh vận tốc và áp suất gió: Khi tiết diện thu hẹp, vận tốc gió tăng lên và áp suất tĩnh có thể giảm. Điều này được sử dụng để điều khiển lưu lượng khí hoặc để tạo ra một điểm áp suất nhất định.<br>
Kết nối các đoạn ống có kích thước khác nhau: Đảm bảo sự chuyển tiếp trơn tru giữa các đoạn ống có đường kính khác nhau.<br>
Kết nối ống gió với thiết bị: Ví dụ, kết nối ống gió chính với các miệng gió, van điều chỉnh lưu lượng (VCD), hộp gió (plenum box) hoặc các thiết bị khác có kích thước đầu vào nhỏ hơn.<br>
Phân phối hoặc tập trung dòng khí: Trong một số trường hợp, côn thu được sử dụng như một phần của mạng lưới phân phối hoặc hội tụ dòng khí.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng:</span></p>
    <p style="text-align: left;">Có hình chóp cụt, với hai đầu là hai hình chữ nhật (hoặc vuông) có kích thước khác nhau.<br>
Kích thước đầu vào (cạnh lớn hơn) và kích thước đầu ra (cạnh nhỏ hơn).<br>
Bốn mặt bên của côn là các hình thang cân, đối xứng qua trục tâm của côn. Điều này tạo nên đặc điểm "đồng tâm" của nó.<br>
Độ dày vật liệu:</p>
    <p style="text-align: left;">Phụ thuộc vào kích thước của côn và áp suất làm việc của hệ thống.<br>
Thường tuân theo các tiêu chuẩn về độ dày tương tự như ống gió vuông.<br>
Chiều dài côn (Length of Reducer):</p>
    <p style="text-align: left;">Chiều dài của côn ảnh hưởng trực tiếp đến hiệu suất của nó. Côn càng dài, độ dốc của các mặt bên càng nhỏ, giúp luồng khí chuyển đổi tiết diện mượt mà hơn, từ đó:<br>
Giảm tổn thất áp suất: Khí di chuyển êm ái, ít va đập và hỗn loạn.<br>
Giảm tiếng ồn: Giúp hệ thống hoạt động yên tĩnh hơn.</p>
  </div>
</div>
`,
  },
  {
    id: 'p-051',
    name: 'Côn thu đồng tâm',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/con-thu-dong-tam.png',
    slug: 'con-thu-dong-tam',
    description:
      'Côn thu đồng tâm dùng để chuyển đổi tiết diện ống gió một cách mượt mà, giúp điều chỉnh lưu lượng và áp suất gió, tối ưu dòng chảy trong hệ thống.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất, có độ bền và khả năng chống gỉ sét tốt, giá thành hợp lý.<br>
Inox (thép không gỉ): Bao gồm Inox 201, 304, 316. Được sử dụng trong các môi trường yêu cầu độ bền cao, chống ăn mòn tuyệt đối, hoặc môi trường có yêu cầu vệ sinh nghiêm ngặt (như nhà máy thực phẩm, dược phẩm, phòng sạch).<br>
Nhôm hoặc thép sơn tĩnh điện: Ít phổ biến hơn nhưng cũng có thể được sử dụng trong một số ứng dụng đặc biệt.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Thay đổi kích thước ống: Đây là công dụng cơ bản nhất. Côn thu đồng tâm cho phép chuyển đổi lưu lượng không khí hoặc chất lỏng một cách mượt mà từ một ống có tiết diện lớn sang một ống có tiết diện nhỏ hơn, hoặc ngược lại (khi đó gọi là côn phóng).<br>
Điều chỉnh lưu lượng và áp suất: Khi giảm tiết diện ống, tốc độ dòng khí thường tăng lên, và áp suất tĩnh có thể thay đổi. Côn thu đồng tâm giúp điều chỉnh những yếu tố này một cách có kiểm soát.<br>
Kết nối thiết bị: Thường được sử dụng để kết nối đường ống gió với các thiết bị có kích thước cửa vào/ra khác nhau, ví dụ như đầu quạt, miệng gió, bộ lọc, v.v.<br>
Tối ưu hóa dòng chảy: Thiết kế đồng tâm và chuyển tiếp trơn tru giúp giảm thiểu sự nhiễu loạn của dòng khí/chất lỏng, từ đó hạn chế tổn thất áp suất và giảm tiếng ồn.<br>
Tiết kiệm không gian: Cho phép linh hoạt hơn trong thiết kế và lắp đặt hệ thống ống dẫn, đặc biệt trong các không gian có hạn.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng: Côn thu đồng tâm có hình dạng giống như một hình nón cụt hoặc hình chóp cụt, thu nhỏ dần từ đầu lớn sang đầu nhỏ. Đặc điểm quan trọng nhất là trục tâm của đầu lớn và đầu nhỏ nằm trên cùng một đường thẳng.<br>
Kích thước: Đa dạng, được sản xuất theo đường kính (đối với ống tròn) hoặc kích thước cạnh (đối với ống vuông/chữ nhật) của hai đoạn ống cần kết nối.<br>
Độ dày vật liệu: Thường dao động từ 0.5mm đến 1.2mm hoặc hơn, tùy thuộc vào kích thước côn và áp suất của hệ thống.<br>
Kiểu dáng: Côn thu đồng tâm có thể có dạng tròn (để nối ống tròn), vuông (để nối ống vuông), hoặc chuyển tiếp từ vuông sang tròn.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Duy trì dòng chảy ổn định: Thiết kế đồng tâm giúp dòng khí chuyển đổi kích thước một cách mượt mà, ít gây xoáy hoặc hỗn loạn, giảm thiểu tổn thất áp suất và tiếng ồn.<br>
Dễ dàng thiết kế và lắp đặt: So với côn thu lệch tâm, côn thu đồng tâm có cấu tạo đơn giản hơn, dễ tính toán và thi công.<br>
Phù hợp với hệ thống thẳng đứng: Đặc biệt hiệu quả khi côn thu được lắp đặt theo chiều thẳng đứng, vì nó không gây đọng nước hoặc bụi bẩn ở một phía.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-052',
    name: 'Côn thu lệch tâm vuông',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/con-thu-lech-tam-vuong.png',
    slug: 'con-thu-lech-tam-vuong',
    description:
      'Côn thu lệch tâm vuông dùng để thu nhỏ tiết diện ống gió vuông/chữ nhật đồng thời dịch chuyển trục, giúp tối ưu không gian lắp đặt và tránh chướng ngại vật.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến cho hầu hết các hệ thống thông gió và điều hòa không khí.<br>
Inox (201, 304): Được sử dụng cho các ứng dụng đặc biệt yêu cầu khả năng chống ăn mòn cao (ví dụ: hút khói bếp công nghiệp, hệ thống xử lý khí thải có hóa chất ăn mòn).</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Tối ưu hóa không gian lắp đặt:<br>
Giữ một mặt phẳng cố định: Khi cần giữ mặt trên hoặc mặt dưới của ống gió thẳng hàng với trần giả hoặc sàn, côn lệch tâm giúp thu nhỏ ống mà vẫn đảm bảo yếu tố kiến trúc và thẩm mỹ.<br>
Tránh chướng ngại vật: Cho phép đường ống thu nhỏ kích thước đồng thời dịch chuyển để tránh dầm, cột, đường ống cấp thoát nước, hoặc các hệ thống M&amp;E khác.<br>
Kết nối linh hoạt: Kết nối một đoạn ống lớn với một thiết bị hoặc miệng gió có kích thước nhỏ hơn, nhưng vị trí của chúng không đồng trục.<br>
Điều chỉnh luồng khí và áp suất: Tương tự như côn thu đồng tâm, nó cũng giúp điều chỉnh vận tốc và áp suất của dòng khí, nhưng có thêm khả năng dịch chuyển vị trí.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng:</span></p>
    <p style="text-align: left;">Hai đầu là hình chữ nhật (hoặc vuông) với kích thước khác nhau.<br>
Điểm khác biệt chính là các mặt bên: Một hoặc hai mặt bên của côn thường được giữ thẳng hoặc gần thẳng, trong khi các mặt còn lại sẽ nghiêng để tạo ra sự thu hẹp và độ lệch. Ví dụ:<br>
Nếu bạn muốn giữ mặt dưới của ống thẳng hàng với trần hoặc sàn, côn sẽ thu nhỏ về phía trên và các mặt bên sẽ nghiêng vào.<br>
Nếu bạn muốn giữ một mặt bên thẳng hàng với tường, côn sẽ thu nhỏ về phía bên kia và các mặt còn lại sẽ nghiêng vào.<br>
Độ dày vật liệu:</p>
    <p style="text-align: left;">Tương tự như các phụ kiện ống gió khác, độ dày của tôn/inox sẽ phụ thuộc vào kích thước của côn và áp suất làm việc của hệ thống, tuân theo các tiêu chuẩn kỹ thuật.<br>
Chiều dài côn:</p>
    <p style="text-align: left;">Chiều dài của côn thu lệch tâm cũng rất quan trọng. Chiều dài càng lớn thì độ dốc của các mặt nghiêng càng nhỏ, giúp luồng khí chuyển động mượt mà hơn, giảm tổn thất áp suất và tiếng ồn. Côn quá ngắn sẽ tạo ra sự thay đổi đột ngột, gây hỗn loạn dòng khí và tổn thất năng lượng.<br>
Mối nối:</p>
    <p style="text-align: left;">Hai đầu của côn thu lệch tâm vuông có các mặt bích tiêu chuẩn (bích TDC/TDF, bích thép góc) để kết nối với các đoạn ống gió khác hoặc thiết bị, đảm bảo độ kín khít cho hệ thống.</p>
  </div>
</div>
`,
  },
  {
    id: 'p-053',
    name: 'Côn thu lệch tâm',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/con-thu-lech-tam.png',
    slug: 'con-thu-lech-tam',
    description:
      'Côn thu lệch tâm dùng để thu nhỏ tiết diện đường ống đồng thời giữ một mặt phẳng cố định, tối ưu dòng chảy và không gian lắp đặt trong hệ thống ống gió và đường ống công nghiệp.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến, bền, chống gỉ sét tốt.<br>
Inox (thép không gỉ): Bao gồm Inox 201, 304, 316. Được sử dụng cho các môi trường đòi hỏi chống ăn mòn cao, vệ sinh nghiêm ngặt (thực phẩm, dược phẩm, y tế, phòng sạch) hoặc môi trường khắc nghiệt.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hệ thống thông gió, điều hòa không khí: Khi cần thay đổi kích thước ống mà vẫn giữ một mặt phẳng cho đường ống (ví dụ: sát trần, sát tường).<br>
Hệ thống dẫn chất lỏng (nước, hóa chất, dầu): Đặc biệt quan trọng ở đầu hút của máy bơm để tránh kẹt khí.<br>
Hệ thống xử lý nước thải, nước sạch công nghiệp: Giúp dòng chảy không bị tắc nghẽn hoặc đọng cặn.<br>
Ngành công nghiệp dầu khí, khoáng sản, hóa chất: Nơi yêu cầu kiểm soát dòng chảy chặt chẽ và chống ăn mòn.<br>
Các hệ thống đường ống công nghiệp khác nơi có yêu cầu đặc biệt về không gian hoặc dòng chảy.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Côn thu lệch tâm là phụ kiện hình nón cụt (hoặc chóp cụt đối với ống vuông) mà một mặt của nó thẳng hoặc gần như thẳng, trong khi mặt đối diện nghiêng dần để thu nhỏ đường kính/kích thước. Kết quả là tâm của hai đầu ống (lớn và nhỏ) sẽ bị lệch nhau.<br>
Kích thước và Độ dày: Đa dạng, được sản xuất theo đường kính hoặc kích thước cạnh của hai đoạn ống cần kết nối, và độ dày vật liệu phù hợp với áp suất và yêu cầu kỹ thuật.<br>
</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Kiểm soát dòng chảy tối ưu: Đặc biệt hiệu quả trong việc ngăn ngừa tích tụ khí hoặc chất lỏng trong đường ống nằm ngang, giúp bảo vệ thiết bị (như máy bơm) và duy trì hiệu suất hệ thống.<br>
Tối ưu hóa không gian lắp đặt: Cho phép lắp đặt ống sát bề mặt, tận dụng không gian hiệu quả hơn, đặc biệt trong các khu vực chật hẹp.<br>
Thuận tiện cho bảo trì: Việc có một mặt phẳng giúp dễ dàng gia cố, chống đỡ đường ống và cũng thuận tiện hơn cho việc kiểm tra, vệ sinh.<br>
Độ bền cao: Nếu được làm từ vật liệu chất lượng cao (như inox), có khả năng chống ăn mòn và chịu được môi trường khắc nghiệt.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-054',
    name: 'Măng xông ống gió',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/mang-xong.png',
    slug: 'mang-xong',
    description:
      'Măng xông ống gió là phụ kiện nối ống tròn, giúp liên kết chắc chắn các đoạn ống gió với nhau, đảm bảo độ kín khít và thẩm mỹ cho hệ thống.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất, có độ bền và khả năng chống ăn mòn tốt, giá thành hợp lý.<br>
Inox (thép không gỉ): Bao gồm Inox 201, 304, 316. Được sử dụng cho các môi trường đặc biệt yêu cầu vệ sinh cao, chống ăn mòn tuyệt đối (như nhà máy thực phẩm, dược phẩm, y tế, phòng sạch) hoặc môi trường khắc nghiệt.<br>
Nhôm: Ít phổ biến hơn trong ứng dụng ống gió công nghiệp, thường dùng cho ống nhỏ.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hệ thống thông gió và điều hòa không khí (HVAC): Nối các đoạn ống gió tròn trong các tòa nhà văn phòng, trung tâm thương mại, chung cư, nhà xưởng.<br>
Hệ thống hút bụi, hút khói: Nối các đường ống thu gom bụi, khói từ máy móc hoặc khu vực sản xuất.<br>
Hệ thống thông gió dân dụng và công nghiệp nhẹ: Nơi có yêu cầu về tốc độ thi công và chi phí.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng: Là một đoạn ống kim loại hình tròn, ngắn, rỗng ruột.<br>
Kích thước:<br>
Được sản xuất theo đường kính của ống gió tròn mà nó sẽ kết nối (ví dụ: D100mm, D200mm, D300mm, v.v.).<br>
Chiều dài của măng nối thường ngắn, đủ để tạo độ bám chắc cho mối nối.<br>
Độ dày vật liệu: Tùy thuộc vào đường kính ống và áp suất trong hệ thống, thường tương đương hoặc dày hơn một chút so với ống gió để đảm bảo độ cứng vững cho mối nối.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Lắp đặt nhanh chóng và dễ dàng: Quá trình nối ống đơn giản, không yêu cầu nhiều công cụ phức tạp.<br>
Chi phí hợp lý: Giá thành của măng nối thường thấp hơn so với việc sử dụng hệ thống mặt bích.<br>
Độ kín khít tốt: Khi được làm kín đúng cách, mối nối có độ kín cao, giảm thiểu thất thoát khí.<br>
Thẩm mỹ: Mối nối khá gọn gàng, ít lộ ra bên ngoài.<br>
Độ bền cao: Nếu được sản xuất từ vật liệu chất lượng tốt, mối nối có thể bền bỉ như chính đường ống.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-055',
    name: 'Ống gió tròn trơn',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-tron-tron.png',
    slug: 'ong-gio-tron-tron',
    description:
      'Ống gió tròn trơn có bề mặt nhẵn, giúp luồng khí lưu thông mượt mà, giảm tổn thất áp suất, tiếng ồn và tăng tính thẩm mỹ cho hệ thống thông gió.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <h1 style="text-align: left;">Ống gió tròn trơn</h1>
    <h3 style="text-align: left;">Ống gió trơn thường được làm từ các vật liệu:</h3>
    <p style="text-align: left;">- Tôn mạ kẽm: Là loại phổ biến nhất, có bề mặt ngoài được phủ lớp mạ kẽm để bảo vệ khỏi ăn mòn và oxy hóa<br>
- Inox (thép không gỉ): Bao gồm các loại như Inox 201, 304, 316. Loại này có chất lượng cao, khả năng chống ăn mòn và vệ sinh tốt, thường được sử dụng trong môi trường có độ ẩm cao, yêu cầu vệ sinh nghiêm ngặt như nhà hàng, bệnh viện, phòng thí nghiệm, nhà máy thực phẩm.</p>
    <h2 style="text-align: left;">Ưu điểm nổi bật Ống gió tròn trơn</h2>
    <p style="text-align: left;">Hiệu suất thông gió tốt: Tiết diện tròn giúp luồng khí lưu thông mượt mà, giảm thiểu trở lực và tổn thất áp suất, từ đó giảm tiêu thụ năng lượng của quạt.<br>
Giảm thiểu tiếng ồn: Bề mặt trơn mịn và hình dạng tròn giúp giảm sự va đập của dòng khí, hạn chế tối đa độ ồn phát sinh trong hệ thống.<br>
Tính thẩm mỹ cao: Bề mặt trơn bóng, sáng mịn giúp nâng cao tính thẩm mỹ cho công trình, đặc biệt khi lắp đặt lộ thiên. Có thể sơn màu để tạo điểm nhấn trang trí.<br>
Dễ dàng lắp đặt và linh hoạt: Ống gió tròn có thể uốn cong dễ dàng, lắp đặt được trong nhiều vị trí địa hình khác nhau, kể cả không gian hạn chế. Trọng lượng nhẹ, dễ vận chuyển và thao tác.<br>
Giảm rò rỉ khí: Ít mối nối hơn so với ống gió vuông, đặc biệt là các mối ghép dọc hoặc mối ghép 4 chiều, tăng độ kín và giảm thất thoát khí.<br>
Ít bám bụi bẩn: Bề mặt trơn mịn hạn chế tối đa sự tích tụ bụi bẩn và mảnh vụn, giúp duy trì chất lượng không khí tốt hơn và giảm tần suất vệ sinh, bảo trì.<br>
Tiết kiệm chi phí: Chi phí lắp đặt thấp hơn so với ống gió chữ nhật do ít phụ kiện và dễ dàng thi công hơn.</p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;">Chiều dài ống: Dao động từ 3.5 đến 4m (tiêu chuẩn), hoặc dài hơn (3m, 6m, 12m đối với ống xoắn tròn) để giảm số lượng mối nối.<br>
Độ dày ống: Từ 0.5mm đến 1.2mm (tùy thuộc vào đường kính và yêu cầu kỹ thuật).<br>
Đường kính ống: Đa dạng, phụ thuộc vào khổ tôn và nhu cầu sử dụng (ví dụ: D80 – D120 là phổ biến, có thể lên đến D3000mm).<br>
Độ dày mạ kẽm: Từ Z8 (80g kẽm/m2) đến Z18 (180g/m2).<br>
Tiêu chuẩn sản xuất: ISO 90001:2025</p>
  </div>
</div>
`,
  },
  {
    id: 'p-056',
    name: 'Ống gió tròn xoắn',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-tron-xoan.png',
    slug: 'ong-gio-tron-xoan',
    description:
      'Ống gió tròn xoắn có kết cấu xoắn ốc tăng độ cứng, giảm rò rỉ khí, phù hợp cho các hệ thống thông gió hiện đại lắp đặt lộ thiên hoặc âm trần.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;">- Tôn mạ kẽm: Đây là vật liệu phổ biến nhất nhờ độ bền cao, khả năng chống gỉ sét tốt và giá thành hợp lý. Lớp mạ kẽm giúp bảo vệ ống khỏi các tác nhân gây ăn mòn từ môi trường.<br>
- Inox (thép không gỉ): Bao gồm các loại như Inox 201, 304, 316. Inox mang lại khả năng chống ăn mòn tuyệt vời, chịu nhiệt độ cao và dễ dàng vệ sinh, phù hợp cho các môi trường đòi hỏi tiêu chuẩn vệ sinh nghiêm ngặt như y tế, thực phẩm, hoặc các khu vực có độ ẩm cao.</p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Đường kính: Đa dạng, từ D100mm đến D1500mm hoặc lớn hơn tùy theo yêu cầu của dự án.<br>
Chiều dài: Thường dao động từ 3m đến 6m, giúp giảm thiểu số lượng mối nối trên toàn hệ thống.<br>
Độ dày vật liệu: Khoảng 0.48mm, 0.58mm, 0.75mm, 0.95mm, 1.15mm, tùy thuộc vào đường kính ống và áp suất làm việc.<br>
Độ mạ kẽm (đối với tôn mạ kẽm): Thường từ Z8 (80g kẽm/m2) đến Z18 (180g/m2).<br>
</span></p>
    <p style="text-align: left;">Độ bền cao và chắc chắn: Kết cấu xoắn ốc giúp tăng cường độ cứng cáp và khả năng chịu lực của ống, giảm thiểu biến dạng dưới tác động của áp suất và va đập.<br>
Hiệu suất lưu thông khí vượt trội: Tiết diện tròn giúp luồng không khí di chuyển mượt mà, giảm ma sát và tổn thất áp suất, từ đó tối ưu hóa hiệu suất thông gió và tiết kiệm năng lượng cho quạt.<br>
Giảm tiếng ồn: Thiết kế tròn và các đường xoắn giúp hạn chế sự va đập của dòng khí vào thành ống, giảm đáng kể tiếng ồn phát sinh trong quá trình vận hành hệ thống.<br>
Tính thẩm mỹ cao: Với hình dạng tròn và các đường gân xoắn đều đặn, ống gió tròn xoắn có tính thẩm mỹ cao, phù hợp để lắp đặt lộ thiên trong các không gian công cộng, nhà hàng, quán cà phê, hoặc các công trình yêu cầu kiến trúc đẹp mắt. Có thể sơn màu để phù hợp với không gian nội thất.<br>
Lắp đặt dễ dàng và linh hoạt: Trọng lượng nhẹ, dễ vận chuyển và thi công. Đặc biệt, ống có thể xuyên qua các cấu trúc công trình một cách thuận lợi, giảm thiểu chi phí nhân công và phụ kiện. Chiều dài ống lớn giúp giảm số lượng mối nối, tăng độ kín khít.<br>
Giảm rò rỉ khí: Ít mối nối hơn so với ống gió vuông, kết hợp với các mối nối chắc chắn, giúp hạn chế tối đa sự rò rỉ khí, đảm bảo hiệu quả vận hành của hệ thống.<br>
Dễ dàng vệ sinh và bảo trì: Bề mặt trơn và hình dạng tròn giúp giảm sự tích tụ bụi bẩn, dễ dàng vệ sinh định kỳ.</p>
  </div>
</div>
`,
  },
  {
    id: 'p-057',
    name: 'Ống gió vuông',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/ong-gio-vuong.png',
    slug: 'ong-gio-vuong',
    description:
      'Ống gió vuông được chế tạo từ tôn mạ kẽm hoặc inox, tối ưu không gian lắp đặt và lưu lượng gió trong các hệ thống HVAC và hút khói.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <h3 style="text-align: left;"><span data-sheets-root="1">Ống gió vuông thường được chế tạo từ các tấm kim loại như tôn mạ kẽm hoặc inox.<br>
</span></h3>
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến với các độ dày khác nhau (ví dụ: 0.48mm, 0.58mm, 0.75mm, 0.95mm, 1.15mm) và độ mạ kẽm khác nhau (Z8, Z10, Z12, Z18...). Thích hợp cho môi trường thông thường, không có hóa chất ăn mòn.<br>
Inox (thường là Inox 201, 304): Có độ bền cao, chống gỉ sét, mài mòn tốt. Thường được sử dụng trong các công trình đòi hỏi yêu cầu kỹ thuật cao hoặc môi trường dễ bị oxy hóa, ví dụ như ống gió hút khói bếp.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <h2 style="text-align: left;">Ưu điểm nổi bật ống gió vuông</h2>
    <p style="text-align: left;"><span data-sheets-root="1">Tiết kiệm không gian: Thiết kế hình vuông hoặc chữ nhật giúp tối ưu không gian lắp đặt, đặc biệt ở các vị trí góc cạnh.<br>
Lưu lượng gió tốt: Thiết diện lớn giúp không khí lưu thông hiệu quả, tránh thất thoát khí.<br>
Dễ lắp đặt và vận chuyển: Trọng lượng nhẹ, dễ dàng kết nối các đoạn ống bằng nẹp C, bích TDC, kẹp bích, bu lông.<br>
Giá thành hợp lý: Thường có giá thành cạnh tranh hơn so với một số loại ống gió khác.<br>
Linh hoạt trong thiết kế: Có thể tùy chỉnh kích thước để phù hợp với yêu cầu của từng dự án.</span></p>
    <h2 style="text-align: left;">Ứng dụng</h2>
    <p style="text-align: left;"><span data-sheets-root="1">Hệ thống điều hòa không khí và thông gió: Dẫn truyền và phân phối không khí trong các tòa nhà, văn phòng, chung cư, khách sạn, trung tâm thương mại.<br>
Hệ thống hút khói: Sử dụng trong nhà hàng, bếp ăn công nghiệp.<br>
Xử lý mùi công nghiệp: Hút không khí độc hại, cấp không khí sạch trong các phân xưởng sản xuất, nhà máy.<br>
Hệ thống hút bụi: Trong các nhà xưởng, khu công nghiệp.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-058',
    name: 'Chạc Y 4 nhánh',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/phu-kien-ong-gio-chac-y-4.png',
    slug: 'phu-kien-ong-gio-chac-y-4',
    description:
      'Chạc Y 4 nhánh là phụ kiện chia/gom luồng khí dạng ống tròn, giúp phân phối hoặc thu gom không khí hiệu quả trong hệ thống ống gió.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất, có độ bền và khả năng chống ăn mòn tốt, giá thành hợp lý.<br>
Inox (thép không gỉ): Bao gồm Inox 201, 304, 316. Được sử dụng cho các môi trường yêu cầu vệ sinh cao, chống ăn mòn tuyệt đối (như nhà máy thực phẩm, dược phẩm, y tế, phòng sạch) hoặc môi trường khắc nghiệt.<br>
</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hệ thống thông gió và điều hòa không khí (HVAC): Cấp khí tươi, hồi khí cho các tòa nhà văn phòng, trung tâm thương mại, chung cư, nhà hàng, khách sạn.<br>
Hệ thống hút bụi: Trong các nhà xưởng, nhà máy sản xuất, xưởng gỗ, xưởng cơ khí để thu gom bụi bẩn từ nhiều vị trí về hệ thống lọc.<br>
Hệ thống hút khói, hút mùi: Nhà bếp công nghiệp, nhà hàng, quán ăn, nơi cần hút khói từ nhiều bếp về một đường ống chính.<br>
Các công trình yêu cầu tính thẩm mỹ: Khi hệ thống ống gió được lắp đặt lộ thiên và cần hòa hợp với kiến trúc nội thất.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng: Có hình dạng chữ "Y" với một đầu vào (ống chính) và hai đầu ra (ống nhánh), hoặc ngược lại. Tất cả ba đầu đều có tiết diện hình tròn.<br>
Góc rẽ nhánh: Hai nhánh rẽ ra từ ống chính tạo một góc 45 độ so với trục của ống chính. Góc 45 độ này là một thiết kế tối ưu cho dòng chảy.<br>
Kích thước:<br>
Đường kính ống chính và đường kính các ống nhánh có thể bằng nhau (tê Y đều) hoặc khác nhau (tê Y giảm), tùy thuộc vào nhu cầu phân chia hoặc gom lưu lượng khí.<br>
Được sản xuất theo nhiều đường kính tiêu chuẩn và phi tiêu chuẩn theo yêu cầu của dự án.<br>
Độ dày vật liệu: Tùy thuộc vào đường kính ống và áp suất trong hệ thống, thường dao động từ 0.5mm đến 1.2mm hoặc dày hơn.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hiệu suất cao: Đảm bảo luồng khí được phân chia hoặc gom một cách hiệu quả, ít cản trở.<br>
Tiết kiệm năng lượng: Giảm tổn thất áp suất, giúp quạt hoạt động ổn định và tiết kiệm điện năng.<br>
Giảm tiếng ồn: Góp phần tạo môi trường yên tĩnh hơn cho không gian sử dụng.<br>
Tính thẩm mỹ: Thiết kế tròn và đường nét mềm mại phù hợp với các hệ thống ống gió tròn, đặc biệt khi lắp đặt lộ thiên trong các không gian hiện đại.<br>
Độ bền và tuổi thọ: Làm từ vật liệu chất lượng cao, có khả năng chống ăn mòn tốt.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-059',
    name: 'Cút tròn',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/phu-kien-ong-gio-cut-tron.png',
    slug: 'phu-kien-ong-gio-cut-tron',
    description:
      'Cút tròn là phụ kiện dùng để đổi hướng ống gió tròn, đảm bảo dòng khí lưu thông mượt mà và giảm tổn thất áp suất trong hệ thống.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Đây là vật liệu phổ biến nhất nhờ độ bền cao, khả năng chống ăn mòn và chi phí hợp lý. Thích hợp cho hầu hết các ứng dụng thông gió dân dụng và công nghiệp.<br>
Inox (thép không gỉ): Bao gồm các loại Inox 201, 304, 316. Được sử dụng trong các môi trường đặc biệt yêu cầu độ bền cao, chống ăn mòn tuyệt đối, khả năng chịu nhiệt và vệ sinh nghiêm ngặt (ví dụ: nhà máy thực phẩm, dược phẩm, y tế, phòng sạch).</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hệ thống điều hòa không khí và thông gió (HVAC): Trong các tòa nhà văn phòng, trung tâm thương mại, khách sạn, chung cư, rạp chiếu phim, nhà hàng.<br>
Hệ thống hút khói, hút mùi: Bếp công nghiệp, nhà hàng, quán ăn.<br>
Hệ thống hút bụi và vận chuyển vật liệu: Các nhà máy sản xuất, xưởng gỗ, xưởng cơ khí.<br>
Hệ thống thông gió công nghiệp: Trong các khu công nghiệp, nhà xưởng, nơi cần xử lý lưu lượng khí lớn.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Kích thước: Đa dạng, được sản xuất theo đường kính của ống gió mà nó sẽ kết nối (ví dụ: D100mm, D200mm, D300mm, v.v.) và theo yêu cầu thiết kế của từng dự án.<br>
Độ dày vật liệu: Thường dao động từ 0.5 mm đến 1.2 mm hoặc dày hơn, tùy thuộc vào đường kính ống, áp suất hoạt động của hệ thống và yêu cầu kỹ thuật cụ thể.<br>
Kết nối: Các đầu của cút thường được thiết kế để kết nối với ống gió tròn bằng các phương pháp như ghép mí, dùng gioăng cao su, hoặc bắt vít, đảm bảo độ kín khít và chắc chắn cho hệ thống.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hiệu suất lưu thông khí cao: Dòng khí ít bị cản trở, giúp hệ thống hoạt động hiệu quả.<br>
Tiết kiệm năng lượng: Giảm tổn thất áp suất giúp giảm tải cho quạt.<br>
Giảm tiếng ồn: Tạo môi trường làm việc và sinh hoạt yên tĩnh hơn.<br>
Tính thẩm mỹ: Kết hợp với ống gió tròn, cút tròn mang lại vẻ đẹp hiện đại, tinh tế khi lắp đặt lộ thiên.<br>
Độ bền cao: Chống ăn mòn tốt, đặc biệt là loại inox, đảm bảo tuổi thọ lâu dài cho hệ thống.<br>
Dễ dàng vệ sinh: Bề mặt trơn nhẵn giúp hạn chế bám bụi và dễ dàng làm sạch.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-060',
    name: 'Cút vuông',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/phu-kien-ong-gio-cut-vuong.png',
    slug: 'phu-kien-ong-gio-cut-vuong',
    description:
      'Cút vuông là phụ kiện dùng để đổi hướng ống gió vuông/chữ nhật, giúp hệ thống ống gió linh hoạt và phù hợp với cấu trúc công trình.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất, giá thành hợp lý.<br>
Inox (201, 304): Dùng cho môi trường đặc biệt yêu cầu chống ăn mòn hoặc vệ sinh cao (ví dụ: hút khói bếp, hóa chất).</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Thay đổi hướng đường ống: Dẫn đường ống đi vòng qua các góc tường, dầm, cột, hoặc bất kỳ chướng ngại vật nào khác trong không gian lắp đặt.<br>
Phân nhánh hệ thống: Kết hợp với các phụ kiện khác như côn hoặc chạc để tạo ra các nhánh ống dẫn khí đến các khu vực khác nhau.<br>
Tối ưu hóa không gian: Giúp thiết kế hệ thống ống gió linh hoạt, phù hợp với mọi cấu trúc công trình.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Phụ thuộc vào kích thước của cút và áp suất làm việc của hệ thống. Tuân theo các tiêu chuẩn về độ dày tương tự như ống gió vuông.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-061',
    name: 'Chạc Y tròn',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/phu-kien-ong-gio-tron-chac-y.png',
    slug: 'phu-kien-ong-gio-tron-chac-y',
    description:
      'Chạc Y tròn dùng để chia hoặc gom luồng khí trong hệ ống gió tròn, tối ưu phân phối gió và thẩm mỹ khi lắp đặt lộ thiên.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Tôn mạ kẽm: Phổ biến nhất, có độ bền và khả năng chống ăn mòn tốt, giá thành hợp lý.<br>
Inox (thép không gỉ): Bao gồm Inox 201, 304, 316. Được sử dụng cho các môi trường yêu cầu vệ sinh cao, chống ăn mòn tuyệt đối (như nhà máy thực phẩm, dược phẩm, y tế, phòng sạch) hoặc môi trường khắc nghiệt.<br>
</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hệ thống thông gió và điều hòa không khí (HVAC): Cấp khí tươi, hồi khí cho các tòa nhà văn phòng, trung tâm thương mại, chung cư, nhà hàng, khách sạn.<br>
Hệ thống hút bụi: Trong các nhà xưởng, nhà máy sản xuất, xưởng gỗ, xưởng cơ khí để thu gom bụi bẩn từ nhiều vị trí về hệ thống lọc.<br>
Hệ thống hút khói, hút mùi: Nhà bếp công nghiệp, nhà hàng, quán ăn, nơi cần hút khói từ nhiều bếp về một đường ống chính.<br>
Các công trình yêu cầu tính thẩm mỹ: Khi hệ thống ống gió được lắp đặt lộ thiên và cần hòa hợp với kiến trúc nội thất.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng: Có hình dạng chữ "Y", với một đầu vào (ống chính) và hai đầu ra (ống nhánh), hoặc ngược lại. Tất cả ba đầu đều có tiết diện hình tròn.<br>
Góc rẽ nhánh: Các nhánh thường rẽ ra với một góc chếch so với ống chính, phổ biến nhất là 45 độ (như trong hình ảnh), giúp tối ưu hóa dòng chảy. Một số thiết kế có thể có góc khác tùy theo yêu cầu.<br>
Kích thước:<br>
Đường kính ống chính và đường kính các ống nhánh có thể bằng nhau (tê Y đều) hoặc khác nhau (tê Y giảm), tùy thuộc vào nhu cầu phân chia hoặc gom lưu lượng khí.<br>
Được sản xuất theo nhiều đường kính tiêu chuẩn và phi tiêu chuẩn theo yêu cầu của dự án.<br>
Độ dày vật liệu: Tùy thuộc vào đường kính ống và áp suất trong hệ thống, thường dao động từ 0.5mm đến 1.2mm hoặc dày hơn.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hiệu suất cao: Đảm bảo luồng khí được phân chia hoặc gom một cách hiệu quả, ít cản trở.<br>
Tiết kiệm năng lượng: Giảm tổn thất áp suất, giúp quạt hoạt động ổn định và tiết kiệm điện năng.<br>
Giảm tiếng ồn: Góp phần tạo môi trường yên tĩnh hơn cho không gian sử dụng.<br>
Tính thẩm mỹ: Thiết kế tròn và đường nét mềm mại phù hợp với các hệ thống ống gió tròn, đặc biệt khi lắp đặt lộ thiên trong các không gian hiện đại.<br>
Độ bền và tuổi thọ: Làm từ vật liệu chất lượng cao, có khả năng chống ăn mòn tốt.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-062',
    name: 'Chếch 45° ống tròn',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/phu-kien-ong-gio-tron-t45.png',
    slug: 'phu-kien-ong-gio-tron-t45',
    description:
      'Chếch 45° ống tròn dùng để chuyển hướng dòng khí một góc 45 độ, giúp tối ưu lưu thông khí và giảm tổn thất áp suất trong hệ thống ống gió tròn.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Chất liệu:<br>
Tôn mạ kẽm: Phổ biến nhất nhờ độ bền cao, khả năng chống ăn mòn và chi phí hợp lý. Thích hợp cho hầu hết các ứng dụng thông gió dân dụng và công nghiệp.<br>
Inox (thép không gỉ): Gồm các loại Inox 201, 304, 316. Được sử dụng trong các môi trường đặc biệt yêu cầu độ bền cao, chống ăn mòn tuyệt đối, khả năng chịu nhiệt và vệ sinh nghiêm ngặt (ví dụ: nhà máy thực phẩm, dược phẩm, y tế, phòng sạch).</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Chuyển hướng dòng khí: Đây là công dụng cơ bản nhất, giúp điều chỉnh hướng di chuyển của luồng không khí trong hệ thống ống gió một góc 45 độ. Điều này rất cần thiết khi đường ống cần vòng qua các vật cản, góc tường hoặc điều chỉnh hướng phân phối/thu hồi khí.<br>
Giảm tổn thất áp suất: So với việc sử dụng chếch 90 độ, chếch 45 độ giúp luồng khí chuyển hướng một cách mềm mại và từ từ hơn. Điều này giảm đáng kể sự hỗn loạn của dòng chảy, từ đó giảm thiểu tổn thất áp suất và giúp quạt hoạt động hiệu quả hơn, tiết kiệm năng lượng.<br>
Hạn chế tiếng ồn: Nhờ việc dòng khí ít bị va đập và hỗn loạn, chếch 45 độ cũng góp phần giảm tiếng ồn phát sinh trong quá trình vận hành hệ thống thông gió.<br>
Linh hoạt trong thiết kế và lắp đặt: Cho phép các kỹ sư và thợ thi công dễ dàng bố trí đường ống phù hợp với mọi không gian, đặc biệt là những nơi có nhiều chướng ngại vật hoặc khi cần đường đi uyển chuyển.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Hình dạng: Là một đoạn ống cong một góc 45 độ. Có thể là cút/chếch tròn (cho ống gió tròn) hoặc cút/chếch vuông (cho ống gió vuông/chữ nhật).<br>
Kích thước: Đa dạng, phụ thuộc vào đường kính ống gió mà nó kết nối. Các kích thước thông thường được sản xuất theo yêu cầu của từng dự án.<br>
Kết nối: Các đầu của chếch thường được thiết kế để kết nối với ống gió tròn bằng các phương pháp như ghép mí, dùng gioăng cao su, hoặc bắt vít, đảm bảo độ kín khít và chắc chắn cho hệ thống.<br>
Độ dày vật liệu: Thường dao động từ 0.5 mm đến 1.2 mm hoặc hơn, tùy thuộc vào đường kính ống, áp suất hệ thống và yêu cầu kỹ thuật cụ thể.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Hiệu quả lưu thông khí cao: Giảm thiểu ma sát và trở lực, đảm bảo luồng khí được phân phối đều và hiệu quả.<br>
Tiết kiệm năng lượng: Giảm tổn thất áp suất giúp quạt không phải làm việc quá tải, tiết kiệm điện năng.<br>
Giảm tiếng ồn: Tạo ra môi trường làm việc và sinh hoạt yên tĩnh hơn.<br>
Tính thẩm mỹ: Khi lắp đặt lộ thiên, chếch 45 độ ống gió tròn kết hợp với ống gió tròn mang lại vẻ đẹp hiện đại, tinh tế cho công trình.<br>
Độ bền cao: Được làm từ vật liệu chất lượng cao, có khả năng chống ăn mòn và chịu được điều kiện môi trường khắc nghiệt.</span></p>
  </div>
</div>
`,
  },
  {
    id: 'p-063',
    name: 'Tê tròn 90°',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/phu-kien-ong-gio-tron-t90.png',
    slug: 'phu-kien-ong-gio-tron-t90',
    description:
      'Tê tròn 90° dùng để phân nhánh hoặc gom khí theo góc vuông trong hệ thống ống gió tròn, phù hợp cho các không gian hẹp và bố trí phức tạp.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;">Tôn mạ kẽm: Phổ biến nhất do độ bền, khả năng chống gỉ sét và giá thành hợp lý.<br>
Inox (thép không gỉ): Bao gồm Inox 201, 304, 316. Được sử dụng cho các môi trường đòi hỏi vệ sinh cao, chống ăn mòn tuyệt đối như nhà máy thực phẩm, dược phẩm, y tế, phòng sạch.</p>
    <p style="text-align: left;">Phân phối khí trong không gian hẹp: Khi đường ống cần rẽ nhánh vuông góc với đường chính để đưa không khí đến các khu vực cụ thể.<br>
Hệ thống hút cục bộ: Dùng để gom khí từ các vị trí hút cụ thể (ví dụ: hút khói bếp, hút bụi máy móc) về đường ống chính.<br>
Các công trình dân dụng và công nghiệp: Được sử dụng rộng rãi từ các công trình nhỏ đến các nhà máy, nhà xưởng có yêu cầu phân phối khí theo nhiều hướng khác nhau.</p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;">Hình dạng: Có ba đầu nối đều có tiết diện hình tròn. Một đầu là đường ống chính, và hai đầu còn lại là các nhánh rẽ tạo góc vuông (90 độ) so với đường ống chính.<br>
Kích thước: Đa dạng, phụ thuộc vào đường kính của ống gió chính và các nhánh. Các kích thước được sản xuất theo yêu cầu thiết kế của hệ thống.<br>
Kết nối: Các đầu của Tê 90 độ tròn thường được kết nối với ống gió bằng các phương pháp như hàn, bích, hoặc dùng các khớp nối chuyên dụng và được làm kín bằng keo silicone hoặc gioăng cao su để tránh rò rỉ khí.<br>
Độ dày vật liệu: Thường từ 0.5 mm đến 1.2 mm hoặc hơn, tùy thuộc vào đường kính ống và áp suất trong hệ thống</p>
    <p style="text-align: left;">Tiết kiệm không gian: Phù hợp khi cần rẽ nhánh trong không gian hạn chế hoặc khi đường ống cần bám sát các bức tường, trần nhà.<br>
Linh hoạt trong bố trí: Cho phép hệ thống ống gió có thể thay đổi hướng đột ngột để tránh các cấu trúc hoặc thiết bị khác trong công trình.</p>
  </div>
</div>
`,
  },
  {
    id: 'p-064',
    name: 'Tiêu âm ống gió',
    category: 'Ống gió',
    price: 'Liên hệ',
    image: '/images/products/tieu-am-ong-gio.png',
    slug: 'tieu-am-ong-gio',
    description:
      'Bộ tiêu âm ống gió giúp giảm tiếng ồn trong hệ thống HVAC bằng cách hấp thụ và tán xạ sóng âm, cải thiện chất lượng âm thanh trong không gian sử dụng.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p>Bộ tiêu âm ống gió hoạt động dựa trên nguyên lý hấp thụ và phản xạ âm thanh. Khi sóng âm đi vào bộ tiêu âm, năng lượng âm thanh sẽ được hấp thụ bởi các vật liệu xốp, sợi khoáng, hoặc các tấm tiêu âm bên trong, đồng thời một phần sóng âm bị phản xạ và tán xạ, làm giảm cường độ âm thanh truyền ra ngoài.</p>
    <p>Thông tiêu âm ống gió thường có hình dạng hộp chữ nhật hoặc hình tròn, được cấu tạo bởi:</p>
    <ul>
      <li><b>Vỏ ngoài:</b> Làm bằng kim loại (tôn mạ kẽm, nhôm, thép không gỉ) để tạo độ cứng vững và bảo vệ vật liệu tiêu âm bên trong.</li>
      <li><b>Lõi tiêu âm (Baffles/Splitters):</b> Là các tấm hoặc khối vật liệu tiêu âm được sắp xếp song song hoặc theo hình zigzag bên trong vỏ. Các lõi này có thể có các khe hở hoặc lỗ để không khí đi qua.</li>
      <li><b>Vật liệu tiêu âm:</b> Được đặt bên trong các lõi tiêu âm, có khả năng hấp thụ năng lượng âm thanh.</li>
      <li><b>Lưới bảo vệ (Perforated Liner):</b> Một lớp lưới kim loại đục lỗ thường được sử dụng để bọc vật liệu tiêu âm, giúp bảo vệ vật liệu và ngăn chặn sự phát tán của sợi vật liệu vào luồng không khí.</li>
    </ul>
    <p>Thông tiêu âm ống gió được ứng dụng rộng rãi trong các hệ thống HVAC của:</p>
    <ul>
      <li><b>Tòa nhà văn phòng, chung cư:</b> Giảm tiếng ồn từ quạt, máy lạnh, và luồng gió.</li>
      <li><b>Bệnh viện, phòng sạch:</b> Đảm bảo môi trường yên tĩnh, đáp ứng các tiêu chuẩn về tiếng ồn nghiêm ngặt.</li>
      <li><b>Trung tâm thương mại, rạp chiếu phim:</b> Nâng cao trải nghiệm của khách hàng.</li>
      <li><b>Nhà máy, khu công nghiệp:</b> Giảm tiếng ồn từ các thiết bị công nghiệp truyền vào hệ thống thông gió.</li>
      <li><b>Phòng thu âm, phòng hội nghị:</b> Kiểm soát âm thanh, tránh tiếng ồn nhiễu.</li>
    </ul>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p>Các thông số cơ bản khi lựa chọn thông tiêu âm bao gồm:</p>
    <ul>
      <li><b>Kích thước ống gió:</b> Để chọn bộ tiêu âm có kích thước phù hợp.</li>
      <li><b>Mức độ giảm tiếng ồn yêu cầu:</b> Dựa trên tiêu chuẩn tiếng ồn của dự án hoặc yêu cầu cụ thể.</li>
      <li><b>Lưu lượng gió của hệ thống:</b> Đảm bảo bộ tiêu âm có thể xử lý lưu lượng gió mà không gây tắc nghẽn.</li>
      <li><b>Ngân sách và vật liệu:</b> Lựa chọn vật liệu phù hợp với môi trường lắp đặt và chi phí.</li>
    </ul>
    <h2>Ưu điểm</h2>
    <ul>
      <li><b>Giảm tiếng ồn hiệu quả:</b> Cải thiện chất lượng môi trường âm thanh trong các không gian sử dụng.</li>
      <li><b>Cải thiện chất lượng không khí:</b> Nhiều loại tiêu âm được thiết kế để không làm cản trở đáng kể lưu lượng không khí.</li>
      <li><b>Đa dạng về kích thước và hình dạng:</b> Phù hợp với nhiều loại ống gió và không gian lắp đặt khác nhau.</li>
      <li><b>Độ bền cao:</b> Thường được làm từ vật liệu kim loại và vật liệu tiêu âm chất lượng cao, có tuổi thọ dài.</li>
      <li><b>Dễ dàng lắp đặt và bảo trì:</b> Không yêu cầu quá nhiều công cụ hay kỹ năng đặc biệt.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 'p-065',
    name: 'Van OBD',
    category: 'Phụ kiện ống gió',
    price: 'Liên hệ',
    image: '/images/products/van-obd.png',
    slug: 'van-obd',
    description:
      'Van OBD là van điều chỉnh lưu lượng gió gắn sau cửa gió hoặc trong ống, giúp cân bằng và kiểm soát chính xác lưu lượng trong hệ HVAC.',
    details: `
<div class="tab-content">
  <div id="tab1" class="tab-pane active">
    <p style="text-align: left;"><span data-sheets-root="1">Vật liệu: Thường được làm từ nhôm định hình hoặc tôn mạ kẽm (GI).</span></p>
    <ul style="text-align: left;">
      <li><span data-sheets-root="1">Nhôm: Nhẹ, chống ăn mòn tốt, thường dùng cho các van lắp trực tiếp vào cửa gió.</span></li>
      <li><span data-sheets-root="1">Tôn mạ kẽm: Bền chắc, kinh tế, thường dùng cho các van lắp trong đường ống lớn.</span></li>
    </ul>
    <p style="text-align: left;"><span data-sheets-root="1">Kiểm soát lưu lượng gió cấp/hồi: Điều chỉnh lượng gió thổi vào phòng hoặc hút ra khỏi phòng để đạt được điều kiện nhiệt độ và thông thoáng mong muốn.<br>
Cân bằng hệ thống gió: Phân bổ lưu lượng gió đồng đều đến các khu vực khác nhau trong một tòa nhà, đảm bảo không có khu vực nào quá nóng hoặc quá lạnh.<br>
Điều áp: Duy trì áp suất không khí ổn định trong các khu vực cụ thể (ví dụ: phòng sạch).<br>
Ngắt/mở hoàn toàn luồng gió: Có thể đóng hoàn toàn để ngăn không khí đi qua hoặc mở hoàn toàn để cho phép lưu lượng tối đa.</span></p>
  </div>
</div>
`,
    specifications: `
<div class="tab-content">
  <div id="tab2" class="tab-pane">
    <p style="text-align: left;"><span data-sheets-root="1">Kích thước: Đa dạng, được sản xuất theo kích thước của cửa gió hoặc đường ống gió.</span></p>
    <p style="text-align: left;"><span data-sheets-root="1">Kiểm soát chính xác: Cho phép điều chỉnh lưu lượng gió một cách chính xác, giúp tối ưu hóa hiệu suất của hệ thống HVAC.<br>
Tiết kiệm năng lượng: Bằng cách kiểm soát lượng gió cung cấp, van OBD giúp tránh lãng phí năng lượng cho việc làm mát hoặc sưởi ấm không cần thiết.<br>
Tạo sự thoải mái: Đảm bảo nhiệt độ và luồng không khí đồng đều trong không gian, mang lại sự thoải mái cho người sử dụng.<br>
Giảm tiếng ồn: Thiết kế cánh đối xứng giúp giảm thiểu tiếng ồn và nhiễu loạn luồng khí so với các loại van khác.</span></p>
  </div>
</div>
`,
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
