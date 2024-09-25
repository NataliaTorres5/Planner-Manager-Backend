import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();


/*userRouter.get("/", userController.getAllUsers ) //endpoint
userRouter.post("/", userController.createOneUser )
userRouter.get( '/:id', userController.getOneUserByID )
userRouter.get( '/', userController.getOneUserByName )
userRouter.delete( '/:id', userController.deleteUser )
userRouter.put( '/:id', userController.updateUser )*/

userRouter.post("/signup", userController.registroUsuario)
userRouter.post("/signin", userController.signInUser)
userRouter.get("/", userController.getAllUsers)
userRouter.get(":email", userController.getUserByEmail)
userRouter.delete("/:id", userController.deleteUser)


export default userRouter 