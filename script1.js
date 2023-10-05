
const pantallaCarga = document.getElementById("pantallaCarga");
const passwords = "papita"
let nombreUsuario = ["Lucas", "Karen", "Elvis"];
const bienvenida = document.createElement("div");
bienvenida.id = "welcome";
const textoBienvenida = document.createElement("h1");

pantallaCarga.appendChild(bienvenida);

const formulario = document.createElement("form");
formulario.id = "formulario";
const input1 = document.createElement("input"); 
const input2 = document.createElement("input"); 
const input3 = document.createElement("button");
const error = document.createElement("h3");
error.classList = "mensajeError";
error.textContent = "Usuario o contraseña incorrectos, por favor, intento de nuevo.";
input1.classList = "inputFormulario";
input2.classList = "inputFormulario";
input1.placeholder = "Usuario";
input2.placeholder = "Contraseña";
input3.classList ="botonIniciar";
input1.type = "text";
input2.type = "password";
input3.textContent = "Iniciar"
input1.id = "name";
input2.id = "pass";
bienvenida.appendChild(formulario);
formulario.appendChild(input1);
formulario.appendChild(input2);
formulario.appendChild(input3);


bienvenida.appendChild(textoBienvenida);
    textoBienvenida.textContent = `Iniciar sesión`;


    input3.addEventListener("click", ()=>{


        if(nombreUsuario.includes(input1.value) && input2.value === passwords){
            event.preventDefault();
            textoBienvenida.textContent = `¡Bienvenido ${input1.value}!`;
            setTimeout(() => {
                bienvenida.style.transition = 'opacity 2s ease-out'; 
                bienvenida.style.opacity = '0'; 
            }, 1000); 
        
            setTimeout(() => {
                pantallaCarga.removeChild(bienvenida);
            }, 2500);
            
         }else{
            event.preventDefault();
            formulario.appendChild(error);
            input1.value = "";
            input2.value = "";
         }

})
    

