import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html className='h-full antialiased' lang='es'>
      <Head />
      <body className='flex flex-col h-full antialiased bg-gray-300 bg-top bg-no-repeat bg-lights-sun dark:bg-gray-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
