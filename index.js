const card = document.querySelector(".card")
const imgCarrito = document.querySelector(".carrito")
const inputSerch= document.querySelector ("#inputSearch")
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


 const arrayProductos = [{img : "img/TIPO_IMPLANTES.jpg", id: 1, categoria: 'protesis mamarias', descripcion:'Protesis anatomicas texturizadas perfil xp', importe: 1250 , stock:  20, cantidad: 1 },
 {img :"img/TIPO_IMPLANTES.jpg" , id:  2, categoria: ' Acido hialuronico', descripcion: ' Relleno para arrugas faciales y surcos ', importe: 150 ,  stock: 10  ,cantidad:1},
 {img : "img/TIPO_IMPLANTES.jpg" , id:  3, categoria: 'toxina butulinica', descripcion: 'Para relajar arrugas faciales , para hiperhidrosis',          importe: 200 ,  stock:  6 ,cantidad:1 },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  4, categoria: 'filorga',           descripcion: 'Inyeccion de vitaminas , terapia ortomolescular',             importe: 300,  stock:  15 , cantidad:1  },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  5, categoria: 'colageno',          descripcion: 'Presentacion en polvo, mejora el aspecto general de la piel , uñas y pelo',  importe: 100 , stock: 30, cantidad:1},
 {img : "img/TIPO_IMPLANTES.jpg" , id:  6, categoria: 'acido hialuronico', descripcion: 'Acido de alta densidad para modelar nariz',                   importe: 230,  stock: 5 ,cantidad:1  },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  7, categoria: 'colageno',          descripcion: 'Presentacion liquida en gotero',                              importe: 130 ,  stock: 30,cantidad:1 },
 {img : "img/TIPO_IMPLANTES.jpg" , id:  8, categoria: 'protesis mamarias', descripcion: 'Protesis redondas texturizadas tamaños desde 200 a 300 xp' ,  importe: 1450 , stock: 14 ,cantidad:1},
 {img : "img/TIPO_IMPLANTES.jpg" , id:  9, categoria: 'acido hialuronico', descripcion: 'Densidad alta relleno para gluteos' ,                         importe:  600 ,  stock: 4,cantidad:1 },
 {img : "img/TIPO_IMPLANTES.jpg" , id: 10, categoria: 'protesis mamarias', descripcion: 'Protesis lisas redondas tamaños desde 350 a 500 xp' ,         importe: 1400 , stock: 15, cantidad:1 }
 
                   ]

function cargarProductos (array) {
          
          if(card){
          card.innerHTML= "" ;
          array.forEach((producto) => {
          card.innerHTML += retornarCardsHTML (producto);
          } ) }
        }
        

cargarProductos(arrayProductos)


function filtrarProductos(valor){
    let resultado = arrayProductos.filter(producto => producto.categoria.toLowerCase().includes(valor.tolowerCase()))
   if(resultado.length > 0) {cargarProductos (resultado)}
}

inputSerch.addEventListener("search", (e)=> {
    filtrarProductos(e.target.value)
})









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



