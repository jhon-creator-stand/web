

const envolture = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    
  if (e.target.matches(".sobre") || 
    e.target.matches(".solapa-derecha")||
     e.target.matches(".solapa-izquierda")||
e.target.matchess(".corazon")){

    envolture.classList.toggle("abierto");
if (!carta.classList.contains("abierta")) {

setTimeout( ()=>{
carta.classList.add("mostrar-carta");
       setTimeout( ()=>{
         carta.classList.remove("mostrar-carta");
            carta.classList.add("abierta");
             },500);
    },1000);


}


}
})
