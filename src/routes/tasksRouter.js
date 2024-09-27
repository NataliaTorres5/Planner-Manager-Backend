import express from "express";
import taskController from "../controllers/taskController.js";
import validator from "../middlewares/validator/validator.js";
import taskSchema from "../middlewares/validator/schemas/taskSchema.js";
const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks ) //endpoint
taskRouter.get("/:id", taskController.getOneById)
taskRouter.post("/", validator (taskSchema),  taskController.createOneTask)
taskRouter.put("/:id", taskController.updateOneTask) 
taskRouter.delete("/:id", taskController.deleteOneTask)
taskRouter.get("/:proyect", taskController.getByProyect)
taskRouter.get("/:proyect", taskController.getById)


export default taskRouter