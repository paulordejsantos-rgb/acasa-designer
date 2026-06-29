'use client'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos a sua casa, o fluxo do salão e os recursos que farão diferença para o seu público.',
  },
  {
    number: '02',
    title: 'Montagem do cardápio',
    desc: 'Estruturamos categorias, descrições, fotos e preços direto no painel — você revisa em tempo real.',
  },
  {
    number: '03',
    title: 'Direção de arte',
    desc: 'Aplicamos a identidade da sua marca: tipografia, cores e fotografia coerentes com a experiência do salão.',
  },
  {
    number: '04',
    title: 'Implantação',
    desc: 'Geramos os QR Codes, configuramos VLibras, narração por voz e a divisão de conta — pronto para receber.',
  },
  {
    number: '05',
    title: 'Treinamento & suporte',
    desc: 'Treinamos a equipe, acompanhamos as primeiras semanas e seguimos disponíveis para ajustes contínuos.',
  },
]

export function About() {
  return (
    <section id="processo" aria-label="Como funciona" className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">Como funciona</span>
              <h2 className="font-serif text-foreground mt-6 mb-8">
                Cinco passos para um <em className="text-gold-soft">cardápio digital</em> que conta sua história.
              </h2>
              <p className="text-foreground/70 font-light">
                Trabalhamos lado a lado com chefs, gerentes e maîtres. A
                implantação leva, em média, de uma a duas semanas — e seguimos
                presentes durante toda a operação.
              </p>
            </div>
          </div>

          <ol className="lg:col-span-7 space-y-px bg-border">
            {steps.map(step => (
              <li
                key={step.number}
                className="bg-background py-10 px-6 lg:px-10 grid grid-cols-[auto_1fr] gap-8 group hover:bg-noir-elevated gentle-animation"
              >
                <div className="font-serif text-5xl text-gold/60 group-hover:text-gold gentle-animation leading-none">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/65 font-light max-w-xl">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
