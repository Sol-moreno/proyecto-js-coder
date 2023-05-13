// formulario , uso de JASON y localStorage

let usuarios = [];
console.log(usuarios)


if (localStorage.getItem("usuarios")) {
    let solicitud = JSON.parse(localStorage.getItem("usuarios"));
    for (let i = 0; i < solicitud.length; i++) {
        usuarios.push(solicitud[i]);
    }
}

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

const formulario = document.getElementById("formulario");
const botonEnviar = document.getElementById("botonEnviar");


if (formulario) {

    formulario.addEventListener("submit", function (event) {
        
        event.preventDefault()

        
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("passwordConfirm").value;

    
        if (password === passwordConfirm) {
            
            const usuarioNuevo = {
                nombre: nombre,
                email: email,
                usuario: usuario,
                password: password,
            };

    
            usuarios.push(usuarioNuevo);

                
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        } else {
            toast();
        }
    })
};



if (botonEnviar) {
    botonEnviar.addEventListener("click", function () {
        formulario.submit(), descuento()
       
    })
  

};

     function toast() {
        Toastify({
            
            text: "las contraseñas no coinciden",
            position: "center", // `left`, `center` or `right`
            duration: 9000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                with: "5rem",
                
            },
            
            }).showToast();
    }
  

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })


      function descuento (){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'DISFRUTE EL DESCUENTO!',
            showConfirmButton: false,
            timer: 9000
          })
      }
      
    