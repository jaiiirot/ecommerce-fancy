import { componente } from "./template.js";
import listaUsuarios from "./usuarios.json" assert { type: "json" };

let todosUsuarios = JSON.parse(localStorage.getItem('USUARIOS'))||listaUsuarios
class Usuario {
  constructor(id, nombre, email, contrasenia) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.contrasenia = contrasenia;
  }
}

/*============================================================
                        FUNCIONES
============================================================*/
const $formulario = document.getElementById("formularios");
const $cerrarFormularios = document.querySelector(".formularios__cerrar");

const carga = (formulario, color) => {
  formulario.style.backgroundColor = color;
};
// VALIDAR USUARIO
const validarUsuario = () => {
  $formulario.innerHTML = componente.formularioLogin;
  const formulario = document.getElementById("formularioLogin");
  const registrarse = document.getElementById("registrarse");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const datosIngresados = {
      nombre: `${datos.nombre.value}`,
      contrasenia: `${datos.contrasenia.value}`,
    };
    todosUsuarios.filter((e) => {
      if (
        e.nombre == datosIngresados.nombre &&
        e.contrasenia == datosIngresados.contrasenia
      ) {
        localStorage.setItem('usuario',e.nombre)
        window.location = '../template/esthetic.html';
      }else{
        carga(formulario, "#8f002b", "Datos incorrectos");
      }
    });
  });
  registrarse.addEventListener("click", () => {
    $formulario.innerHTML = '';   
    $formulario.innerHTML = componente.formularioRegistro;
    crearUsuario();
  });
};
// CREAR USUARIO
const crearUsuario = () => {
  const $formulario = document.getElementById("formularioRegistro");
  $formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const usuarioNuevo = {
      id: Math.round(Math.random() * 100),
      nombre: `${datos.nombre.value}`,
      email: `${datos.email.value}`,
      reemail: `${datos.reemail.value}`,
      contrasenia: `${datos.contrasenia.value}`,
      recontrasenia: `${datos.repassword.value}`,
    };
    if (
      usuarioNuevo.email === usuarioNuevo.reemail &&
      usuarioNuevo.contrasenia === usuarioNuevo.recontrasenia
    ) {
      todosUsuarios.push(usuarioNuevo);
      localStorage.setItem("USUARIOS", JSON.stringify(todosUsuarios));
      carga($formulario, "#008c6a");
    } else {
      carga($formulario, "#8f002b");
    }
  });
  const $iniciar = document.getElementById("iniciarSession");
  $iniciar.addEventListener("click", () => {
    $formulario.innerHTML = '';
    $formulario.innerHTML = componente.formularioLogin;
    validarUsuario();
  });
};
validarUsuario();  
$cerrarFormularios.addEventListener('click',()=>{
  localStorage.setItem('usuario',"")
  window.location = '../template/esthetic.html';
})