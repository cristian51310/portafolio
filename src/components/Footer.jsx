import { useState } from 'react'
import Link from 'next/link'
import { generalLinks } from '@/data/links'
import { AnimatePresence, motion } from 'framer-motion'
import { FADE_IN_ANIMATION_CARD } from '@/lib/constants'
import { Container } from '@/components/Container'

function NavLink ({ href, children, target, rel, onMouseEnter, onMouseLeave }) {
  return (
    <Link
      href={href}
      className='relative transition hover:text-amber-600 dark:hover:text-amber-500'
      target={target}
      rel={rel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  )
}

export function Footer () {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <motion.footer {...FADE_IN_ANIMATION_CARD}>
      <Container.Outer>
        <div className='pt-10 pb-16 border-t border-zinc-900/10 dark:border-white/10'>
          <Container.Inner>
            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
              <div className='flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300 md:justify-start '>
                {generalLinks.map((link, index) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className='px-2'>{link.label}</span>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.span
                          className='absolute inset-0 transition-colors rounded-md -z-10 bg-zinc-100 dark:bg-zinc-700/50'
                          layoutId='hoverBackground'
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0.4 }
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.5 }
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </NavLink>
                ))}
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </motion.footer>
  )
}
