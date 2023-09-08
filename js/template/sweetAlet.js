const Finally = (action) => {
  const finallyPut = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  finallyPut
    .fire({
      text: "¿Desea Finalizar la compra?",
      width: 600,
      padding: ".5rem",
      backdrop: `
    rgba(8,19,25,.968627451)
      url("https://i.gifer.com/origin/fd/fdf70f5f4989f9c08f033da50c38170e_w200.webp")
      left top
      no-repeat
    `,
      confirmButtonText: "Si!",
      cancelButtonText: "No!",
      showCancelButton: true,
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("CARRITO", "[]");
        action();
        Swal.fire({
          text: "Compra realizada!",
          width: 600,
          padding: ".5rem",
          icon: "success",
        });
      }
      if (!result.isConfirmed) {
        productosCarrito = JSON.parse(localStorage.getItem("CARRITO"));
        action(productosCarrito);
      }
    });
};

const addCart = () => {
  const Toast = Swal.mixin({
    toast: true,
    width: 250,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "success",
    title: "Se agrego correctamente",
  });
};

export { addCart, Finally };
