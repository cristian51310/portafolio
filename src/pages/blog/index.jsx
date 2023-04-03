import { Suspense, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

function Article ({ article }) {
  return (
    <motion.article className='md:grid md:grid-cols-4 md:items-baseline' layout>
      <Card className='md:col-span-3'>
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as='time'
          dateTime={article.date}
          className='md:hidden'
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>
          {article.description}
          <br />
          {article.tags.map((tag) => (
            <p key={tag} className="inline-block text-zinc-600 before:content-['#'] dark:text-zinc-400 ">
              <span className='inline-flex items-center mt-3 mr-4 text-xs font-medium text-zinc-600 dark:text-zinc-400'>
                {tag}
              </span>
            </p>
          ))}
        </Card.Description>
        <Card.Cta>Leer artículo</Card.Cta>
      </Card>
      <Card.Eyebrow
        as='time'
        dateTime={article.date}
        className='hidden mt-1 md:block'
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </motion.article>
  )
}

export default function ArticlesIndex ({ articles }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      )
  )
  return (
    <>
      <Head>
        <title>Blog - Cristian Ruben</title>
      </Head>
      <SimpleLayout
        title='Escribiendo sobre diseño de interfaces, programación y hobbies.'
        intro={`Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies, actualmente he escrito ${articles.length} artículos.`}
      >
        <motion.div
          className='md:border-l md:border-zinc-900/10 md:pl-10 md:dark:border-white/10'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className='flex flex-col max-w-3xl space-y-12 mb-20'>
            <div className='relative w-full mb-4'>
              <input
                type='text'
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Buscar artículos por título o tema'
                className='block w-full px-4 py-2 border rounded-full border-zinc-900/10 bg-white/10 text-zinc-600 backdrop-blur-sm placeholder:text-zinc-600 hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur placeholder:dark:text-zinc-300 dark:hover:text-white'
              />
              <Search className='absolute w-5 h-5 right-6 top-2.5 text-zinc-900 dark:text-zinc-300' />
            </div>

            <Suspense fallback={null}>
              {!filteredBlogPosts.length && (
                <p className='mb-4 text-gray-600 dark:text-gray-400'>
                  No se han encontrado artículos.
                </p>
              )}
              {filteredBlogPosts.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </Suspense>
          </div>
        </motion.div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta)
    }
  }
}
