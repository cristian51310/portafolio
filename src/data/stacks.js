import imgArc from '@/images/icons/arc.png'
import imgFigma from '@/images/icons/figma.png'
import imgMacbook from '@/images/icons/macbook-pro.png'
import imgNextjs from '@/images/icons/nextjs.png'
import imgNotion from '@/images/icons/notion.png'
import imgRaycast from '@/images/icons/raycast.png'
import imgTailwind from '@/images/icons/tailwind.png'
import imgVercel from '@/images/icons/vercel.png'
import imgVscode from '@/images/icons/vscode.png'

export const stacksType = [
  {
    id: '1',
    name: 'workstation',
    online: true
  },
  {
    id: '2',
    name: 'development',
    online: true
  },
  {
    id: '3',
    name: 'productivity',
    online: true
  }
]

export const stacks = [
  {
    type: 'workstation',
    title: '13” MacBook Air, M1, 8GB RAM (2020)',
    link: 'https://amzn.to/3hp6Dxj',
    info: 'Utilizo este ordenador todos los días para programar, diseñar y para uso personal. Su diseño es bonito y funcional. La duración de la batería es excelente y me encantan los teclados retroiluminados.',
    img: imgMacbook
  },
  {
    type: 'development',
    title: 'Visual studio code',
    link: 'https://code.visualstudio.com/?wt.mc_id=DX_841432',
    info: 'Atom, sublime text... descansan en paz en mi recuerdo ya que llego visual studio.',
    img: imgVscode
  },
  {
    type: 'development',
    title: 'Nextjs',
    link: 'https://nextjs.org/',
    info: 'Utilizo Next.js como framework de React porque me permite crear aplicaciones y sitios web de alto rendimiento y con una experiencia de usuario fluida. Además, me ofrece una serie de características útiles como renderizado en el lado del servidor, soporte para SEO y enrutamiento automático.',
    img: imgNextjs
  },
  {
    type: 'development',
    title: 'Vercel',
    link: 'https://vercel.com',
    info: 'Utilizo Vercel como hosting porque es rápido, seguro y fácil de usar. Además, me permite realizar actualizaciones y despliegues con un solo clic y ofrece soporte para diferentes frameworks y lenguajes de programación, como React, Next.js, Gatsby y muchos más.',
    img: imgVercel
  },
  {
    type: 'development',
    title: 'Tailwind',
    link: 'https://tailwindcss.com/',
    info: 'Utilizo Tailwind como framework de CSS para crear sitios web porque me permite crear diseños únicos y personalizados sin tener que escribir tanto código CSS. Además, es muy fácil de usar y integrar en proyectos realizados en React, lo que me permite ahorrar tiempo y esfuerzo en la creación de interfaces de usuario atractivas y funcionales.',
    img: imgTailwind
  },
  {
    type: 'design',
    title: 'Figma',
    link: 'https://www.figma.com/',
    info: 'Utilizo Figma para diseñar porque es una herramienta en línea y colaborativa que ofrece una amplia gama de herramientas y una interfaz intuitiva. Permite integración con otras herramientas y acceso a diseños desde cualquier lugar y dispositivo.',
    img: imgFigma
  },
  {
    type: 'productivity',
    title: 'Arc',
    link: 'https://arc.net/',
    info: 'Utilizo el navegador Arc porque me gusta su interfaz y las opciones adicionales que ofrece. También me gusta la gran cantidad de opciones de personalización disponibles, como el editor de temas y los espacios de trabajo. Es un navegador rápido, seguro y altamente personalizable que me facilita la navegación en línea.',
    img: imgArc
  },
  {
    type: 'productivity',
    title: 'Notion',
    link: 'https://notion.com/',
    info: 'Sea lo que sea en lo que estés trabajando, la aplicación Notion es la mejor, es mi segundo cerebro. Creada para los creativos.',
    img: imgNotion
  },
  {
    type: 'productivity',
    title: 'Raycast',
    link: 'https://www.raycast.com/',
    info: 'Se trata de una barra de comandos que puede utilizar para lanzar cualquier comando en su entorno de escritorio. Proporciona acceso a una serie de útiles complementos y accesos directos para realizar operaciones comunes',
    img: imgRaycast
  }
]
