const container = document.querySelector(".container")

const img = document.getElementById("logo")
const rutaImagenLogo = "img/descarga (1).jpg"


img.src = rutaImagenLogo
img.alt = "Logo"
img.title = "Logo de Estética y Salud"






// cards generadas automaticamente

     function retornarCardsHTML(producto) {
    //    template literal 

    return ` <div class="container">
    <img src="img/TIPO_IMPLANTES.jpg"${producto.img} class="foto" alt="...">
      <div class="card-body">
       <h5 class="card-title">${producto.categoria}</h5>
       <p class="card-text">${producto.descripcion}</p>
        <p class="dolares">usd$${producto.importe} </p>
      <button class="enviar">Agregar al carrito</button>
      </div>
     </div>
     `

 }


 const arrayProductos = [{img : "img/TIPO_IMPLANTES.jpg", id: 1, categoria: 'protesis mamarias', descripcion:'protesis anatomicas texturizadas perfil xp',importe: 1250 , stock:  20, cantidad: 1 },
 {img :"img/TIPO_IMPLANTES.jpg" , id:  2, categoria: ' Acido hialuronico', descripcion: ' relleno para arrugas faciales y surcos ', importe: 150 ,  stock: 10  ,cantidad:1},
 {img : "img/TIPO_IMPLANTES.jpg" , id:  3, categoria: 'toxina butulinica', descripcion: 'para relajar arrugas faciales , para hiperhidrosis',          importe: 200 ,  stock:  6 ,cantidad:1 },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  4, categoria: 'filorga',           descripcion: 'inyeccion de vitaminas , terapia ortomolescular',             importe: 300,  stock:  15 , cantidad:1  },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  5, categoria: 'colageno',          descripcion: 'presentacion en polvo, mejora el aspecto general de la piel , uñas y pelo',  importe: 100 , stock: 30, cantidad:1},
 {img : "img/TIPO_IMPLANTES.jpg" , id:  6, categoria: 'acido hialuronico', descripcion: 'acido de alta densidad para modelar nariz',                   importe: 230,  stock: 5 ,cantidad:1  },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  7, categoria: 'colageno',          descripcion: 'presentacion liquida en gotero',                              importe: 130 ,  stock: 30,cantidad:1 },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  8, categoria: 'protesis mamarias', descripcion: 'protesis redondas texturizadas tamaños desde 200 a 300 xp' ,  importe: 1450 , stock: 14 ,cantidad:1},
 {img : "img/TIPO_IMPLANTES.jpg" , id:  9, categoria: 'acido hialuronico', descripcion: 'densidad alta relleno para gluteos' ,                         importe:  600 ,  stock: 4,cantidad:1 },
 {img : "img/TIPO_IMPLANTES.jpg" , id: 10, categoria: 'protesis mamarias', descripcion: 'protesis lisas redondas tamaños desde 350 a 500 xp' ,         importe: 1400 , stock: 15, cantidad:1 }
 
                   ]
function cargarProductos (array) {
          
          if(container){
          container.innerHTML= "" ;
          array.forEach((producto) => {
          container.innerHTML += retornarCardsHTML (producto);
          } ) }
        }
        

cargarProductos(arrayProductos)








// formulario , uso de JASON y localStorage 

function claveLs (){
    localStorage.setItem("tienda", "estetica")

}

const inputNombre  = document.querySelector("#nombre")
const inputApellido = document.querySelector("#apellido")
const inputEmail = document.querySelector("#email")
const inputTelefono  = document.querySelector("#telefono")
const inputUsuario = document.querySelector("#usuario")
const inputPassword  = document.querySelector("#password")
const inputConfirmacion = document.querySelector("#confirmacion")
const botonEnviar = document.querySelector("button")



function guardarFormularioEnLS() {

    const datosDeFormulario = {
                                nombre: inputNombre.value, 
                                apellido:inputApellido.value, 
                                email: inputEmail.value, 
                                telefono: inputTelefono.value,
                                usuario:inputUsuario.value,
                                password:inputPassword.value,
                                confirmacion:inputConfirmacion.value,
                                
                              }
                              
    localStorage.setItem("datosDeForm", JSON.stringify(datosDeFormulario))
}



function recuperarDatosDeFormulario() {
    const datosDeFormulario = JSON.parse(localStorage.getItem("datosDeForm"))

if (datosDeFormulario){
    inputNombre.value= datosDeFormulario.nombre,
    inputApellido.value = datosDeFormulario.apellido,
    inputEmail.value= datosDeFormulario.email,
    inputTelefono.value= datosDeFormulario.telefono,
    inputUsuario.value= datosDeFormulario.usuario,
    inputPassword.value= datosDeFormulario.password,
    inputConfirmacion.value= datosDeFormulario.confirmacion
}
}
recuperarDatosDeFormulario()


botonEnviar.addEventListener("click", guardarFormularioEnLS)

