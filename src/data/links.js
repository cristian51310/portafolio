import { FaFacebookSquare, FaTwitterSquare, FaGithub, FaLinkedin, FaInstagramSquare, FaMastodon } from 'react-icons/fa'

export const generalLinks = [
  {
    href: '/',
    label: 'Inicio'
  },
  {
    href: '/about',
    label: 'About'
  },
  {
    href: '/blog',
    label: 'Blog'
  },
  {
    href: '/proyectos',
    label: 'Proyectos'
  },
  {
    href: '/recomendaciones',
    label: 'Recomendaciones'
  }
]

export const linksSocial = [
  {
    href: 'https://www.facebook.com/cristian.ruben.9465',
    icon: FaFacebookSquare,
    label: 'Seguir en Facebook',
    hover: 'hover:text-blue-600',
    dark_hover: 'dark:hover:text-blue-600',
    hover_group: 'group-hover:text-blue-600'
  },
  {
    href: 'https://twitter.com/CristianRubnFi1',
    icon: FaTwitterSquare,
    label: 'Seguir en Twitter',
    hover: 'hover:text-sky-500',
    dark_hover: 'dark:hover:text-sky-500',
    hover_group: 'group-hover:text-sky-500'
  },
  {
    href: 'https://instagram.com/rubenfigue513/',
    icon: FaInstagramSquare,
    label: 'Seguir en Instagram',
    hover: 'hover:text-pink-600',
    dark_hover: 'dark:hover:text-pink-600',
    hover_group: 'group-hover:text-pink-600'
  },
  {
    href: 'https://github.com/cristian51310/portafolio',
    icon: FaGithub,
    label: 'Seguir en GitHub',
    hover: 'hover:text-gray-900',
    dark_hover: 'dark:hover:text-white',
    hover_group: 'group-hover:text-white'
  },
  {
    href: 'https://linkedin.com/',
    icon: FaLinkedin,
    label: 'Seguir en LinkedIn',
    hover: 'hover:text-blue-500',
    dark_hover: 'dark:hover:text-blue-500',
    hover_group: 'group-hover:text-blue-500'
  },
  {
    href: 'https://mastodon.social/explore',
    icon: FaMastodon,
    label: 'Seguir en Mastodont',
    hover: 'hover:text-purple-500',
    dark_hover: 'dark:hover:text-purple-500',
    hover_group: 'group-hover:text-purple-500'
  }
]
