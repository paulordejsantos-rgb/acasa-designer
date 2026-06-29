'use client'

const team = [
  {
    name: 'Helena Vasconcelos',
    role: 'Direção criativa',
    bio: 'Designer de produto e editorial. Conduz a direção de arte de cada cardápio digital.',
    initials: 'HV',
  },
  {
    name: 'Rafael Andrade',
    role: 'Produto & tecnologia',
    bio: 'Cuida da plataforma, das integrações de QR Code, VLibras e narração por voz.',
    initials: 'RA',
  },
  {
    name: 'Marina Toledo',
    role: 'Sucesso do cliente',
    bio: 'Acompanha a implantação, treina a equipe do salão e mantém o suporte ativo.',
    initials: 'MT',
  },
]

export function Team() {
  return (
    <section id="estudio" aria-label="Estúdio" className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">Estúdio</span>
            <h2 className="font-serif text-foreground mt-6 mb-6">
              Um time pequeno, <em className="text-gold-soft">por escolha</em>.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-foreground/70 font-light">
              Somos três pessoas dedicadas. Atendemos um número limitado de
              casas por mês para que cada cardápio digital receba atenção
              integral — da implantação ao suporte do dia a dia.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {team.map(person => (
            <article key={person.name} className="bg-background p-10 group hover:bg-noir-elevated gentle-animation">
              <div className="aspect-square mb-8 border border-gold/30 flex items-center justify-center bg-noir-elevated group-hover:border-gold gentle-animation">
                <span className="font-serif text-7xl text-gold/70 group-hover:text-gold gentle-animation">
                  {person.initials}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{person.name}</h3>
              <p className="text-xs text-gold tracking-widest uppercase mb-4">{person.role}</p>
              <p className="text-foreground/65 font-light text-sm">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
