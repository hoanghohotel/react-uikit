"use client";
import {
  forwardRef,
  useRef,
  useEffect,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type PointerEvent,
} from "react";
import { animate, type AnimationPlaybackControls } from "motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as Popover from "@radix-ui/react-popover";
import * as Toggle from "@radix-ui/react-toggle-group";
import { GlassSurface, type GlassSurfaceProps } from "./index";
export interface InteractiveGlassSurfaceProps extends GlassSurfaceProps {
  interaction?: "static" | "interactive";
}
export const InteractiveGlassSurface = forwardRef<
  HTMLDivElement,
  InteractiveGlassSurfaceProps
>(function InteractiveGlassSurface(
  { interaction = "static", onPointerMove, onPointerLeave, ...props },
  ref,
) {
  const animation = useRef<AnimationPlaybackControls | null>(null);
  useEffect(() => () => animation.current?.stop(), []);
  function move(event: PointerEvent<HTMLDivElement>) {
    onPointerMove?.(event);
    if (
      event.defaultPrevented ||
      interaction !== "interactive" ||
      event.pointerType !== "mouse" ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    animation.current?.stop();
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    event.currentTarget.style.setProperty(
      "--uik-light-x",
      `${Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100))}%`,
    );
    event.currentTarget.style.setProperty(
      "--uik-light-y",
      `${Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100))}%`,
    );
  }
  return (
    <GlassSurface
      {...props}
      ref={ref}
      onPointerMove={move}
      onPointerLeave={(event) => {
        onPointerLeave?.(event);
        animation.current?.stop();
        if (
          interaction === "interactive" &&
          !matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          animation.current = animate(
            event.currentTarget,
            { "--uik-light-x": "50%", "--uik-light-y": "0%" },
            { duration: 0.22, ease: "easeOut" },
          );
        } else {
          event.currentTarget.style.removeProperty("--uik-light-x");
          event.currentTarget.style.removeProperty("--uik-light-y");
        }
      }}
    />
  );
});
export const GlassSheet = Dialog.Root;
export const GlassSheetTrigger = Dialog.Trigger;
export const GlassSheetTitle = Dialog.Title;
export const GlassSheetDescription = Dialog.Description;
export const GlassSheetClose = Dialog.Close;
export const GlassSheetContent = forwardRef<
  ComponentRef<typeof Dialog.Content>,
  ComponentPropsWithoutRef<typeof Dialog.Content>
>(function GlassSheetContent({ className = "", ...props }, ref) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="uik-overlay" />
      <Dialog.Content
        {...props}
        ref={ref}
        className={`uik-glass uik-glass-sheet ${className}`}
      />
    </Dialog.Portal>
  );
});
export const GlassPopover = Popover.Root;
export const GlassPopoverTrigger = Popover.Trigger;
export const GlassPopoverClose = Popover.Close;
export const GlassPopoverContent = forwardRef<
  ComponentRef<typeof Popover.Content>,
  ComponentPropsWithoutRef<typeof Popover.Content>
>(function GlassPopoverContent(
  { className = "", sideOffset = 8, ...props },
  ref,
) {
  return (
    <Popover.Portal>
      <Popover.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={`uik-glass uik-glass-popover ${className}`}
      />
    </Popover.Portal>
  );
});
export interface GlassSegmentedControlProps extends Omit<
  Toggle.ToggleGroupSingleProps,
  "type" | "children"
> {
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
}
export const GlassSegmentedControl = forwardRef<
  HTMLDivElement,
  GlassSegmentedControlProps
>(function GlassSegmentedControl(
  { label, options, className = "", ...props },
  ref,
) {
  return (
    <Toggle.Root
      {...props}
      ref={ref}
      type="single"
      aria-label={label}
      className={`uik-glass uik-tablist ${className}`}
    >
      {options.map((option) => (
        <Toggle.Item
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          className="uik-segment"
        >
          {option.label}
        </Toggle.Item>
      ))}
    </Toggle.Root>
  );
});
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
export const GlassToolbar = forwardRef<
  ComponentRef<typeof ToolbarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>
>(function GlassToolbar({ className = "", ...props }, ref) {
  return (
    <ToolbarPrimitive.Root
      {...props}
      ref={ref}
      className={`uik-glass uik-toolbar ${className}`}
    />
  );
});
export const GlassToolbarButton = ToolbarPrimitive.Button;
