export const renderMainContent = () => `
  <section class="hero-section">
    <img src="https://res.cloudinary.com/dscgktluo/image/upload/v1738239043/Proyecto%202/7d329c8bb1b3ce44d6971087ed3119f3_ok0wji.jpg" alt="Sección principal"/>
  </section>
  <div id="filtros">
      <div class="filter-options" id="filter-options">
        <div class="filter-group">
          <select id="brand-select" class="zapa-button"></select>
        </div>
        <div class="filter-group">
          <input
            type="text"
            class="zapa-button"
            id="price-input"
            placeholder="Precio máximo"
            value=""
          />
        </div>
        <div class="filter-buttons">
          <button id="apply-filter" class="zapa-button">Filtrar</button>
          <button id="reset-filter" class="zapa-button">Limpiar</button>
        </div>
      </div>
      <div class="filter-button">
        <button id="filter-toggle" class="filter-toggle">
          <img
            src="https://res.cloudinary.com/dscgktluo/image/upload/v1738240403/Proyecto%202/icon__arrow_ios_downward__kdfhzb.png"
            alt="Filtrar"
          />
        </button>
      </div>
    </div>
  <section id="zapatillas" class="flex-container"></section>
  `
