const Agregar = () => {
    alert("A continuacion agregar los productos")
    let productos = []
    do {
        tProd = prompt("agregar tipo producto \n\n ( r ) = remera \n ( p ) = pantalon \n ( z ) = zapatilla").toLocaleLowerCase()
        nProd = prompt("agregar nombre producto")
        taProd = prompt("agregar talle producto")
        pProd = prompt("agregar precio producto")
        sProd = prompt("agregar stock producto")
        productos.push(
            {
                id: (Math.trunc(Math.random() * 150)),
                tipo: tProd,
                nombre: nProd,
                tamaño: taProd,
                precio: pProd,
                stock: sProd,
            }
        )
        condition = confirm("Deseas Agregar mas productos")
    } while (condition);
    return productos
}

const buscar = (productos) => {
    let option = prompt("buscar por tipo producto \n\n ( r ) = remera \n ( p ) = pantalon \n ( z ) = zapatilla").toLocaleLowerCase()

    productos.forEach((e, i) => {
        if (e.tipo == option) {
            const tipos = { r: "remera", p: "pantalone", z: "zapatilla" }
            alert(`
========== ${e.tipos} ===========
id: ${e.id}
tipo: ${tipos[e.tipo]}
nombre: ${e.nombre}
tamaño: ${(e.tamaño).split(",").join("-")}
precio: $${e.precio}
stock: ${e.stock} unidades`)
        }
    })
}

const eliminar = (productos) =>{
    let option = parseInt(prompt("eliminar por id producto"))
    
    let nuevoProducto = productos.filter(e => e.id !== option);

    return nuevoProducto
}

const nombreUsuario = prompt("Por favor ingresar el  nombre de usuario")
let confirmar = true
let productos = [
    {
        id: 12,
        tipo: "r",
        nombre: "Remera Monster Octopus Nu Goth Aesthetic Oversized Adulto",
        tamaño: "6,4,2",
        precio: "4500",
        stock: "25",
    },
    {
        id: 14,
        tipo: "r",
        nombre: "Remera Fases Luna Moon Phase Japan Oversized Nu Goth",
        tamaño: "3,6,3",
        precio: 5000,
        stock: 50,
    },
    {
        id: 24,
        tipo: "p",
        nombre: "Pantalón Pampero Cargo De Trabajo",
        tamaño: "1,2,3",
        precio: 2500,
        stock: 53,
    },
    {
        id: 30,
        tipo: "z",
        nombre: "Zapatillas Ozono Skate",
        tamaño: "40,42,39",
        precio: 20000,
        stock: 12,
    }
]
do {

    alert(`BIENVENIDO ${nombreUsuario.toLocaleUpperCase()} A AESTHETIC`)

    let valor = prompt("DESEAS BUSCAR UN PRODUCTO O AGREGAR UN PRODUCTO \n (1)Agregar \n\n (2)Buscar \n\n (3)Eliminar \n\n (4)Salir")

    switch (valor) {
        case "1":
            let nuevosProductos = Agregar()
            productos = productos.concat(nuevosProductos)
            alert(`SE AGREGO ${nuevosProductos.length} PRODUCTOS A LA BASE DE DATOS`)
            break;
        case "2":
            buscar(productos)
            break;
        case "3":
            productos = eliminar(productos)
            break;
        default:
            break;
    }
    confirmar = !(confirm("SEGURO QUE DESEAS SALIR?"))
    console.log("=========")
    console.log(productos)
} while (confirmar);




