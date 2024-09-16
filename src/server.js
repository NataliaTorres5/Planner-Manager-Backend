import express from "express"; 
import cors from "cors";
import dotenv from "dotenv"
import indexRouter from "./routes/indexRouter.js"
import logger from "./middlewares/logger.js";  //cuando se hae una peticion se ejecuta este middle ware dentro del metodo y hace console log y se ejecuta el siguiente

dotenv.config() //para  que las variables de entorno funcionen
const server = express() //server nombre que se quiera al servidor
server.use(express.json()) //middleware de json para que cuando llegue la peticion agarre el body, lo pase a js y lo pueda leer
server.use(cors()) //para pasar middleworks que se ejecute antes de las rutas
server.use("/api", logger,indexRouter ) 
server.get("/", (request, response) => (response.send("hola")))


server.listen(process.env.PORT, ()=> console.log(`server is being listening in port ${process.env.PORT} `))  //backpicks