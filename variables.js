
        

class Producto {
    constructor(id, categoria, descripcion, precio, img) {
        this.id = id;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio; 
        this.img = img;
        this.cantidad = 1;
    }
}


const protAnatText = new Producto(1, 'protesis mamarias', 'Protesis anatomicas texturizadas perfil xp', 1250, "img/TIPO_IMPLANTES.jpg");
const acHialurRelleno = new Producto(2, 'Acido hialuronico', 'Relleno para arrugas faciales y surcos', 150, "img/TIPO_IMPLANTES.jpg");
const toxBotulinica = new Producto(3, 'toxina butulinica', 200, 'Para relajar arrugas faciales , para hiperhidrosis', "img/TIPO_IMPLANTES.jpg");
const filorga = new Producto(4, 'filorga', 300, 'Inyeccion de vitaminas , terapia ortomolescular', "img/TIPO_IMPLANTES.jpg");
const colagenoPolvo = new Producto(5, 'colageno', 100, 'Presentacion en polvo, mejora el aspecto general de la piel , uñas y pelo', "img/TIPO_IMPLANTES.jpg");
const acHialurNariz = new Producto(6, 'acido hialuronico', 230, 'Acido de alta densidad para modelar nariz', "img/TIPO_IMPLANTES.jpg");
const colagenoLiquido = new Producto(7, 'colageno', 130, 'Presentacion liquida en gotero', "img/TIPO_IMPLANTES.jpg");
const protRedText = new Producto(8, 'protesis mamarias', 1450, 'Protesis redondas texturizadas tamaños desde 200 a 300 xp', "img/TIPO_IMPLANTES.jpg");
const acHialurGluteos = new Producto(9, 'acido hialuronico', 600, 'Densidad alta relleno para gluteos', "img/TIPO_IMPLANTES.jpg");
const protLisas = new Producto(10, 'protesis mamarias', 1400, 'Protesis lisas redondas tamaños desde 350 a 500 xp', "img/TIPO_IMPLANTES.jpg");


//Creamos un Array con todo nuestro catálogo de productos: 

const arrayProductos = [{id: 1, categoria: 'protesis mamarias', descripcion: 'Protesis anatomicas texturizadas perfil xp', importe: 1250, stock: 20, cantidad: 1 },
{ id: 2, categoria: ' Acido hialuronico', descripcion: ' Relleno para arrugas faciales y surcos ', importe: 150, stock: 10, cantidad: 1 },
{ id: 3, categoria: 'toxina butulinica', descripcion: 'Para relajar arrugas faciales , para hiperhidrosis', importe: 200, stock: 6, cantidad: 1 },
{ id: 4, categoria: 'filorga', descripcion: 'Inyeccion de vitaminas , terapia ortomolescular', importe: 300, stock: 15, cantidad: 1 },
{ id: 5, categoria: 'colageno', descripcion: 'Presentacion en polvo, mejora el aspecto general de la piel , uñas y pelo', importe: 100, stock: 30, cantidad: 1 },
{ id: 6, categoria: 'acido hialuronico', descripcion: 'Acido de alta densidad para modelar nariz', importe: 230, stock: 5, cantidad: 1 },
{ id: 7, categoria: 'colageno', descripcion: 'Presentacion liquida en gotero', importe: 130, stock: 30, cantidad: 1 },
{ id: 8, categoria: 'protesis mamarias', descripcion: 'Protesis redondas texturizadas tamaños desde 200 a 300 xp', importe: 1450, stock: 14, cantidad: 1 },
{ id: 9, categoria: 'acido hialuronico', descripcion: 'Densidad alta relleno para gluteos', importe: 600, stock: 4, cantidad: 1 },
{ id: 10, categoria: 'protesis mamarias', descripcion: 'Protesis lisas redondas tamaños desde 350 a 500 xp', importe: 1400, stock: 15, cantidad: 1 }]; 


//Creamos el array del carrito. 

let carrito = [];
 



//Lo que se encuentre en el localStorage, se carga en el carrito: 
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

console.log(Producto);


const contenedorProductos = document.getElementById("contenedorProductos");


//Función para mostrar los productos en stock. 

const mostrarProductos = () => {
    Producto.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="img/protesis-lisas-o-texturizadas.jpg.webp" ${producto.img}class="foto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${producto.categoria} </h5>
                        <p class="card-text"> ${producto.descripcion} </p>
                        <p class="dolares"> usd$ ${producto.importe}</p>
                        <button class = "colorBoton" id = "boton${producto.id}" >Agregar al Carrito</button>
                    </div>
                </div> `

        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();


//Función agregar al carrito: 

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    }else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    console.log(carrito);
    calcularTotal();
    //Trabajamos con el localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Mostrar carrito de compras: 

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                <div class = "card" >
                    <img src = "${producto.img}" class = "card-img-tom imgProductos">    
                    <div class = "card-body" >
                        <h2> ${producto.nombre} </h2>
                        <p> ${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                        <button class = "btn colorBoton" id="eliminar${producto.id}" > Eliminar</button>
                    </div>
                </div>`

        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito: 

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

//Función eliminar producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();

    //LocalStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Para vaciar carrito de compras. 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //LocalStorage: 
    localStorage.clear();
}


//Mostrar un mensaje con el total de la compra.

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach( producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total $${totalCompra}`;
}
              
 