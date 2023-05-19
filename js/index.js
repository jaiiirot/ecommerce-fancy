import { componente } from "./template.js";
// import listaProductos from "./productos.json" assert { type: "json" };
import listaUsuarios from "./usuarios.json" assert { type: "json" };
// llamo a los usuarios y productos
// const todosProductos = listaProductos;
// localStorage.setItem('USUARIOS',JSON.stringify(listaUsuarios))
let todosUsuarios = JSON.parse(localStorage.getItem('USUARIOS'))||listaUsuarios
// // Clase paara los productos
// class Producto {
//   constructor(tipo, id, img, title, info, talles, precio, stock) {
//     this.id = id;
//     this.tipo = tipo;
//     this.img = img;
//     this.title = title;
//     this.info = info;
//     this.talles = talles;
//     this.precio = precio;
//     this.stock = stock;
//   }
// }
// clas para los usuario
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
// console.log(todosProductos);
console.log(todosUsuarios);

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
        window.location = "../template/aesthetic.html";
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
    console.log('a')
    $formulario.innerHTML = componente.formularioLogin;
    validarUsuario();
  });
};
validarUsuario();  
$cerrarFormularios.addEventListener('click',()=>{
  localStorage.setItem('usuario',"")
  window.location = "../template/aesthetic.html";
})






// $formulario.innerHTML = componente.formularioLogin
// validarUsuario();
// // MOSTRAR PRODUCTOS
// const publicarProductos = () => {};
// // FILTRAR PRODUCTOS
// const filtrarProductos = () => {};
// //AGREGAR PRODUCTO A CARRITO
// const agregarCarrito = () => {};
// // LIMPIAR CARRITO
// const limpiarCarrito = () => {};
// // ELIMINAR PRODUCTO DE CARRITO
// const eliminarProductoCarrito = () => {};
