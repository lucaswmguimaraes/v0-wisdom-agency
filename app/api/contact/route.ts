import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, company } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // TODO: integrar com serviço de email (Resend, Nodemailer, etc.)
    // Por enquanto loga para verificar o funcionamento
    console.log("[contact] novo lead:", { name, email, company, timestamp: new Date().toISOString() })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
