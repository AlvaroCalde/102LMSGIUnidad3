document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("boton1").addEventListener("click", saludar);
    document.getElementById("boton2").addEventListener("click", cambiarColor);
    document.getElementById("boton3").addEventListener("click", cambiarParrafos);
    } 
)
function saludar() {
    alert("¡Hola!")
}
function cambiarColor() {
    titulo.style.color="white"
    body.style.backgroundColor="black"
}
function cambiarParrafos() {
    parrafos.style.fontSize = "18px";
    titulo.style.letterSpacing= "2px"
    parrafos.style.rotate="1deg";
    parrafos.style.fontWeight="bold";  
}