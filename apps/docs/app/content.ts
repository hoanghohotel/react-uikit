export const sections = {
  introduction: {
    en: [
      "Introduction",
      "An independent React design system",
      "React UIKit combines native web semantics, Radix interactions and adaptive materials. It is not affiliated with Apple.",
    ],
    vi: [
      "Giới thiệu",
      "Hệ thống thiết kế React độc lập",
      "React UIKit kết hợp ngữ nghĩa web, tương tác Radix và vật liệu thích ứng. Dự án không liên kết với Apple.",
    ],
  },
  "getting-started": {
    en: [
      "Getting started",
      "Start with a working workspace",
      "Use Node 24 and pnpm 11. Run pnpm install --frozen-lockfile, then pnpm build. Start the docs with pnpm --filter @react-uikit/docs dev.",
    ],
    vi: [
      "Bắt đầu",
      "Khởi chạy workspace",
      "Dùng Node 24 và pnpm 11. Chạy pnpm install --frozen-lockfile, sau đó pnpm build. Khởi chạy tài liệu bằng pnpm --filter @react-uikit/docs dev.",
    ],
  },
  installation: {
    en: [
      "Installation",
      "Two ownership models",
      "Use workspace packages for shared updates, or the local CLI to own component source. Packages are not published yet. The CLI adds button, switch and glass-button without overwriting modified files.",
    ],
    vi: [
      "Cài đặt",
      "Hai cách sử dụng",
      "Dùng gói workspace để nhận cập nhật chung hoặc CLI cục bộ để sở hữu mã nguồn. Các gói chưa được xuất bản. CLI thêm button, switch và glass-button mà không ghi đè tệp đã chỉnh sửa.",
    ],
  },
  theming: {
    en: [
      "Theming",
      "Light, dark, or system",
      "Set data-theme to light, dark or system on html or a local container. Portalled overlays inherit the document theme. Use logical properties for right-to-left layouts.",
    ],
    vi: [
      "Giao diện",
      "Sáng, tối hoặc hệ thống",
      "Đặt data-theme thành light, dark hoặc system trên html hoặc vùng riêng. Overlay qua portal kế thừa giao diện tài liệu. Dùng thuộc tính CSS logic cho bố cục từ phải sang trái.",
    ],
  },
  tokens: {
    en: [
      "Design tokens",
      "Semantic values, shared everywhere",
      "Import theme.css once. Tailwind v4 users can also import tailwind.css after Tailwind. Colors, typography, spacing, shapes and motion have semantic custom properties.",
    ],
    vi: [
      "Design token",
      "Giá trị ngữ nghĩa dùng chung",
      "Nhập theme.css một lần. Người dùng Tailwind v4 có thể nhập thêm tailwind.css sau Tailwind. Màu sắc, chữ, khoảng cách và chuyển động có biến CSS ngữ nghĩa.",
    ],
  },
  typography: {
    en: [
      "Typography",
      "Readable at every scale",
      "Use system fonts and relative sizes. Heading supports levels one through six; Text supports body, callout, footnote and caption. Preserve logical heading order.",
    ],
    vi: [
      "Kiểu chữ",
      "Dễ đọc ở mọi kích thước",
      "Sử dụng phông hệ thống và kích thước tương đối. Heading hỗ trợ cấp một đến sáu; Text hỗ trợ body, callout, footnote và caption. Giữ thứ tự tiêu đề hợp lý.",
    ],
  },
  colors: {
    en: [
      "Colors",
      "Contrast is part of the API",
      "Use foreground on background and surfaces; reserve primary for actions. Semantic success, warning and destructive tokens adjust with appearance.",
    ],
    vi: [
      "Màu sắc",
      "Độ tương phản là một phần của API",
      "Dùng foreground trên nền và bề mặt; dành primary cho hành động. Token success, warning và destructive thay đổi theo giao diện.",
    ],
  },
  components: {
    en: [
      "Components",
      "Composable building blocks",
      "Native form controls forward refs and standard attributes. Complex interactions are exported from @react-uikit/core/interactive. Use labelled controls and provide dialog titles.",
    ],
    vi: [
      "Thành phần",
      "Các khối có thể kết hợp",
      "Control biểu mẫu chuyển tiếp ref và thuộc tính chuẩn. Tương tác phức tạp được xuất từ @react-uikit/core/interactive. Đặt nhãn cho control và tiêu đề cho dialog.",
    ],
  },
  glass: {
    en: [
      "Liquid Glass",
      "Use materials with restraint",
      "Glass is intended for floating controls and transient surfaces. Basic mode uses CSS blur; enhanced mode adds a bounded highlight. Opaque mode and preference-based fallbacks preserve readability.",
    ],
    vi: [
      "Liquid Glass",
      "Dùng vật liệu có chọn lọc",
      "Glass dành cho control nổi và bề mặt tạm thời. Chế độ cơ bản dùng CSS blur; nâng cao thêm vùng sáng. Chế độ đục và fallback theo tùy chọn người dùng giữ nội dung dễ đọc.",
    ],
  },
  accessibility: {
    en: [
      "Accessibility",
      "Native semantics first",
      "Chromium checks cover keyboard navigation, dialog focus, theme contrast and axe scans of the documented demos. This is not a blanket compliance certification; screen-reader and cross-browser reviews remain necessary.",
    ],
    vi: [
      "Khả năng truy cập",
      "Ưu tiên ngữ nghĩa chuẩn",
      "Kiểm thử Chromium bao phủ bàn phím, focus dialog, tương phản và axe cho demo. Đây không phải chứng nhận toàn diện; vẫn cần đánh giá trình đọc màn hình và nhiều trình duyệt.",
    ],
  },
  templates: {
    en: [
      "Templates",
      "Build from shared components",
      "Settings, productivity and administration patterns demonstrate adaptive layouts using real library components. Use original content and your own branding.",
    ],
    vi: [
      "Mẫu ứng dụng",
      "Xây dựng từ thành phần dùng chung",
      "Mẫu cài đặt, năng suất và quản trị minh họa bố cục thích ứng bằng component thực. Dùng nội dung và thương hiệu của bạn.",
    ],
  },
  changelog: {
    en: [
      "Changelog",
      "Development preview 0.1",
      "Workspace foundations, native controls, Radix overlays, an incremental source CLI, and production browser tests are implemented. No npm release has been published.",
    ],
    vi: [
      "Nhật ký thay đổi",
      "Bản phát triển 0.1",
      "Đã triển khai workspace, control chuẩn, overlay Radix, CLI cài bổ sung và kiểm thử trình duyệt. Chưa phát hành lên npm.",
    ],
  },
} as const;
export type Locale = "en" | "vi";
export type Section = keyof typeof sections;
