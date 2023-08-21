import listaProductos from "./data/productos.json" assert { type: "json" };
import navegation from "./data/navegation.json" assert { type: "json" };
import { AGREGARCARRITO } from "./Card.js";
import {
  ProductDetail,
  MostrarProductos,
  HeaderPrincipal,
  MainPrincipal,
  $MAIN,
  $HEADER,
} from "./template/template.js";

const productos = listaProductos;
// COMPONENTES DEL HEADER y MAIN (activado)
$HEADER.innerHTML = HeaderPrincipal(navegation);
$MAIN.innerHTML = MainPrincipal();
// LLamamos a id: CARDS
const CARDS = document.getElementById("CARDS");

// MOSTRAR A LOS PRODUCTOS
productos.forEach((e) => {
  CARDS.innerHTML += MostrarProductos(e);
});

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

// SELECCION DE PRODUCTOS
function ACTIVARELSELECCIONADOR() {
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
}

function ACTIVARPRODDETAIL() {
  const addDetail = document.querySelector(".pushCardDetail");
  CERRARABRIRDETAIL();
  addDetail.addEventListener("click", (e) => {
    AGREGARCARRITO(parseInt(e.target.id));
  });
}

// ABRIR CERRAR LOS DETALLES DEL PRODUCTO
function CERRARABRIRDETAIL() {
  const containerDetail = document.querySelector(".viewCard");
  const listProd = document.getElementById("listProd");
  const closeDetail = document.getElementById("closeProdDetail");
  listProd.style.display = "none";
  closeDetail.addEventListener("click", () => {
    $MAIN.removeChild(containerDetail);
    listProd.style.display = "unset";
  });
}

// FILTRO POR EL HEADER DE PRODUCTOS
function CARGARPRODUCTOS(filtro) {
  CARDS.innerHTML = "";
  productos.forEach((e) => {
    if (e.tipo == filtro) CARDS.innerHTML += MostrarProductos(e);
    if (filtro == "") CARDS.innerHTML += MostrarProductos(e);
  });
  ACTIVARELSELECCIONADOR();
}
