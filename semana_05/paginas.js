// Buscar los elementos en el HTML
const inputUrl = document.getElementById("imgUrl");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const galeria = document.getElementById("galeria");

// Guardar cuál imagen está seleccionada
let imagenSeleccionada = null;

// --- Agregar Imagen ---
btnAgregar.addEventListener("click", function() {
  const url = inputUrl.value;

  if (url !== "") {
    // Crear una nueva etiqueta <img>
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen";

    // Selección de imagen
    img.addEventListener("click", function() {
      // Quitar selección anterior
      if (imagenSeleccionada) {
        imagenSeleccionada.classList.remove("seleccionada");
      }
      // Marcar esta imagen como seleccionada
      imagenSeleccionada = img;
      img.classList.add("seleccionada");
    });

    // Poner la imagen dentro de la galería
    galeria.appendChild(img);

    // Limpiar el campo
    inputUrl.value = "";
  }
});

// --- Eliminar Imagen Seleccionada ---
btnEliminar.addEventListener("click", function() {
  if (imagenSeleccionada) {
    galeria.removeChild(imagenSeleccionada);
    imagenSeleccionada = null;
  }
});

// --- Atajos de teclado ---
// Enter = agregar imagen
// Delete = eliminar imagen seleccionada
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    btnAgregar.click();
  }
  if (event.key === "Delete") {
    btnEliminar.click();
  }
});
