import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  solid:
    'relative inline-flex h-[30px] transform-gpu touch-none select-none items-center justify-center gap-2 rounded-md border border-none border-transparent bg-white dark:bg-zinc-800 px-3 text-[13px] font-semibold leading-none text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 shadow-button-light dark:shadow-button-dark after:absolute after:-inset-[1px] after:block after:rounded-md after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:after:from-black/[0.15] dark:focus-visible:ring-blue-600'
}

export function Button ({ variant = 'solid', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href
    ? (
      <Link href={href} className={className} {...props} />
      )
    : (
      <button className={className} {...props} />
      )
}
