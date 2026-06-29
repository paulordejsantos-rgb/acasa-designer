'use client'

const houses = [
  'Elysian',
  'La Maison',
  'Lume',
  'Versalhes',
  'Casa Tomada',
  'Octavio',
  'Brasa & Sal',
  'Florete',
]

export function Awards() {
  return (
    <section id="confianca" aria-label="Restaurantes que confiam" className="relative py-24 lg:py-32 bg-noir-elevated border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="eyebrow">Restaurantes que confiam</span>
          <h2 className="font-serif text-foreground mt-6 max-w-3xl mx-auto">
            Casas que nos confiam <em className="text-gold-soft">o primeiro contato</em> com seus clientes.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-5xl mx-auto">
          {houses.map(name => (
            <div
              key={name}
              className="bg-noir-elevated py-10 px-4 text-center gentle-animation hover:bg-noir group"
            >
              <span className="font-serif text-2xl lg:text-3xl text-foreground/60 group-hover:text-gold gentle-animation tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
