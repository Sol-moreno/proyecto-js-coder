const cards = document.querySelector("#cards")

const img = document.getElementById("logo")
const rutaImagenLogo = "img/descarga (1).jpg"


img.src = rutaImagenLogo
img.alt = "Logo"
img.title = "Logo de Estética y Salud"

// cards generadas automaticamente

function retornarCardsHTML(producto) {
//    template literal 
       
    return ` <div class="card" style="width: 18rem;">
               <img src="${producto.img}" class="card-img-top" alt="protesisLisas">
             <div class="card-body">
               <h5 class="card-title">${producto.categoria}</h5>
               <p class="card-text">${producto.descripcion}</p>
             <div class= "importe"> <p>USD$ ${producto.importe}</p> </div>
            <div class="comprar"> <button id=${producto.id}> Agregar al Carrito</button> </div>
            </div>`
}

function cargarProductos (array) {
        cards.innerHTML = ""
          array.forEach((producto) => {
        cards.innerHTML += retornarCardsHTML (producto)
        
        
    });
}

cargarProductos (arrayProductos)