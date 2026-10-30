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
export function Demo() {
  const [theme, setTheme] = useState("light");
  const [saved, setSaved] = useState(false);
  const [volume, setVolume] = useState(40);
  return (
    <div data-theme={theme} className="preview">
      <section id="components">
        <p className="eyebrow">02 / COMPONENTS</p>
        <h2>Small details. Real interactions.</h2>
        <Select
          label="Preview appearance"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </Select>
        <div className="demo-grid">
          <Card>
            <h3>Your workspace</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSaved(true);
              }}
            >
              <TextField
                label="Workspace name"
                name="workspace"
                required
                defaultValue="Studio"
              />
              <TextArea
                label="Description"
                name="description"
                defaultValue="A place for thoughtful work."
              />
              <Switch label="Notifications" defaultChecked />
              <Checkbox label="Weekly summary" />
              <Button type="submit">Save preferences</Button>
              <p role="status">
                {saved ? "Preferences saved for this preview." : ""}
              </p>
            </form>
          </Card>
          <Card>
            <h3>Make it yours</h3>
            <SearchField label="Search example" placeholder="Try typing…" />
            <Slider
              label={`Volume: ${volume}%`}
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
            <ProgressBar label="Volume level" max={100} value={volume} />
            <p>Native inputs keep familiar browser interactions.</p>
          </Card>
        </div>
      </section>
      <section aria-labelledby="interaction-heading">
        <h2 id="interaction-heading">Keyboard-first interactions.</h2>
        <Dialog>
          <DialogTrigger className="uik-button">Open settings</DialogTrigger>
          <DialogContent>
            <DialogTitle>Workspace settings</DialogTitle>
            <DialogDescription>
              Explore focus management and keyboard navigation.
            </DialogDescription>
            <TextField label="Display name" defaultValue="Studio" />
            <Button onClick={() => setSaved(true)}>Apply settings</Button>
          </DialogContent>
        </Dialog>
        <TabView defaultValue="general" style={{ marginTop: 24 }}>
          <TabList aria-label="Settings sections">
            <Tab value="general">General</Tab>
            <Tab value="advanced">Advanced</Tab>
          </TabList>
          <TabPanel value="general">
            <p>General workspace preferences.</p>
          </TabPanel>
          <TabPanel value="advanced">
            <p>Advanced workspace preferences.</p>
          </TabPanel>
        </TabView>
      </section>
      <section id="glass">
        <p className="eyebrow">03 / LIQUID GLASS</p>
        <h2>A little depth.</h2>
        <div className="glass-stage">
          {(["subtle", "regular", "prominent"] as const).map((material) => (
            <GlassSurface key={material} material={material}>
              <strong>{material}</strong>
              <p>A floating surface with an opaque fallback.</p>
            </GlassSurface>
          ))}
        </div>
      </section>
    </div>
  );
}
