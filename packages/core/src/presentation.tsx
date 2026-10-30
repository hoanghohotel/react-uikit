"use client";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import * as ContextPrimitive from "@radix-ui/react-context-menu";
import * as ToastPrimitive from "@radix-ui/react-toast";
import * as AlertPrimitive from "@radix-ui/react-alert-dialog";
export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;
export const SheetClose = Dialog.Close;
export interface SheetContentProps extends ComponentPropsWithoutRef<
  typeof Dialog.Content
> {
  side?: "start" | "end" | "bottom";
}
export const SheetContent = forwardRef<
  ComponentRef<typeof Dialog.Content>,
  SheetContentProps
>(function SheetContent({ side = "end", className = "", ...props }, ref) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="uik-overlay" />
      <Dialog.Content
        {...props}
        ref={ref}
        data-side={side}
        className={`uik-sheet ${className}`}
      />
    </Dialog.Portal>
  );
});
export const BottomSheet = Dialog.Root;
export const BottomSheetContent = forwardRef<
  ComponentRef<typeof Dialog.Content>,
  Omit<SheetContentProps, "side">
>(function BottomSheetContent(props, ref) {
  return <SheetContent {...props} side="bottom" ref={ref} />;
});
export const ActionSheet = AlertPrimitive.Root;
export const ActionSheetTrigger = AlertPrimitive.Trigger;
export const ActionSheetTitle = AlertPrimitive.Title;
export const ActionSheetDescription = AlertPrimitive.Description;
export const ActionSheetCancel = AlertPrimitive.Cancel;
export const ActionSheetAction = AlertPrimitive.Action;
export const ActionSheetContent = forwardRef<
  ComponentRef<typeof AlertPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AlertPrimitive.Content>
>(function ActionSheetContent({ className = "", ...props }, ref) {
  return (
    <AlertPrimitive.Portal>
      <AlertPrimitive.Overlay className="uik-overlay" />
      <AlertPrimitive.Content
        {...props}
        ref={ref}
        data-side="bottom"
        className={`uik-sheet ${className}`}
      />
    </AlertPrimitive.Portal>
  );
});
export const Toolbar = forwardRef<
  ComponentRef<typeof ToolbarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>
>(function Toolbar({ className = "", ...props }, ref) {
  return (
    <ToolbarPrimitive.Root
      {...props}
      ref={ref}
      className={`uik-toolbar ${className}`}
    />
  );
});
export const ToolbarButton = ToolbarPrimitive.Button;
export const ToolbarLink = ToolbarPrimitive.Link;
export const ToolbarSeparator = ToolbarPrimitive.Separator;
export const ContextMenu = ContextPrimitive.Root;
export const ContextMenuTrigger = ContextPrimitive.Trigger;
export const ContextMenuContent = forwardRef<
  ComponentRef<typeof ContextPrimitive.Content>,
  ComponentPropsWithoutRef<typeof ContextPrimitive.Content>
>(function ContextMenuContent({ className = "", ...props }, ref) {
  return (
    <ContextPrimitive.Portal>
      <ContextPrimitive.Content
        {...props}
        ref={ref}
        className={`uik-menu ${className}`}
      />
    </ContextPrimitive.Portal>
  );
});
export const ContextMenuItem = forwardRef<
  ComponentRef<typeof ContextPrimitive.Item>,
  ComponentPropsWithoutRef<typeof ContextPrimitive.Item>
>(function ContextMenuItem({ className = "", ...props }, ref) {
  return (
    <ContextPrimitive.Item
      {...props}
      ref={ref}
      className={`uik-menu-item ${className}`}
    />
  );
});
export const ToastProvider = ToastPrimitive.Provider;
export const Toast = forwardRef<
  ComponentRef<typeof ToastPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(function Toast({ className = "", ...props }, ref) {
  return (
    <ToastPrimitive.Root
      {...props}
      ref={ref}
      className={`uik-toast ${className}`}
    />
  );
});
export const ToastTitle = ToastPrimitive.Title;
export const ToastDescription = ToastPrimitive.Description;
export const ToastAction = ToastPrimitive.Action;
export const ToastClose = ToastPrimitive.Close;
export const ToastViewport = forwardRef<
  ComponentRef<typeof ToastPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(function ToastViewport({ className = "", ...props }, ref) {
  return (
    <ToastPrimitive.Viewport
      {...props}
      ref={ref}
      className={`uik-toast-viewport ${className}`}
    />
  );
});
