
const pantallaCarga = document.getElementById("pantallaCarga");
let nombreUsuario = "Lucas";
const bienvenida = document.createElement("div");
bienvenida.id = "welcome";
const textoBienvenida = document.createElement("h1");
textoBienvenida.textContent = `¡Bienvenido ${nombreUsuario}!`;
bienvenida.appendChild(textoBienvenida);
pantallaCarga.appendChild(bienvenida);


// Espera un breve momento antes de agregar la clase "hide" para que la transición se aplique
setTimeout(() => {
    bienvenida.style.opacity = '0'; // Cambia la opacidad gradualmente
    bienvenida.style.transition = 'opacity 2s ease-out'; // Transición de opacidad durante 2 segundos
}, 1000); // Retraso de 100 milisegundos

// Después de 2.1 segundos, elimina el elemento del DOM
setTimeout(() => {
    pantallaCarga.removeChild(bienvenida);
}, 2500);