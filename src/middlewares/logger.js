//middleware es una funcion que se ejecuta entre medio de 2 funcines y el next que es manejado por express permite que se pase al siguiente ejecucion 
//next lo que le pasa al siguiente funcion
function logger(req, res, next) {
  console.log(`Method; ${req.method} - endpoint: ${req.url}, ${Date.now()}`);
  next();
}

export default logger;
