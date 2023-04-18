/* const INGREDIENTE_CARNE_SOPA= "verduras,carne,aguaycondimentos";
const INGREDIENTE_POLLO_SOPA= "verduras,pollo,aguaycondimentos"; */

/* let ingredienteSopaCond= "verduras agua y condimentos";
let ingredienteSopaCaldo = "verduras agua y caldos";
let ingredientesSopaCarne = "carne";
let ingredientesSopaPollo= "pollo"; 
 */
let ingredientesSopaVerd = "true";
let ingredienteAgua = "true";
let ingredicntesSopaCaldo = "true";
let ingredientesSopacond = "true";
let ingredientesSopaCarne = "true";
let ingredientesSopaPollo= "true";


let tengoEsto = prompt(" Ingredientes para esta sopa ");
let ingredienteSopaVerd = prompt ("tiene verduras?");
let ingredienteAgu = prompt ("tiene agua?");
let ingredienteSopaCaldo = prompt ("tiene caldo")
let ingredientesSopaCond = prompt ("tiene condimentos?");
let tipoSopa = prompt ("preparar sopa de pollo o de carne?");



if ((tipoSopa == ingredientesSopaCarne) ||  (tipoSopa == ingredientesSopaPollo) ) {
    document.write (" Ya tiene todos los ingredientes para la preparacion de la sopa " + tipoSopa )
} else {
    document.write (" Ya tiene su todos los ingredientes para su sopa de verduras")
}

/* let result= confirm ("si no tenes el condimiento") */

   /*  if (tengoEsto== ingredienteSopaCond & (ingredientesSopaCarne || ingredientesSopaPollo)) {
        document.write("corta verduras, cocinar la carne o pollo y ponerle los condimetos")
    } else if (tengoEsto == ingredienteSopaCaldo) {
        document.write("corta  las verduras, cocina el pollo o carne y ponerle condimentos") */
   /*  } else if ((tengoEsto == INGREDIENTE_CARNE_SOPA) && (result==true)) {
 */
  /*   } */