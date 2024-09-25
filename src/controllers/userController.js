import userServices from "../services/userServices.js";
import customError from "../utils/customError.js";
import catched from "../utils/catched.js"
import httpResponse from "../utils/httpResponse.js";
import userDTO from "../DTO/userDTO.js";

const userController = {
  /*async getAllUsers(req, res, next) {
    try {
      let allUsers = await userServices.getAllUsers();
      res.status(200).json({ allUsers });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getOneUserByID(req, res) {
    try {
      let user = await userServices.getOneUserByID(req.params.id);
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getOneUserByName(req, res) {
    try {
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async updateUser(req, res, next) {
    try {
      let updatedUser = await userServices.updateUser(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json({ updatedUser });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async deleteUser(req, res) {
    try {
      let user = await userServices.deleteUser(req.params.id);
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async createOneUser(req, res) {
    console.log(req.body);
    try {
      let user = await userServices.createOneUser(req.body);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  */
  async signInUser(req, res) { //inicio sesion
  
      const data = req.body;
      const emailInUse = await userServices.getByEmail({ email: data.email });
      if (!emailInUse) throw new customError(`Email or password is not correct`, 400);
      const validPassword = userServices.checkPassword(data.password, emailInUse.password);
      if (!validPassword) throw new customError(`Email or password is not correct`, 409);
      const userResponse = userDTO(emailInUse);
      httpResponse(res, 200, userResponse)
  

  },

  async registroUsuario(req, res) { //registro
      const data = req.body;
      const emailInUse = await userServices.getByEmail(data.email);
      if (emailInUse) throw new customError("Email already exists", 409);
      const newUser = await userServices.create(data);
      const userResponse = userDTO(newUser);
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
async getByUserEmail(req, res){
   let userEmail = await userServices.getByEmail(data.email)
   httpResponse(res, 201, userEmail)

},

async deleteUser(req, res){
  let deletedUser = await userServices.deleteUser(req.params.id)
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
  deleteUser: catched(userController.deleteUser)
} 