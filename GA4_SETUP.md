# Hướng dẫn cấu hình Google Analytics 4 cho Đại Phong Corp

## 1. Thông tin hiện tại

- **Measurement ID**: `G-3XXG55DLFC` ✅ (đã có)
- **Domain**: philongcorp.vn (deploy trên Vercel)

## 2. Cấu hình Google Analytics 4

### 2.1. Lấy Property ID

1. Vào [Google Analytics](https://analytics.google.com)
2. Chọn Property của bạn
3. Admin → Property Settings → **Property ID** (số, ví dụ: `123456789`)

### 2.2. Tạo Service Account để đọc dữ liệu

1. Vào [Google Cloud Console](https://console.cloud.google.com)
2. Tạo project mới hoặc chọn project có sẵn
3. **IAM & Admin** → **Service Accounts** → **Create Service Account**
4. Đặt tên: `ga4-data-reader`
5. Tạo **JSON key** → download file JSON
6. Mở file JSON, copy:
   - `client_email`
   - `private_key` (giữ nguyên format với `\n`)

### 2.3. Cấp quyền Service Account trong GA4

1. Vào GA4 → Admin → **Property Access Management**
2. **Add users** → thêm email Service Account
3. Quyền: **Viewer**

### 2.4. Bật Analytics Data API

1. Google Cloud Console → **APIs & Services** → **Library**
2. Tìm **Analytics Data API** → **Enable**

## 3. Cấu hình biến môi trường

### 3.1. Local development (.env.local)

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-3XXG55DLFC
GA4_PROPERTY_ID=501666594
GA4_CLIENT_EMAIL=philongweb@amiable-flames-469515-n8.iam.gserviceaccount.com
GA4_PRIVATE_KEY=04f61dfeda1c9b391532ae88aaa0ef7b9af4c345
```

### 3.2. Vercel Production

1. Vercel Dashboard → Project Settings → **Environment Variables**
2. Thêm 4 biến trên
3. **Redeploy** project

## 4. Kiểm tra hoạt động

### 4.1. Tracking pageviews

- Deploy lên production
- Mở GA4 → **Realtime** → **Events**
- Refresh trang web → thấy `page_view` events

### 4.2. Hiển thị lượt xem

- Component `PageViews` đã sẵn sàng
- Sử dụng: `<PageViews className="text-sm text-gray-600" />`
- API: `/api/analytics/pageviews?path=/duong-dan-trang`

## 5. Các file đã được tạo/cập nhật

### Components

- `src/components/common/google-analytics.tsx` - GA4 tracking script
- `src/components/common/pageviews.tsx` - Hiển thị lượt xem
- `src/components/common/index.ts` - Export components

### API

- `src/app/api/analytics/pageviews/route.ts` - API đọc GA4 data

### Layout

- `src/app/layout.tsx` - Đã thêm GoogleAnalytics component

### Dependencies

- `package.json` - Đã thêm `@google-analytics/data`

## 6. Lưu ý quan trọng

### SEO Safe

- GA script load `afterInteractive` → không ảnh hưởng SEO
- Chỉ chạy ở production (`NODE_ENV=production`)
- Không chặn SSR/rendering

### Performance

- API có cache `no-store` → luôn fresh data
- Có thể thêm cache nếu cần (Redis, Vercel KV)

### Privacy

- Tuân thủ GDPR/CCPA nếu cần
- Có thể thêm Consent Mode sau

## 7. Troubleshooting

### GA không tracking

- Kiểm tra Measurement ID đúng
- Đảm bảo domain được thêm trong GA4
- Check browser console có lỗi gì

### API trả về 0 pageviews

- Kiểm tra Service Account có quyền Viewer
- Đảm bảo Analytics Data API đã enable
- Check GA4 có dữ liệu từ 2024-01-01

### Build error

- `npm install` để cài dependencies
- Kiểm tra TypeScript types
