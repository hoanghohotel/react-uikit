"use client";
import * as Primitive from "@radix-ui/react-dialog";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
export const Dialog = Primitive.Root;
export const DialogTrigger = Primitive.Trigger;
export const DialogTitle = Primitive.Title;
export const DialogDescription = Primitive.Description;
export const DialogClose = Primitive.Close;
export const DialogContent = forwardRef<
  ComponentRef<typeof Primitive.Content>,
  ComponentPropsWithoutRef<typeof Primitive.Content>
>(function DialogContent({ children, style, ...props }, ref) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay
        style={{
          position: "fixed",
          inset: 0,
          background: "#0007",
          zIndex: 1000,
        }}
      />
      <Primitive.Content
        {...props}
        ref={ref}
        style={{
          position: "fixed",
          zIndex: 1001,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "min(480px,calc(100vw - 32px))",
          maxHeight: "85dvh",
          overflow: "auto",
          padding: 24,
          borderRadius: "var(--uik-radius)",
          background: "var(--uik-surface)",
          color: "var(--uik-foreground)",
          ...style,
        }}
      >
        {children}
      </Primitive.Content>
    </Primitive.Portal>
  );
});
