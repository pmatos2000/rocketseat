
// 1.1
import  ClassUsuario  from "./functions";
ClassUsuario.info();

//1.2
import {idade} from "./functions";
console.log(idade);

//1.3
import Usuario, {idade as idade2} from "./functions";
Usuario.info();
console.log(idade2);