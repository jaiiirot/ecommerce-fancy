import { $MAIN, Carrito } from "./template.js";

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

const $ABRIRCARRITO = document.querySelector("#AbrirCarrito");
$MAIN;

const ABRIRCARRITO = async () => {
  $ABRIRCARRITO.addEventListener("click", () => {
    let carritoLocal = JSON.parse(
      localStorage.getItem(`CARRITO-${localStorage.getItem("usuario")}`)
    );

    const { EliminarProducto, $$MOSTRAR } = Carrito(carritoLocal);
    const $ELIMINARPRODUCTO = EliminarProducto;

    $ELIMINARPRODUCTO.forEach((ele) => {
      ele.addEventListener("click", (element) => {
        carritoLocal = carritoLocal.filter((e) => element.target.id != e.id);
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
