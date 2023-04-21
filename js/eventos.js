const $BOTONCERRAR = document.getElementById('cerrarLogReg')
const $LOGREG = document.querySelector(".logReg")
const $LOGREGlog = document.querySelector(".logReg__ctnLog")
const $LOGREGreg = document.querySelector(".logReg__ctnReg")
$BOTONCERRAR.addEventListener("click",()=>{
    $LOGREG.classList.add("accionCerrar")
})