//const {registraClientes2, leeClientes2} = require('./operaciones.js')
import {registraClientes, leeClientes} from "./operaciones.js"
const arg = process.argv.slice(2);
const [option, text] = arg;




const main = async () =>{
    switch (option) {
        case "registrar":
            await registraClientes(text);
            break;
        case "leer":
            await leeClientes();
            break;

        default: console.log("Opcion Desconocida:", option);
    }
};


main();