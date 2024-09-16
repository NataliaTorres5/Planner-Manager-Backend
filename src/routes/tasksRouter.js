import express from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllProyects ) //endpoint
taskRouter.get("/:id", taskController.getOneById)
taskRouter.post("/", taskController.createOneComment)
taskRouter.put("/:id", taskController.updateOneComment) 
taskRouter.delete("/:id", taskController.deleteOneComment)
