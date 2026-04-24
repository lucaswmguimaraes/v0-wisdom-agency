import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

export async function POST(req: NextRequest) {
  const { name, email, spend, message } = await req.json()

  const { error } = await supabase
    .from("leads")
    .insert([{ name, email, spend, message }])

  if (error) {
    console.error("Supabase insert error:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })\
  }

  return NextResponse.json({ success: true })
}
