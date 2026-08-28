import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size: "sm" | "md";
};

export function Button({ variant = "primary", ...rest }: ButtonProps) {
  return (
    <button
      data-variant={variant}
      style={{
        padding: "8px 16px",
        borderRadius: 4,
        border: "none",
        cursor: "pointer",
        color: variant === "primary" ? "#fff" : "#333",
        background: variant === "primary" ? "#0b6bcb" : "#e5e7eb",
      }}
      {...rest}
    />
  );
}