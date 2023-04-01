import Link from 'next/link'
import { linksSocial } from '@/data/links'
import clsx from 'clsx'

function SocialLink ({ icon: Icon, outline, hover, darkHover, ...props }) {
  return (
    <Link className='p-1 -m-1 group' {...props}>
      <Icon className={`w-7 h-7 transition duration-300 text-zinc-600 dark:text-zinc-400 ${hover} ${darkHover}`} />
    </Link>
  )
}

export function SocialLinks () {
  return (
    <div className='flex items-center justify-start gap-6 mt-6'>
      {linksSocial.map((link, index) => (
        <div className='relative' key={index}>
          <SocialLink
            href={link.href}
            target='_blank'
            hover={link.hover}
            darkHover={link.dark_hover}
            className='transition-all'
            icon={link.icon}
            outline={link.outline}
          />
        </div>
      ))}
    </div>
  )
}

export function LinkText ({ className, href, children, icon: Icon, hoverGroup }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} target='_blank' rel='noreferrer'>
        <div className='relative group'>
          <div className={`flex text-sm font-medium transition-all duration-300 group text-zinc-600 dark:text-zinc-400 ${hoverGroup} sm:h-7 `}>
            <Icon className={`w-6 h-6 transition duration-300 text-zinc-600 dark:text-zinc-400 ${hoverGroup}`} />
            <span className={`ml-4 ${hoverGroup}`}>
              {children}
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export function SocialText () {
  return (
    <div className='lg:pl-28 '>
      <ul role='list' className='grid grid-cols-2'>
        {linksSocial.map((link, index) => (
          <LinkText
            href={link.href}
            icon={link.icon}
            hoverGroup={link.hover_group}
            className='mt-4'
            key={index}
            outline={link.outline}
          >
            {link.label}
          </LinkText>
        ))}
      </ul>
    </div>
  )
}
