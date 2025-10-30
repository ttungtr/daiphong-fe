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
