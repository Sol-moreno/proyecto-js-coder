

function buscarProducto(id) {
    let resultado = productos.find((producto) => producto.id === parseInt(id))
    return resultado
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío.")
        return
    }
}



function comprarProductos() {
    alert("Bienvenid@s a la Tienda online Estetica y Salud 👩👨💅")
    let id = prompt("ingrese el id del producto a comprar")
    if (!parseInt(id)) {
        alert(" Error en el id ingresado.")
        let respuesta = confirm("¿Deseas intentar de nuevo?")
        if (respuesta === true) {
            comprarProductos()
        }
        return
    }

    let productoElegido = buscarProducto(id)
    if (productoElegido === undefined) {
        alert(" El codigo ingresado no es correcto ❗.")
        return
    }

    let resultado = buscarProducto(id)
    if (resultado === buscarProducto(id)) confirm("el producto se encuentra disponible \n desea agregar al carrito?")

    alert(productoElegido.categoria + ":" + productoElegido.descripcion + " = " + "usd$ " + productoElegido.importe + '\n ha sido agregada al carrito.')
    carrito.push(productoElegido)



    // Función para sumar el total de productos en el carrito de compras
    function sumarTotal(carrito) {
        const total = carrito.reduce((acumulador, productoElegido) => {
            return acumulador + productoElegido.importe * productoElegido.cantidad;
        }, 0);
        return total;
    }

    // Función para sumar el total de productos en el carrito de compras y agregar el IVA
    function sumarTotalConIVA(carrito) {
        const totalSinIVA = sumarTotal(carrito);
        const iva = calcularIVA();
        const totalConIVA = totalSinIVA * (1 + iva);
        return totalConIVA;
    }

    // Función para calcular el valor del IVA
    function calcularIVA() {
        const porcentajeIVA = 21; // Puedes cambiar este valor si necesitas otro porcentaje
        const valorIVA = porcentajeIVA / 100;
        return valorIVA;
    }

    const totalConIVA = sumarTotalConIVA(carrito);

    console.log(totalConIVA);



    alert("El monto total de la compra es   " + " USD$  " + totalConIVA)
    let respuesta = confirm("¿Deseas llevar otro producto?")
    if (respuesta === true) {
        comprarProductos()
    } else {
        finalizarCompra()
        carrito = []; 

    }


}

   



    function verProductos() {
    console.table(productos)
}















