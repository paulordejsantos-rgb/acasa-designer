'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

const sections = [
  'hero',
  'portfolio',
  'confianca',
  'processo',
  'servicos',
  'estudio',
  'contato',
]

export function FloatingNav() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label="Navegação de rolagem"
    >
      <button
        onClick={handleScrollToTop}
        aria-label="Ir para o topo"
        className="w-11 h-11 flex items-center justify-center border border-gold bg-noir/80 text-gold backdrop-blur-sm hover:bg-gold hover:text-noir gentle-animation"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      <button
        onClick={handleScrollToBottom}
        aria-label="Ir para o final"
        className="w-11 h-11 flex items-center justify-center border border-gold bg-noir/80 text-gold backdrop-blur-sm hover:bg-gold hover:text-noir gentle-animation"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </div>
  )
}
