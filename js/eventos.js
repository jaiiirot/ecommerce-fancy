const $RELOAD = document.querySelector(".LOAD")

window.addEventListener("load",()=>{
    setTimeout(() => {
        document.getElementById("LOADER").classList.toggle(".LOAD")
        $RELOAD.style.display = "none"
    }, 2000);
})


const $BOTONCERRAR = document.getElementById('cerrarLogReg')
const $LOGREG = document.querySelector(".logReg")
const $LOGREGlog = document.querySelector(".logReg__ctnLog")
const $LOGREGreg = document.querySelector(".logReg__ctnReg")
// const 

$BOTONCERRAR.addEventListener("click",()=>{
    $LOGREG.style.top = "-100vh"
    setTimeout(() => {
        if ($LOGREG.style.top === "-100vh") {
                $LOGREG.style.display = "none"
        }
    }, 800);
})

$BOTONCERRAR.addEventListener("click",()=>{
    $LOGREG.style.top = "-100vh"
    setTimeout(() => {
        if ($LOGREG.style.top === "-100vh") {
                $LOGREG.style.display = "none"
        }
    }, 800);
})
