export const renderHeader = () => {
  const nav = document.createElement('nav')

  // LOGO
  const logoDiv = document.createElement('div')
  logoDiv.className = 'nav-logo'

  const logoImg = document.createElement('img')
  logoImg.src =
    'https://res.cloudinary.com/dscgktluo/image/upload/v1738237882/Proyecto%202/logo_rfccdu.png'
  logoImg.alt = 'Logo'

  logoDiv.appendChild(logoImg)

  // MENÚ
  const navMenuDiv = document.createElement('div')
  navMenuDiv.className = 'nav-menu'

  const ul = document.createElement('ul')
  const items = ['Hombre', 'Mujer', 'Niños', 'Ofertas']

  items.forEach((item) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = item
    li.appendChild(a)
    ul.appendChild(li)
  })

  navMenuDiv.appendChild(ul)

  // NAV TOGGLE
  const navToggleDiv = document.createElement('div')
  navToggleDiv.className = 'nav-menu-toggle'

  const navToggleImg = document.createElement('img')
  navToggleImg.src =
    'https://res.cloudinary.com/dscgktluo/image/upload/v1742912471/Proyecto%202/icon__burger_menu__bvthao.png'
  navToggleImg.alt = 'Menú'

  navToggleDiv.appendChild(navToggleImg)

  // ICONOS
  const iconsDiv = document.createElement('div')
  iconsDiv.className = 'nav-icons'

  const icons = [
    {
      title: 'Filtros',
      src: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738239041/Proyecto%202/icon__filter__etoy9c.png',
      alt: 'Filtrar'
    },
    {
      title: 'Cesta de la compra',
      src: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738239041/Proyecto%202/icon__shopping_basket__zogbil.png',
      alt: 'Cesta'
    },
    {
      title: 'Usuario',
      src: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738239042/Proyecto%202/icon__User_avatar__rttkwx.png',
      alt: 'Usuario'
    }
  ]

  icons.forEach(({ title, src, alt }) => {
    const a = document.createElement('a')
    a.href = '#'
    a.title = title

    const img = document.createElement('img')
    img.src = src
    img.alt = alt

    a.appendChild(img)
    iconsDiv.appendChild(a)
  })

  nav.appendChild(logoDiv)
  nav.appendChild(navMenuDiv)
  nav.appendChild(navToggleDiv)
  nav.appendChild(iconsDiv)

  const header = document.querySelector('header')
  header.appendChild(nav)
}
