import listaProductos from "./data/productos.json" assert { type: "json" };
import { $MAIN, Carrito } from "./template/template.js";

/* const clima = async () =>{
  try {
    const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&appid=cd61172287436afb4166548edecb4dc3&units=metric')
    const datos = await resp.json();
    const datosWathermap = `En ${datos.name}, Hay una temperatura de: ${datos.main.temp}° y el clima esta ${datos.weather[0].description}`;
    document.getElementById('avisarClima').innerHTML = datosWathermap;
  } catch (error) {
    console.log("volver a intentar") 
  }
} */

function AGREGARCARRITO(itemId) {
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
    let carritoLocal = JSON.parse(localStorage.getItem("CARRITO")) || [];
    Carrito(carritoLocal);
    deleteItemCard(carritoLocal);
    CerrarAbrirCard();
  });
}

function deleteItemCard(carritoLocal = []) {
  const containerItems = document.querySelectorAll(
    ".carrito__containerProdsItem"
  );
  containerItems.forEach((child) => {
    const deleteItem = child.querySelector(".eliminarProdCarrito");
    deleteItem.addEventListener("click", (e) => {
      const newCard = carritoLocal.filter((items) => items.id != e.target.id);
      console.log(newCard, e.target.id);
      localStorage.setItem("CARRITO", JSON.stringify(newCard));
    });
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
