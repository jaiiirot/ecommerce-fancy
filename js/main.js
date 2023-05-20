import { componente } from "./template.js";

const clima = async () =>{
  try {
    const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&appid=cd61172287436afb4166548edecb4dc3&units=metric')
    const datos = await resp.json();
    const datosWathermap = `En ${datos.name}, Hay una temperatura de: ${datos.main.temp}° y el clima esta ${datos.weather[0].description}`;
    document.getElementById('avisarClima').innerHTML = datosWathermap;
  } catch (error) {
    console.log("volver a intentar") 
  }
}

const $ABRIRCARRITO = document.querySelector("#AbrirCarrito");
const $MAIN = componente.main.$MAIN;


const ABRIRCARRITO = async () => {
  $ABRIRCARRITO.addEventListener("click", () => {
    let carritoLocal = JSON.parse(
      localStorage.getItem(`CARRITO-${localStorage.getItem("usuario")}`)
    );
    let total = 0;

    const $$MOSTRAR = document.createElement("div");
    $$MOSTRAR.setAttribute("class", "viewCard");
    console.log(carritoLocal);
    carritoLocal === null
      ? ($$MOSTRAR.innerHTML = `  
      <img class="viewCard__btn" id="CERRAR" src="https://img.icons8.com/fluency/48/null/close-window.png"/>
      <div class="viewCard__ctn">
      <div class="cardList d-f-cc" >
      <h3>No hay Productos</h3> 
      </div>
      <div class="d-f-cc">
      <h2>Total:</h2>
      <p>$0</p>
      <span class="btn" id="vaciarCarrito">Vaciar Carrito</span>
      </div>
      </div>`)
      : ($$MOSTRAR.innerHTML = `  
      <img class="viewCard__btn" id="CERRAR" src="https://img.icons8.com/fluency/48/null/close-window.png"/>
      <div class="viewCard__ctn" style="flex-direction: column; ">
      <div style="overflow-y: scroll; height: 100%;">
      ${carritoLocal.map((e) => {
        total += (e.cantidad * e.precio)
          return ` 
            <div class="cardList d-f-cc" >
            <img src="${e.img}">
            <div class="cardList__info d-f-cc">
            <p>${e.title}</p>
            <h3>${e.precio}</h3>
            <p class="btn cantidad">${e.cantidad}</p>
            <span class="btn productoEliminar" id="${e.id}">Eliminar</span>
            </div>  
            </div>
            `;
        })
        .join("")}
        </div>
        <div class="d-f-cc">
        <h2>Total:</h2>
        <p>$${total}</p>
        <span class="btn" id="vaciarCarrito">Vaciar Carrito</span>
        <span class="btn" id="comprarCarrito">Comprar Carrito</span>
        <br>
        <p id="avisarClima">${clima()}</p>
        </div>
      </div>`);

    $MAIN.append($$MOSTRAR);
    $MAIN.childNodes[1].style.display = "none";

    const $ELIMINARPRODUCTO = $$MOSTRAR.querySelectorAll(".productoEliminar");
    $ELIMINARPRODUCTO.forEach((ele) => {
      ele.addEventListener("click", (element) => {
        console.log(element.target.id);
        carritoLocal = carritoLocal.filter(e => element.target.id != e.id);
        console.log(carritoLocal)
        localStorage.setItem(
          `CARRITO-${localStorage.getItem("usuario")}`,
          JSON.stringify(carritoLocal)
        );
        $MAIN.removeChild($$MOSTRAR);
        $MAIN.childNodes[1].style.display = "block";
      });
    });
    const $VACIARCARRITO = $$MOSTRAR.querySelector("#vaciarCarrito");
    $VACIARCARRITO.addEventListener("click", () => {
      carritoLocal = null;
      localStorage.setItem(
        `CARRITO-${localStorage.getItem("usuario")}`,
        carritoLocal
      );
      $MAIN.removeChild($$MOSTRAR);
      $MAIN.childNodes[1].style.display = "block";
    });
    const $$CERRAR = document.getElementById("CERRAR");
    $$CERRAR.addEventListener("click", () => {
      $MAIN.removeChild($$MOSTRAR);
      $MAIN.childNodes[1].style.display = "block";
    });
  });
};

ABRIRCARRITO();
