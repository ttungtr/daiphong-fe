# Popup Ứng Tuyển - Hướng Dẫn Sử Dụng

## Tổng Quan

Component popup ứng tuyển được thiết kế theo style tương tự như trong hình mẫu, bao gồm:

- Form thông tin cá nhân (từ trang liên hệ)
- Tính năng upload file với drag & drop
- Responsive design
- Validation và character counter
- Animation mượt mà với fade-in và slide-in effects

## Các Component

### 1. JobApplicationPopup

Component chính của popup ứng tuyển.

```tsx
import { JobApplicationPopup } from "@/components/common";

// Sử dụng cơ bản
<JobApplicationPopup
  isOpen={isOpen}
  onClose={handleClose}
  jobTitle="Kỹ sư MEP"
/>;
```

**Props:**

- `isOpen: boolean` - Trạng thái hiển thị popup
- `onClose: () => void` - Function đóng popup
- `jobTitle?: string` - Tiêu đề vị trí ứng tuyển (mặc định: "Vị trí ứng tuyển")

### 2. ApplyJobButton

Button có sẵn popup để mở form ứng tuyển.

```tsx
import { ApplyJobButton } from "@/components/common";

// Sử dụng cơ bản
<ApplyJobButton jobTitle="Kỹ sư MEP">Ứng tuyển ngay</ApplyJobButton>

// Với custom style
<ApplyJobButton
  jobTitle="Kỹ sư MEP"
  className="bg-blue-600 hover:bg-blue-700"
>
  Nộp đơn ứng tuyển
</ApplyJobButton>
```

**Props:**

- `jobTitle?: string` - Tiêu đề vị trí ứng tuyển
- `className?: string` - Custom CSS classes
- `children?: React.ReactNode` - Nội dung button

## Custom Hook

### usePopup

Hook để quản lý trạng thái popup.

```tsx
import { usePopup } from "@/hooks/use-popup";

const { isOpen, open, close, toggle } = usePopup();
```

**Returns:**

- `isOpen: boolean` - Trạng thái hiện tại
- `open: () => void` - Mở popup
- `close: () => void` - Đóng popup
- `toggle: () => void` - Chuyển đổi trạng thái

## Tính Năng

### Form Fields

- Họ và tên (bắt buộc)
- Số điện thoại (bắt buộc, validation pattern)
- Email (bắt buộc)
- Lời nhắn cho nhà tuyển dụng (tùy chọn, giới hạn 500 ký tự)

### File Upload

- Chọn file bằng button
- Drag & drop files
- Hiển thị danh sách files đã chọn
- Xóa file từ danh sách
- Hỗ trợ các định dạng: PDF, DOC, DOCX, JPG, JPEG, PNG

### Validation

- Required fields validation
- Email format validation
- Phone number pattern validation
- Character counter cho message field

### Styling

- Responsive design
- Blue theme (primary-blue-1) theo brand
- Smooth transitions và animations
- Focus states với màu xanh
- Hover effects với scale transform
- Fade-in và slide-in animations

## Sử Dụng Trong Trang

### Tích Hợp Vào Trang Tuyển Dụng

```tsx
import { ApplyJobButton } from "@/components/common";

export default function JobPositionPage() {
  return (
    <div>
      <h1>Kỹ sư MEP</h1>
      <p>Mô tả công việc...</p>

      <ApplyJobButton jobTitle="Kỹ sư MEP">Ứng tuyển ngay</ApplyJobButton>
    </div>
  );
}
```

### Sử Dụng Trong Trang Chi Tiết Vị Trí

```tsx
// Trong trang /tuyen-dung/vi-tri-tuyen-dung/[id]/page.tsx
<ApplyJobButton jobTitle={jobPosition.title}>Ứng tuyển</ApplyJobButton>
```

## Form Submission

Hiện tại form sử dụng Formspree để xử lý submission. Có thể customize bằng cách:

1. Thay đổi action URL trong form
2. Thêm custom validation
3. Xử lý file upload
4. Thêm loading states
5. Thêm success/error messages

## Dependencies

- `lucide-react` - Icons
- `react` - React hooks
- `tailwindcss` - Styling
