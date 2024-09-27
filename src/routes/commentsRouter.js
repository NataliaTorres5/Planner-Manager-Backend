import commentController from "../controllers/commentController.js";
import express from "express";
import validator from "../middlewares/validator/validator.js";
import commentSchema from "../middlewares/validator/schemas/commentSchema.js";

const commentsRouter = express.Router();

commentsRouter.get("/", commentController.getAllComments)
commentsRouter.get("/:id", commentController.getOneById)
commentsRouter.post("/", validator (commentSchema),commentController.createOneComment)
commentsRouter.put("/:id", commentController.updateOneComment) 
commentsRouter.delete("/:id", commentController.deleteOneComment)

export default commentsRouter 