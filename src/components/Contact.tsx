'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.name.trim() || !formData.email.trim() || !emailRegex.test(formData.email.trim()) || !formData.message.trim()) {
      toast({ title: 'Preencha todos os campos corretamente', variant: 'destructive' })
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/xkoeyjez', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new URLSearchParams({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      })
      if (response.ok) {
        toast({
          title: 'Mensagem enviada',
          description: 'Retornamos em até dois dias úteis.',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await response.json().catch(() => null)
        toast({
          title: 'Erro ao enviar',
          description: data?.error || 'Tente novamente em alguns instantes.',
          variant: 'destructive',
        })
      }
    } catch {
      toast({
        title: 'Erro ao enviar',
        description: 'Verifique sua conexão e tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" aria-label="Contato" className="relative py-32 lg:py-40 bg-noir-elevated border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left — invite */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Vamos conversar</span>
            <h2 className="font-serif text-foreground mt-6 mb-8">
              Conte sobre sua <em className="text-gold-soft">casa</em>.
            </h2>
            <p className="text-foreground/70 font-light mb-10">
              Atendemos por agenda. Envie alguns detalhes do projeto e do prazo
              desejado — retornamos com uma proposta inicial em até dois dias úteis.
            </p>

            <dl className="space-y-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-widest mb-2">Localização</dt>
                <dd className="text-foreground font-light">São Gonçalo · Rio de Janeiro · Brasil</dd>
              </div>
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-widest mb-2">E-mail</dt>
                <dd>
                  <a href="mailto:contato@acasaedesigner.com" className="text-gold hover:text-gold-soft gentle-animation">
                    contato@acasaedesigner.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-widest mb-2">WhatsApp</dt>
                <dd>
                  <a href="https://wa.me/5521990980965" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-soft gentle-animation">
                    +55 (21) 99098-0965
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-widest mb-2">Atendimento</dt>
                <dd className="text-foreground font-light">Segunda a sexta · 10h–18h</dd>
              </div>
            </dl>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-background border border-border p-8 lg:p-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs text-foreground/60 uppercase tracking-widest mb-3">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  maxLength={100}
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full bg-transparent border-b border-border focus:border-gold py-3 text-foreground outline-none gentle-animation"
                  placeholder="Como devemos chamar você"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-foreground/60 uppercase tracking-widest mb-3">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="w-full bg-transparent border-b border-border focus:border-gold py-3 text-foreground outline-none gentle-animation"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-foreground/60 uppercase tracking-widest mb-3">
                  Sobre o projeto
                </label>
                <textarea
                  id="message"
                  rows={6}
                  maxLength={1500}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full bg-transparent border-b border-border focus:border-gold py-3 text-foreground outline-none resize-none gentle-animation"
                  placeholder="Tipo de casa, escopo do cardápio, prazo, referências..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 gradient-gold text-noir py-4 tracking-widest uppercase text-sm hover:opacity-90 gentle-animation disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

