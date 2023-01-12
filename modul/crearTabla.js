const fs = require("fs");
const colors=require('colors');

const crearTabla = async (base = 5, boolListar, iteracion) => {
  try {
    
    let salida, consola = "";

    for (let i = 1; i <=iteracion; i++) {
      salida =salida+ `${base} x ${i}=${base * i}\n`;
      consola+=`${base} ${'x'.gray} ${i}=${base * i}\n`;
    }
    fs.writeFileSync(`./Salida/Tabla-${base}.txt`, salida);
    if(boolListar){
      console.log(consola);
    }
    

    return `Tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};
module.exports = { crearTabla };
