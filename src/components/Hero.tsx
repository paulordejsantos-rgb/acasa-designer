'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import heroMenu from '@/assets/hero-menu.jpg'

const navLinks = [
  { href: '#portfolio', label: 'Cases' },
  { href: '#portfolio-destaques', label: 'Portfólio' },
  { href: '#processo',  label: 'Como funciona' },
  { href: '#servicos',  label: 'Recursos' },
  { href: '#estudio',   label: 'Estúdio' },
  { href: '#contato',   label: 'Contato' },
]

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <section id="hero" aria-label="Hero" className="relative h-screen w-full overflow-hidden bg-noir">
      <img
        src={heroMenu}
        alt="Mesa de restaurante com smartphone exibindo cardápio digital"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-noir/20 to-transparent" />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`w-full transition-all duration-500 ${
          scrolled ? 'glass-noir' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-nowrap items-baseline gap-2 group whitespace-nowrap"
            >
              <span className="font-serif text-xl md:text-2xl text-foreground tracking-tight whitespace-nowrap">A Casa</span>
              <span className="text-gold text-sm">&</span>
              <span className="font-serif text-xl md:text-2xl text-gold-soft italic tracking-tight whitespace-nowrap">Designer</span>
            </button>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-gold gentle-animation tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contato"
                className="hidden sm:inline-flex items-center gap-2 border border-gold text-gold px-5 py-2 text-sm tracking-wide hover:bg-gold hover:text-noir gentle-animation"
              >
                Solicitar demonstração
              </a>
              <button
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-foreground p-2"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden fixed inset-0 z-40 bg-noir/95 backdrop-blur-xl pt-24 px-8"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-foreground hover:text-gold gentle-animation border-b border-border pb-4"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-6 border border-gold text-gold text-center py-4 tracking-wide"
            >
              Solicitar demonstração
            </a>
          </div>
        </motion.div>
      )}

      <div className="relative z-10 h-full container mx-auto px-6 lg:px-12 flex flex-col justify-end pb-20 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl"
        >
          <span className="eyebrow">Cardápio Digital Interativo</span>
          <h1 className="font-serif text-foreground mt-6 mb-8">
            Cardápios que <em className="text-gold-soft">encantam</em>,<br />
            experiências que <em className="text-gold-soft">fidelizam</em>.
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 font-light">
            QR Code, narração por voz, VLibras, divisão de conta e chamada de
            garçom em um só cardápio digital — feito para restaurantes que
            cuidam de cada detalhe do atendimento.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="gradient-gold text-noir px-7 py-3.5 text-sm tracking-wider uppercase hover:opacity-90 gentle-animation"
            >
              Solicitar demonstração
            </a>
            <a
              href="#servicos"
              className="text-foreground/80 hover:text-gold gentle-animation text-sm tracking-wider uppercase flex items-center gap-3"
            >
              <span className="gold-rule" /> Ver recursos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
