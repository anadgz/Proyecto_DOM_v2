export const zapatillas = [
  {
    id: 1,
    modelo: 'Air Max 1',
    marca: 'Nike Original',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841808/Proyecto%202/1_tkpmtk.png',
    estrellas: 4.5
  },
  {
    id: 2,
    modelo: 'NB 9060',
    marca: 'New Balance',
    precio: 80,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841809/Proyecto%202/2_xsiuuy.png',
    estrellas: 4.0
  },
  {
    id: 3,
    modelo: 'Nike Revolution',
    marca: 'Nike Original',
    precio: 90,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841809/Proyecto%202/3_xwoac9.png',
    estrellas: 4.2
  },
  {
    id: 4,
    modelo: 'Forum Buckle',
    marca: 'Adidas Original',
    precio: 100,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841810/Proyecto%202/4_gj9t7m.png',
    estrellas: 4.7
  },
  {
    id: 5,
    modelo: 'Campus',
    marca: 'Adidas Original',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841811/Proyecto%202/5_x5ydfe.png',
    estrellas: 5.0
  },
  {
    id: 6,
    modelo: 'NB 327',
    marca: 'New Balance',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841811/Proyecto%202/6_it0qjn.png',
    estrellas: 3.8
  },
  {
    id: 7,
    modelo: 'Dunk Low',
    marca: 'Nike Original',
    precio: 100,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841812/Proyecto%202/7_pubob2.png',
    estrellas: 4.6
  },
  {
    id: 8,
    modelo: 'Gazelle',
    marca: 'Adidas Original',
    precio: 90,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841813/Proyecto%202/8_pltkud.png',
    estrellas: 4.3
  },
  {
    id: 9,
    modelo: 'Air Max SC',
    marca: 'Nike Original',
    precio: 150,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841814/Proyecto%202/9_munvhx.png',
    estrellas: 4.1
  },
  {
    id: 10,
    modelo: 'Handball Spezial',
    marca: 'Adidas Original',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841814/Proyecto%202/10_jliye4.png',
    estrellas: 4.8
  },
  {
    id: 11,
    modelo: 'Air Force',
    marca: 'Nike Original',
    precio: 130,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841815/Proyecto%202/11_wvf8qx.png',
    estrellas: 4.4
  },
  {
    id: 12,
    modelo: 'NB 9060',
    marca: 'New Balance',
    precio: 100,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841816/Proyecto%202/12_ts8iob.png',
    estrellas: 4.0
  },
  {
    id: 13,
    modelo: 'NB 480',
    marca: 'New Balance',
    precio: 150,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841817/Proyecto%202/13_jai4z0.png',
    estrellas: 4.2
  },
  {
    id: 14,
    modelo: 'Full Force Low',
    marca: 'Nike Original',
    precio: 70,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841818/Proyecto%202/14_aqen8g.png',
    estrellas: 4.1
  },
  {
    id: 15,
    modelo: 'Air Max SC',
    marca: 'Nike Original',
    precio: 160,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841819/Proyecto%202/15_qxncer.png',
    estrellas: 3.9
  },
  {
    id: 16,
    modelo: 'Handball Spezial',
    marca: 'Adidas Original',
    precio: 140,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841820/Proyecto%202/16_eh0j0r.png',
    estrellas: 4.5
  }
]

export const printCardThroughTemplate = (zapa) => `
  <div>
    <div class="imgContainer">
      <img src="${zapa.img}" alt="${zapa.modelo}">
    </div>
    <h2>${zapa.marca}</h2>
    <div class="detalles">
      <h3>${zapa.modelo}</h3>
      <p>${zapa.precio.toFixed(2)} €</p>
    </div>
    <button class="zapa-button">Comprar</button>
  </div>
`
