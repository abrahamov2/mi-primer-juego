let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 1;

function asignarTextoElemento(elemento,texto ){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
    

}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);

     if (numeroDeUsuario === numeroSecreto){
         asignarTextoElemento('p',`Acertaste el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
         document.getElementById('reiniciar').removeAttribute('disabled');

     } else {
        if(numeroDeUsuario > numeroSecreto ){
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');

        }
        intentos++;
        limpiarcaja()


     }

    return;
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value ='';



}


function generarnumerosecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.legth == numeroMaximo){
       asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
    


    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarnumerosecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Jueguito de adivinar numero');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto =  generarnumerosecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarcaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Deshabilitar el boton de nuevo juego
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
