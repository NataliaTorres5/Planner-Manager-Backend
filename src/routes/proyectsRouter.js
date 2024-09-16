import express from "express";
import proyectsController from "../controllers/proyectsController.js";

const proyectsRouter = express.Router();

proyectsRouter.get("/", proyectsController.getAllProyects ) //endpoint
proyectsRouter.get("/:id", proyectsController.getOneById)
proyectsRouter.post("/", proyectsController.createOneProyect)
proyectsRouter.put("/:id", proyectsController.updateOneProyect) 
proyectsRouter.delete("/:id", proyectsController.deleteOneProyect)


export default proyectsRouter 