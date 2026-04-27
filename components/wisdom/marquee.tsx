"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  /** Duration in seconds for one full loop. Default 50. */
  speed?: number
}

/* ── Brand logos (simplified SVG, sized for marquee) ── */

const GoogleAdsLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2.25L16.5 13.75H3.5L10 2.25Z" fill="#FBBC05" />
    <circle cx="15" cy="14.5" r="3.5" fill="#34A853" />
    <rect x="1" y="11" width="7" height="7" rx="3.5" fill="#4285F4" />
  </svg>
)

const MetaAdsLogo = () => (
  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
    <path
      d="M1.5 8.5C1.5 10.7 2.8 12.5 4.5 12.5c.9 0 1.85-.8 2.75-2.2L9 7C8 5.1 6.8 4 5.2 4 3.1 4 1.5 6 1.5 8.5z"
      fill="#0866FF"
    />
    <path
      d="M9 7l2.2 3.8c.75 1.2 1.55 1.7 2.3 1.7 1.6 0 2.7-1.8 2.7-4 0-3.2-1.7-5.5-3.5-5.5-.95 0-1.85.6-2.7 1.8L9 7z"
      fill="#0866FF"
    />
    <path
      d="M16.2 3c-1 0-2 .9-2.7 2.5-.5 1.1-.7 2.3-.7 3 0 3 1.1 4.5 2.7 4.5C17 13 18 11 18 8.5 18 5.5 17.6 3 16.2 3z"
      fill="#0866FF"
    />
    <path
      d="M18 8.5c0 2.5.9 4.5 2 4.5s2-2 2-4.5-1-6-2-6-2 3.5-2 6z"
      fill="#0866FF"
    />
  </svg>
)

const LinkedInAdsLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect width="20" height="20" rx="4" fill="#0A66C2" />
    <rect x="4" y="7.5" width="3" height="8.5" fill="white" />
    <circle cx="5.5" cy="5" r="1.75" fill="white" />
    <path
      d="M9.5 7.5h3v1.4c.5-1 1.6-1.7 2.8-1.7 2.2 0 3.2 1.5 3.2 3.8V16H15V11.3c0-1.3-.5-2-1.6-2-1.2 0-1.9.8-1.9 2.2V16H9.5V7.5z"
      fill="white"
    />
  </svg>
)

const GA4Logo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="1" y="11" width="4" height="8" rx="1.5" fill="#F9AB00" />
    <rect x="8" y="6" width="4" height="13" rx="1.5" fill="#E37400" />
    <circle cx="17" cy="3" r="3" fill="#4285F4" />
    <path d="M14 3h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 3v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const GTMLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 1L18 5.5V14.5L10 19L2 14.5V5.5L10 1Z" fill="#8AB4F8" />
    <path d="M10 1L18 5.5L10 10L2 5.5L10 1Z" fill="#4285F4" />
    <path d="M10 10L18 5.5V14.5L10 19V10Z" fill="#1A73E8" />
    <rect x="7" y="7.5" width="2" height="7" rx="1" fill="white" />
    <rect x="11" y="7.5" width="2" height="7" rx="1" fill="white" />
  </svg>
)

const LookerLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="#4285F4" />
    <path
      d="M10 4a6 6 0 1 0 0 12A6 6 0 0 0 10 4zm0 9.5A3.5 3.5 0 1 1 10 6.5a3.5 3.5 0 0 1 0 7z"
      fill="white"
    />
    <circle cx="10" cy="10" r="1.5" fill="#4285F4" />
    <line x1="10" y1="4" x2="10" y2="1" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const AppsScriptLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect width="20" height="20" rx="4" fill="#34A853" />
    <path d="M5 7l3.5 3L5 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const SupabaseLogo = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
    <path
      d="M10.5 1L1 12h9l-2.5 7L17 8H8L10.5 1z"
      fill="url(#supabase-grad)"
      stroke="#3ECF8E"
      strokeWidth="0.5"
    />
    <defs>
      <linearGradient id="supabase-grad" x1="9" y1="1" x2="9" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3ECF8E" />
        <stop offset="1" stopColor="#249361" />
      </linearGradient>
    </defs>
  </svg>
)

const ClaudeLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="#CC785C" />
    <path
      d="M6 13.5C7.5 11 9 8 10 6c1 2 2.5 5 4 7.5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M7.5 11h5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const N8nLogo = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden="true">
    <text
      x="0"
      y="13"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="700"
      fontSize="14"
      fill="#EA4B71"
    >n8n</text>
  </svg>
)

const PLATFORMS = [
  { name: "Google Ads", Logo: GoogleAdsLogo },
  { name: "Meta Ads", Logo: MetaAdsLogo },
  { name: "LinkedIn Ads", Logo: LinkedInAdsLogo },
  { name: "GA4", Logo: GA4Logo },
  { name: "GTM", Logo: GTMLogo },
  { name: "Looker Studio", Logo: LookerLogo },
  { name: "Apps Script", Logo: AppsScriptLogo },
  { name: "Supabase", Logo: SupabaseLogo },
  { name: "Claude", Logo: ClaudeLogo },
  { name: "n8n", Logo: N8nLogo },
]

const LOOP = [...PLATFORMS, ...PLATFORMS]

export function Marquee({ className, speed = 50 }: MarqueeProps) {
  return (
    <div className={cn("wa-marquee", className)} aria-hidden="true">
      <div className="wa-marquee__track" style={{ animationDuration: `${speed}s` }}>
        {LOOP.map(({ name, Logo }, i) => (
          <span key={i} className="wa-marquee__logo-item">
            <span className="wa-marquee__dot" />
            <Logo />
            <span>{name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
