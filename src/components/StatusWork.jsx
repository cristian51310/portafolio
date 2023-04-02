export function StatusWork ({ className }) {
  return (
    <p className={className}>
      <span className='inline-flex items-center px-4 py-1.5 text-xs font-semibold border rounded-md border-zinc-200 text-zinc-900 dark:border-white/10 dark:text-zinc-100'>
        <span className='mr-1.5 flex h-3 w-3 items-center'>
          <span className='absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400 ' />
          <span className='relative inline-flex w-2 h-2 rounded-full bg-lime-400' />
        </span>
        Disponible para nuevos proyectos
      </span>
    </p>
  )
}
