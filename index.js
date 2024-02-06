const objKoder = {
  nombre: "",
  apellidoPaterno: "",
  generacion: "",
  hobiePrincipal: "",
};

const arrayKeysObj = ["libroFavorito", "musicaPrincipal", "tipoDesarrollador"];
const arrayValuesObj = ["El alquimista", "Indie", "FullStack - mobile"];

const answerName = (objKoder.nombre = "Rodolfo");
const answerApellidoP = (objKoder.apellidoPaterno = "Perez");
const answerGeneracion = (objKoder.generacion = "20Js");
const answer = (objKoder.hobiePrincipal = "Videojuegos");

const addKey = () => {
  (objKoder["libroFavorito"] = "Padre Rico, Padre Pobre"),
    (objKoder["musicaPrincipal"] = "Sweet Symphony"),
    (objKoder["TipoDesarrollador"] = "Fullstack");
};
addKey();

console.log("objKoder", objKoder);
