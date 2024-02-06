const arrayColors = [
  "rojo",
  "blanco",
  "azul",
  "verde",
  "amarillo",
  "rojo",
  "verde",
];

const contadorColores = arrayColors.reduce((acc, color) => {
  color = 1;

  if (color === color) {
    acc[color] += 1;
  }

  return acc[color];
}, "");

console.log(contadorColores);
