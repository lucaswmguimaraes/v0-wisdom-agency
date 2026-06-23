import { NextRequest, NextResponse } from "next/server"
import { createHash } from "crypto"

const PIXEL_ID = process.env.META_PIXEL_ID!
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN!

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex")
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, spend, sourceUrl, clientIp, clientUserAgent, fbp, fbc } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "email obrigatório" }, { status: 400 })
    }

    const nameParts = (name || "").trim().split(" ")
    const firstName = nameParts[0] || ""
    const lastName = nameParts.slice(1).join(" ") || ""

    const userData: Record<string, string> = {
      em: sha256(email),
    }
    if (firstName) userData.fn = sha256(firstName)
    if (lastName) userData.ln = sha256(lastName)
    if (clientIp) userData.client_ip_address = clientIp
    if (clientUserAgent) userData.client_user_agent = clientUserAgent
    if (fbp) userData.fbp = fbp
    if (fbc) userData.fbc = fbc

    const payload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: sourceUrl || "https://wisdomagency.com.br",
          action_source: "website",
          user_data: userData,
          custom_data: {
            content_name: "Diagnóstico gratuito",
            content_category: "contact_form",
            ...(spend ? { spend_range: spend } : {}),
          },
        },
      ],
    }

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error("[meta-capi] error:", result)
      return NextResponse.json({ error: "Erro ao enviar para CAPI" }, { status: 500 })
    }

    return NextResponse.json({ ok: true, events_received: result.events_received })
  } catch (err) {
    console.error("[meta-capi] unexpected error:", err)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
