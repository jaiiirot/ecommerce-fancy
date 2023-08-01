function FormularioRegistro() {
  return `
  <form class="logReg__ctn" id="formularioRegistro">
    <h2>Crear tu cuenta</h2>
    <input name="nombre" type="text" placeholder="Nombre Usuario">
    <input name="email" type="email" placeholder="E-mail">
    <input name="reemail" type="email" placeholder="Confirmar E-mail">
    <input name="contrasenia" type="password" placeholder="Contraseña">
    <input name="repassword" type="password" placeholder="Confirmar Contraseña">

    <input class="btn" type="submit" value="CREAR CUENTA">
    <span class="btn" id="iniciarSession">YA TENGO CUENTA</span>
  </form>
`;
}

function FormularioLogin() {
  return `
<form class="logReg__ctn" action="" id="formularioLogin">
<h2>Iniciar Sesion</h2>
<input id="text" name="nombre" type="text" placeholder="Nombre Usuario:">
<input id="password" name="contrasenia" type="password" placeholder="Contraseña:">

<input class="btn" type="submit" value="INICIAR SESION">
<span id="registrarse" class="btn">CREAR UNA CUENTA</span>
</form>
`;
}

const $HEADER = document.getElementById("HEADER");
const $MAIN = document.getElementById("MAIN");

function MostrarProductos(prod) {
  let option = {
    r: "https://img.icons8.com/ios-filled/20/null/polo-shirt.png",
    p: "https://img.icons8.com/ios-filled/20/null/trousers.png",
    z: "https://img.icons8.com/ios-filled/20/null/sneakers.png",
  };
  return `  
      <div class="ctnCard">
          <div class="ctnCard__view" id="${prod.id}"></div>
          <div class="ctnCard__tipo">
              <img src="${option[prod.tipo]}"/>
          </div>
          <div class="ctnCard__img">
              <img src="${prod.img}" alt="">
          </div>
          <div class="ctnCard__info">
              <h4>${prod.title}</h4>
              <h4>$ ${prod.precio}</h4>
          </div>
            <input id="${
              prod.id
            }" class="btn ctnCard__btns pushCard" type="submit" value="Agregar Carrito">
      </div>`;
}
function HeaderPrincipal(optionsNav) {
  return `
    <nav class="headerNav__container">
        <ul class="headerNav__containerOptions ">
            ${optionsNav.map(
              (option) => `
                <li>
                    <a id="${option.id}">${option.name}</a>
                    <hr>
                </li>
            `
            )}
        </ul>
    </nav>
    `;
}
function MainPrincipal() {
  return `
  <section class="sec1Ix">
      <div class="sec1Ix__title">
          <h2 class="ff-rocksalt">Todos los productos disponibles de FANCY</h2>
          <h3>¡ Bienvenido ${localStorage.getItem("usuario") || ""}!</h3>
          <br/>
          <h2 style="text-align: center" >PRODUCTOS</h2>
          <div id="CARDS" class="sec1Ix__ctnCards">
              <!-- ACA VA LOS PRODUCTOS -->
          </div>
      </div>
  </section> 
  `;
}

function ProductDetail(productoSeleccionado, AGREGARCARRITO) {
  const $$MOSTRAR = document.createElement("div");
  $$MOSTRAR.setAttribute("class", "viewCard");
  $$MOSTRAR.innerHTML += `  
  <i class="fa-regular fa-circle-xmark viewCard__btn" id="CERRAR"></i>
  <div class="viewCard__ctn">
      <img class="viewCard__ctnImag" src="${productoSeleccionado.img}" />
      <div class="viewCard__ctnInfo flex-center-center">
        <h1>${productoSeleccionado.title}</h1>
        <h2>$ ${productoSeleccionado.precio}</h2>
        <h3>LOS TALLES DISPONIBLES SON: </h3>
        <select class="btn">                    
        ${productoSeleccionado.talles.split(",").map((elementTalles) => {
          return `<option id="${elementTalles}">${elementTalles}</option>`;
        })}
        </select>
      
        <h3>EL STOCK DISPONIBLE ES: </h3>
        <h4>${productoSeleccionado.stock}</h4>
        <p>$${productoSeleccionado.info}</p>
        <input id="${
          productoSeleccionado.id
        }" class="btn pushCard" type="submit" value="AGREGAR AL CARRITO">
      </div>
    </div>
    `;

  $MAIN.append($$MOSTRAR);
  $MAIN.childNodes[1].style.display = "none";
  AGREGARCARRITO($$MOSTRAR);
  let $$CERRAR = document.getElementById("CERRAR");
  $$CERRAR.style.cursor = "pointer";
  $$CERRAR.addEventListener("click", () => {
    $MAIN.removeChild($$MOSTRAR);
    $MAIN.childNodes[1].style.display = "block";
  });
}

function Carrito(carritoLocal) {
  let total = 0;

  const $$MOSTRAR = document.createElement("div");
  $$MOSTRAR.setAttribute("class", "viewCard");

  carritoLocal === null
    ? ($$MOSTRAR.innerHTML = `  
      <img class="viewCard__btn" id="CERRAR" src="https://img.icons8.com/fluency/48/null/close-window.png"/>
      <div class="viewCard__ctn">
        <div class="cardList flex-center-center" >
          <h3>No hay Productos</h3> 
        </div>
        <div class="flex-center-center">
          <h2>Total:</h2>
          <p>$0</p>
          <span class="btn" id="vaciarCarrito">Vaciar Carrito</span>
        </div>
      </div>`)
    : ($$MOSTRAR.innerHTML = `  
      <img class="viewCard__btn" id="CERRAR" src="https://img.icons8.com/fluency/48/null/close-window.png"/>
      <div class="viewCard__ctn" style="flex-direction: column; ">
        <div style="overflow-y: scroll; height: 100%;">
        ${carritoLocal
          .map((e) => {
            total += e.cantidad * e.precio;
            return ` 
              <div class="cardList flex-center-center" >
              <img src="${e.img}">
              <div class="cardList__info flex-center-center">
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
        <div class="flex-center-center">
          <h2>Total:</h2>
          <p>$${total}</p>
          <span class="btn" id="vaciarCarrito">Vaciar Carrito</span>
          <span class="btn" id="comprarCarrito">Comprar Carrito</span>
          <br>
          <p id="avisarClima">API CLIMA</p>
        </div>
      </div>`);

  $MAIN.append($$MOSTRAR);
  $MAIN.childNodes[1].style.display = "none";
  const EliminarProducto = $$MOSTRAR.querySelectorAll(".productoEliminar");
  return { EliminarProducto, $$MOSTRAR };
}

export {
  FormularioRegistro,
  FormularioLogin,
  $HEADER,
  $MAIN,
  HeaderPrincipal,
  MainPrincipal,
  MostrarProductos,
  ProductDetail,
  Carrito,
};
