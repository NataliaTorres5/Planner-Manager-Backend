import express from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks ) //endpoint
taskRouter.get("/:id", taskController.getOneById)
taskRouter.post("/", taskController.createOneTask)
taskRouter.put("/:id", taskController.updateOneTask) 
taskRouter.delete("/:id", taskController.deleteOneTask)
taskRouter.get("/:proyect", taskController.getByProyect)
taskRouter.get("/:proyect", taskController.getById)


export default taskRouter