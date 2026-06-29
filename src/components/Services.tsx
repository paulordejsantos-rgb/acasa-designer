'use client'

import { QrCode, Mic, Hand, Receipt, BellRing, Headphones } from 'lucide-react'

const services = [
  {
    icon: QrCode,
    title: 'QR Code',
    desc: 'O cliente acessa o cardápio na hora, sem instalar app. Basta apontar a câmera para o código na mesa.',
  },
  {
    icon: Mic,
    title: 'Narração por Voz',
    desc: 'Cada prato pode ser ouvido em áudio de alta qualidade — acessibilidade real para clientes com baixa visão.',
  },
  {
    icon: Hand,
    title: 'VLibras',
    desc: 'Tradução automática para Libras integrada ao cardápio, ampliando o atendimento à comunidade surda.',
  },
  {
    icon: Receipt,
    title: 'Divisão de Conta',
    desc: 'Cada pessoa visualiza e divide a conta direto pelo celular, com clareza e sem atrito no fechamento.',
  },
  {
    icon: BellRing,
    title: 'Chamada de Garçom',
    desc: 'Um toque chama o garçom à mesa, pede a conta ou solicita mais água — sem precisar levantar a mão.',
  },
  {
    icon: Headphones,
    title: 'Suporte',
    desc: 'Equipe dedicada de segunda a sábado para acompanhar sua casa, treinar a equipe e atualizar o cardápio.',
  },
]

export function Services() {
  return (
    <section
      id="servicos"
      aria-label="Recursos do cardápio digital"
      className="relative py-32 lg:py-40 bg-noir-elevated border-y border-border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow">Recursos</span>
          <h2 className="font-serif text-foreground mt-6 mb-6">
            Tudo que sua casa precisa em <em className="text-gold-soft">um único cardápio</em>.
          </h2>
          <p className="text-lg text-foreground/70 font-light">
            Seis recursos pensados para encantar o cliente, agilizar o salão e
            ampliar a acessibilidade do seu restaurante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="bg-background p-10 group hover:bg-noir gentle-animation"
            >
              <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mb-8 group-hover:border-gold gentle-animation">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{title}</h3>
              <p className="text-foreground/65 font-light text-sm">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
