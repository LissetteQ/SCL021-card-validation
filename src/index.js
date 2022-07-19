/*importamos nuestra función validator y maskify de un módulo exclusivo para estas funciones*/
import validator from './validator.js';
console.log(validator);
// Input número de tarjeta
document.getElementById("nCard").addEventListener('keyup', (e)  => {
  let valorInput = e.target.value
  document.getElementById("nCard").value = valorInput
  // Se dejan de permitir espacios en blancos
  .replace(/\s/g, '')
  // Permitimos que se escriban sólo carácteres numéricos
  .replace(/\D/g, '')
})

/*función password para ocultar el Clave*/
let y = document.getElementById("pass");
y.addEventListener("click", btnPassword);

function btnPassword() {
  let p = document.getElementById("myInput");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}

/* declaramos variable para el botón Validar */
let z = document.getElementById("valid");
z.addEventListener("click", btnValid);

/*creamos función para traer string del número de tarjeta y transformarlo en array con un .split y simultáneamente 
convertirlo en valor númerico con un .map */
function btnValid() {
    let ccNumber = document.getElementById("nCard").value;
    console.log(typeof(ccNumber))
    let creditCardNumber = ccNumber.split("").map(Number);
    console.log(creditCardNumber)

  /* a través de una condicional aplicamos función validator a nuestra variable creditCardNumber y en simultáneo
  llamamos a la función Maskify para retornar string enmascarado */

    if (validator.isValid(creditCardNumber)==true) {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es válida';
        document.getElementById('nCard').value = validator.maskify(creditCardNumber);
        alert("Tarjeta Valida  "+nCard.value);
        } 
        else {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es inválida, vuelve a intentarlo';
        document.getElementById('nCard').value = validator.maskify(creditCardNumber);
        alert("Tarjeta Bloqueada  "+nCard.value);
        }
}    
