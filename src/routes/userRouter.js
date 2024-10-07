import express from "express";
import userController from "../controllers/userController.js";
import validator from "../middlewares/validator/validator.js";
import signUpSchema from "../middlewares/validator/schemas/signUpSchema.js";
import signInSchema from "../middlewares/validator/schemas/signInSchema.js"
import passport from "../middlewares/validator/passport/passport.js";


const userRouter = express.Router();

const consoleLog = (req, res, next) => {
    console.log("paso por aca");
    console.log("req", req);
    console.log("req.user", req.user);
    next();
  };
/*userRouter.get("/", userController.getAllUsers ) //endpoint
userRouter.post("/", userController.createOneUser )

userRouter.get( '/', userController.getOneUserByName )
userRouter.delete( '/:id', userController.deleteUser )
userRouter.put( '/:id', userController.updateUser )*/

userRouter.post("/signup",validator(signUpSchema), userController.registroUsuario)
userRouter.post("/token", passport.authenticate("jwt", {session: false} ),  userController.signInwithToken)
userRouter.post("/signin",validator(signInSchema), userController.signInUser)
userRouter.get("/", userController.getAllUsers)
userRouter.get("/:id", userController.getOneUserById)
userRouter.get(":email", userController.getUserByEmail)
userRouter.delete("/:id",consoleLog, userController.deleteUser)



export default userRouter 