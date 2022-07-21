const validator = {
  isValid: (nCard) => {
    /*se define numSum que es la suma de los números de la tarjeta de crédito, y se define value como el valor 
    de cada posición del string */
    let numSum = 0;
    let value;
    /* acá se cambia el valor de los values pares y se suman los dígitos si la suma es mayor o igual a 10 */
    for (let i = 0; i < nCard.length; ++i) {
      if (i % 2 == 0) {
        value = 2 * nCard[i];
        if (value >= 10) {
          value = Math.floor(value / 10) + (value % 10);
        }
      } else {
        value =+ nCard[i];
      } 
      numSum += value;
    }
    /* si el módulo de la suma dividido en 10 es 0 entonces la tarjeta es válida */
    if (numSum % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: (nCard) => {
    /* acá el array se divide en dos: primero se divide todo menos los últimos 4 números para enmascarar */
    let maskedCc = nCard.slice(0, nCard.length - 4);
    let arrayMasked = [];
    //console.log(nCard.slice(-4));
    let lastFour = nCard.slice(-4);

    if (nCard.length <= 4) {
      return lastFour;
    }
    /* .push agrega por cada número a enmascarar un # al array vacío arrayMasked */
    for (let i = 0; i < maskedCc.length; i++) {
      arrayMasked.push("#");
    }

    let joinMasked = arrayMasked.join("");

    return joinMasked + lastFour;
  },
};

export default validator;
