// import listaUsuarios from "./data/usuarios.json" assert { type: "json" };
import "../config/db.js";

const btnLoginRegister = document.getElementById("login-register"),
  btnCloseLoginRegister = document.getElementById("closeform"),
  btnCloseLogin = document.getElementById("closeIniciarSesion"),
  btnCloseRegister = document.getElementById("closeRegister"),
  ctnLR = document.getElementById("ctn-fl-fr"),
  flogin = document.getElementById("flogin"),
  fregister = document.getElementById("fregister");

// ABRIENDO LOS FORMULARIOS
btnLoginRegister.addEventListener("click", (e) => {
  ctnLR.classList.remove("lr-off");
});

// CERRANDO LOS FOMULARIOS
btnCloseLoginRegister.addEventListener("click", (e) => {
  ctnLR.classList.add("lr-off");
});

// ABRIR FORMULARIOS PORE SEPARADO
btnCloseLogin.addEventListener("click", (e) => {
  flogin.classList.replace("login", "login-off");
  fregister.classList.replace("register-off", "register");
});
btnCloseRegister.addEventListener("click", (e) => {
  flogin.classList.replace("login-off", "login");
  fregister.classList.replace("register", "register-off");
});

//CAPTANDO DATOS
flogin.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const data = Object.fromEntries(new FormData(e.target));
  console.log(data);
  const { email, contrasenia } = data;
});

//CAPTANDO DATOS
fregister.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  console.log(data);
  const { contrasenia, email, reemail, nombre, repassword } = data;
  if (email !== reemail) {
    e.target[1].style.outline = "2px solid red";
    e.target[2].style.outline = "2px solid red";
  } else {
    e.target[1].style.outline = "unset";
    e.target[2].style.outline = "unset";
  }
  if (contrasenia !== repassword) {
    e.target[3].style.outline = "2px solid red";
    e.target[4].style.outline = "2px solid red";
  } else {
    e.target[3].style.outline = "unset";
    e.target[4].style.outline = "unset";
  }
});
