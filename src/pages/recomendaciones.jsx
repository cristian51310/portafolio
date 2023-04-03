import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { stacks } from '@/data/stacks'
import { Switch } from '@headlessui/react'
import { motion } from 'framer-motion'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import { HiBars3, HiOutlineSquares2X2 } from 'react-icons/hi2'

function filterStacks (stacks, type) {
  return stacks.filter((stack) => stack.type === type)
}

function ToolsSection ({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role='list' className='space-y-16'>
        {children}
      </ul>
    </Section>
  )
}
function ToolsSectionGrid ({ children, title }) {
  return (
    <section className='md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10'>
      <h2 className='text-sm font-semibold text-zinc-900 dark:text-white'>
        {title}
      </h2>
      <ul
        role='list'
        className='grid grid-cols-3 mt-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8'
      >
        {children}
      </ul>
    </section>
  )
}

function Toollist ({ title, href, children }) {
  return (
    <Card as='li' className='relative z-10'>
      <Card.Title
        as='div'
        href={href}
        target='_blank'
      >
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

function Toolgrid ({ title, href, img, children, pills }) {
  return (
    <li className='relative z-10 group'>
      <div className='block w-full p-3 overflow-hidden transition-transform duration-700 border rounded-lg aspect-w-10 aspect-h-7 group border-zinc-900/10 bg-white/10 backdrop-blur-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur group-hover:scale-105'>
        <Image
          src={img}
          alt={title}
          width={70}
          height={70}
          className='object-cover mx-auto transition-transform duration-700 pointer-events-none group-hover:opacity-75 group-hover:scale-105'
        />
        <Link
          href={href}
          type='button'
          className='absolute inset-0 focus:outline-none'
          target='_blank'
          rel='noreferrer'
        />
        <p className='block my-2 text-sm font-medium text-center truncate pointer-events-none text-zinc-900 dark:text-white'>
          {children}
        </p>
      </div>
    </li>
  )
}
function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Uses () {
  const development = filterStacks(stacks, 'development')
  const workstation = filterStacks(stacks, 'workstation')
  const productivity = filterStacks(stacks, 'productivity')

  const [view, setView] = useState('list')
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Head>
        <title>Recomendaciones - Cristian Ruben</title>
      </Head>

      <SimpleLayout
        title='El software que uso, los dispositivos que amo y otras cosas que recomiendo.'
        intro='Las cosas que uso para desarrollar, mantenerme productivo y pensar que estoy siendo productivo cuando en realidad solo estoy procrastinando'
      >
        <motion.div
          className='relative z-20 flex items-center justify-start gap-4 px-4 py-2 my-16 border dark:backdrop-blurbackdrop-blur w-fit rounded-3xl border-zinc-900/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          layout
        >
          <span>Vista</span>
          <Switch
            checked={enabled}
            onChange={() => {
              setView(view === 'list' ? 'grid' : 'list')
              setEnabled(!enabled)
            }}
            className={classNames(
              enabled ? 'bg-amber-600' : 'bg-zinc-400/60 dark:bg-zinc-700',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
            )}
          >
            <span
              className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            >
              <span className='absolute inset-0 text-gray-700 flex h-full w-full items-center justify-center transition-opacity'>
                <HiBars3 className={classNames(
                  enabled
                    ? 'opacity-0 duration-100 ease-out'
                    : 'opacity-100 duration-200 ease-in',
                  'w-3'
                )}
                />
              </span>
              <span className='absolute text-orange-400 inset-0 flex h-full w-full items-center justify-center transition-opacity'>
                <HiOutlineSquares2X2 className={classNames(
                  enabled
                    ? 'opacity-100 duration-200 ease-in'
                    : 'opacity-0 duration-100 ease-out',
                  'w-3'
                )}
                />
              </span>
            </span>
          </Switch>
        </motion.div>
        {view === 'list'
          ? (
            <div className='space-y-20 mb-16'>
              <ToolsSection title='Workstation'>
                {workstation.map((stack) => (
                  <Toollist
                    title={stack.title}
                    href={stack.link}
                    key={stack.title}
                  >
                    {stack.info}
                  </Toollist>
                ))}
              </ToolsSection>
              <ToolsSection title='Desarrollo'>
                {development.map((stack) => (
                  <Toollist
                    title={stack.title}
                    href={stack.link}
                    key={stack.title}
                  >
                    {stack.info}
                  </Toollist>
                ))}
              </ToolsSection>
              <ToolsSection title='Productividad'>
                {productivity.map((stack) => (
                  <Toollist
                    title={stack.title}
                    href={stack.link}
                    key={stack.title}
                  >
                    {stack.info}
                  </Toollist>
                ))}
              </ToolsSection>
            </div>
            )
          : (
            <div className='space-y-20 mb-16'>
              <ToolsSectionGrid title='Workstation'>
                {workstation.map((stack) => (
                  <Toolgrid
                    title={stack.title}
                    href={stack.link}
                    key={stack.title}
                    img={stack.img}
                  >
                    {stack.title}
                  </Toolgrid>
                ))}
              </ToolsSectionGrid>
              <ToolsSectionGrid title='Desarrollo'>
                {development.map((stack) => (
                  <Toolgrid
                    title={stack.title}
                    href={stack.link}
                    key={stack.title}
                    img={stack.img}
                  >
                    {stack.title}
                  </Toolgrid>
                ))}
              </ToolsSectionGrid>
              <ToolsSectionGrid title='Productividad'>
                {productivity.map((stack) => (
                  <Toolgrid
                    title={stack.title}
                    href={stack.link}
                    key={stack.title}
                    img={stack.img}
                  >
                    {stack.title}
                  </Toolgrid>
                ))}
              </ToolsSectionGrid>
            </div>
            )}
      </SimpleLayout>
    </>
  )
}
