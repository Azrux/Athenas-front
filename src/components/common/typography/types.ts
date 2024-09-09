import type { ReactNode } from "react";

export interface TypographyProps {
  type?: "title" | "subtitle" | "paragraph" | "caption" | "quote" | "error";
  children: ReactNode;
  className?: string;
}
