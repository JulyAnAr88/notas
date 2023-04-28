const listaNotas = () => fetch("http://localhost:3000/notas").then((respuesta) =>respuesta.json()).catch((error) => console.log(error));

const detalleNota = (apellido) =>{
    return fetch(`http://localhost:3000/productos/${id}`).then ( respuesta => respuesta.json()); 
       
};

export const productoServicios = {
    crearProducto,
    listaProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};