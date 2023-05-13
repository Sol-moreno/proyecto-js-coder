    function inicio (){
        
        Swal.fire({

    title: 'Bienvenid@s! a tu tienda            online "Estetica y Salud"',
    html:
      'Registrate' +
      '<a href="registrarse.html"> links </a> ' +
      'y obtene un 25% de descuento en tu primera compra',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> En otro momento ',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  
  })
     }
  
  
  
  
  const card = document.getElementById("cards")
  const imgCarrito = document.querySelector(".carrito")
  const img = document.getElementById("logo")
  const rutaImagenLogo = "img/descarga (1).jpg"
  
  
  img.src = rutaImagenLogo
  img.alt = "Logo"
  img.title = "Logo de Estética y Salud"
  
  
  
  
  function retornarCardsHTML(producto) {
  
    return `  <div class="card" style="width: 18rem;">
      <img src= " ${producto.img} " class="foto" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${producto.nombre} </h5>
        <p class="card-text">  ${producto.descripcion} </p>
        <p class="dolares"> usd$ ${producto.importe}</p>
        <button type="submit" class="boton" id=${producto.id}> Enviar al carrito</button>
        
      </div>
    </div> `
  
  
  }
  
  
  const arrayProductos = [{ img: 'img/protesisbaseredonda.jpg', id: 1, categoria: 'protesis mamarias', nombre: 'Prótesis Redondas', descripcion: 'Protesis texturizadas perfil xp', importe: 1250, cantidad: 1 },
  { img: "img/acidohialuronico.jpg", id:2, categoria: ' acido hialuronico', nombre: 'Relleno Facial', descripcion: '  Para surcos nasogenianos ', importe: 150, cantidad: 1 },
  { img: "img/BOTOX.jpg", id: 3, categoria: 'botox', nombre: 'Botox facial ', descripcion: 'Para relajar arrugas faciales , para hiperhidrosis', importe: 200, cantidad: 1 },
  { img: "img/filorga.jpg", id: 4, categoria: 'filorga', nombre: 'Filorga', descripcion: 'Inyeccion de vitaminas , terapia ortomolescular', importe: 300, cantidad: 1 },
  { img: "img/colagenouñas.jpg", id: 5, categoria: 'colageno', nombre: 'Colageno para uñas y pelo ', descripcion: 'Presentacion en polvo, mejora el aspecto general de la piel , uñas y pelo', importe: 100, cantidad: 1 },
  { img: "img/hialuroniconariz.jpg", id: 6, categoria: 'acido hialuronico', nombre: 'Relleno para nariz ', descripcion: 'Acido de alta densidad para modelar nariz sin ser una tecnica invasiva', importe: 230, cantidad: 1 },
  { img: "img/colagenoliquido.jpg", id: 7, categoria: 'colageno', nombre: 'Colageno para articulaciones ', descripcion: 'Presentacion liquida en gotero', importe: 130, cantidad: 1 },
  { img: "img/TEXTURIZADOS.jpg", id: 8, categoria: 'protesis mamarias', nombre: 'Prótesis Texturizadas', descripcion: 'Protesis texturizadas tamaños desde 200 a 300 xp', importe: 1450, cantidad: 1 },
  { img: "img/rellenogluteos.jpg", id: 9, categoria: 'acido hialuronico', nombre: 'Relleno gluteos', descripcion: 'Relleno de alta densidad, modela y da volumen', importe: 600, cantidad: 1 },
  
  ]
  
  function cargarProductos(array) {
  
    if (card) {
      card.innerHTML = "";
      array.forEach((producto) => {
        card.innerHTML += retornarCardsHTML(producto);
      })
    }
  }
  
  
  cargarProductos(arrayProductos)
  
  
  function filtrarProductos() {
    const buscar = document.querySelector("#inputSearch").value;
    let resultado = arrayProductos.filter((producto) => {
      return producto.categoria.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
    })
     cargarProductos(resultado)
  }
  
  const botonFiltrar = document.querySelector("#filtrar")
  
  if (botonFiltrar) {
  
  
    botonFiltrar.addEventListener("click", filtrarProductos, inicio(), ) 
    
  }
  
  
  // carrito de compras
  
  const productos = ["Potesis Redondas", "Relleno Facial", "Botox Facial ", "Filorga", "Colageno para uas y pelo", "Relleno para nariz", "Colageno para articulaciones", "Protesis Texturizadas", "Relleno Gluteos","Protesis Lisas"]
  
  let carrito = [];
  //localStorage.clear();
  
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
  
  console.log(productos)
  
  
  const contenedorProductos = document.getElementById("cards");
  const enviarCarrito = document.getElementById ("boton");
  const botonVer = document.getElementById ("verCarrito")
  const botonVaciar = document.getElementById("vaciarCarrito")
  
  
            const mostrarProductos = () => {
            arrayProductos.forEach( producto => {
            const card = document.createElement("div");
            card.innerHTML = `<div class="card" style="width: 18rem;">
              <img src= " ${producto.img} " class="foto" alt="...">
              <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text">  ${producto.descripcion} </p>
                <p class="dolares"> usd$ ${producto.importe}</p>
                <button type="submit" class="boton" id="${producto.id}"> Enviar al carrito</button>
              </div>
            </div>
                       `
      })

      let btn = document.querySelectorAll(".boton");
      btn.forEach(item => {
          item.addEventListener('click', (e) => {
              agregarAlCarrito(e.target.id);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agrego al carrito',
                showConfirmButton: false,
                timer: 1500
              })

          });
  
    })
  
  
  }
  
  mostrarProductos();
  
  const agregarAlCarrito = (id) => {
  
    console.log("entró al carrito "+id);
    const productoEnCarrito = carrito.find(producto => producto.id == id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      const producto = arrayProductos.find(producto => producto.id == id);
      console.log(producto);
      carrito.push(producto);
    }
    console.log(carrito);
    calcularTotal();
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  //Mostrar el carrito de compras: 
  
  const contenedorCarrito = document.getElementById("contenedorCarrito");
  const verCarrito = document.getElementById("verCarrito");
  
  verCarrito.addEventListener("click", () => {
    mostrarCarrito();
  })
  
  const mostrarCarrito = () => {
    console.log("entro mostrar carrito")
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
      const card = document.createElement("div");
      card.innerHTML = `<div class="card" style="width: 18rem;">
      <img src= " ${producto.img} " class="foto" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${producto.nombre} </h5>
        <p class="card-text">  ${producto.descripcion} </p>
        <p class="dolares"> usd$ ${producto.importe}</p>
        <button class="colorBoton" id="eliminar${producto.id}">eliminar</button>
  
      </div>
    </div>
               `
  
      contenedorCarrito.appendChild(card);
  
      //Eliminar productos del carrito: 
  
      const boton = document.getElementById(`eliminar${producto.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito(producto.id);
      })
    })
    calcularTotal();
  }
  
  
  
  const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
  

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  
  const vaciarCarrito = document.getElementById("vaciarCarrito");
  
  vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
  })
  
  const eliminarTodoElCarrito = () => {
     carrito = [];
    mostrarCarrito();
  

    localStorage.clear();
  }
  
  

  
  const total = document.getElementById("total");
  
  const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
      totalCompra += producto.importe * producto.cantidad;
  
    })
    total.innerHTML = `Total USD$${totalCompra}`;
  }

  let finalizarcompra = document.getElementById ("finalizarCompra")



    finalizarcompra.addEventListener("click", ()=> {
    Swal.fire({
        title: 'Gracias por su compra!',
        imageUrl: 'img/apretondemanos.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
                                           
    carrito.length = 0                          
    localStorage.removeItem("carrito")   
    
      })

  
  /* FETCH: API DE CRIPTO YA */
  
  const apiDolar = "https://criptoya.com/api/dolar";
  
  const cotiza = document.getElementById("cotiza");
  
  setInterval(() => {
    fetch(apiDolar)
      .then(resp => resp.json())
      .then(({ oficial, blue }) => {
        cotiza.innerHTML = `
              <h2>Cotizacion del dia en USD$</h2>
                  <ul>
                      <li>Dolar Oficial: $ ${oficial}</li>
                      <li>Dolar Blue: $ ${blue}</li>
                  </ul>
                  
              `
      })
      .catch(error => console.log(error))
  }, 5000);
