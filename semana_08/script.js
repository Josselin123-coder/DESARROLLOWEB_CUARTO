// Función para mostrar alerta personalizada
function mostrarAlerta() {
  alert("¡Gracias por visitar Wini Chocolatería! Estamos aquí para ayudarte.");
}

// Validación del formulario al enviar
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío automático

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let formValido = true;

  // Validar nombre
  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    formValido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  // Validar correo electrónico con regex simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correo.value.trim() || !emailRegex.test(correo.value.trim())) {
    correo.classList.add("is-invalid");
    formValido = false;
  } else {
    correo.classList.remove("is-invalid");
  }

  // Validar mensaje
  if (!mensaje.value.trim()) {
    mensaje.classList.add("is-invalid");
    formValido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (formValido) {
    // Aquí podrías enviar el formulario con fetch/AJAX o mostrar un mensaje de éxito
    alert("¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.");
    this.reset(); // Limpiar formulario
  }
});