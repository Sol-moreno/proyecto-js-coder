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

if (formulario) {

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
    })
};

// Agregamos el evento onClick al botón de enviar

if (botonEnviar) {
    botonEnviar.addEventListener("click", function () {
        // Simulamos el envío del formulario
        formulario.submit();
    })
};


