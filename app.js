// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

console.log(amigos.length);

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("nombreAmigo");
    let nombre = inputNombre.value.trim(); 

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = "";

    console.log(amigos);
}