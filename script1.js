const frase = document.getElementById("frase");
const pantallaCarga = document.getElementById("pantallaCarga");
const passwords = "admin"
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
const input4 =document.createElement("a");
const input5 =document.createElement("hr");
const input6 = document.createElement("a");
const error = document.createElement("h3");
error.classList = "mensajeError";
error.textContent = "Usuario o contraseña incorrectos, por favor, intento de nuevo.";
input1.classList = "inputFormulario";
input2.classList = "inputFormulario";
input4.classList = "inputFormulario2 olvidaste";
input5.classList = "inputFormulario2";
input1.placeholder = "Usuario";
input2.placeholder = "Contraseña";
input3.classList ="botonIniciar";
input6.classList="CrearCuenta";
input1.type = "text";
input2.type = "password";
input4.href= "#";
input6.href= "#";
input3.textContent = "Iniciar";
input4.textContent="¿Olvidaste tu contraseña?";
input6.textContent="Crear Cuenta";
input1.autocomplete = "off";
input2.autocomplete = "off";
input1.id = "name";
input2.id = "pass";
bienvenida.appendChild(formulario);
formulario.appendChild(input1);
formulario.appendChild(input2);
formulario.appendChild(input3);
formulario.appendChild(input4);
formulario.appendChild(input5);
formulario.appendChild(input6);


bienvenida.appendChild(textoBienvenida);
    textoBienvenida.textContent = `Iniciar sesión`;


    input3.addEventListener("click", ()=>{


        if(nombreUsuario.includes(input1.value) && input2.value === passwords){
            event.preventDefault();
            if(input1.value == "Karen"){
            frase.textContent = `¡Hola ${input1.value}!, como desarroladora, tienes acceso al Alpha de MisCursos.com :D`;
            textoBienvenida.textContent = `¡Bienvenida ${input1.value}!`;
            }else{
            frase.textContent = `¡Hola ${input1.value}!, como desarrolador, tienes acceso al Alpha de MisCursos.com :D`; 
            textoBienvenida.textContent = `¡Bienvenido ${input1.value}!`;
            }
            
            input1.value = "";
            input2.value = "";
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
    

