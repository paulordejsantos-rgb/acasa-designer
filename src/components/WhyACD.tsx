'use client'

import { motion } from 'framer-motion'
import whyAcdHandshake from '@/assets/why-acd-handshake.jpg'

export function WhyACD() {
  return (
    <section id="por-que-acd" aria-label="Por que o ACD" className="relative py-28 lg:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative lg:h-full"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden border border-gold/20">
              <img
                src={whyAcdHandshake}
                alt="Dois empresários apertando as mãos em um escritório elegante, celebrando uma parceria de sucesso"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/30 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:pl-8"
          >
            <span className="eyebrow">Diferença ACD</span>
            <h2 className="font-serif text-gold mt-6 mb-8">
              Por que o <em className="text-gold-soft">ACD</em>?
            </h2>
            <div className="space-y-6 text-foreground/70 font-light text-lg leading-relaxed">
              <p>
                O <strong className="text-foreground font-normal">Cardápio Digital ACD</strong> é a única solução verdadeiramente inclusiva do mercado: pensada para surdos, cegos e pessoas com dificuldades de fala, sem deixar de lado a elegância que o seu restaurante merece.
              </p>
              <p>
                Enquanto a concorrência oferece apenas QR Codes estáticos, nós resolvemos as dores reais do atendimento — comunicação, acessibilidade, autonomia do cliente e agilidade da equipe — com recursos como <span className="text-gold-soft">VLibras</span>, <span className="text-gold-soft">narração por voz</span>, <span className="text-gold-soft">divisão de conta</span> e <span className="text-gold-soft">chamada de garçom</span> integrados em uma única plataforma.
              </p>
              <p>
                O resultado? Clientes mais satisfeitos, atendimento mais rápido, mesas que giram melhor e um ticket médio que cresce automaticamente. ACD é a parceria que transforma o cardápio em uma experiência acessível, moderna e lucrativa.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex mt-10 items-center gap-3 border border-gold text-gold px-7 py-3.5 text-sm tracking-wider uppercase hover:bg-gold hover:text-noir gentle-animation"
            >
              Quero uma demonstração
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
