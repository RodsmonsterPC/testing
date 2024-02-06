const cuadrado = {
  lado: 5,
};

const area = ({ lado }) => lado * lado;

const perimetro = ({ lado }) => lado * 4;

const result1 = area(cuadrado);
const result2 = perimetro(cuadrado);

console.log("Area", result1, "Perimetro", result2);
