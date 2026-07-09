import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, spend, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    if (String(name).length > 100 || String(email).length > 200) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
    }

    if (company && String(company).length > 200) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
    }

    if (message && String(message).length > 2000) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
    }

    // Telefone é opcional; quando presente, precisa ter 10-11 dígitos (fixo/celular BR)
    let phoneClean: string | null = null
    if (phone) {
      const digits = String(phone).replace(/\D/g, "")
      if (digits.length < 10 || digits.length > 11) {
        return NextResponse.json({ error: "Telefone inválido" }, { status: 400 })
      }
      phoneClean = digits
    }

    const { error } = await supabase
      .from("leads")
      .insert([{
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        // Chave só entra quando preenchido — envios sem telefone não dependem da coluna existir
        ...(phoneClean ? { phone: phoneClean } : {}),
        company: company ? String(company).trim() : null,
        spend: spend || null,
        message: message ? String(message).trim() : null,
      }])

    if (error) {
      console.error("[contact] supabase error:", error.message)
      return NextResponse.json({ error: "Erro ao salvar lead" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
