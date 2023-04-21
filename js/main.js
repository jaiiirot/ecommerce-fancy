console.clear()
import { PRODUCTOS } from './productos.js';

const $cards = document.getElementById('CARDS')


// const Agregar = () => {
//     alert("A continuacion agregar los productos")
//     let productos = []
//     let condition = false
//     do {
//         let tProd = prompt("agregar tipo producto \n\n ( r ) = remera \n ( p ) = pantalon \n ( z ) = zapatilla").toLocaleLowerCase()
//         let iProd = prompt("agregar imagen de internet producto")
//         let tiProd = prompt("agregar titulo producto")
//         let inProd = prompt("agregar informacion producto")
//         let taProd = prompt("agregar talle producto")
//         let pProd = prompt("agregar precio producto")
//         let sProd = prompt("agregar stock producto")

//         productos.push(
//             {
//                 tipo: tProd,
//                 id: (Math.trunc(Math.random() * 150)),
//                 img: iProd,
//                 title: tiProd,
//                 info: inProd,
//                 talles: taProd,
//                 precio: pProd,
//                 stock: sProd,
//             }
//         )
//         condition = confirm("Deseas Agregar mas productos")
//     } while (condition);
//     return productos
// }

// const buscar = (productos) => {
//     let option = prompt("buscar por tipo producto \n\n ( r ) = remera \n ( p ) = pantalon \n ( z ) = zapatilla").toLocaleLowerCase()

//     productos.forEach((e) => {
//         if (e.tipo == option) {
//             MOSTRARPRODUCTOS(e)
//         }
//     })
// }

// const eliminar = (productos) => {
//     let option = parseInt(prompt("eliminar por id producto"))

//     let nuevoProducto = productos.filter(e => e.id !== option);

//     return nuevoProducto
// }


const MOSTRARPRODUCTOS = (e)=>{
        let $prod = document.createElement(`div`)
        $prod.innerHTML =
                `
<div class="ctnCard">
<div class="ctnCard__tipo"><img src="https://img.icons8.com/ios-filled/20/null/polo-shirt.png"/></div>
<div class="ctnCard__img">
<img src="${e.img}" alt="">
</div>
<div class="ctnCard__info">
<h4>${e.title}</h4>
<p>${e.info}</p>
</div>
<div class="ctnCard__btns">
<h4>$ ${e.precio}</h4>
<button class="btn" type="submit"><img src="https://img.icons8.com/color/24/null/add-shopping-cart--v1.png"/></button>
</div>
</div>
`
        $cards.append($prod)
}


// const nombreUsuario = prompt("Por favor ingresar el  nombre de usuario")
// let confirmar = true
let productos = PRODUCTOS

// if (nombreUsuario !== null) {
//     do {
//         alert(`BIENVENIDO ${nombreUsuario.toLocaleUpperCase()} A AESTHETIC`)

//         let valor = prompt("DESEAS BUSCAR UN PRODUCTO O AGREGAR UN PRODUCTO \n (1)Agregar \n\n (2)Buscar \n\n (3)Eliminar \n\n (4)Salir")

//         switch (valor) {
//             case "1":
//                 let nuevosProductos = Agregar()
//                 productos = productos.concat(nuevosProductos)
//                 alert(`SE AGREGO ${nuevosProductos.length} PRODUCTOS A LA BASE DE DATOS`)
//                 break;
//             case "2":
//                 buscar(productos)
//                 break;
//             case "3":
//                 productos = eliminar(productos)
//                 break;
//             default:
//                 break;
//         }
        
//         confirmar = !(confirm("SEGURO QUE DESEAS SALIR?"))

//     } while (confirmar);
// }




if($cards.innerText === "" || nombreUsuario === ""){

    productos.forEach((e) => {
        MOSTRARPRODUCTOS(e)
    })

    console.log(productos)
}


















const $LOGREG = document.querySelector('.logReg')
$LOGREG.classList.add("accionCerrar")


