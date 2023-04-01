import Head from 'next/head'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import Resume from '@/components/Resume'
import { SocialLinks } from '@/components/SocialLinks'
import { StatusWork } from '@/components/StatusWork'

function Article ({ article }) {
  return (
    <Card as='article'>
      <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as='time' dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>
        {article.description}
        <br />
        {article.tags.map((tag) => (
          <a
            href='#'
            key={tag}
            className="inline-block text-zinc-600 before:content-['#'] dark:text-zinc-400"
          >
            <span className='inline-flex items-center mt-2 mr-2 text-xs font-medium text-zinc-600 dark:text-zinc-400'>
              {tag}
            </span>
          </a>
        ))}
      </Card.Description>
      <Card.Cta>Leer artículo</Card.Cta>
    </Card>
  )
}

export default function Home ({ articles }) {
  const isAvailable = true
  return (
    <>
      <Head>
        <title>Cristian Ruben - Diseñador Web & Frontend</title>
        <meta
          name='description'
          content=' Soy Eduardo, soy diseñador web y Frontend con sede en Madrid.'
        />
      </Head>
      <Container className='mt-9'>
        <motion.div
          className='max-w-xl'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <h1 className='sr-only'>Cristian Ruben</h1>

          <Balancer className='text-base text-zinc-600 dark:text-zinc-400'>
            <span className='text-3xl font-bold  text-zinc-700 dark:text-white'>
              Cristian Ruben
            </span>
            <p>Soy diseñador web, frontend y movil.</p>
            <p>Trabajo actualmente como Freelance.</p>
          </Balancer>
          <StatusWork isAvailable={isAvailable} className='mt-4' />
          <SocialLinks />
        </motion.div>
      </Container>
      <Container className='mt-20'>
        <motion.div
          className='grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className='flex flex-col gap-16'>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Resume />
          </div>
        </motion.div>
      </Container>
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 2)
        .map(({ component, ...meta }) => meta)
    }
  }
}
