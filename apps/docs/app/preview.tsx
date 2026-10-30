"use client";
import { useState } from "react";
import {
  Button,
  Card,
  TextField,
  Switch,
  Select,
  Slider,
  ProgressBar,
  Checkbox,
  TextArea,
  SearchField,
} from "@react-uikit/core";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  TabView,
  TabList,
  Tab,
  TabPanel,
} from "@react-uikit/core/interactive";
import { GlassSurface } from "@react-uikit/glass";
const vietnamese: Record<string, string> = {
  "02 / COMPONENTS": "02 / THÀNH PHẦN",
  "Small details. Real interactions.": "Chi tiết nhỏ. Tương tác thực.",
  "Preview appearance": "Giao diện xem trước",
  Light: "Sáng",
  Dark: "Tối",
  System: "Hệ thống",
  "Your workspace": "Không gian làm việc",
  "Workspace name": "Tên không gian",
  Description: "Mô tả",
  "A place for thoughtful work.": "Nơi dành cho công việc có chủ đích.",
  Notifications: "Thông báo",
  "Weekly summary": "Tóm tắt hằng tuần",
  "Save preferences": "Lưu tùy chọn",
  "Preferences saved for this preview.": "Đã lưu tùy chọn cho bản xem trước.",
  "Make it yours": "Tùy chỉnh theo bạn",
  "Search example": "Tìm kiếm thử",
  "Try typing…": "Hãy nhập thử…",
  "Volume level": "Mức âm lượng",
  "Native inputs keep familiar browser interactions.":
    "Control chuẩn giữ tương tác quen thuộc của trình duyệt.",
  "Keyboard-first interactions.": "Tương tác ưu tiên bàn phím.",
  "Open settings": "Mở cài đặt",
  "Workspace settings": "Cài đặt không gian",
  "Explore focus management and keyboard navigation.":
    "Khám phá quản lý focus và điều hướng bằng bàn phím.",
  "Display name": "Tên hiển thị",
  "Apply settings": "Áp dụng cài đặt",
  "Settings sections": "Các mục cài đặt",
  General: "Chung",
  Advanced: "Nâng cao",
  "General workspace preferences.": "Tùy chọn chung của không gian.",
  "Advanced workspace preferences.": "Tùy chọn nâng cao của không gian.",
  "03 / LIQUID GLASS": "03 / LIQUID GLASS",
  "A little depth.": "Một chút chiều sâu.",
  "A floating surface with an opaque fallback.":
    "Bề mặt nổi có chế độ đục dự phòng.",
  "Close dialog": "Đóng hộp thoại",
  subtle: "nhẹ",
  regular: "tiêu chuẩn",
  prominent: "nổi bật",
  Volume: "Âm lượng",
};
export function Demo({ locale = "en" }: { locale?: "en" | "vi" }) {
  const t = (text: string) =>
    locale === "vi" ? (vietnamese[text] ?? text) : text;
  const [theme, setTheme] = useState("light");
  const [saved, setSaved] = useState(false);
  const [volume, setVolume] = useState(40);
  return (
    <div data-theme={theme} className="preview">
      <section id="components">
        <p className="eyebrow">{t("02 / COMPONENTS")}</p>
        <h2>{t("Small details. Real interactions.")}</h2>
        <Select
          label={t("Preview appearance")}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">{t("Light")}</option>
          <option value="dark">{t("Dark")}</option>
          <option value="system">{t("System")}</option>
        </Select>
        <div className="demo-grid">
          <Card>
            <h3>{t("Your workspace")}</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSaved(true);
              }}
            >
              <TextField
                label={t("Workspace name")}
                name="workspace"
                required
                defaultValue="Studio"
              />
              <TextArea
                label={t("Description")}
                name="description"
                defaultValue={t("A place for thoughtful work.")}
              />
              <Switch label={t("Notifications")} defaultChecked />
              <Checkbox label={t("Weekly summary")} />
              <Button type="submit">{t("Save preferences")}</Button>
              <p role="status">
                {saved ? t("Preferences saved for this preview.") : ""}
              </p>
            </form>
          </Card>
          <Card>
            <h3>{t("Make it yours")}</h3>
            <SearchField
              label={t("Search example")}
              placeholder={t("Try typing…")}
            />
            <Slider
              label={`${t("Volume")}: ${volume}%`}
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
            <ProgressBar label={t("Volume level")} max={100} value={volume} />
            <p>{t("Native inputs keep familiar browser interactions.")}</p>
          </Card>
        </div>
      </section>
      <section aria-labelledby="interaction-heading">
        <h2 id="interaction-heading">{t("Keyboard-first interactions.")}</h2>
        <Dialog>
          <DialogTrigger className="uik-button">
            {t("Open settings")}
          </DialogTrigger>
          <DialogContent closeLabel={t("Close dialog")}>
            <DialogTitle>{t("Workspace settings")}</DialogTitle>
            <DialogDescription>
              {t("Explore focus management and keyboard navigation.")}
            </DialogDescription>
            <TextField label={t("Display name")} defaultValue="Studio" />
            <Button onClick={() => setSaved(true)}>
              {t("Apply settings")}
            </Button>
          </DialogContent>
        </Dialog>
        <TabView defaultValue="general" style={{ marginTop: 24 }}>
          <TabList aria-label={t("Settings sections")}>
            <Tab value="general">{t("General")}</Tab>
            <Tab value="advanced">{t("Advanced")}</Tab>
          </TabList>
          <TabPanel value="general">
            <p>{t("General workspace preferences.")}</p>
          </TabPanel>
          <TabPanel value="advanced">
            <p>{t("Advanced workspace preferences.")}</p>
          </TabPanel>
        </TabView>
      </section>
      <section id="glass">
        <p className="eyebrow">{t("03 / LIQUID GLASS")}</p>
        <h2>{t("A little depth.")}</h2>
        <div className="glass-stage">
          {(["subtle", "regular", "prominent"] as const).map((material) => (
            <GlassSurface key={material} material={material}>
              <strong>{t(material)}</strong>
              <p>{t("A floating surface with an opaque fallback.")}</p>
            </GlassSurface>
          ))}
        </div>
      </section>
    </div>
  );
}
