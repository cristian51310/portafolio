import Head from 'next/head'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Container } from '@/components/Container'
import { Phototab } from '@/components/PhotoTab'
import { Reviews } from '@/components/Reviews'
import { SocialText } from '@/components/SocialLinks'

export default function About () {
  return (
    <>
      <Head>
        <title>About - Cristian Ruben</title>
        <meta
          name='description'
          content='Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs.'
        />
      </Head>
      <Container className='mt-16 sm:mt-24'>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
          <motion.div
            className='lg:pl-20'
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <div className='max-w-xs px-2.5 lg:max-w-none'>
              <Phototab />
            </div>
          </motion.div>
          <div className='lg:order-first lg:row-span-2'>
            <motion.h1
              className='text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl'
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>
                Soy Cristian, diseño y creo webs.
              </Balancer>
            </motion.h1>
            <motion.div
              className='text-base space-y-1 text-zinc-600 dark:text-zinc-400'
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <p>
                Soy diseñador web y frontend
              </p>
              <p>
                Me encanta lo que hago porque me permite utilizar mi creatividad
                y mis habilidades en la comunicación visual, así como en la
                resolución de problemas.
              </p>
              <p>
                Tengo un gran conocimiento de lo que se necesita para crear
                grandes interfaces de usuario y diseños que funcionen bien en
                cualquier dispositivo, desde ordenadores de sobremesa hasta
                teléfonos móviles.
              </p>
            </motion.div>
          </div>
          <SocialText />
        </div>
        <Reviews />
      </Container>
    </>
  )
}
