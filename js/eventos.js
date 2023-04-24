
// ???????????????????????????????????????????????????????

const $RELOAD = document.getElementById("LOADER")
const $BOTONCERRAR = document.getElementById('cerrarLogReg')
const $LOGREG = document.getElementById("LOGREG")

/* LOS EVENTOS */

// PRELOADER
window.addEventListener("load", () => {
    $RELOAD.style.top = "-100vh"
    setTimeout(() => {
        if ($RELOAD.style.top === "-100vh") {
            $RELOAD.style.display = "none"
        }
    }, 2000);
})

// CERRAR LOS FORMULARIOS

$BOTONCERRAR.addEventListener("click", () => {
    $LOGREG.style.top = "-100vh"
    setTimeout(() => {
        if ($LOGREG.style.top === "-100vh") {
            $LOGREG.style.display = "none"
        }
    }, 800);
})


// cerrar login o cerrar register

let $formularios = document.createElement("div")
$formularios.classList.add("logReg")



const $LOGIN = 
`
<form id="FORM" class="logReg__ctnLog FORM" action="">
<h2>Iniciar Sesion</h2>
<input id="email" name="email" type="email" placeholder="E-mail, teléfono o usuario:">
<input id="password" name="password" type="password" placeholder="Contraseña:">

<input class="btn" type="submit" value="INICIAR SESION">
<input class="btn btn-deleteLog" type="button" value="CREAR CUENTA">
</form>
`
const $REGISTER = 
`
<form class="logReg__ctnReg FORM" action="">
    <h2>Crear tu cuenta</h2>
    <input name="email" type="email" placeholder="E-mail">
    <input name="reemail" type="email" placeholder="Confirmar E-mail">
    <input name="password" type="password" placeholder="Contraseña">
    <input name="repassword" type="password" placeholder="Confirmar Contraseña">

    <input class="btn" type="submit" value="CREAR CUENTA">
</form>
`
$formularios.innerHTML += $LOGIN


let $$CERRARLOG = $formularios.querySelector(".btn-deleteLog")
$$CERRARLOG.addEventListener("click", ()=>{
    $formularios.innerHTML = $REGISTER
})

    $LOGREG.append($formularios)
    
    // PRODUCTOS
    
    