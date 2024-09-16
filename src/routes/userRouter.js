import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers ) //endpoint
userRouter.post("/", userController.createOneUser )
userRouter.get( '/:id', userController.getOneUserByID )
userRouter.get( '/', userController.getOneUserByName )
userRouter.get( '/:id', userController.getOneUserByID )
userRouter.delete( '/:id', userController.deleteUser )
userRouter.put( '/:id', userController.updateUser )


export default userRouter 