import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, Card, Heading, Switch, Text } from "@react-uikit/core";
import { GlassSurface } from "@react-uikit/glass";
import "./style.css";
function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  return (
    <main className="min-h-screen bg-background text-foreground p-8"
      data-theme={dark ? "dark" : "light"}
      style={{
        padding: 32,
        minHeight: "100vh",
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <Heading level={1}>React UIKit Playground</Heading>
      <Switch
        label="Dark appearance"
        checked={dark}
        onChange={(e) => setDark(e.target.checked)}
      />
      <Card>
        <Text>Count: {count}</Text>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </Card>
      <GlassSurface level="enhanced" style={{ marginTop: 24 }}>
        Shared glass surface
      </GlassSurface>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
