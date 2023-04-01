/* const AgregarProducto = (opcion) => {
    let condition = true
    let cantidadProductos = 0
    let producto = []
    do {
        let nombre, talle, realizado, modelo, precio

        nombre = prompt("ingresar nombre de " + opcion)
        talle = prompt("ingresar talles disponibles (separdos por coma) de " + opcion)
        realizado = prompt("ingresar donde fue creado")
        modelo = prompt("ingresar modelo de " + opcion)
        precio = prompt("ingresar precio de " + opcion + " " + nombre)

        condition = confirm("Usted ingreso en " + opcion + ":\n nombre: " + nombre + "\n talles: " + talle + "\n relizado en: " + realizado + "\n modelo: " + modelo + "\n precio: $" + precio + "\n\n¿ES CORRECTO?")

        if (condition === true) {
            producto[cantidadProductos] = { nombre: nombre, talle: talle, realizado: realizado, modelo: modelo, precio: precio }
            cantidadProductos++
        }
        condition = confirm("¿DESEAS SEGUIR AGREGANDO EN "+opcion+"?")
    } while (condition);

    console.log(producto)
    return producto
}

const MostrarTodosLosProductos = (valor,producto = "") => {
    let b = producto
    for (let i = 0; i < valor.length; i++) {
        b += "(" + (i + 1) + ")" + "\n";
        for (let j = 0; j < 5; j++) {
            switch (j) {
                case 0:
                    b += "nombre: " + valor[i].nombre
                    break
                case 1:
                    b += "talle: " + valor[i].talle
                    break;
                case 2:
                    b += "realizado: " + valor[i].realizado
                    break
                case 3:
                    b += "modelo: " + valor[i].modelo
                    break;
                case 4:
                    b += "precio: " + valor[i].precio
                    break;
                default:
                    break;
            }
            b += "\n"
        };
        b += "=====================\n"
    }
    return b
}

const verificacionOpcion = (valor) => {
    switch (valor) {
        case "1":
            return "remera"
        case "2":
            return "zapatilla"
        default:
            return alert("Esta Opcion no existe")
    }
}
const MostrarOpciones = () => {
    let opcion, condition = true;
    do {
        opcion = prompt("Por favor seleccione una opcion ecribiendo en texto o el numero a la izquierda\n\n=========== AGREGAR PRODUCTOS ========\n(1) Remeras \n(2) Zapatillas")
        opcion = verificacionOpcion(opcion)
        if (opcion !== undefined) {
            condition = confirm("Usted eligio la opcion:  (" + opcion + ")  ¿Es correcto?\n(1)Remeras\n(2)Zapatillas \nAceptar = si y cancelar = no")
        } else {
            condition = false
        }
    } while (!condition);
    return opcion
}



const nombreUsuario = prompt("Por favor ingresar el  nombre de usuario")
let confirmar = true
let productos = []
let mostrar = "";
do {
    alert("Bienvenido " + nombreUsuario + " a Mystic")
    let opcion = MostrarOpciones()

    productos = AgregarProducto(opcion)

    mostrar = MostrarTodosLosProductos(productos,"")
    alert(mostrar)
    // SI SON MAS DE 4 NO SE MUESTRA EN EL ALERT
    console.log(mostrar)
    confirmar = confirm("¿Deseas Continuar agregando productos?")
    alert("¡¡¡ FUERON "+((productos.length))+" PRODUCTOS AGREGADOS CORRECTAMENTE !!!\nFELICIDADES "+nombreUsuario+"")
} while (confirmar);
 */