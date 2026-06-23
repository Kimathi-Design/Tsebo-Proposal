import { DeckLogo } from "@/components/deck/DeckLogo";

type DeckHeroBrandProps = {
  size?: "default" | "large";
  className?: string;
  priority?: boolean;
};

export function DeckHeroBrand({
  size = "default",
  className = "",
  priority = false,
}: DeckHeroBrandProps) {
  const textSize = size === "large" ? "text-[96px]" : "text-[82px]";

  return (
    <div
      className={`flex items-center gap-4 leading-none ${textSize} ${className}`.trim()}
    >
      <DeckLogo
        variant="hero-inline"
        priority={priority}
        className="-translate-y-[10px]"
      />
      <p className="font-semibold tracking-tight gradient-text-teal">IMANI</p>
    </div>
  );
}
