let resta = document.querySelector("#restar");
let suma = document.getElementById("sumar");

let cantidad = 0;
let cantidaddisplay = document.querySelector("span.cantidad");
cantidaddisplay.innerText = cantidad;

precio = 400000;

let total = document.querySelector("#total");

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function incrementar() {
  cantidad = cantidad + 1;
  cantidaddisplay.innerText = cantidad;
  total.innerText = cantidad * precio;
}

const restar = function () {
  if (cantidad > 0) {
    cantidad = cantidad - 1;
    cantidaddisplay.innerText = cantidad;
    total.innerText = cantidad * precio;
    actualizarValores();
  }
};
