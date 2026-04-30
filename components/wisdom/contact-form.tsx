"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type FormState = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      spend: (form.elements.namedItem("spend") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Erro no envio")
      setState("success")
    } catch {
      setState("error")
      setErrorMsg("Algo deu errado. Tente novamente ou me chame no LinkedIn.")
    }
  }

  if (state === "success") {
    return (
      <div className="flex items-start gap-3 p-6 rounded-xl bg-card border border-border">
        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--wa-success)" }} />
        <div>
          <p className="text-foreground font-medium">Mensagem recebida.</p>
          <p className="text-sm text-muted-foreground mt-1">
            Resposta em até 24h. Enquanto isso, você pode me seguir no{" "}
            <a
              href="https://www.linkedin.com/in/lucas-william-martins-guimaraes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>.
          </p>
        </div>
      </div>
    )
  }

  const selectStyle: React.CSSProperties = {
    width: "100%",
    height: 40,
    borderRadius: 6,
    border: "1px solid var(--wa-border)",
    background: "#10151C",
    color: "#F7F9FC",
    padding: "0 12px",
    fontSize: 14,
    cursor: "pointer",
    appearance: "auto" as const,
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Seu nome"
            className="input-field w-full"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email profissional
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="voce@empresa.com"
            className="input-field w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-sm font-medium text-foreground">
          Empresa / URL do site{" "}
          <span className="text-muted-foreground font-normal">(opcional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Inc. ou acme.com"
          className="input-field w-full"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="spend" className="text-sm font-medium text-foreground">
          Investimento mensal em anúncios
        </label>
        <select id="spend" name="spend" style={selectStyle}>
          <option value="Abaixo de R$20k" style={{ background: "#10151C", color: "#F7F9FC" }}>Abaixo de R$20k</option>
          <option value="R$20k – R$50k" style={{ background: "#10151C", color: "#F7F9FC" }}>R$20k – R$50k</option>
          <option value="R$50k – R$250k" style={{ background: "#10151C", color: "#F7F9FC" }}>R$50k – R$250k</option>
          <option value="R$250k – R$1M" style={{ background: "#10151C", color: "#F7F9FC" }}>R$250k – R$1M</option>
          <option value="R$1M+" style={{ background: "#10151C", color: "#F7F9FC" }}>R$1M+</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          O que você está tentando resolver?{" "}
          <span className="text-muted-foreground font-normal">(opcional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="CPA subiu 40% desde a última atualização, Performance Max está comendo busca de marca..."
          style={{
            width: "100%",
            borderRadius: 6,
            border: "1px solid var(--wa-border)",
            background: "var(--wa-bg)",
            color: "var(--fg-1)",
            padding: "8px 12px",
            fontSize: 14,
            lineHeight: 1.6,
            resize: "none",
          }}
        />
      </div>

      {state === "error" && (
        <p className="text-sm" style={{ color: "var(--wa-danger)" }}>{errorMsg}</p>
      )}

      <div className="flex flex-col gap-2">
        <Button type="submit" size="lg" disabled={state === "loading"} className="w-fit">
          {state === "loading" ? "Enviando..." : "Agendar call"}
          {state !== "loading" && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
        <p className="text-xs" style={{ color: "var(--fg-4)" }}>Resposta em até 24h. Sem spam.</p>
      </div>
    </form>
  )
}
