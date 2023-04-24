const card = document.querySelector(".card")
const imgCarrito = document.querySelector(".carrito")
const img = document.getElementById("logo")
const rutaImagenLogo = "img/descarga (1).jpg"


img.src = rutaImagenLogo
img.alt = "Logo"
img.title = "Logo de Estética y Salud"









// cards generadas automaticamente

function retornarCardsHTML(producto) {
    //    template literal 

    return `   <div class="card" style="width: 18rem;">
    <img src="img/protesis-lisas-o-texturizadas.jpg.webp" ${producto.img}class="foto" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${producto.categoria} </h5>
      <p class="card-text"> ${producto.descripcion} </p>
       <p class="dolares"> usd$ ${producto.importe}</p>
      <button type="submit" id="boton"> Enviar al carrito</button>
    </div>
    </div> `


}


const arrayProductos = [{ img: "img/TIPO_IMPLANTES.jpg", id: 1, categoria: 'protesis mamarias', descripcion: 'Protesis anatomicas texturizadas perfil xp', importe: 1250, stock: 20, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 2, categoria: ' Acido hialuronico', descripcion: ' Relleno para arrugas faciales y surcos ', importe: 150, stock: 10, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 3, categoria: 'toxina butulinica', descripcion: 'Para relajar arrugas faciales , para hiperhidrosis', importe: 200, stock: 6, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 4, categoria: 'filorga', descripcion: 'Inyeccion de vitaminas , terapia ortomolescular', importe: 300, stock: 15, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 5, categoria: 'colageno', descripcion: 'Presentacion en polvo, mejora el aspecto general de la piel , uñas y pelo', importe: 100, stock: 30, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 6, categoria: 'acido hialuronico', descripcion: 'Acido de alta densidad para modelar nariz', importe: 230, stock: 5, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 7, categoria: 'colageno', descripcion: 'Presentacion liquida en gotero', importe: 130, stock: 30, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 8, categoria: 'protesis mamarias', descripcion: 'Protesis redondas texturizadas tamaños desde 200 a 300 xp', importe: 1450, stock: 14, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 9, categoria: 'acido hialuronico', descripcion: 'Densidad alta relleno para gluteos', importe: 600, stock: 4, cantidad: 1 },
{ img: "img/TIPO_IMPLANTES.jpg", id: 10, categoria: 'protesis mamarias', descripcion: 'Protesis lisas redondas tamaños desde 350 a 500 xp', importe: 1400, stock: 15, cantidad: 1 }

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


function filtrarProductos(productos) {
    let resultado = arrayProductos.filter(producto => producto.categoria.toLowerCase().includes(productos))
    if (resultado.length > 0) { cargarProductos(resultado) }
    return
}

const botonFiltrar = document.querySelector("#filtrar")

if(botonFiltrar){

function filtrarProductos(productos) {
    botonFiltrar.addEventListener("click", filtrarProductos(productos))}}














// formulario , uso de JASON y localStorage


let usuarios = [];
console.log(usuarios)

//Los datos que se encuentren en el localstorage, se agregaran al array vacio usuarios.
if (localStorage.getItem("usuarios")) {
    let solicitud = JSON.parse(localStorage.getItem("usuarios"));
    for (let i = 0; i < solicitud.length; i++) {
        usuarios.push(solicitud[i]);
    }
}

// Verificamos si hay información almacenada en el local storage
if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

// Obtenemos el formulario y el botón de enviar
const formulario = document.getElementById("formulario");
const botonEnviar = document.getElementById("botonEnviar");

// Agregamos el evento onSubmit al formulario

if (formulario){

formulario.addEventListener("submit", function (event) {
    // Prevenimos que el formulario se envíe por defecto
    event.preventDefault() 

    // Obtenemos los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    // Verificamos si las contraseñas coinciden
    if (password === passwordConfirm) {
        // Creamos un objeto con los datos del usuario
        const usuarioNuevo = {
            nombre: nombre,
            email: email,
            usuario: usuario,
            password: password,
        };

        // Agregamos el nuevo usuario al array
        usuarios.push(usuarioNuevo);

        // Guardamos el array en el local storage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else {
        alert("Las contraseñas no coinciden");
    }
}) };

// Agregamos el evento onClick al botón de enviar

if(botonEnviar){
botonEnviar.addEventListener("click", function () {
    // Simulamos el envío del formulario
    formulario.submit();
})};



