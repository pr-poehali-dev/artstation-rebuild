import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent =
    (icons as Record<string, LucideIcon>)[name] ||
    (icons as Record<string, LucideIcon>)[fallback];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
