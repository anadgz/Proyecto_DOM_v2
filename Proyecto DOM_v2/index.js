// Importar componentes
import { renderHeader } from './components/header.js'
import { renderMainContent } from './components/main.js'
import { renderFooter } from './components/footer.js'

// Importar utilidades
import { printCardThroughTemplate, zapatillas } from './utils/utils.js'

// Función para renderizar zapatillas
const printZapas = (zapas) => {
  const divZapas = document.querySelector('#zapatillas')
  divZapas.innerHTML = zapas
    .map((zapa) => printCardThroughTemplate(zapa))
    .join('')
}

// Generar opciones del select de marcas
const generateBrandOptions = () => {
  const brands = [...new Set(zapatillas.map((zapa) => zapa.marca))]
  const brandSelect = document.getElementById('brand-select')

  brandSelect.innerHTML = '<option value="">Todas las marcas</option>'

  brands.forEach((brand) => {
    const option = document.createElement('option')
    option.value = brand
    option.textContent = brand
    brandSelect.appendChild(option)
  })
}

// Función auxiliar para obtener zapatillas aleatorias
function getRandomZapatillas(count) {
  const shuffled = [...zapatillas].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  renderHeader()
  renderMainContent()
  renderFooter()

  printZapas(zapatillas)
  generateBrandOptions()

  // Toggle filtros
  document.getElementById('filter-toggle').addEventListener('click', () => {
    const filterOptions = document.querySelector('.filtros-fila')
    const filterToggleIcon = document
      .getElementById('filter-toggle')
      .querySelector('img')

    filterOptions.style.display =
      filterOptions.style.display === 'none' ? 'flex' : 'none'

    filterToggleIcon.style.transform =
      filterToggleIcon.style.transform === 'rotate(180deg)'
        ? 'rotate(0deg)'
        : 'rotate(180deg)'
  })

  // Aplicar filtros
  document.getElementById('apply-filter').addEventListener('click', () => {
    const marca = document.getElementById('brand-select').value
    const precio = document.getElementById('price-input').value

    const filteredZapatillas = zapatillas.filter((zapa) => {
      const isBrandMatch = marca ? zapa.marca === marca : true
      const isPriceMatch = precio ? zapa.precio <= precio : true

      return isBrandMatch && isPriceMatch
    })

    const container = document.getElementById('zapatillas')

    container.innerHTML = ''
    const existingMessage = document.querySelector('.no-matches-message')
    if (existingMessage) existingMessage.remove()

    if (filteredZapatillas.length === 0) {
      const message = document.createElement('div')
      message.classList.add('no-matches-message')
      message.textContent =
        'No existen coincidencias, pero aquí tienes nuestras sugerencias:'

      container.insertAdjacentElement('beforebegin', message)

      const randomZapas = getRandomZapatillas(3)
      const randomZapasHtml = randomZapas
        .map((zapa) => printCardThroughTemplate(zapa))
        .join('')
      container.innerHTML = randomZapasHtml
    } else {
      const filteredHtml = filteredZapatillas
        .map((zapa) => printCardThroughTemplate(zapa))
        .join('')
      container.innerHTML = filteredHtml
    }
  })

  // Limpiar filtros
  document.getElementById('reset-filter').addEventListener('click', () => {
    document.getElementById('brand-select').value = ''
    document.getElementById('price-input').value = ''

    const existingMessage = document.querySelector('.no-matches-message')
    if (existingMessage) existingMessage.remove()

    printZapas(zapatillas)
  })
})
