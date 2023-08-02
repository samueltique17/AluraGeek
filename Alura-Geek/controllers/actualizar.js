import { productosServicios } from "../services/productos-servicios.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null) {
        console.log(error);
      }

      const imageUrl = document.querySelector('[data-url]');
      const categoria = document.querySelector('[data-categoria]');
      const nombre = document.querySelector('[data-nombre]');
      const precio = document.querySelector('[data-precio]');

    try{
        const perfil = await productosServicios.detalleProducto(id);
        
        if(perfil.imageUrl && perfil.categoria && perfil.name && perfil.price){
            imageUrl.value = perfil.imageUrl;
            categoria.value = perfil.categoria;
            nombre.value = perfil.name;
            precio.value = perfil.price;
        
        }else{
            throw new Error();
        }
    }catch(error){
        console.log('Catch Erorr ', error);
        alert('hubo un error');
        
    }
    

}

obtenerInformacion();

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const imageUrl = document.querySelector('[data-url]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    productosServicios.actualizarProducto(imageUrl,categoria,nombre, precio,id).then(()=>{
        window.location.href = "/productos.html"
    })
})