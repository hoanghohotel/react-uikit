import React from "react";
import * as G from "../../packages/glass/src/index";
export default {
  title: "Liquid Glass/GlassButton",
  component: G.GlassButton,
  tags: ["autodocs"],
};
function Counter() {
  const [n, setN] = React.useState(0);
  return <G.GlassButton onClick={() => setN(n + 1)}>Count: {n}</G.GlassButton>;
}
export const Default = {
  render: () => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <Counter />
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };
