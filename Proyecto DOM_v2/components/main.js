export const renderMainContent = () => {
  const heroSection = document.createElement('section')
  heroSection.className = 'hero-section'

  const heroImage = document.createElement('img')
  heroImage.src =
    'https://res.cloudinary.com/dscgktluo/image/upload/v1738239043/Proyecto%202/7d329c8bb1b3ce44d6971087ed3119f3_ok0wji.jpg'
  heroImage.alt = 'Sección principal'

  heroSection.appendChild(heroImage)
  const main = document.querySelector('main')
  main.appendChild(heroSection)

  // FILTROS
  // 1. Filter options
  const filtrosDiv = document.createElement('div')
  filtrosDiv.id = 'filtros'

  const filtrosFila = document.createElement('div')
  filtrosFila.className = 'filtros-fila'

  // Brand Select
  const brandSelect = document.createElement('select')
  brandSelect.className = 'zapa-button'
  brandSelect.id = 'brand-select'

  // Input precio máximo
  const precioMax = document.createElement('input')
  precioMax.type = 'text'
  precioMax.className = 'zapa-button'
  precioMax.id = 'price-input'
  precioMax.placeholder = 'Precio máximo'
  precioMax.value = ''

  // 2. Filter buttons
  const filtButtonsDiv = document.createElement('div')
  filtButtonsDiv.className = 'filter-buttons'

  // Botón aplicar filtro
  const applyButton = document.createElement('button')
  applyButton.id = 'apply-filter'
  applyButton.className = 'zapa-button'
  applyButton.textContent = 'Filtrar'

  // Botón limpiar filtro
  const resetButton = document.createElement('button')
  resetButton.id = 'reset-filter'
  resetButton.className = 'zapa-button'
  resetButton.textContent = 'Limpiar'

  // 2. Añadir todos a la fila
  filtrosFila.appendChild(brandSelect)
  filtrosFila.appendChild(precioMax)
  filtrosFila.appendChild(applyButton)
  filtrosFila.appendChild(resetButton)

  // 3. Añadir la fila al contenedor principal
  filtrosDiv.appendChild(filtrosFila)

  // 4. Filter toggle
  const filToggleDiv = document.createElement('div')
  filToggleDiv.className = 'filter-button'

  const toggleButton = document.createElement('button')
  toggleButton.id = 'filter-toggle'
  toggleButton.className = 'filter-toggle'

  const toggleButtonImg = document.createElement('img')
  toggleButtonImg.src =
    'https://res.cloudinary.com/dscgktluo/image/upload/v1738240403/Proyecto%202/icon__arrow_ios_downward__kdfhzb.png'
  toggleButtonImg.alt = 'Filtrar'

  toggleButton.appendChild(toggleButtonImg)
  filToggleDiv.appendChild(toggleButton)
  filtrosDiv.appendChild(filToggleDiv)

  main.appendChild(filtrosDiv)

  // ZAPATILLAS
  const zapatillasSection = document.createElement('section')
  zapatillasSection.id = 'zapatillas'
  zapatillasSection.className = 'flex-container'

  main.appendChild(zapatillasSection)
}
