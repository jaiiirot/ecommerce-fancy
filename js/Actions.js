// import navegation from "./data/navegation.json" assert { type: "json" };
import { $HEADER } from "./template/template.js";
const headerMobile = document.getElementById("menu-bars");
headerMobile.addEventListener("click", () => {
  $HEADER.classList.toggle("headerNav-mobile");
});
