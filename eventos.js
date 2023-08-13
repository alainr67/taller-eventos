
document.getElementById("divBtn").addEventListener("click" , function (){
    alert ("Hola,soy el div!")
}) 


document.getElementById("btn").addEventListener("click" , function (evento){
    alert ("Hola")
    evento.stopPropagation();
}) 
