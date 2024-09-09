import { useMemo, type FC } from "react";
import type { TypographyProps } from "./types";

const Typography: FC<TypographyProps> = ({
  type = "paragraph",
  children,
  className,
}) => {
  const defineTypography = useMemo(() => {
    switch (type) {
      case "title":
        return "text-2xl font-semibold";
      case "subtitle":
        return "text-lg font-semibold";
      case "paragraph":
        return "text-sm text-justify";
      case "quote":
        return "font-light text-sm italic";
      case "error":
        return "font-light text-xs text-danger";
      case "caption":
        return "text-xs text-default-400";
      default:
        return "text-sm";
    }
  }, [type]);

  return <div className={`${className} ${defineTypography}`}>{children}</div>;
};
export default Typography;
