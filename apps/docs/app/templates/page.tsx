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
export default function Templates() {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("Studio");
  const [saved, setSaved] = useState(false);
  const [draft, setDraft] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review navigation", done: false },
    { id: 2, title: "Prepare release notes", done: true },
  ]);
  const [query, setQuery] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "Alex Chen", role: "Editor", active: true },
    { id: 2, name: "Minh Nguyen", role: "Admin", active: true },
    { id: 3, name: "Sam Rivera", role: "Viewer", active: false },
  ]);
  return (
    <div
      data-theme={theme}
      style={{
        minHeight: "100vh",
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <header>
        <a href="/">React UIKit</a>
        <Select
          label="Appearance"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </Select>
      </header>
      <main>
        <Heading level={1}>Application patterns</Heading>
        <Text>
          Original templates with local state. Changes reset on reload.
        </Text>
        <TabView defaultValue="settings">
          <TabList aria-label="Templates">
            <Tab value="settings">Settings</Tab>
            <Tab value="productivity">Productivity</Tab>
            <Tab value="admin">Administration</Tab>
          </TabList>
          <TabPanel value="settings">
            <div style={{ maxWidth: 440, margin: "2rem auto" }}>
              <Card>
                <Heading>Workspace settings</Heading>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSaved(true);
                  }}
                >
                  <TextField
                    label="Workspace name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setSaved(false);
                    }}
                    required
                  />
                  <Switch label="Notifications" defaultChecked />
                  <Switch label="Weekly report" />
                  <Button type="submit">Save settings</Button>
                  <p role="status">
                    {saved ? `Saved settings for ${name}` : ""}
                  </p>
                </form>
              </Card>
            </div>
          </TabPanel>
          <TabPanel value="productivity">
            <SplitView
              sidebar={
                <Sidebar label="Project summary">
                  <Heading level={3}>Studio project</Heading>
                  <Text>
                    {tasks.filter((t) => t.done).length} of {tasks.length} tasks
                    completed
                  </Text>
                </Sidebar>
              }
            >
              <Card>
                <Heading>Today’s work</Heading>
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
                    label="New task"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    required
                  />
                  <Button type="submit">Add task</Button>
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
                <Heading level={3}>Team members</Heading>
                <Text>{members.length} total</Text>
              </Card>
              <Card>
                <Heading level={3}>Active accounts</Heading>
                <Text>{members.filter((m) => m.active).length} active</Text>
              </Card>
            </GridView>
            <SearchField
              label="Search members"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Table label="Workspace members">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
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
                          {member.active ? "Active" : "Paused"}
                        </Badge>
                      </td>
                      <td>
                        <Button
                          variant="secondary"
                          aria-label={`${member.active ? "Pause" : "Activate"} ${member.name}`}
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
                          {member.active ? "Pause" : "Activate"}
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
