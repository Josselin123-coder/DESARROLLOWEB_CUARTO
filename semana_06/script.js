const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmarContrasena = document.getElementById("confirmarContrasena");
const edad = document.getElementById("edad");
const enviarBtn = document.getElementById("enviarBtn");
const form = document.getElementById("registroForm");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorContrasena = document.getElementById("errorContrasena");
const errorConfirmar = document.getElementById("errorConfirmar");
const errorEdad = document.getElementById("errorEdad");

function validarNombre() {
  if (nombre.value.trim().length >= 3) {
    nombre.classList.add("valid");
    nombre.classList.remove("invalid");
    errorNombre.textContent = "";
    return true;
  } else {
    nombre.classList.add("invalid");
    nombre.classList.remove("valid");
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    return false;
  }
}

function validarCorreo() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(correo.value)) {
    correo.classList.add("valid");
    correo.classList.remove("invalid");
    errorCorreo.textContent = "";
    return true;
  } else {
    correo.classList.add("invalid");
    correo.classList.remove("valid");
    errorCorreo.textContent = "Correo electrónico no válido.";
    return false;
  }
}

function validarContrasena() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (regex.test(contrasena.value)) {
    contrasena.classList.add("valid");
    contrasena.classList.remove("invalid");
    errorContrasena.textContent = "";
    return true;
  } else {
    contrasena.classList.add("invalid");
    contrasena.classList.remove("valid");
    errorContrasena.textContent = "Mínimo 8 caracteres, con al menos un número y un carácter especial.";
    return false;
  }
}

function validarConfirmacion() {
  if (contrasena.value === confirmarContrasena.value && confirmarContrasena.value !== "") {
    confirmarContrasena.classList.add("valid");
    confirmarContrasena.classList.remove("invalid");
    errorConfirmar.textContent = "";
    return true;
  } else {
    confirmarContrasena.classList.add("invalid");
    confirmarContrasena.classList.remove("valid");
    errorConfirmar.textContent = "Las contraseñas no coinciden.";
    return false;
  }
}

function validarEdad() {
  if (parseInt(edad.value) >= 18) {
    edad.classList.add("valid");
    edad.classList.remove("invalid");
    errorEdad.textContent = "";
    return true;
  } else {
    edad.classList.add("invalid");
    edad.classList.remove("valid");
    errorEdad.textContent = "Debes tener al menos 18 años.";
    return false;
  }
}

function validarFormularioCompleto() {
  const valido = validarNombre() && validarCorreo() && validarContrasena() && validarConfirmacion() && validarEdad();
  enviarBtn.disabled = !valido;
}

// Listeners para validación en tiempo real
[nombre, correo, contrasena, confirmarContrasena, edad].forEach(input => {
  input.addEventListener("input", validarFormularioCompleto);
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Formulario enviado correctamente!");
  form.reset();
  enviarBtn.disabled = true;
  document.querySelectorAll("input").forEach(i => i.classList.remove("valid", "invalid"));
});