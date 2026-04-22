import Image from "next/image"

interface LogoProps {
  variant?: "mark" | "lockup"
  className?: string
}

export function Logo({ variant = "lockup", className }: LogoProps) {
  if (variant === "mark") {
    return (
      <Image 
        src="/logo-mark.svg" 
        alt="Wisdom Agency" 
        width={48} 
        height={48} 
        className={className}
      />
    )
  }
  
  return (
    <Image 
      src="/logo-lockup.svg" 
      alt="Wisdom Agency" 
      width={220} 
      height={48} 
      className={className}
      priority
    />
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
      <rect width="48" height="48" rx="10" fill="#0B0F14"/>
      <rect x="0.5" y="0.5" width="47" height="47" rx="9.5" stroke="#2A3340"/>
      <path d="M10 14 L17 34 L24 20 L31 34 L38 14" stroke="#F7F9FC" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31 34 L38 14" stroke="#3B82F6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
