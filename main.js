const AgregarProducto = (opcion) =>{
    let condition = true
    let cantidadProductos = 0
    let producto = []
    do {
        let nombre = prompt("ingresar nombre de "+ opcion)
        let talle = prompt("ingresar talles disponibles (separdos por coma) de "+ opcion)
        let realizado = prompt("ingresar donde fue creado")
        let modelo = prompt("ingresar modelo de "+ opcion)
        let precio = prompt("ingresar precio de "+ opcion + " " + nombre)

        condition = confirm("Usted ingreso en "+opcion+":\n nombre: "+nombre+"\n talles: "+talle+"\n relizado en: "+realizado+"\n modelo: "+modelo+"\n precio: $"+precio+"\n\n¿ES CORRECTO?")
        condition = confirm("¿DESEAS SEGUIR AGREGANDO?")
        if (condition === true) {
            producto[cantidadProductos] = {nombre,talle,realizado,modelo,precio}
            cantidadProductos++
        }
    } while (condition);

    console.log(producto)
    return producto
}

const verificacionOpcion=(valor)=>{
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
        }else{
            condition = false
        }
    } while (!condition);
    return opcion
}



const nombreUsuario = prompt("Por favor ingresar el  nombre de usuario")
let confirmar = true
let productos = []
do {
    alert("Bienvenido " + nombreUsuario + " a Mystic")
    let opcion = MostrarOpciones()
    
    productos = AgregarProducto(opcion)

    for (let i = 0; i < productos.length; i++) {
        for (let j = 0; j < productos[i].length; j++) {
            alert(productos[i][j])
        }
    }
    confirmar = confirm("¿Deseas Continuar agregando productos?")
    alert(productos)
} while (confirmar);
