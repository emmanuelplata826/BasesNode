const argv = require("yargs")
  .option("base", {
    alias: "b",
    type: "number",
    demandOption: true,
  })
  .option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Lista el resultado'

  })
  .option('iteracion',{
    alias:'i',
    type:'number',
       
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser Numero";
    }else{
      if(isNaN(argv.i)){
        throw "La iteracion debe ser un numero"
      }
      return true;
    }
    
  }).argv;
  

  module.exports=argv;