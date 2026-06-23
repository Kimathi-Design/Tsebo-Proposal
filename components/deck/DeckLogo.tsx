import Image from "next/image";

type DeckLogoProps = {
  variant?: "hero-inline" | "corner" | "nav" | "badge";
  className?: string;
  priority?: boolean;
};

/** IMANI logo — aspect ratio from source asset (3112×2672) */
const LOGO_ASPECT = 3112 / 2672;

/** PNG has padding — scale so wordmark matches adjacent headline cap height */
const HERO_INLINE_EM = 1.45;

export function DeckLogo({
  variant = "corner",
  className = "",
  priority = false,
}: DeckLogoProps) {
  const height =
    variant === "hero-inline"
      ? Math.round(88 * HERO_INLINE_EM)
      : variant === "nav"
        ? 28
        : variant === "badge"
          ? 14
          : 44;
  const width = Math.round(height * LOGO_ASPECT);

  const sizeClass =
    variant === "hero-inline"
      ? "h-[1.05em] w-auto shrink-0"
      : variant === "nav"
        ? "h-7 w-auto shrink-0"
        : variant === "badge"
          ? "h-3.5 w-auto shrink-0"
          : "h-11 w-auto opacity-90";

  return (
    <Image
      src="/logo.png"
      alt=""
      width={width}
      height={height}
      priority={priority || variant === "hero-inline"}
      aria-hidden={variant === "hero-inline"}
      className={`${sizeClass} ${className}`.trim()}
    />
  );
}
