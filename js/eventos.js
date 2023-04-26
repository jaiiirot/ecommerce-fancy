import { componente } from "./template.js";
import { PRODUCTOS } from "./productos.js";

// MOSTRAR PRODUCTOS
const MOSTRARPRODUCTOS = (e) => {
    let option = {
        r:"https://img.icons8.com/ios-filled/20/null/polo-shirt.png",
        p:"https://img.icons8.com/ios-filled/20/null/trousers.png",
        z:"https://img.icons8.com/ios-filled/20/null/sneakers.png",
    }
  const $productos = `
    <div class="ctnCard">
        <div class="ctnCard__view" id="${e.id}"></div>
        <div class="ctnCard__tipo">
            <img src="${option[e.tipo]}"/>
        </div>
        <div class="ctnCard__img">
            <img src="${e.img}" alt="">
        </div>
        <div class="ctnCard__info">
            <h4>${e.title}</h4>
            <p>${e.info}</p>
        </div>
        <div class="ctnCard__btns">
            <h4>$ ${e.precio}</h4>
            <button class="btn" type="submit"><i class="fa-solid fa-heart" style="color: #eb0000;"></i></button>
            <button class="btn" type="submit"><img src="https://img.icons8.com/color/24/null/add-shopping-cart--v1.png"/></button>
        </div>
    </div>
    `;
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

const obtenerFormulario = (e) => {
  if (e.submitter.value == "INICIAR SESION") {
    let usuario = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    console.log(usuario);
  }
  if (e.submitter.value == "CREAR UNA CUENTA") {
    $CTNFORMULARIOS.innerHTML = componente.formularioRegistro;
  }
  if (e.submitter.value == "CREAR CUENTA") {
    let usuario = {
      email: e.target[0].value,
      Reemail: e.target[1].value,
      password: e.target[2].value,
      Repassword: e.target[3].value,
    };
    console.log(usuario);
  }
  if (e.submitter.value == "YA TENGO CUENTA") {
    $CTNFORMULARIOS.innerHTML += componente.formularioLogin;
  }
};

// ???????????????????????????????????????????????????????
const $CARDS = document.getElementById("CARDS");
let productos = PRODUCTOS;
const $RELOAD = document.getElementById("LOADER");
const $BOTONABRIR = document.getElementById("abrirLogReg");
const $BOTONCERRAR = document.getElementById("cerrarLogReg");
const $LOGREG = document.getElementById("LOGREG");
const $CTNFORMULARIOS = $LOGREG.querySelector(".logReg");
$CTNFORMULARIOS.innerHTML = componente.formularioLogin;
const $FORMULARIO = $CTNFORMULARIOS.querySelector(".logReg__ctn");

// PRELOADER
window.addEventListener("load", () => {
  AbrirCerrarCargar($RELOAD, 2000, "-100vh", "none");
});
// CERRAR LOS FORMULARIOS
$BOTONCERRAR.addEventListener("click", () => {
  AbrirCerrarCargar($LOGREG, 800, "-100vh", "none");
});
$BOTONABRIR.addEventListener("click", () => {
  AbrirCerrarCargar($LOGREG, 800, "0vh", "flex");
});
// CERRAR LOGIN Y REGISTER
$FORMULARIO.addEventListener("submit", (e) => {
  e.preventDefault();
  obtenerFormulario(e);
});

// CREAR A LOS PRODUCTOS
if ($CARDS.innerText === "" || nombreUsuario === "") {
  productos.forEach((e) => {
    MOSTRARPRODUCTOS(e);
  });
}
// SELECCION DE PRODUCTOS
$CARDS.childNodes.forEach((nodosCard) => {
  if (nodosCard.nodeName == "DIV") {
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
            <div class="viewCard__ctn d-f-cc">
                <div class="viewCard__ctnImag">
                    <img src="${productoSeleccionado.img}" />
                </div>
                <div class="viewCard__ctnInfo d-f-cc">
                    <h1>${productoSeleccionado.title}</h1>
                    <h2>$ ${productoSeleccionado.precio}</h2>
                    <h3>LOS TALLES DISPONIBLES SON: </h3>
                    <select class="btn">                    
                    ${productoSeleccionado.talles.split(",").map((e) => {
                      return `<option>${e}</option>`;
                    })}
                    </select>
                    <h3>EL STOCK DISPONIBLE ES: </h3>
                    <h4>${productoSeleccionado.stock}</h4>
                    <p>$${productoSeleccionado.info}</p>
                    <input class="btn" type="submit" value="AGREGAR AL CARRITO">
                </div>
            </div>
            `;
      // $CARDS.append($$MOSTRAR)
      componente.main.$MAIN.append($$MOSTRAR);
      componente.main.$MAIN.childNodes[1].style.display = "none";
      let $$CERRAR = document.getElementById("CERRAR");
      $$CERRAR.style.cursor = "pointer";
      $$CERRAR.addEventListener("click", () => {
        componente.main.$MAIN.removeChild($$MOSTRAR);
        componente.main.$MAIN.childNodes[1].style.display = "block";
      });
    });
  }
});

const $listaHeader = document.querySelector(".header__ctnList");
$listaHeader.childNodes.forEach((e) => {
  e.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "PRODUCTOS":
        $CARDS.innerHTML = ``
        productos.forEach((e) => {
            MOSTRARPRODUCTOS(e);
        });
        break;
      case "REMERAS":
        $CARDS.innerHTML = ``
        productos.forEach((e) => {
            if (e.tipo == "r") {
              MOSTRARPRODUCTOS(e);
            }
          });
        break;
      case "PANTALONES":
        $CARDS.innerHTML = ``
        productos.forEach((e) => {
            if (e.tipo == "p") {
              MOSTRARPRODUCTOS(e);
            }
          });
        break;
      case "ZAPATILLAS":
        $CARDS.innerHTML = ``
        productos.forEach((e) => {
            if (e.tipo == "z") {
              MOSTRARPRODUCTOS(e);
            }
          });
        break;
      default:
        break;
    }
  });
});
