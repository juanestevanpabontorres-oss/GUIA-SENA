// Selección de elementos del DOM[cite: 2]
const formulario = document.getElementById('miFormulario');
const campoNombre = document.getElementById('nombreUsuario');
const mensajeRespuesta = document.getElementById('mensajeRespuesta');

// Asociación de un evento 'submit' al formulario[cite: 2]
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que la página se recargue automáticamente

    let valorNombre = campoNombre.value.trim();

    // Estructura condicional para validar el campo[cite: 2]
    if (valorNombre === "") {
        mensajeRespuesta.textContent = "Error: El campo de nombre no puede estar vacío.";
        mensajeRespuesta.style.color = "red";
    } else {
        mensajeRespuesta.textContent = `¡Hola, ${valorNombre}! Formulario validado con éxito.`;
        mensajeRespuesta.style.color = "green";
    }
});
