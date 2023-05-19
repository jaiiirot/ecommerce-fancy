import listaProductos from "./productos.json" assert { type: "json" };
import { componente } from "./template.js";

const $HEADER = document.getElementById("HEADER");
const $MAIN = document.getElementById("MAIN");
// COMPONENTES DEL HEADER
$HEADER.innerHTML = componente.header.headerPrincipal;
// COMPONENTES DEL MAIN
$MAIN.innerHTML = componente.main.mainPrincipal;

// SELECCION DE PRODUCTOS
export let productoCarrito = [];


const ACTIVARELSELECCIONADOR = () => {
  $CARDS.childNodes.forEach((nodosCard) => {
    // console.log(nodosCard)
    if (nodosCard.nodeName == "DIV") {
      const AGREGARCARRITO = (padre) => {
        const $AGREGARCARRITO = padre.querySelector(".pushCard");
        // console.log($AGREGARCARRITO);

        $AGREGARCARRITO.addEventListener("click", (e) => {

          let productoSeleccionado;
          productos.filter((elementoFiltrar) => {
            if (elementoFiltrar.id == e.target.id) {
              productoSeleccionado = objetoElementos(elementoFiltrar);
              productoSeleccionado.cantidad = 1
            }
          });
          const exits = productoCarrito.some(product => productoSeleccionado.id === product.id)
          if(exits){
            const products = productoCarrito.map(product => {
              if(product.id == e.target.id){
                product.cantidad++
                return product
              }else{
                return product
              }
            })
            productoCarrito = [...products]            
          }else{
            productoCarrito = [...productoCarrito, productoSeleccionado]            
          }          
          localStorage.setItem(
            `CARRITO-${localStorage.getItem("usuario")}`,
            JSON.stringify(productoCarrito)
          );
        });
      };
      AGREGARCARRITO(nodosCard);

      nodosCard.childNodes[1].addEventListener("click", (nodoHijoCard) => {
        let productoSeleccionado;
        productos.filter((elementoFiltrar) => {
          if (elementoFiltrar.id == nodoHijoCard.target.id) {
            productoSeleccionado = objetoElementos(elementoFiltrar);
          }
        });
        const $$MOSTRAR = document.createElement("div");
        $$MOSTRAR.setAttribute("class", "viewCard");
        $$MOSTRAR.innerHTML += `  
        <img class="viewCard__btn" id="CERRAR" src="https://img.icons8.com/fluency/48/null/close-window.png"/>
        <div class="viewCard__ctn">
        <img class="viewCard__ctnImag" src="${productoSeleccionado.img}" />
        <div class="viewCard__ctnInfo d-f-cc">
        <h1>${productoSeleccionado.title}</h1>
        <h2>$ ${productoSeleccionado.precio}</h2>
        <h3>LOS TALLES DISPONIBLES SON: </h3>
        <select class="btn">                    
        ${productoSeleccionado.talles.split(",").map((elementTalles) => {
          return `<option id="${elementTalles}">${elementTalles}</option>`;
        })}
          </select>
          <h3>EL STOCK DISPONIBLE ES: </h3>
          <h4>${productoSeleccionado.stock}</h4>
          <p>$${productoSeleccionado.info}</p>
          <input id="${
            productoSeleccionado.id
          }" class="btn pushCard" type="submit" value="AGREGAR AL CARRITO">
          </div>
          </div>
          `;
        componente.main.$MAIN.append($$MOSTRAR);
        componente.main.$MAIN.childNodes[1].style.display = "none";
        AGREGARCARRITO($$MOSTRAR);
        let $$CERRAR = document.getElementById("CERRAR");
        $$CERRAR.style.cursor = "pointer";
        $$CERRAR.addEventListener("click", () => {
          componente.main.$MAIN.removeChild($$MOSTRAR);
          componente.main.$MAIN.childNodes[1].style.display = "block";
        });
      });
    }
  });
};
// CARGAR PRODUCTOS
const CARGARPRODUCTOS = (filtro) => {
  $CARDS.innerHTML = ``;
  productos.forEach((e) => {
    if (e.tipo == filtro) {
      MOSTRARPRODUCTOS(e);
    }
    if (filtro == "") {
      MOSTRARPRODUCTOS(e);
    }
  });
  ACTIVARELSELECCIONADOR();
};
// MOSTRAR PRODUCTOS
const MOSTRARPRODUCTOS = (e) => {
  let option = {
    r: "https://img.icons8.com/ios-filled/20/null/polo-shirt.png",
    p: "https://img.icons8.com/ios-filled/20/null/trousers.png",
    z: "https://img.icons8.com/ios-filled/20/null/sneakers.png",
  };
  // const $productos = componente.main.producto(option,e)
  const $productos = `  <div class="ctnCard">
        <div class="ctnCard__view" id="${e.id}"></div>
        <div class="ctnCard__tipo">
            <img src="${option[e.tipo]}"/>
        </div>
        <div class="ctnCard__img">
            <img src="${e.img}" alt="">
        </div>
        <div class="ctnCard__info">
            <h4>${e.title}</h4>
            <h4>$ ${e.precio}</h4>
        </div>
        <div class="ctnCard__btns d-f-cc">
            <input id="${
              e.id
            }" class="btn pushCard" type="submit" value="Agregar Carrito">
        </div>
    </div>`;
  $CARDS.innerHTML += $productos;
};

const objetoElementos = (nodoElemento) => {
  let productoSeleccionado = {
    tipo: nodoElemento.tipo,
    id: nodoElemento.id,
    img: nodoElemento.img,
    title: nodoElemento.title,
    info: nodoElemento.info,
    talles: nodoElemento.talles,
    precio: nodoElemento.precio,
    stock: nodoElemento.stock,
  };
  return productoSeleccionado;
};

const AbrirCerrarCargar = (elemento, tiempo, top, display) => {
  elemento.style.top = top;
  setTimeout(() => {
    if (elemento.style.top === top) {
      elemento.style.display = display;
    }
  }, tiempo);
};

// ???????????????????????????????????????????????????????
let productos = listaProductos;
const $CARDS = document.getElementById("CARDS");
const $RELOAD = document.getElementById("LOADER");
const $BOTONABRIR = document.getElementById("abrirLogReg");

// PRELOADER
window.addEventListener("load", () => {
  AbrirCerrarCargar($RELOAD, 5000, "-100vh", "none");
});
// ABRIR LOS FORMULARIOS
if (localStorage.getItem("usuario") === "") {
  $BOTONABRIR.children[0].innerHTML = ``;
} else {
  $BOTONABRIR.children[0].innerHTML = localStorage.getItem("usuario");
}
$BOTONABRIR.addEventListener("click", () => {
  window.location = "../index.html";
});

// CREAR A LOS PRODUCTOS
if ($CARDS.innerText === "" || nombreUsuario === "") {
  productos.forEach((e) => {
    MOSTRARPRODUCTOS(e);
  });
}

// SELECCIONAR MEDIANTE HEADER
const $listaHeader = document.querySelector(".header__ctnList");
$listaHeader.childNodes.forEach((e) => {
  e.addEventListener("click", (e) => {
    const opciones = {
      PRODUCTOS: "",
      REMERAS: "r",
      PANTALONES: "p",
      ZAPATILLAS: "z",
    };
    CARGARPRODUCTOS(opciones[e.target.id]);
  });
});

// SELECCION DE PRODUCTOS
ACTIVARELSELECCIONADOR();
