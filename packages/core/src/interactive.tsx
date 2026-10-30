"use client";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
export interface DialogContentProps extends ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> {
  closeLabel?: string;
}
export const DialogContent = forwardRef<
  ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(function DialogContent(
  { className = "", children, closeLabel = "Close dialog", ...props },
  ref,
) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="uik-overlay" />
      <DialogPrimitive.Content
        {...props}
        ref={ref}
        className={`uik-dialog ${className}`}
      >
        {children}
        <DialogPrimitive.Close
          className="uik-dialog-close"
          aria-label={closeLabel}
        >
          ×
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

export const TabView = TabsPrimitive.Root;
export const TabList = forwardRef<
  ComponentRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(function TabList({ className = "", ...props }, ref) {
  return (
    <TabsPrimitive.List
      {...props}
      ref={ref}
      className={`uik-tablist ${className}`}
    />
  );
});
export const Tab = forwardRef<
  ComponentRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(function Tab({ className = "", ...props }, ref) {
  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={ref}
      className={`uik-tab ${className}`}
    />
  );
});
export const TabPanel = TabsPrimitive.Content;
export * from "./state-controls";
export * from "./overlays";
export * from "./presentation";
export * from "./advanced";
export * from "./calendar";
