//imprimir la tabla del 5
const { boolean } = require("yargs");
const { crearTabla } = require("./modul/crearTabla");
const argv=require('./config/yargs');
const colors=require('colors');

console.log(argv);
console.log("Base: ".red, argv.base);

/*console.clear();

const [,,base3]=process.argv;
let [,base]=base3.split('=');

console.log("Base", base);
*/
crearTabla(argv.b, argv.l, argv.i)
  .then((nombreArchivo) => {
    console.log(`${nombreArchivo}Archivo creado`);
  })
  .catch((err) => {
    console.log(err);
  });
