import {
  forwardRef,
  type HTMLAttributes,
  type CSSProperties,
  type ReactNode,
  type ImgHTMLAttributes,
} from "react";
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: "default" | "secondary" | "destructive";
  size?: "body" | "callout" | "footnote" | "caption";
}
export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { tone = "default", size = "body", className = "", ...props },
  ref,
) {
  return (
    <p
      {...props}
      ref={ref}
      data-tone={tone}
      data-size={size}
      className={`uik-text ${className}`}
    />
  );
});
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ level = 2, ...props }, ref) {
    const Tag = `h${level}` as "h1";
    return <Tag {...props} ref={ref} />;
  },
);
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: CSSProperties["gap"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
}
export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { gap = "1rem", align, justify, style, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
    />
  );
});
export const Inline = forwardRef<HTMLDivElement, StackProps>(function Inline(
  { gap = ".75rem", align = "center", justify, style, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
    />
  );
});
export const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  function Divider({ className = "", ...props }, ref) {
    return <hr {...props} ref={ref} className={`uik-divider ${className}`} />;
  },
);
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "success" | "warning" | "destructive";
}
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone = "neutral", className = "", ...props },
  ref,
) {
  return (
    <span
      {...props}
      ref={ref}
      data-tone={tone}
      className={`uik-badge ${className}`}
    />
  );
});
export const Surface = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function Surface({ className = "", ...props }, ref) {
  return <div {...props} ref={ref} className={`uik-surface ${className}`} />;
});
export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  size?: CSSProperties["height"];
}
export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(function Spacer(
  { size = "1rem", style, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      aria-hidden="true"
      style={{ height: size, flexShrink: 0, ...style }}
    />
  );
});
export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}
export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  { className = "", alt, ...props },
  ref,
) {
  return (
    <img {...props} alt={alt} ref={ref} className={`uik-avatar ${className}`} />
  );
});
export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  action?: ReactNode;
}
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState({ title, description, action, ...props }, ref) {
    return (
      <div {...props} ref={ref}>
        <Heading level={3}>{title}</Heading>
        {description && <Text>{description}</Text>}
        {action}
      </div>
    );
  },
);
export const Skeleton = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(function Skeleton({ className = "", ...props }, ref) {
  return (
    <span
      {...props}
      ref={ref}
      aria-hidden="true"
      className={`uik-skeleton ${className}`}
    />
  );
});
export { Text as Typography };
