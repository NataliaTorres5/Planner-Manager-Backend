import express from "express";
import proyectsController from "../controllers/proyectsController.js";
import validator from "../middlewares/validator/validator.js";
import proyectSchema from "../middlewares/validator/schemas/proyectSchema.js";

const proyectsRouter = express.Router();

proyectsRouter.get("/", proyectsController.getAllProyects ) //endpoint
proyectsRouter.get("/:id", proyectsController.getOneById)

proyectsRouter.post("/", validator (proyectSchema), proyectsController.createOneProyect)
proyectsRouter.put("/:id", proyectsController.updateOneProyect) 
proyectsRouter.delete("/:id", proyectsController.deleteOneProyect)
proyectsRouter.get("/two/:id", proyectsController.getByUserId)


export default proyectsRouter 