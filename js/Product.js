import listaProductos from "./data/productos.json" with  { type: "json" };
import navegation from "./data/navegation.json" with  { type: "json" };
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
$HEADER.innerHTML = HeaderPrincipal(navegation);
$MAIN.innerHTML = MainPrincipal();
const CARDS = document.getElementById("CARDS");

// BUSCADOR DE ARTICULOS
const formBuscador = document.querySelector(".header__search");
formBuscador.addEventListener("submit", (event) => {
  event.preventDefault();
});
formBuscador.addEventListener("keyup", (event) => {
  event.preventDefault();
  const search = document.getElementById("BUSCADOR").value;
  productos.forEach((element) => {
    const { id, title } = element;
    const targetProd = document.getElementById(id).parentNode;
    title.toLowerCase().includes(search.toLowerCase())
      ? targetProd.classList.remove("none")
      : targetProd.classList.add("none");
  });
});

// ACTIVANDO El HEADER MOBILE
const headerMobile = document.getElementById("menu-bars");
headerMobile.addEventListener("click", () => {
  $HEADER.classList.toggle("headerNav-mobile");
});

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
      PRODUCTOS: " ",
      REMERAS: "r",
      PANTALONES: "p",
      ZAPATILLAS: "z",
      BUZOS: "b",
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

// INGRESAR A LOS DETALLES DEL PRODUCTO
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
  productos.forEach((element) => {
    const { tipo, id } = element;
    const targetProd = document.getElementById(id).parentNode;
    filtro === " "
      ? targetProd.classList.remove("none")
      : tipo !== filtro
      ? targetProd.classList.add("none")
      : targetProd.classList.remove("none");
  });
}
