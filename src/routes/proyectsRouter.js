import express from "express";
import proyectsController from "../controllers/proyectsController.js";
import validator from "../middlewares/validator/validator.js";
import commentSchema from "../middlewares/validator/schemas/commentSchema.js";

const proyectsRouter = express.Router();

proyectsRouter.get("/", proyectsController.getAllProyects ) //endpoint
proyectsRouter.get("/:id", proyectsController.getOneById)
proyectsRouter.post("/", validator (commentSchema), proyectsController.createOneProyect)
proyectsRouter.put("/:id", proyectsController.updateOneProyect) 
proyectsRouter.delete("/:id", proyectsController.deleteOneProyect)


export default proyectsRouter 