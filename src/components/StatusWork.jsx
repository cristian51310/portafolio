export function StatusWork ({ className }) {
  return (
    <p className={className}>
      <span className='inline-flex items-center px-3 py-1 text-xs font-semibold border rounded-md pointer-events-auto border-zinc-200 bg-white/10 text-zinc-900 backdrop-blur dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-100'>
        <span className='mr-1.5 flex h-3 w-3 items-center'>
          <span
            className='absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400 '
          />
          <span
            className='relative inline-flex w-2 h-2 rounded-full bg-lime-400'
          />
        </span>
        Disponible para nuevos proyectos
      </span>
    </p>
  )
}
