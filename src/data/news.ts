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
    title: 'Ống Gió Là Gì? Phân Loại, Cấu Tạo Và Ứng Dụng Chi Tiết',
    images: ['/images/news/ong-gio/1.jpg'],
    createdAt: '23/03/2026',
    slug: 'ong-gio-la-gi-phan-loai-cau-tao-ung-dung',
    category: ENewCategory.NEWS,
    tags: ['ỐNG GIÓ', 'HVAC', 'THÔNG GIÓ', 'ĐIỀU HÒA KHÔNG KHÍ'],
    paragraphs: [
      `Trong các hệ thống HVAC hiện đại, <strong>"ống gió"</strong> không chỉ là một thành phần kỹ thuật đơn thuần mà còn đóng vai trò như <strong>"mạch máu"</strong> vận chuyển không khí, ảnh hưởng trực tiếp đến chất lượng môi trường sống và hiệu suất vận hành của toàn bộ công trình. Vậy Ống gió là gì, cùng Ống Gió Đại Phong tìm hiểu ngay nhé!`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/1.jpg" alt="Ống Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Ống Gió Là Gì?</h2>
      <p>Ống gió (Duct) là hệ thống đường ống chuyên dùng để <strong>dẫn truyền và phân phối không khí</strong> trong các hệ thống thông gió, điều hòa không khí (HVAC). Chúng có thể vận chuyển không khí tươi, khí lạnh, khí nóng hoặc khí thải tùy theo mục đích sử dụng.</p>
      <blockquote class="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">Nói một cách dễ hiểu, nếu hệ thống HVAC là "trái tim", thì ống gió chính là "hệ tuần hoàn" giúp không khí luân chuyển liên tục và hiệu quả.</blockquote>
      <p>Trong thực tế, ống gió được thiết kế với nhiều hình dạng và vật liệu khác nhau để phù hợp với từng không gian lắp đặt và yêu cầu kỹ thuật cụ thể.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/2.jpg" alt="Cửa Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Vai Trò Của Ống Gió Trong Hệ Thống Thông Gió</h2>
      <p>Ống gió không chỉ đơn thuần là một đường dẫn khí, mà còn đảm nhiệm nhiều chức năng quan trọng:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li><strong>Cấp gió tươi:</strong> Đưa không khí sạch từ bên ngoài vào bên trong công trình, cải thiện chất lượng không khí.</li>
        <li><strong>Hút khí thải:</strong> Loại bỏ khí độc, bụi bẩn, mùi khó chịu ra khỏi không gian.</li>
        <li><strong>Điều hòa không khí:</strong> Phân phối khí lạnh hoặc khí nóng đồng đều đến các khu vực.</li>
      </ul>
      <p class="mt-3">Nhờ đó, hệ thống ống gió góp phần duy trì môi trường <strong>thoáng khí, an toàn và tiết kiệm năng lượng</strong> – yếu tố đặc biệt quan trọng trong các tòa nhà kín hoặc khu sản xuất.</p>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Cấu Tạo Ống Gió</h2>
      <p>Hiểu rõ cấu tạo ống gió không chỉ giúp bạn lựa chọn đúng sản phẩm mà còn tối ưu hiệu suất vận hành và chi phí lâu dài. Thực tế, một hệ thống ống gió đạt chuẩn luôn được cấu thành từ vật liệu phù hợp và các chi tiết liên kết chặt chẽ.</p>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">1. Thân ống gió</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Là phần chính, có thể làm từ tôn mạ kẽm, inox hoặc nhôm hợp kim, chịu trách nhiệm dẫn khí.</li>
        <li>Thiết kế dạng tròn, vuông hoặc chữ nhật tùy thuộc vào vị trí và lưu lượng gió yêu cầu.</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">2. Mối nối và phụ kiện</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Bao gồm co, tê, van gió, mặt bích, cửa gió, chụp hút, giúp thay đổi hướng luồng khí và kết nối các đoạn ống.</li>
        <li>Mối nối phải kín khí, đảm bảo không rò rỉ để duy trì áp suất ổn định trong hệ thống.</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">3. Lớp cách nhiệt <em>(nếu có)</em></h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Với ống gió cách nhiệt, phần thân ống được bọc thêm lớp bảo ôn bằng bông thủy tinh, cao su lưu hóa hoặc PU Foam.</li>
        <li>Giúp chống ngưng tụ nước, giảm thất thoát nhiệt và hạn chế tiếng ồn khi hệ thống vận hành.</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">4. Giá đỡ và hệ treo</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Hệ thống khung, giá treo bằng thép hoặc inox được lắp đặt cố định trên trần hoặc khung kết cấu.</li>
        <li>Giúp đảm bảo ống gió vận hành ổn định, không rung lắc, an toàn khi hoạt động lâu dài.</li>
      </ul>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/3.jpg" alt="Ống Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Vật Liệu Sản Xuất Ống Gió</h2>
      <p>Tùy theo môi trường sử dụng và yêu cầu kỹ thuật, ống gió được chế tạo từ nhiều loại vật liệu khác nhau:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li><strong>Tôn mạ kẽm:</strong> Phổ biến nhất nhờ giá thành hợp lý, chống ăn mòn tốt, phù hợp với đa số công trình.</li>
        <li><strong>Inox:</strong> Độ bền cao, chống gỉ tuyệt đối, thường dùng trong môi trường có độ ẩm cao hoặc yêu cầu vệ sinh nghiêm ngặt (thực phẩm, y tế).</li>
        <li><strong>Nhôm:</strong> Trọng lượng nhẹ, dễ thi công, thích hợp cho các hệ thống cần tính linh hoạt cao.</li>
      </ul>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Nguyên Lý Hoạt Động</h2>
      <p>Ống gió hoạt động dựa trên nguyên lý chênh lệch áp suất:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li>Không khí được quạt hoặc hệ thống HVAC tạo áp lực đẩy đi</li>
        <li>Luồng khí di chuyển trong ống theo hướng đã thiết kế</li>
        <li>Lưu lượng và tốc độ gió được kiểm soát thông qua kích thước và cấu trúc ống</li>
      </ul>
      <p class="mt-3">Sự cân bằng giữa <strong>áp suất – lưu lượng – ma sát</strong> chính là yếu tố quyết định hiệu quả của toàn bộ hệ thống.</p>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Phân Loại Ống Gió Phổ Biến</h2>
      <p>Trên thị trường hiện nay, ống gió được phân loại theo nhiều tiêu chí khác nhau. Việc hiểu rõ từng loại sẽ giúp bạn lựa chọn đúng giải pháp cho công trình.</p>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">Phân Loại Theo Hình Dạng</h3>
 
      <h4 class="font-bold text-gray-800 mt-4 mb-1">Ống Gió Vuông</h4>
      <p><strong>Đặc điểm:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Dạng hộp chữ nhật hoặc vuông</li>
        <li>Dễ lắp đặt sát trần, tiết kiệm không gian</li>
      </ul>
      <p class="mt-2"><strong>Ưu điểm:</strong> Tối ưu diện tích lắp đặt, phù hợp với công trình dân dụng.</p>
      <p class="mt-1"><strong>Nhược điểm:</strong> Tổn thất áp suất lớn hơn, khả năng lưu thông khí kém hơn ống tròn.</p>
 
      <h4 class="font-bold text-gray-800 mt-4 mb-1">Ống Gió Tròn</h4>
      <p><strong>Đặc điểm:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Dạng hình trụ tròn</li>
        <li>Ít góc cạnh, luồng khí di chuyển mượt hơn</li>
      </ul>
      <p class="mt-2"><strong>Ưu điểm:</strong> Hiệu suất lưu thông cao, giảm tiếng ồn và tổn thất áp suất.</p>
      <p class="mt-1"><strong>Nhược điểm:</strong> Chiếm không gian hơn khi lắp đặt, khó bố trí trong trần thấp.</p>
 
      <h4 class="font-bold text-gray-800 mt-4 mb-1">Ống Gió Mềm</h4>
      <p><strong>Tính linh hoạt:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Có thể uốn cong dễ dàng</li>
        <li>Phù hợp với không gian phức tạp</li>
      </ul>
      <p class="mt-2"><strong>Ứng dụng:</strong> Kết nối giữa các đoạn ống cứng, sử dụng trong hệ thống điều hòa dân dụng.</p>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">Phân Loại Theo Vật Liệu</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Ống gió tôn mạ kẽm:</strong> Phổ biến, chi phí thấp</li>
        <li><strong>Ống gió inox:</strong> Bền, chống ăn mòn cao</li>
        <li><strong>Ống gió nhôm:</strong> Nhẹ, linh hoạt</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">Phân Loại Theo Chức Năng</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Ống gió cấp:</strong> Đưa không khí sạch vào không gian</li>
        <li><strong>Ống gió hồi:</strong> Thu hồi không khí để tái xử lý</li>
        <li><strong>Ống gió hút:</strong> Loại bỏ khí thải, bụi bẩn</li>
      </ul>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/4.jpg" alt="Ống Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Ứng Dụng Của Ống Gió Trong Thực Tế</h2>
      <p>Ống gió xuất hiện ở hầu hết các lĩnh vực từ công nghiệp đến đời sống hàng ngày.</p>
 
      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Trong Công Nghiệp</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Nhà xưởng sản xuất</li>
        <li>Khu chế biến thực phẩm</li>
        <li>Nhà máy điện, hóa chất</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Trong Dân Dụng</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Nhà ở</li>
        <li>Chung cư</li>
        <li>Trung tâm thương mại</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Hệ Thống Điều Hòa Và Thông Gió</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Hệ thống HVAC tổng thể</li>
        <li>Hệ thống hút khói, phòng cháy chữa cháy</li>
      </ul>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Kinh Nghiệm Lựa Chọn Ống Gió Phù Hợp</h2>
      <p>Việc lựa chọn đúng loại ống gió sẽ giúp tiết kiệm chi phí và đảm bảo hiệu suất lâu dài.</p>
 
      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Chọn Theo Không Gian Lắp Đặt</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Không gian nhỏ → ống vuông</li>
        <li>Không gian lớn → ống tròn</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Chọn Theo Chi Phí</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Ngân sách thấp → tôn mạ kẽm</li>
        <li>Cao cấp → inox</li>
      </ul>
 
      <h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">Chọn Theo Hiệu Suất Sử Dụng</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Ưu tiên lưu lượng → ống tròn</li>
        <li>Ưu tiên tiết kiệm diện tích → ống vuông</li>
      </ul>`,

      `<image style="width: 100%; height: auto;" src="/images/news/ong-gio/5.jpg" alt="Ống Gió" />`,

      `<p class="mt-4">Vừa rồi, Đại Phong VN đã giúp bạn giải đáp “Ống gió là gì”, có thể thấy ống gió là thành phần không thể thiếu trong bất kỳ hệ thống thông gió hay điều hòa nào. Trong bối cảnh các công trình ngày càng yêu cầu cao về chất lượng không khí, đầu tư vào hệ thống ống gió phù hợp không còn là lựa chọn, mà là điều bắt buộc để đảm bảo môi trường sống và làm việc lý tưởng.</p>`,

      `<div class="mt-8 pt-6">
        <p class="font-bold text-gray-900 mb-3">Quý khách hàng muốn đặt hàng sản phẩm vui lòng liên hệ:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>CÔNG TY CỔ PHẦN CÔNG NGHIỆP ĐẠI PHONG VN</strong></li>
          <li><strong>Chuyên:</strong> Gia công, sản xuất ống thống thông gió, ống gió, máng điện, thang cáp, tủ điện, tủ bảng điện</li>
          <li><strong>Địa chỉ:</strong> Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An, TPHCM</li>
          <li><strong>Điện thoại:</strong> (+84) 937 299 828</li>
          <li><strong>Website:</strong> onggiodaiphong.com</li>
        </ul>
      </div>`,
    ],
    order: 1,
  },

  {
    id: 'cua-gio-la-gi-phan-loai-ung-dung',
    title: 'Cửa Gió Là Gì? Phân Loại Và Ứng Dụng Phổ Biến Nhất Hiện Nay',
    images: ['/images/news/cua-gio/1.jpg'],
    createdAt: '25/03/2026',
    slug: 'cua-gio-la-gi-phan-loai-ung-dung',
    category: ENewCategory.NEWS,
    tags: ['CỬA GIÓ', 'HVAC', 'THÔNG GIÓ', 'ĐIỀU HÒA KHÔNG KHÍ'],
    paragraphs: [
      `Trong các hệ thống thông gió và điều hòa không khí, <strong>cửa gió</strong> là một chi tiết tưởng chừng nhỏ nhưng lại đóng vai trò cực kỳ quan trọng trong việc phân phối và kiểm soát luồng không khí. Cùng Ống Gió Đại Phong tìm hiểu chi tiết ngay dưới đây!`,
      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/1.jpg" alt="Cửa Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Cửa Gió Là Gì?</h2>
      <p>Cửa gió là thiết bị được lắp đặt ở đầu ra hoặc đầu vào của hệ thống ống gió, có nhiệm vụ phân phối không khí sạch vào không gian và loại bỏ không khí ô nhiễm ra bên ngoài. Nhờ đó, không gian sống và làm việc luôn được duy trì ở trạng thái thông thoáng, dễ chịu.</p>
      <p class="mt-3">Không chỉ dừng lại ở chức năng lưu thông không khí, cửa gió còn góp phần:</p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>Điều hòa nhiệt độ trong phòng</li>
        <li>Kiểm soát luồng gió theo hướng mong muốn</li>
        <li>Tăng hiệu quả vận hành của toàn hệ thống HVAC</li>
      </ul>
      <p class="mt-3">Trong các công trình hiện đại như chung cư, trung tâm thương mại hay nhà máy sản xuất, cửa gió gần như là một thành phần không thể thiếu để đảm bảo chất lượng không khí đạt tiêu chuẩn.</p>`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Cửa Gió Cấp Là Gì?</h2>
      <p>Trong số các loại cửa gió, <strong>cửa gió cấp</strong> là dòng sản phẩm phổ biến và quan trọng nhất. Thiết bị này được thiết kế chuyên biệt để đưa không khí tươi hoặc khí đã xử lý đến những khu vực cần thiết.</p>
      <p class="mt-3">Đặc điểm dễ nhận thấy của cửa gió cấp là thường được lắp đặt tại:</p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>Khu vực đông người</li>
        <li>Không gian kín, ít lưu thông khí</li>
        <li>Nơi phát sinh nhiều nhiệt hoặc độ ẩm</li>
      </ul>
      <p class="mt-3">Cửa gió cấp không chỉ đơn thuần là đưa gió vào phòng, mà còn mang lại nhiều giá trị thiết thực:</p>
      <ul class="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Bổ sung oxy:</strong> Giúp duy trì môi trường sống lành mạnh</li>
        <li><strong>Ổn định nhiệt độ:</strong> Hỗ trợ hệ thống điều hòa hoạt động hiệu quả hơn</li>
        <li><strong>Tăng chất lượng không khí:</strong> Giảm cảm giác ngột ngạt, bí bách</li>
      </ul>
      <p class="mt-3">Nhờ vậy, không gian bên trong luôn đạt trạng thái cân bằng, góp phần cải thiện sức khỏe và nâng cao hiệu suất làm việc.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/2.jpg" alt="Cửa Gió" />`,

      `<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Các Loại Cửa Gió Phổ Biến Hiện Nay</h2>
      <p>Thị trường hiện nay cung cấp rất nhiều loại cửa gió với thiết kế và chức năng khác nhau. Dưới đây là những dòng sản phẩm được sử dụng rộng rãi nhất.</p>
 
      <h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">1. Cửa Gió Khuếch Tán Vuông</h3>
      <p>Đây là loại cửa gió quen thuộc trong các công trình dân dụng và thương mại.</p>
      <p class="mt-2"><strong>Đặc điểm nổi bật:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Thiết kế dạng vuông hoặc chữ nhật</li>
        <li>Luồng gió được phân tán đều ra nhiều hướng</li>
      </ul>
      <p class="mt-2"><strong>Ưu điểm:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Dễ lắp đặt và bảo trì</li>
        <li>Phù hợp với đa số trần nhà hiện nay</li>
        <li>Tăng khả năng phân bổ không khí đồng đều</li>
      </ul>
      <p class="mt-2">Loại cửa gió này thường được sử dụng để cấp gió hoặc hồi gió, giúp không gian luôn duy trì sự thông thoáng.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/3.jpg" alt="Cửa Gió" />`,

      `<h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">2. Cửa Gió Nan Z</h3>
      <p>Cửa gió nan Z được nhận diện qua các lá chắn xếp nghiêng theo hình chữ Z, mang lại hiệu quả cao trong việc bảo vệ hệ thống.</p>
      <p class="mt-2"><strong>Điểm mạnh đáng chú ý:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Ngăn nước mưa tạt vào bên trong</li>
        <li>Thường lắp đặt ở mặt ngoài công trình</li>
        <li>Độ bền cao, chịu được điều kiện thời tiết khắc nghiệt</li>
      </ul>
      <p class="mt-2">Ngoài ra, chi phí hợp lý cũng là lý do khiến loại cửa gió này được nhiều chủ đầu tư lựa chọn.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/4.jpg" alt="Cửa Gió" />`,

      `<h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">3. Cửa Gió Nan Đơn / Nan Đôi</h3>
      <p>Đây là dòng cửa gió có thiết kế linh hoạt, thường xuất hiện trong các không gian rộng.</p>
      <p class="mt-2"><strong>Đặc trưng thiết kế:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Các nan gió xếp song song</li>
        <li>Có thể là 1 lớp hoặc 2 lớp nan</li>
        <li>Hình dạng phổ biến: vuông hoặc chữ nhật</li>
      </ul>
      <p class="mt-2"><strong>Ứng dụng thực tế:</strong> Hệ thống hồi gió điều hòa, văn phòng, showroom, sảnh lớn.</p>
      <p class="mt-1">Loại cửa này giúp kiểm soát hướng gió tốt và đảm bảo lưu thông không khí ổn định.</p>`,

      `<image style="width: 100%; height: auto;" src="/images/news/cua-gio/5.jpg" alt="Cửa Gió" />`,

      `<h3 class="text-lg font-bold text-gray-800 mt-5 mb-2">4. Cửa Gió Khuếch Tán Tròn</h3>
      <p>Khác với các thiết kế truyền thống, cửa gió tròn mang lại tính thẩm mỹ cao và hiệu quả vận hành tốt. Với cấu trúc các vòng tròn đồng tâm, luồng gió được phân bổ đều theo mọi hướng, giúp giảm tổn thất áp suất đáng kể.</p>
      <p class="mt-2"><strong>Ưu điểm nổi bật:</strong></p>
      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Phân phối gió rộng và đều</li>
        <li>Giảm tiếng ồn khi vận hành</li>
        <li>Thiết kế hiện đại, phù hợp công trình cao cấp</li>
      </ul>
      <p class="mt-2">Loại cửa gió này thường được lắp đặt tại: nhà máy, trung tâm thương mại, không gian có trần cao.</p>`,

      `<p>Cửa gió tuy là một chi tiết nhỏ trong hệ thống thông gió, nhưng lại đóng vai trò then chốt trong việc điều phối và kiểm soát không khí. Việc lựa chọn đúng loại cửa gió không chỉ giúp tối ưu hiệu suất vận hành mà còn nâng cao chất lượng môi trường sống và làm việc.</p>
      <p class="mt-3">Trong bối cảnh các công trình ngày càng chú trọng đến tiêu chuẩn không khí, đầu tư vào hệ thống cửa gió phù hợp chính là giải pháp bền vững và lâu dài.</p>`,

      `<div class="mt-8 pt-6">
        <p class="font-bold text-gray-900 mb-3">Quý khách hàng muốn đặt hàng sản phẩm vui lòng liên hệ:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>CÔNG TY CỔ PHẦN CÔNG NGHIỆP ĐẠI PHONG VN</strong></li>
          <li><strong>Chuyên:</strong> Gia công, sản xuất ống thống thông gió, ống gió, máng điện, thang cáp, tủ điện, tủ bảng điện</li>
          <li><strong>Địa chỉ:</strong> Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An, TPHCM</li>
          <li><strong>Điện thoại:</strong> (+84) 937 299 828</li>
          <li><strong>Website:</strong> onggiodaiphong.com</li>
        </ul>
      </div>`,
    ],
    order: 2,
  },
];
