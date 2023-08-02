    
    const listaProductos = ()=>{
        return fetch("http://localhost:3000/producto")
        .then(respuesta => respuesta.json())
        .catch(error => console.error())
    }
    const crearProducto = ( imageUrl,categoria,name, price) => {
        return fetch("http://localhost:3000/producto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({imageUrl,categoria,name, price, id: uuid.v4() }),
        });
      };
      const eliminarProducto = (id) => {
        return fetch(`http://localhost:3000/producto/${id}`, {
          method: "DELETE",
        });
      };
      const detalleProducto = (id) => {
        return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
          respuesta.json()
        );
      };
      const actualizarProducto = (imageUrl,categoria,name, price, id)=>{
        return fetch(`http://localhost:3000/producto/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify({ imageUrl,categoria,name, price}), 
          })
          .then((respuesta) => respuesta)
          .catch((err) =>console.log(err));
        }
    export const productosServicios = {
        listaProductos,
        crearProducto,
        eliminarProducto,
        detalleProducto,
        actualizarProducto
    }