

let carrito = [];
 



//Lo que se encuentre en el localStorage, se carga en el carrito: 
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}



