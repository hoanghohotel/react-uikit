"use client";
import { useState } from "react";
import {
  Button,
  Card,
  Heading,
  Text,
  Switch,
  TextField,
  Select,
  List,
  ListItem,
  Checkbox,
  Badge,
  SplitView,
  Sidebar,
  Table,
  SearchField,
  GridView,
} from "@react-uikit/core";
import { TabView, TabList, Tab, TabPanel } from "@react-uikit/core/interactive";
const vietnamese = {
  Appearance: "Giao diện",
  Light: "Sáng",
  Dark: "Tối",
  System: "Hệ thống",
  "Application patterns": "Mẫu ứng dụng",
  "Original templates with local state. Changes reset on reload.":
    "Các mẫu sử dụng trạng thái cục bộ. Thay đổi sẽ được đặt lại khi tải lại trang.",
  Templates: "Mẫu ứng dụng",
  Settings: "Cài đặt",
  Productivity: "Công việc",
  Administration: "Quản trị",
  "Workspace settings": "Cài đặt không gian",
  "Workspace name": "Tên không gian",
  Notifications: "Thông báo",
  "Weekly report": "Báo cáo hằng tuần",
  "Save settings": "Lưu cài đặt",
  "Project summary": "Tổng quan dự án",
  "Studio project": "Dự án Studio",
  "Today’s work": "Công việc hôm nay",
  "New task": "Công việc mới",
  "Add task": "Thêm công việc",
  "Team members": "Thành viên nhóm",
  "Active accounts": "Tài khoản hoạt động",
  "Search members": "Tìm thành viên",
  "Workspace members": "Thành viên không gian",
  Name: "Tên",
  Role: "Vai trò",
  Status: "Trạng thái",
  Action: "Thao tác",
  Active: "Hoạt động",
  Paused: "Tạm dừng",
  Pause: "Tạm dừng",
  Activate: "Kích hoạt",
  Editor: "Biên tập viên",
  Admin: "Quản trị viên",
  Viewer: "Người xem",
  "Review navigation": "Kiểm tra điều hướng",
  "Prepare release notes": "Chuẩn bị ghi chú phát hành",
} as const;
export function Templates({ locale = "en" }: { locale?: "en" | "vi" }) {
  const t = (text: keyof typeof vietnamese): string =>
    locale === "vi" ? vietnamese[text] : text;
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("Studio");
  const [saved, setSaved] = useState(false);
  const [draft, setDraft] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: t("Review navigation"), done: false },
    { id: 2, title: t("Prepare release notes"), done: true },
  ]);
  const [query, setQuery] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "Alex Chen", role: t("Editor"), active: true },
    { id: 2, name: "Minh Nguyen", role: t("Admin"), active: true },
    { id: 3, name: "Sam Rivera", role: t("Viewer"), active: false },
  ]);
  return (
    <div
      lang={locale}
      data-theme={theme}
      style={{
        minHeight: "100vh",
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <header>
        <a href="/">React UIKit</a>
        <a
          href={`/${locale === "en" ? "vi" : "en"}/templates/demo`}
          lang={locale === "en" ? "vi" : "en"}
        >
          {locale === "en" ? "Tiếng Việt" : "English"}
        </a>
        <Select
          label={t("Appearance")}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">{t("Light")}</option>
          <option value="dark">{t("Dark")}</option>
          <option value="system">{t("System")}</option>
        </Select>
      </header>
      <main>
        <Heading level={1}>{t("Application patterns")}</Heading>
        <Text>
          {t("Original templates with local state. Changes reset on reload.")}
        </Text>
        <TabView defaultValue="settings">
          <TabList aria-label={t("Templates")}>
            <Tab value="settings">{t("Settings")}</Tab>
            <Tab value="productivity">{t("Productivity")}</Tab>
            <Tab value="admin">{t("Administration")}</Tab>
          </TabList>
          <TabPanel value="settings">
            <div style={{ maxWidth: 440, margin: "2rem auto" }}>
              <Card>
                <Heading>{t("Workspace settings")}</Heading>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSaved(true);
                  }}
                >
                  <TextField
                    label={t("Workspace name")}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setSaved(false);
                    }}
                    required
                  />
                  <Switch label={t("Notifications")} defaultChecked />
                  <Switch label={t("Weekly report")} />
                  <Button type="submit">{t("Save settings")}</Button>
                  <p role="status">
                    {saved
                      ? `${locale === "vi" ? "Đã lưu cài đặt cho" : "Saved settings for"} ${name}`
                      : ""}
                  </p>
                </form>
              </Card>
            </div>
          </TabPanel>
          <TabPanel value="productivity">
            <SplitView
              sidebar={
                <Sidebar label={t("Project summary")}>
                  <Heading level={3}>{t("Studio project")}</Heading>
                  <Text>
                    {locale === "vi"
                      ? `Đã hoàn thành ${tasks.filter((t) => t.done).length}/${tasks.length} công việc`
                      : `${tasks.filter((t) => t.done).length} of ${tasks.length} tasks completed`}
                  </Text>
                </Sidebar>
              }
            >
              <Card>
                <Heading>{t("Today’s work")}</Heading>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (draft.trim()) {
                      setTasks([
                        ...tasks,
                        { id: Date.now(), title: draft.trim(), done: false },
                      ]);
                      setDraft("");
                    }
                  }}
                >
                  <TextField
                    label={t("New task")}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    required
                  />
                  <Button type="submit">{t("Add task")}</Button>
                </form>
                <List>
                  {tasks.map((task) => (
                    <ListItem key={task.id}>
                      <Checkbox
                        label={task.title}
                        checked={task.done}
                        onChange={(e) =>
                          setTasks(
                            tasks.map((t) =>
                              t.id === task.id
                                ? { ...t, done: e.target.checked }
                                : t,
                            ),
                          )
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </SplitView>
          </TabPanel>
          <TabPanel value="admin">
            <GridView style={{ marginBlock: "2rem" }}>
              <Card>
                <Heading level={3}>{t("Team members")}</Heading>
                <Text>
                  {locale === "vi"
                    ? `Tổng cộng ${members.length}`
                    : `${members.length} total`}
                </Text>
              </Card>
              <Card>
                <Heading level={3}>{t("Active accounts")}</Heading>
                <Text>
                  {members.filter((m) => m.active).length}{" "}
                  {locale === "vi" ? "đang hoạt động" : "active"}
                </Text>
              </Card>
            </GridView>
            <SearchField
              label={t("Search members")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Table label={t("Workspace members")}>
              <thead>
                <tr>
                  <th scope="col">{t("Name")}</th>
                  <th scope="col">{t("Role")}</th>
                  <th scope="col">{t("Status")}</th>
                  <th scope="col">{t("Action")}</th>
                </tr>
              </thead>
              <tbody>
                {members
                  .filter((m) =>
                    m.name.toLowerCase().includes(query.toLowerCase()),
                  )
                  .map((member) => (
                    <tr key={member.id}>
                      <td>{member.name}</td>
                      <td>{member.role}</td>
                      <td>
                        <Badge tone={member.active ? "success" : "neutral"}>
                          {member.active ? t("Active") : t("Paused")}
                        </Badge>
                      </td>
                      <td>
                        <Button
                          variant="secondary"
                          aria-label={`${member.active ? t("Pause") : t("Activate")} ${member.name}`}
                          onClick={() =>
                            setMembers(
                              members.map((m) =>
                                m.id === member.id
                                  ? { ...m, active: !m.active }
                                  : m,
                              ),
                            )
                          }
                        >
                          {member.active ? t("Pause") : t("Activate")}
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </TabPanel>
        </TabView>
      </main>
    </div>
  );
}
