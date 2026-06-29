'use client'

const sitemap = [
  { href: '#portfolio', label: 'Cases' },
  { href: '#processo',  label: 'Como funciona' },
  { href: '#servicos',  label: 'Recursos' },
  { href: '#estudio',   label: 'Estúdio' },
  { href: '#contato',   label: 'Contato' },
]

const services = [
  'QR Code',
  'Narração por Voz',
  'VLibras',
  'Divisão de Conta',
  'Chamada de Garçom',
  'Suporte',
]

const social = [
  { href: 'https://www.instagram.com/acasaedesigner/', label: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=61586771323290', label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/acasaedesigner/', label: 'LinkedIn' },
  { href: 'https://www.youtube.com/@ACasaeDesigner', label: 'YouTube' },
  { href: 'https://wa.me/5521990980965', label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-serif text-3xl text-foreground">A Casa</span>
              <span className="text-gold">&</span>
              <span className="font-serif text-3xl text-gold-soft italic">Designer</span>
            </div>
            <p className="text-foreground/60 font-light max-w-md mb-8">
              Cardápio Digital Interativo para restaurantes, hotéis e bares
              que querem encantar, agilizar o salão e ampliar a acessibilidade.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {social.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="text-foreground/60 hover:text-gold gentle-animation text-sm tracking-widest uppercase">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="eyebrow">Navegação</span>
            <ul className="mt-6 space-y-3">
              {sitemap.map(s => (
                <li key={s.href}>
                  <a href={s.href} className="text-foreground/70 hover:text-gold gentle-animation font-light">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <span className="eyebrow">Recursos</span>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {services.map(s => (
                <li key={s} className="text-foreground/70 font-light text-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-foreground/50 tracking-wider">
            © {new Date().getFullYear()} A Casa & Designer · Todos os direitos reservados
          </p>
          <p className="text-xs text-foreground/50 tracking-wider">
            São Gonçalo · Rio de Janeiro · Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}

