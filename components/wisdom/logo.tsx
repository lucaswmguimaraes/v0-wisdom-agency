interface LogoProps {
  variant?: "mark" | "lockup"
  className?: string
}

export function Logo({ variant = "lockup", className }: LogoProps) {
  if (variant === "mark") {
    return <LogoMark className={className} />
  }

  return (
    <svg
      viewBox="0 0 260 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Wisdom Agency"
    >
      <rect width="48" height="48" rx="10" fill="#0B0F14" />
      <rect x="0.5" y="0.5" width="47" height="47" rx="9.5" stroke="#2A3340" />
      {/* W body — branco */}
      <path
        d="M8 12L15 36L21 21L26 36L32 12"
        stroke="#F7F9FC"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Extensão azul à direita — traço de identidade */}
      <path
        d="M32 12L36 23L40 12"
        stroke="#3B82F6"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="60"
        y="32"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.44"
        fill="#F7F9FC"
      >
        Wisdom
      </text>
      <text
        x="152"
        y="32"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="-0.22"
        fill="#8A94A6"
      >
        Agency
      </text>
    </svg>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="10" fill="#0B0F14" />
      <rect x="0.5" y="0.5" width="47" height="47" rx="9.5" stroke="#2A3340" />
      {/* W body — branco */}
      <path
        d="M8 12L15 36L21 21L26 36L32 12"
        stroke="#F7F9FC"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Extensão azul à direita */}
      <path
        d="M32 12L36 23L40 12"
        stroke="#3B82F6"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
