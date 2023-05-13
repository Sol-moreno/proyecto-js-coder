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
            alert("Las contraseñas no coinciden");
        }
    })
};



if (botonEnviar) {
    botonEnviar.addEventListener("click", function () {
        formulario.submit();
    })
};


