import listaProductos from "./data/productos.json" assert { type: "json" };
import { $MAIN, Carrito } from "./template/template.js";
import { addCart, Finally } from "./template/sweetAlet.js";

function AGREGARCARRITO(itemId) {
  addCart();
  let productosCarrito = [];
  let existLocal = JSON.parse(localStorage.getItem("CARRITO"));
  if (existLocal === null) {
    localStorage.setItem("CARRITO", JSON.stringify([]));
    productosCarrito = JSON.parse(localStorage.getItem("CARRITO"));
  } else {
    productosCarrito = JSON.parse(localStorage.getItem("CARRITO"));
  }
  const exist = productosCarrito.some((e) => e.id === itemId);
  const ProdCard = listaProductos.filter((e) => e.id === itemId);
  let newCard;
  if (!exist) {
    const [newProdCard] = ProdCard;
    newProdCard.quantity = 1;
    newCard = [...productosCarrito, newProdCard];
  } else {
    newCard = productosCarrito.map((e) => {
      if (e.id === itemId) {
        e.quantity++;
        return e;
      }
      return e;
    });
  }
  localStorage.setItem("CARRITO", JSON.stringify(newCard));
}

function ABRIRCARRITO() {
  const btnCarrito = document.getElementById("AbrirCarrito");
  btnCarrito.addEventListener("click", () => {
    // Condiciones para abrir el carrito.
    const containerProdDetail = document.querySelector(".viewCard");
    const containerCard = document.querySelector(".carrito");
    if (containerProdDetail !== null) $MAIN.removeChild(containerProdDetail);
    if (containerCard !== null) $MAIN.removeChild(containerCard);
    // Extraccion de datos de local storage para mostrar los productos guardados
    let carritoLocal = JSON.parse(localStorage.getItem("CARRITO")) || [];
    Carrito(carritoLocal);
    deleteItemCard(carritoLocal);
    CerrarAbrirCard();
    DELETECARD();
    FINALIZARCOMPRA();
  });
}

function FINALIZARCOMPRA() {
  const btnFinalizarCompra = document.getElementById("comprarCarrito");
  btnFinalizarCompra.addEventListener("click", () => {
    Finally(RECARGARCARRITO);
  });
}

function RECARGARCARRITO(nuevosProductos) {
  const containerCard = document.querySelector(".carrito");
  if (containerCard !== null) $MAIN.removeChild(containerCard);
  Carrito(nuevosProductos);
  deleteItemCard(nuevosProductos);
  CerrarAbrirCard();
}

function deleteItemCard(carritoLocal = []) {
  const containerItems = document.querySelectorAll(
    ".carrito__containerProdsItem"
  );
  containerItems.forEach((child) => {
    const deleteItem = child.querySelector(".eliminarProdCarrito");
    deleteItem.addEventListener("click", (e) => {
      const newCard = carritoLocal.filter((items) => items.id != e.target.id);
      localStorage.setItem("CARRITO", JSON.stringify(newCard));

      RECARGARCARRITO(newCard);
    });
  });
}

function DELETECARD() {
  const btnDeleteCard = document.getElementById("vaciarCarrito");
  btnDeleteCard.addEventListener("click", () => {
    localStorage.setItem("CARRITO", "[]");
    RECARGARCARRITO();
  });
}

function CerrarAbrirCard() {
  const containerCard = document.querySelector(".carrito");
  const closeCard = document.getElementById("closeCard");
  const listProd = document.getElementById("listProd");
  listProd.style.display = "none";
  closeCard.addEventListener("click", () => {
    $MAIN.removeChild(containerCard);
    listProd.style.display = "block";
  });
}

export { AGREGARCARRITO };
ABRIRCARRITO();
