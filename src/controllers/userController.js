import userServices from "../services/userServices.js";
import customError from "../utils/customError.js";
import catched from "../utils/catched.js"
import httpResponse from "../utils/httpResponse.js";
import userDTO from "../DTO/userDTO.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { get } from "mongoose";

dotenv.config();

const userController = {

  async signInUser(req, res) { //inicio sesion
  
      const data = req.body;
      console.log(data)
      const emailInUse = await userServices.getByEmail( data.email);
      if (!emailInUse) throw new customError(`Email or password is not correct`, 400);
      const validPassword = userServices.checkPassword(data.password, emailInUse.password);
      if (!validPassword) throw new customError(`Email or password is not correct`, 409);
      const token = jwt.sign({email:emailInUse.email}, process.env.SECRET_KEY,{expiresIn:'2h'} );
      const userResponse = userDTO(emailInUse, token);
      console.log(userResponse)
      httpResponse(res, 200, userResponse)
  

  },

  async signInwithToken(req,res){
    const authHeader = req.headers["authorization"];
    if(!authHeader) throw new customError ("token no fue dado", 400); 

    const token = authHeader.split(" ")[1];
    const userResponse = userDTO(req.user, token);
   console.log(req.user)
    httpResponse(res, 200, userResponse , "User created")
  },


  async registroUsuario(req, res) { //registro
      const data = req.body;
      const emailInUse = await userServices.getByEmail(data.email);
      if (emailInUse) throw new customError("Email already exists", 409);
      const newUser = await userServices.create(data);
      const token = jwt.sign({email:newUser.email}, process.env.SECRET_KEY,{expiresIn:'2h'} );
      const userResponse = userDTO(newUser, token);
      httpResponse(res, 200, userResponse, "User created")
  },


  async LogOutUser(req, res) {

      let user = await userModel.getByEmail(data.email);
      user.logged = false;
      res.status(200).json("Log out successful");
 
  },

  async getAllUsers(req, res) {
    let allUsers = await userServices.getAllUsers();
    httpResponse(res, 201, allUsers)

},

async getOneUserByID (req, res){

  let userId = await userServices.getOneUserById(req.params.id)
  httpResponse(res, 201, userId)
  
}, 
async getByUserEmail(req, res){
   let userEmail = await userServices.getByEmail(data.email)
   httpResponse(res, 201, userEmail)

},

async deleteUser(req, res){
  let deletedUser = await userServices.deleteUser(req.params.id);
  if(!deletedUser) throw new Error("no user to delete")
  httpResponse(res, 201, deletedUser, "User deleted successfully" )
},

};

export default  // userController

{ 
  registroUsuario: catched(userController.registroUsuario),
  signInUser: catched(userController.signInUser),
  logOutUser: catched(userController.LogOutUser),
  getAllUsers: catched(userController.getAllUsers),
  getUserByEmail: catched(userController.getByUserEmail),
  deleteUser: catched(userController.deleteUser),
  signInwithToken: catched(userController.signInwithToken), 
  getOneUserById: catched(userController.getOneUserByID)
} 