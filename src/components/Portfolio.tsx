'use client'

import portfolioImage from '@/assets/portfolio-feature.jpg'
import casePizzaria from '@/assets/case-pizzaria.jpg'
import caseHamburgueria from '@/assets/case-hamburgueria.jpg'
import caseBistro from '@/assets/case-bistro.jpg'
import casePesoSabor from '@/assets/case-peso-sabor.jpg'

const projects = [
  { client: 'Restaurante Elysian', segment: 'Alta gastronomia', year: '2025' },
  { client: 'Hotel Maison',        segment: 'Hospitalidade',   year: '2025' },
  { client: 'Bar Lume',            segment: 'Coquetelaria',    year: '2024' },
  { client: 'Versalhes Café',      segment: 'Café & padaria',  year: '2024' },
]

const cases = [
  {
    name: 'Pizzaria Premium',
    image: casePizzaria,
    features: 'QR Code nas mesas e divisão de conta automática para grupos.',
    href: 'https://acd-pizzaria-premium.vercel.app',
    external: true,
  },
  {
    name: 'Hamburgueria Artesanal',
    image: caseHamburgueria,
    features: 'Narração por voz dos pratos e chamada de garçom direto da mesa.',
    href: 'https://projeto-hamburgueria-gules.vercel.app',
    external: true,
  },
  {
    name: 'Bistrô Elegante',
    image: caseBistro,
    features: 'Acessibilidade com VLibras e modo noturno para ambientes intimistas.',
    href: 'https://projeto-severize.vercel.app',
    external: true,
  },
  {
    name: 'Peso & Sabor',
    image: casePesoSabor,
    features: 'Cardápio digital completo com fotos dos pratos, narração por voz e QR Code.',
    href: 'https://peso-e-sabor.vercel.app',
    external: true,
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" aria-label="Cases" className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow">Cases selecionados</span>
          <h2 className="font-serif text-foreground mt-6 mb-6">
            Casas que escolheram um <em className="text-gold-soft">cardápio digital</em> com alma.
          </h2>
          <p className="text-lg text-foreground/70 font-light">
            Implantamos o cardápio em poucos dias e acompanhamos cada casa de
            perto — do treinamento da equipe à evolução do menu mês a mês.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 relative">
            <img
              src={portfolioImage}
              alt="Cliente escaneando QR code do cardápio digital em restaurante"
              className="w-full h-auto shadow-elegant"
              loading="lazy"
              width={1600}
              height={1024}
            />
            <div className="absolute -bottom-4 -right-4 border border-gold p-4 hidden md:block">
              <span className="text-xs text-gold tracking-widest uppercase">Em destaque</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="text-xs text-gold tracking-widest uppercase">La Maison · 2025</span>
            <h3 className="font-serif text-foreground mt-4 mb-6">
              Cardápio digital interativo para uma casa centenária
            </h3>
            <p className="text-foreground/70 mb-8 font-light">
              Implantamos o cardápio digital do La Maison com QR Code em cada mesa,
              narração por voz, VLibras e divisão de conta. O salão ficou mais ágil
              e o cliente passou a ter autonomia para explorar o menu no seu tempo.
            </p>
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-border pt-8">
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-wider mb-2">Segmento</dt>
                <dd className="text-foreground">Hotelaria de luxo</dd>
              </div>
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-wider mb-2">Recursos</dt>
                <dd className="text-foreground">QR · Voz · VLibras</dd>
              </div>
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-wider mb-2">Implantação</dt>
                <dd className="text-foreground">7 dias úteis</dd>
              </div>
              <div>
                <dt className="text-xs text-foreground/50 uppercase tracking-wider mb-2">Resultado</dt>
                <dd className="text-gold">+38% no ticket médio</dd>
              </div>
            </dl>
          </div>
        </div>

        <div id="portfolio-destaques" className="border-t border-border pt-16 mb-40 lg:mb-52">
          <span className="eyebrow">Projetos em destaque</span>
          <h3 className="font-serif text-foreground mt-6 mb-12 max-w-2xl">
            Cases recentes em <em className="text-gold-soft">operação</em>
          </h3>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {cases.map(c => (
              <article key={c.name} className="group bg-noir-elevated border border-border hover:border-gold-soft gentle-animation flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10]">
                  <img
                    src={c.image}
                    alt={`Ambiente da ${c.name}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className={`w-full h-full object-cover group-hover:scale-105 gentle-animation ${c.name === 'Pizzaria Premium' ? 'object-bottom' : ''}`}
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h4 className="font-serif text-2xl text-foreground mb-3">{c.name}</h4>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed flex-1 mb-6">
                    {c.features}
                  </p>
                  <a
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir gentle-animation py-3 px-5 text-xs uppercase tracking-widest"
                  >
                    Ver cardápio
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <span className="eyebrow">Outras casas</span>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
            {projects.map(p => (
              <li key={p.client} className="border-b border-border pb-4">
                <div className="font-serif text-xl text-foreground">{p.client}</div>
                <div className="text-xs text-foreground/50 mt-1 tracking-wider uppercase">
                  {p.segment} · {p.year}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
