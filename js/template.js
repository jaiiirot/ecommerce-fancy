const $HEADER = document.getElementById("HEADER")
const $MAIN = document.getElementById("MAIN")

$HEADER.innerHTML += 
`
<nav class="header__ctn">
<ul class="header__ctnList">
    <li><a href="#">Productos</a>
        <hr>
    </li>
    <li><a href="#">Remeras</a>
        <hr>
    </li>
    <li><a href="#">Pantalones</a>
        <hr>
    </li>
    <li><a href="#">Zapatillas</a>
        <hr>
    </li>
</ul>
</nav>
`;

const LISTADEPRODUCTOS = 
`
<section class="sec1Ix">
<div class="sec1Ix__title">
    <h1 class="ff-rocksalt">Todos los productos disponibles de ATT</h1>
    <div id="CARDS" class="sec1Ix__ctnCards">
        <!-- ACA VA LOS PRODUCTOS -->
    </div>
</div>
</section> 
`;

$MAIN.innerHTML += LISTADEPRODUCTOS;

