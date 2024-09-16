import express from "express";

import commentsRouter from "./commentsRouter.js";
import proyectsRouter from "./proyectsRouter.js";
import tasksRouter from "./tasksRouter.js"
import userRouter from "./userRouter.js"
import filesRouter from "./filesRouter.js";

const indexRouter = express.Router();

indexRouter.use("/proyects", proyectsRouter)

indexRouter.use("/tasks", tasksRouter)

indexRouter.use("/comments", commentsRouter)

indexRouter.use("/files", filesRouter)

indexRouter.use("/user", userRouter)


export default indexRouter



