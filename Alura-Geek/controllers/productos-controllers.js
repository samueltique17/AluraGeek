import { productosServicios } from "../services/productos-servicios.js";
const crearProducto = (name, imageUrl, price, id) => {
  const card = document.createElement("li");
  const contenido =`
    <div class="producto__carta">
        <img src= ${imageUrl} alt="" class="producto__imagen">
        <a href="../editar_producto.html?id=${id}" class="producto__icono edit" data-icono> <img src= "../assets/edit.svg.svg" alt=""></a>
        <img src= "../assets/trash.svg.svg" alt="" class="producto__icono trash" data-icono id="${id}">
        <h3 class="producto__nombre">${name}</h3>
        <h4 class="producto__precio">${price}</h4>
        <a href="#${id}" class="producto__link">Ver producto</a>
    </div>
  `
  card.innerHTML = contenido;
  card.dataset.id = id;
  
  if (window.location.href.endsWith('index.html')) {
    const iconos = document.querySelectorAll('[data-icono]');
    iconos.forEach(icono => {
      icono.style.display = 'none';
    });
  }
  const btn = card.querySelector(".trash");
  btn.addEventListener("click", () => {
    const id = btn.id;
    productosServicios
      .eliminarProducto(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });
  return card;
}

productosServicios.listaProductos().then((data) => {
  let categoria = "desconocido"; // Valor por defecto
  if (data.length > 0) {
    categoria = data[0].categoria;
  }

  data.forEach(({ name, imageUrl, price, id, categoria }) => {
    const nuevoProducto = crearProducto(name, imageUrl, price, id);
    if (categoria === 'starwars') {
      document.querySelector('[data-producto-lista]').appendChild(nuevoProducto);
    } else if (categoria === 'consola') {
      document.querySelector('[data-consolas]').appendChild(nuevoProducto);
    } else {
      document.querySelector('[data-diversos]').appendChild(nuevoProducto);
    }
  });
}).catch((error) => alert("Ocurrió un error"));