// Arreglo de productos
const productos = [
    {
        nombre: "Laptop",
        precio: "$800",
        descripcion: "Laptop para estudio y trabajo"
    },
    {
        nombre: "Mouse",
        precio: "$15",
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: "$25",
        descripcion: "Teclado mecánico"
    }
];

// Referencia al elemento UL
const lista = document.getElementById("lista-productos");

// Función para renderizar productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: ${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Renderizar productos al cargar la página
renderizarProductos();

// Botón agregar producto
const boton = document.getElementById("btn-agregar");

boton.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Producto Nuevo",
        precio: "$0",
        descripcion: "Descripción del nuevo producto"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});