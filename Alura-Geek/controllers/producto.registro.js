import { productosServicios } from "../services/productos-servicios.js";
const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const imageUrl = document.querySelector('[data-url]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    productosServicios.crearProducto(imageUrl,categoria,nombre, precio).then(()=>{
        window.location = "/productos.html"
    })
    .catch((err) => console.log(err));

})