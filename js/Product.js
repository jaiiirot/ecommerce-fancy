import listaProductos from "./data/productos.json" assert { type: "json" };
import navegation from "./data/navegation.json" assert { type: "json" };
import {
  ProductDetail,
  MostrarProductos,
  HeaderPrincipal,
  MainPrincipal,
} from "./template/template.js";

const HEADER = document.getElementById("HEADER");
const MAIN = document.getElementById("MAIN");
// COMPONENTES DEL HEADER
HEADER.innerHTML = HeaderPrincipal(navegation);
// COMPONENTES DEL MAIN
MAIN.innerHTML = MainPrincipal();
// SELECCION DE PRODUCTOS
export let productoCarrito = [];

const ACTIVARELSELECCIONADOR = () => {
  $CARDS.childNodes.forEach((nodosCard) => {
    if (nodosCard.nodeName == "DIV") {
      const AGREGARCARRITO = (padre) => {
        const $AGREGARCARRITO = padre.querySelector(".pushCard");

        $AGREGARCARRITO.addEventListener("click", (e) => {
          let productoSeleccionado;
          productos.filter((elementoFiltrar) => {
            if (elementoFiltrar.id == e.target.id) {
              productoSeleccionado = objetoElementos(elementoFiltrar);
              productoSeleccionado.cantidad = 1;
            }
          });
          const exits = productoCarrito.some(
            (product) => productoSeleccionado.id === product.id
          );
          if (exits) {
            const products = productoCarrito.map((product) => {
              if (product.id == e.target.id) {
                product.cantidad++;
                return product;
              } else {
                return product;
              }
            });
            productoCarrito = [...products];
          } else {
            productoCarrito = [...productoCarrito, productoSeleccionado];
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

        ProductDetail(productoSeleccionado, AGREGARCARRITO);
      });
    }
  });
};

// CARGAR PRODUCTOS
const CARGARPRODUCTOS = (filtro) => {
  $CARDS.innerHTML = ``;
  productos.forEach((e) => {
    if (e.tipo == filtro) $CARDS.innerHTML += MostrarProductos(e);
    if (filtro == "") $CARDS.innerHTML += MostrarProductos(e);
  });
  ACTIVARELSELECCIONADOR();
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
    $CARDS.innerHTML += MostrarProductos(e);
  });
}

// SELECCIONAR MEDIANTE HEADER
const $listaHeader = document.querySelector(
  ".headerNav__containerOptions"
).childNodes;
$listaHeader.forEach((e) => {
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
