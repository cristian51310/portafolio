import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html className='h-full antialiased' lang='es'>
      <Head />
      <body className='flex flex-col h-full antialiased bg-white bg-top bg-no-repeat bg-lights-sun dark:bg-zinc-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
