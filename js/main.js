console.clear()
import { PRODUCTOS } from './productos.js';

const $CARDS = document.getElementById('CARDS')

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
    const $productos =
    `
    <div class="ctnCard">
        <div class="ctnCard__view" id="${e.id}"></div>
        <div class="ctnCard__tipo">
            <img src="https://img.icons8.com/ios-filled/20/null/polo-shirt.png"/>
        </div>
        <div class="ctnCard__img">
            <img src="${e.img}" alt="">
        </div>
        <div class="ctnCard__info">
            <h4>${e.title}</h4>
            <p>${e.info}</p>
        </div>
        <div class="ctnCard__btns">
            <h4>$ ${e.precio}</h4>
            <button class="btn" type="submit"><i class="fa-solid fa-heart" style="color: #eb0000;"></i></button>
            <button class="btn" type="submit"><img src="https://img.icons8.com/color/24/null/add-shopping-cart--v1.png"/></button>
        </div>
    </div>
    `    
    $CARDS.innerHTML += $productos    
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

if($CARDS.innerText === "" || nombreUsuario === ""){
    productos.forEach((e) => {
        MOSTRARPRODUCTOS(e)
    })
}




// MEJORAR

let $VIEW = document.querySelectorAll(".ctnCard")

$VIEW.forEach(e => {
    e.addEventListener("click",()=>{
        console.log(e)
        const $$MOSTRAR = document.createElement("div")
        // $$MOSTRAR.setAttribute("id","MOSTRAR")
        $$MOSTRAR.style.position = "fixed"
        $$MOSTRAR.style.top = "0"
        $$MOSTRAR.style.zIndex = "10"
        $$MOSTRAR.style.width = "100%"
        $$MOSTRAR.style.height = "100%"
        $$MOSTRAR.style.background = "#fff"
        $$MOSTRAR.innerHTML = `
        <div style="position: relative">        
        <span class="btn" id="CERRAR" style="position: relative; z-index:2">
        <img src="https://img.icons8.com/fluency/48/null/close-window.png"/>
        </span>
        <div>${e.innerHTML}</div>
        </div>
        `
        $CARDS.append($$MOSTRAR)
        

        let $$CERRAR = document.getElementById("CERRAR")

        $$CERRAR.addEventListener('click',()=>{
            $CARDS.removeChild($$MOSTRAR)
        })
    })
})

