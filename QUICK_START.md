# 🚀 Hướng dẫn nhanh - Google Analytics 4 cho Đại Phong

## ✅ Đã hoàn thành

- ✅ Code đã được tích hợp sẵn
- ✅ Build thành công
- ✅ Measurement ID: `G-3XXG55DLFC`

## 🔧 Bước tiếp theo (5 phút)

### 1. Lấy Property ID từ GA4

1. Vào [Google Analytics](https://analytics.google.com)
2. Admin → Property Settings → **Property ID** (số, ví dụ: `123456789`)

### 2. Tạo Service Account (Google Cloud)

1. [Google Cloud Console](https://console.cloud.google.com)
2. IAM & Admin → Service Accounts → Create
3. Tên: `ga4-reader`
4. Tạo JSON key → download file
5. Copy `client_email` và `private_key` từ file JSON

### 3. Cấp quyền trong GA4

1. GA4 → Admin → Property Access Management
2. Add users → thêm email Service Account
3. Quyền: **Viewer**

### 4. Bật API

1. Google Cloud → APIs & Services → Library
2. Tìm "Analytics Data API" → Enable

### 5. Cấu hình Vercel

1. Vercel Dashboard → Project Settings → Environment Variables
2. Thêm 4 biến:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-3XXG55DLFC
   GA4_PROPERTY_ID=501666594
   GA4_CLIENT_EMAIL=philongweb@amiable-flames-469515-n8.iam.gserviceaccount.com
   GA4_PRIVATE_KEY=04f61dfeda1c9b391532ae88aaa0ef7b9af4c345
   ```
3. **Redeploy**

## 🎯 Kết quả

- ✅ GA4 tracking tự động
- ✅ Hiển thị lượt xem: `<PageViews className="text-sm" />`
- ✅ Demo component: `<PageViewsDemo />` (góc phải dưới)
- ✅ API: `/api/analytics/pageviews?path=/duong-dan`

## 📱 Test nhanh

1. Deploy lên production
2. Mở GA4 → Realtime → thấy page_view events
3. Trên website → thấy "X lượt xem" ở góc phải dưới

## 🔍 Troubleshooting

- **GA không tracking**: Kiểm tra Measurement ID và domain
- **API trả về 0**: Kiểm tra Service Account quyền và API đã enable
- **Build error**: `npm install` để cài dependencies

---

**Lưu ý**: GA chỉ hoạt động ở production (`NODE_ENV=production`), không ảnh hưởng SEO.
