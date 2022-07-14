import validator from "./validator.js";
function mostrarAlerta() {
  var numeroTarjeta = document.getElementById("ncard");
  alert("Tarjeta bloqueada " + numeroTarjeta.value);
  validator.isValid(numeroTarjeta.value);
}

{
  var button = document.querySelector(".button");
  button.addEventListener("click", mostrarAlerta);

  console.log(el.value);
}
