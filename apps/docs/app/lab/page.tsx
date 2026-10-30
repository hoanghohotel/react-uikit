"use client";
import { useState } from "react";
import { Heading, Button, Text, Stack } from "@react-uikit/core";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Stepper,
  Calendar,
  CommandPalette,
  DataTable,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@react-uikit/core/interactive";
import { GlassSurface } from "@react-uikit/glass";
import { InteractiveGlassSurface } from "@react-uikit/glass/interactive";
export default function Lab() {
  const [status, setStatus] = useState("");
  const [opaque, setOpaque] = useState(false);
  return (
    <main>
      <a href="/">React UIKit</a>
      <Heading level={1}>Interaction laboratory</Heading>
      <Text>Explore production package exports with keyboard and touch.</Text>
      <Stack>
        <Popover>
          <PopoverTrigger className="uik-button">Open popover</PopoverTrigger>
          <PopoverContent aria-label="Project details">
            <p>Project details</p>
            <PopoverClose>Close popover</PopoverClose>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger className="uik-button">
            Project actions
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setStatus("Project duplicated")}>
              Duplicate project
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Archive project</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p role="status">{status}</p>
        <Stepper label="Guests" defaultValue={2} max={5} />
        <Calendar
          label="Booking date"
          initialMonth="2026-10-01"
          defaultValue="2026-10-30"
        />
        <CommandPalette
          commands={[
            {
              id: "create",
              label: "Create workspace",
              onSelect: () => setStatus("Workspace created"),
            },
          ]}
        />
        <Sheet>
          <SheetTrigger className="uik-button">Open sheet</SheetTrigger>
          <SheetContent>
            <SheetTitle>Project details</SheetTitle>
            <SheetDescription>Review this workspace.</SheetDescription>
            <SheetClose>Close sheet</SheetClose>
          </SheetContent>
        </Sheet>
        <DataTable
          label="Projects"
          rows={[
            { id: "a", name: "Studio", tasks: 12 },
            { id: "b", name: "Atlas", tasks: 3 },
          ]}
          getRowKey={(r) => r.id}
          columns={[
            {
              key: "name",
              header: "Project name",
              render: (r) => r.name,
              sortValue: (r) => r.name,
            },
            {
              key: "tasks",
              header: "Tasks",
              render: (r) => r.tasks,
              sortValue: (r) => r.tasks,
            },
          ]}
        />
        <Button onClick={() => setOpaque(!opaque)} aria-pressed={opaque}>
          Opaque glass fallback
        </Button>
        <GlassSurface opaque={opaque} data-testid="glass">
          Opaque fallback can be selected explicitly.
        </GlassSurface>
        <InteractiveGlassSurface
          interaction="interactive"
          level="enhanced"
          style={{ maxWidth: 400 }}
        >
          Move your pointer to explore the bounded highlight.
        </InteractiveGlassSurface>
      </Stack>
    </main>
  );
}
