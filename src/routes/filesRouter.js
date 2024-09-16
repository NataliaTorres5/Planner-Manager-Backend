import fileController from "../controllers/fileController.js";
import express from "express";

const filesRouter = express.Router();

filesRouter.get("/", fileController .getAllFiles)
filesRouter.get("/:id", fileController .getOneById)
filesRouter.post("/", fileController .createOneFile)
filesRouter.put("/:id", fileController .updateOneFile) 
filesRouter.delete("/:id", fileController .deleteOneFile)

export default filesRouter