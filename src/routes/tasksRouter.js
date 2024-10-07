import express from "express";
import taskController from "../controllers/taskController.js";
import passport from "../middlewares/validator/passport/passport.js";
import validator from "../middlewares/validator/validator.js";
import taskSchema from "../middlewares/validator/schemas/taskSchema.js";
const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks ) //endpoint
taskRouter.get("/:id", taskController.getOneById)
taskRouter.post("/", passport.authenticate("jwt", {session: false} ), validator (taskSchema),  taskController.createOneTask)
taskRouter.put("/:id", passport.authenticate("jwt", {session: false} ),validator (taskSchema), taskController.updateOneTask) 
taskRouter.delete("/:id", taskController.deleteOneTask)
taskRouter.get("/:proyect", taskController.getByProyect)
taskRouter.get("/one/:id", taskController.getByUserId)


export default taskRouter