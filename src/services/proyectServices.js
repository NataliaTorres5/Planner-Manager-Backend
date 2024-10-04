import proyectModel from "../models/proyectModel.js";
import customErrors from "../utils/customError.js";
import validateObjectId from "../utils/validateObjectId.js";

const proyectServices = {
  async getAllproyects() {
    return await proyectModel.find();
  },

  async getOneById(id) {
    let proyect = await proyectModel.findById(id);
    return proyect;
  },

  async createOneProyect(data) {
    let newProyect = await proyectModel.create(data);
    return newProyect;
  },

  async deleteOneProyect(id) {
    let proyect = await proyectModel.findByIdAndDelete({ _id: id });
    return proyect;
  },

  async updateOneProyect(id, data, newTrue) {
    let proyect = await proyectModel.findByIdAndUpdate({ _id: id }, data, {
      new: newTrue,
    });
    return proyect;
  },

  async getByUser(userId) {
  
      const validateUser = validateObjectId(userId);
      if (!validateUser) throw new customErrors("invalid userId", 400);
      return await proyectModel.findById({ user: userId });
    
  },

  async getbyUserId(userId) {
    const validatedUser = validateObjectId(userId)
    if(!validatedUser) throw new customErrors("Invalid User Id", 400); 
    return await proyectModel.find({user: userId}).populate({path: "user", select: "-_id"})
  } , 
  
};

export default proyectServices;
