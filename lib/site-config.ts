// Configuração central de CTAs de conversão.
// BOOKING_URL: link público da Booking Page do Google Calendar.
// Enquanto vazio, os CTAs de agendamento caem no formulário (#contact).
export const BOOKING_URL = ""

export const isBookingExternal = BOOKING_URL.length > 0
export const bookingHref = isBookingExternal ? BOOKING_URL : "/#contact"

// Labels mudam junto com o destino para não prometer grade de horários antes do link existir
export const bookingCtaLabels = {
  hero: isBookingExternal ? "Escolher horário do diagnóstico" : "Agendar diagnóstico gratuito",
  header: "Agendar agora",
  preContact: isBookingExternal ? "Ver horários disponíveis" : "Agendar diagnóstico gratuito",
}

export const WHATSAPP_NUMBER = "5511987337655"
export const whatsappUrl =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent("Oi, vim pelo site da Wisdom Agency e quero o diagnóstico gratuito de mídia paga!")

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

// Evento de agendamento — só dispara quando o CTA aponta para a booking page real
export function trackBookingClick(location: string) {
  if (!isBookingExternal || typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: "wisdom_booking_click", cta_location: location })
}

// Clique no WhatsApp antes do formulário (sem dados de lead)
export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: "wisdom_whatsapp_click", cta_location: location })
}
