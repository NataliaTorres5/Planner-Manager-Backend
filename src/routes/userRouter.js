import express from "express";
import userController from "../controllers/userController.js";
import validator from "../middlewares/validator/validator.js";
import signUpSchema from "../middlewares/validator/schemas/signUpSchema.js";
import signInSchema from "../middlewares/validator/schemas/signInSchema.js"
import passport from "../middlewares/validator/passport/passport.js";

const userRouter = express.Router();


/*userRouter.get("/", userController.getAllUsers ) //endpoint
userRouter.post("/", userController.createOneUser )
userRouter.get( '/:id', userController.getOneUserByID )
userRouter.get( '/', userController.getOneUserByName )
userRouter.delete( '/:id', userController.deleteUser )
userRouter.put( '/:id', userController.updateUser )*/

userRouter.post("/signup",validator(signUpSchema), userController.registroUsuario)
userRouter.post("/signin",validator(signInSchema), userController.signInUser)
userRouter.post("/signin/token", passport.authenticate("jwt", {session: false} ), userController.signInwithToken)
userRouter.get("/", userController.getAllUsers)
userRouter.get(":email", userController.getUserByEmail)
userRouter.delete("/:id", userController.deleteUser)


export default userRouter 