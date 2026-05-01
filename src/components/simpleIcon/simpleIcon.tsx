// components/SimpleIcon.tsx
import type { SimpleIcon } from "simple-icons";

interface SimpleIconProps {
  icon: SimpleIcon;
  size?: number;
  color?: string;
  className?: string;
}

export function SimpleIcon({
  icon,
  size = 24,
  color = "currentColor",
  className,
}: SimpleIconProps) {
  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={icon.title}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
