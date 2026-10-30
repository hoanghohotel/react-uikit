"use client";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as MenuPrimitive from "@radix-ui/react-dropdown-menu";
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;
export const PopoverContent = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(function PopoverContent({ className = "", sideOffset = 8, ...props }, ref) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={`uik-popover ${className}`}
      />
    </PopoverPrimitive.Portal>
  );
});
export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(function TooltipContent({ className = "", sideOffset = 6, ...props }, ref) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={`uik-tooltip ${className}`}
      />
    </TooltipPrimitive.Portal>
  );
});
export const DropdownMenu = MenuPrimitive.Root;
export const DropdownMenuTrigger = MenuPrimitive.Trigger;
export const DropdownMenuContent = forwardRef<
  ComponentRef<typeof MenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof MenuPrimitive.Content>
>(function DropdownMenuContent(
  { className = "", sideOffset = 6, ...props },
  ref,
) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={`uik-menu ${className}`}
      />
    </MenuPrimitive.Portal>
  );
});
export const DropdownMenuItem = forwardRef<
  ComponentRef<typeof MenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof MenuPrimitive.Item>
>(function DropdownMenuItem({ className = "", ...props }, ref) {
  return (
    <MenuPrimitive.Item
      {...props}
      ref={ref}
      className={`uik-menu-item ${className}`}
    />
  );
});
export const DropdownMenuSeparator = MenuPrimitive.Separator;
export const DropdownMenuLabel = MenuPrimitive.Label;
export const DropdownMenuCheckboxItem = forwardRef<
  ComponentRef<typeof MenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>
>(function DropdownMenuCheckboxItem(
  { className = "", children, ...props },
  ref,
) {
  return (
    <MenuPrimitive.CheckboxItem
      {...props}
      ref={ref}
      className={`uik-menu-item ${className}`}
    >
      <MenuPrimitive.ItemIndicator>✓ </MenuPrimitive.ItemIndicator>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
});
export {
  DropdownMenu as Menu,
  DropdownMenuTrigger as MenuTrigger,
  DropdownMenuContent as MenuContent,
  DropdownMenuItem as MenuItem,
};
