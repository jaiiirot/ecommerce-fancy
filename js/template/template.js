import listaProductos from "../data/productos.json" assert { type: "json" };

const $HEADER = document.getElementById("HEADER"),
  $MAIN = document.getElementById("MAIN");

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

function MostrarProductos(prod) {
  const { img, title, precio, id, tipo } = prod;
  let option = {
    r: "https://img.icons8.com/ios-filled/20/null/polo-shirt.png",
    p: "https://img.icons8.com/ios-filled/20/null/trousers.png",
    z: "https://img.icons8.com/ios-filled/20/null/sneakers.png",
  };
  return `  
      <div class="ctnCard">
          <div class="ctnCard__view" id="${id}"></div>
          <div class="ctnCard__tipo">
              <img src="${option[tipo]}"/>
          </div>
          <div class="ctnCard__img">
              <img src="${img}" alt="">
          </div>
          <div class="ctnCard__info">
              <h4>${title}</h4>
              <h4>$ ${precio}</h4>
          </div>
            <input id="${id}" class="btn btn-content ctnCard__btns pushCard" type="submit" value="Agregar Carrito">
      </div>`;
}
function HeaderPrincipal(optionsNav) {
  return `
    <nav class="headerNav__container">
        <ul class="headerNav__containerOptions ">
            ${optionsNav
              .map(
                (option) => `
                <li>
                    <a id="${option.id}">${option.name}</a>
                    <hr>
                </li>
            `
              )
              .join("")}
        </ul>
    </nav>
    `;
}

function MainPrincipal() {
  return `
  <section class="sec1Ix" id="listProd">
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

function ProductDetail(prodId) {
  const prod = listaProductos.find((e) => e.id == prodId);
  const { img, title, precio, talles, stock, info, id } = prod;
  const prodDetail = document.createElement("div");
  prodDetail.setAttribute("class", "viewCard");
  prodDetail.innerHTML += `  
  <i class="fa-regular fa-circle-xmark viewCard__btn" id="closeProdDetail"></i>
  <div class="viewCard__ctn">
    <div class="viewCard__ctnInfo flex-center-center">
      <h1>${title}</h1>
      <h2>$ ${precio}</h2>
      <h3>LOS TALLES DISPONIBLES SON: </h3>
      <select class="btn">                    
      ${talles.split(",").map((elementTalles) => {
        return `<option id="${elementTalles}">${elementTalles}</option>`;
      })}
      </select>
      
      <h3>EL STOCK DISPONIBLE ES: </h3>
      <h4>${stock}</h4>
      <p>${info}</p>
      <input id="${id}" class="btn btn-content pushCardDetail" type="submit" value="AGREGAR AL CARRITO" />
    </div>
    <img class="viewCard__ctnImag" src="${img}" />
  </div>
    `;
  $MAIN.append(prodDetail);
}

function Carrito(carritoLocal = []) {
  const exist = carritoLocal.length > 0 ? true : false;
  const listCard = document.createElement("div");
  listCard.setAttribute("class", "carrito");
  let total = 0;
  listCard.innerHTML = `
    <i class="fa-regular fa-circle-xmark viewCard__btn" id="closeCard"></i>
      <div class="carrito__container">
        ${
          exist
            ? `
            <ul class="carrito__containerProds" id="containerListProdDetail">
              ${carritoLocal
                .map(
                  (e) =>
                    ` 
                <li class="carrito__containerProdsItem" >
                  <div class="carrito__containerProdsItem--info flex-center-center">
                    <img src="${e.img}">
                    <h2>${e.title}</h2>
                  </div>  
                  <h3>$${e.precio}</h3>
                  <p>${e.quantity}</p>
                  <input class="btn btn-content eliminarProdCarrito" id="${e.id}" name="deleteItemCard" type="submit" value="Eliminar" />
                </li>
                `
                )
                .join("")}
            </ul>`
            : `<div class="carrito__containerProdsNoItem flex-center-center" >
                <h3>No hay Productos</h3> 
              </div>`
        }
        <hr/>
        <div class="carrito__containerOptions flex-center-center">
          <h2>Total:</h2>
          <p>$${total}</p>
          <div class="carrito__containerOptions--btns">
            <span class="btn btn-content" id="vaciarCarrito">Vaciar Carrito</span>
            <span class="btn btn-content" id="comprarCarrito">Comprar Carrito</span>
          </div>
        </div>
      </div>`;

  $MAIN.append(listCard);
}

function Loader(img) {
  const ctnLoad = document.createElement("span");
  ctnLoad.setAttribute("id", "loader-complete");
  ctnLoad.classList.add("flex-center-center");
  const itemLoad = `
    <img src=${img} alt="Loader para la pagina de Fancy" >
  `;
  ctnLoad.append(itemLoad);
}

export {
  FormularioRegistro,
  FormularioLogin,
  Loader,
  $HEADER,
  $MAIN,
  HeaderPrincipal,
  MainPrincipal,
  MostrarProductos,
  ProductDetail,
  Carrito,
};
