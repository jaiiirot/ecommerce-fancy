const headerPrincipal = `
<nav class="header__ctn">
    <ul class="header__ctnList">
        <li><a id="PRODUCTOS" href="#">Productos</a>
            <hr>
        </li>
        <li><a id="REMERAS" href="#">Remeras</a>
            <hr>
        </li>
        <li><a id="PANTALONES" href="#">Pantalones</a>
            <hr>
        </li>
        <li><a id="ZAPATILLAS" href="#">Zapatillas</a>
            <hr>
        </li>
    </ul>
</nav>
`;
const mainPrincipal = `
<section class="sec1Ix">
    <div class="sec1Ix__title">
        <h1 class="ff-rocksalt">Todos los productos disponibles de ATT</h1>
        <h2>¡ Bienvenido ${localStorage.getItem("usuario") || ""}!</h2>
        <div id="CARDS" class="sec1Ix__ctnCards">
            <!-- ACA VA LOS PRODUCTOS -->
        </div>
    </div>
</section> 
`;

const formularioRegistro = `
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

const formularioLogin = `
<form class="logReg__ctn" action="" id="formularioLogin">
<h2>Iniciar Sesion</h2>
<input id="text" name="nombre" type="text" placeholder="Nombre Usuario:">
<input id="password" name="contrasenia" type="password" placeholder="Contraseña:">

<input class="btn" type="submit" value="INICIAR SESION">
<span id="registrarse" class="btn">CREAR UNA CUENTA</span>
</form>
`;

const $HEADER = document.getElementById("HEADER");
const $MAIN = document.getElementById("MAIN");

export const componente = {
  formularioRegistro,
  formularioLogin,
  header: {
    $HEADER,
    headerPrincipal,
  },
  main: {
    $MAIN,
    mainPrincipal,
  },
};