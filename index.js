let precio = 400000;
let cantidad = 0;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString("es-CL", {
  style: "currency",
  currency: "CLP",
});

let cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

// Aumentar la cantidad
function aumentarCantidad() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad; // Actualizar la cant en span
  actualizarTotal();
}

// Disminuir la cantidad
function disminuirCantidad() {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad; // Actualizar la cant en span
    actualizarTotal();
  }
}

// Actualizar el total a pagar
function actualizarTotal() {
  let total = precio * cantidad;
  let totalSpan = document.querySelector(".valor-total");
  totalSpan.innerHTML = total.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
}
