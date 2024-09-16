import express from "express";
import proyectsController from "../controllers/proyectsController.js";

const proyectsRouter = express.Router();

proyectsRouter.get("/", proyectsController.getAllProyects ) //endpoint
proyectsRouter.get("/:id", proyectsController.getOneById)
proyectsRouter.post("/", proyectsController.createOneComment)
proyectsRouter.put("/:id", proyectsController.updateOneComment) 
proyectsRouter.delete("/:id", proyectsController.deleteOneComment)


export default proyectsRouter 