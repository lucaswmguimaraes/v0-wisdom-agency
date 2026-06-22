import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error("[contact] missing env vars — url:", !!supabaseUrl, "key:", !!supabaseKey)
      return NextResponse.json({ error: "Configuração do servidor incompleta" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { name, email, company, spend, message } = await req.json()

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

    const { error } = await supabase
      .from("leads")
      .insert([{
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        company: company ? String(company).trim() : null,
        spend: spend || null,
        message: message ? String(message).trim() : null,
      }])

    if (error) {
      console.error("[contact] supabase error message:", error.message)
      console.error("[contact] supabase error code:", error.code)
      console.error("[contact] supabase error details:", error.details)
      console.error("[contact] supabase error hint:", error.hint)
      return NextResponse.json({
        error: "Erro ao salvar lead",
        detail: error.message,
        code: error.code,
        hint: error.hint,
      }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error("[contact] caught exception:", msg)
    return NextResponse.json({ error: "Erro interno", detail: msg }, { status: 500 })
  }
}
