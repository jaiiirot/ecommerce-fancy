import listaProductos from "./data/productos.json" assert { type: "json" };
import navegation from "./data/navegation.json" assert { type: "json" };
import { AGREGARCARRITO } from "./Card.js";
import {
  ProductDetail,
  MostrarProductos,
  HeaderPrincipal,
  MainPrincipal,
  $MAIN,
} from "./template/template.js";

const HEADER = document.getElementById("HEADER");
const MAIN = document.getElementById("MAIN");
// COMPONENTES DEL HEADER
HEADER.innerHTML = HeaderPrincipal(navegation);
// COMPONENTES DEL MAIN
MAIN.innerHTML = MainPrincipal();
// SELECCION DE PRODUCTOS

const ACTIVARELSELECCIONADOR = () => {
  const listDetail = document.querySelectorAll(".ctnCard");
  listDetail.forEach((child) => {
    const agregar = child.querySelector(".pushCard");
    const itemDetail = child.querySelector(".ctnCard__view");
    agregar.addEventListener("click", (e) => {
      AGREGARCARRITO(parseInt(e.target.id));
    });

    itemDetail.addEventListener("click", (e) => {
      ProductDetail(e.target.id);
      ACTIVARPRODDETAIL();
    });
  });
};

const ACTIVARPRODDETAIL = () => {
  const addDetail = document.querySelector(".pushCardDetail");
  CerrarAbrirDetail();
  addDetail.addEventListener("click", (e) => {
    AGREGARCARRITO(parseInt(e.target.id));
  });
};

function CerrarAbrirDetail() {
  const containerDetail = document.querySelector(".viewCard");
  const listProd = document.getElementById("listProd");
  const closeDetail = document.getElementById("closeProdDetail");
  listProd.style.display = "none";
  closeDetail.addEventListener("click", () => {
    $MAIN.removeChild(containerDetail);
    listProd.style.display = "block";
  });
}

// CARGAR PRODUCTOS
const CARGARPRODUCTOS = (filtro) => {
  $CARDS.innerHTML = ``;
  productos.forEach((e) => {
    if (e.tipo == filtro) $CARDS.innerHTML += MostrarProductos(e);
    if (filtro == "") $CARDS.innerHTML += MostrarProductos(e);
  });
  ACTIVARELSELECCIONADOR();
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
// const $RELOAD = document.getElementById("LOADER");
const $BOTONABRIR = document.getElementById("abrirLogReg");

// // PRELOADER
// window.addEventListener("load", () => {
//   AbrirCerrarCargar($RELOAD, 5000, "-100vh", "none");
// });

// ABRIR LOS FORMULARIOS
if (localStorage.getItem("usuario") === "") {
  $BOTONABRIR.children[0].innerHTML = ``;
} else {
  $BOTONABRIR.children[0].innerHTML = localStorage.getItem("usuario");
}
$BOTONABRIR.addEventListener("click", () => {
  window.location = "../index.html";
});

// MOSTRAR A LOS PRODUCTOS
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
