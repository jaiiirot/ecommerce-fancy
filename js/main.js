import { componente } from "./template.js";
import { productoCarrito } from "./eventos.js";
import { PRODUCTOS } from "./productos.js";

const $ABRIRCARRITO = document.querySelector("#AbrirCarrito");
$ABRIRCARRITO.addEventListener("click", () => {
  const $$MOSTRAR = document.createElement("div");
  $$MOSTRAR.setAttribute("class", "viewCard");
  $$MOSTRAR.setAttribute("style", "overflow-y:scroll");

  let a = [];
  let carritoLocal = JSON.parse(localStorage.getItem("CARRITO"));
  console.log(carritoLocal);

  $$MOSTRAR.innerHTML += `  
    <img class="viewCard__btn" id="CERRAR" src="https://img.icons8.com/fluency/48/null/close-window.png"/>
    <div class="viewCard__ctn d-f-cc" style="flex-direction: column">
        ${carritoLocal.map((e) => {
            return `
            <div class="cardList d-f-cc" style="">
              <img src="${e.img}">
              <div class="cardList__info">
              <p>${e.title}</p>
              <h3>${e.precio}</h3>
              <input class="btn" value="Eliminar">
              </div>  
            </div>
            `;
        })}
      </div>`;
  componente.main.$MAIN.append($$MOSTRAR);
  componente.main.$MAIN.childNodes[1].style.display = "none";
  let $$CERRAR = document.getElementById("CERRAR");
  $$CERRAR.style.cursor = "pointer";
  $$CERRAR.addEventListener("click", () => {
    componente.main.$MAIN.removeChild($$MOSTRAR);
    componente.main.$MAIN.childNodes[1].style.display = "block";
  });
});
