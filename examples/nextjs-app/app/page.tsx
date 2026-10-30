import { Heading, Text, Card } from "@react-uikit/core";
import { Counter } from "./counter";
export default function Page() {
  return (
    <main>
      <Heading level={1}>Next.js consumer</Heading>
      <Card>
        <Text>Server-rendered components with a client counter.</Text>
        <Counter />
      </Card>
    </main>
  );
}
