import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  solid:
    'relative inline-flex select-none items-center justify-center gap-2 rounded-md border border-none border-transparent bg-white dark:bg-zinc-800 px-3 text-[13px] font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 shadow-button-light dark:shadow-button-dark focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-600'
}

export function Button ({ variant = 'solid', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center rounded-md py-3 px-3 text-sm outline-offset-2 transition',
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
