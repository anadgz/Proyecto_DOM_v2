export const renderFooter = () => {
  const footerWrapper = document.createElement('div')
  footerWrapper.className = 'footer'

  const columns = [
    {
      title: 'Compra con JD',
      items: [
        'Guía de tallas',
        'Buscador de tallas',
        'Descuento estudiantes',
        'Calendario lanzamientos',
        'Inscribite a JDX',
        'JD Blog'
      ]
    },
    {
      title: 'Atención al cliente',
      items: [
        'Preguntas frecuentes',
        'Envíos y devoluciones',
        'Seguimiento de envío',
        'Contacto'
      ]
    },
    {
      title: 'Aviso legal',
      items: [
        'Términos y condiciones',
        'Promociones y condiciones',
        'Política de privacidad',
        'Política de Cookies',
        'Ajustes de Cookies',
        'Accesibilidad'
      ]
    }
  ]

  columns.forEach((col) => {
    const columnDiv = document.createElement('div')
    columnDiv.className = 'footer-column'

    const h3 = document.createElement('h3')
    h3.textContent = col.title
    columnDiv.appendChild(h3)

    const ul = document.createElement('ul')
    col.items.forEach((item) => {
      const li = document.createElement('li')
      li.textContent = item
      ul.appendChild(li)
    })

    columnDiv.appendChild(ul)
    footerWrapper.appendChild(columnDiv)
  })

  const footer = document.querySelector('footer')
  footer.appendChild(footerWrapper)
}
