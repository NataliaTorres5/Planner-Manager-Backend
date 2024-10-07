import proyectServices from "../services/proyectServices.js";
import catched from "../utils/catched.js";
import customError from "../utils/customError.js";
import httpResponse from "../utils/httpResponse.js";
import userDTO from "../DTO/userDTO.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const proyectController = {
  async getAllProyects(req, res) {
    let allProyect = await proyectServices.getAllproyects();
    httpResponse(res, 200, allProyect);
  },
  async getOneById(req, res) {
    let proyect = await proyectServices.getOneById(req.params.id);
    httpResponse(res, 200, proyect);
  },
  async createOneProyect(req, res) {
    console.log("new proyect data" ,req.body);
    let newProyect = await proyectServices.createOneProyect(req.body);
    console.log(newProyect);
    httpResponse(res, 200, newProyect);
  },
  
  async deleteOneProyect(req, res) {
    console.log(req.params.id)
    let proyect = await proyectServices.deleteOneProyect(req.params.id);
    httpResponse(res, 200, proyect);

  },
  async updateOneProyect(req, res) {
    let proyect = await proyectServices.updateOneProyect(
      req.params.id,
      req.body,
      { new: true }
    );
    httpResponse(res, 200, proyect);
  },

  

  async getByUser(req, res) {
    const userOwner = req.params.id;
    const proyect = await proyectServices.getByUser(userOwner);
    httpResponse(res, 200, proyect);

  }, 

  async getById(req, res){
    const idUser = req.params.id
    const user = await proyectServices.getById(idUser);
    httpResponse(res, 200, user);

  }, 

  async getByUserId(req, res) {
    const userID = req.params.id;
    const userId = await proyectServices.getbyUserId(userID); 
    if (!userId ) throw new customError("this user has no proyects", 400);
    httpResponse(res, 200, userId); 
  },

};

export default {
  getAllProyects: catched(proyectController.getAllProyects),
  getOneById: catched(proyectController.getOneById),
  createOneProyect: catched(proyectController.createOneProyect),
  deleteOneProyect: catched(proyectController.deleteOneProyect),
  updateOneProyect: catched(proyectController.updateOneProyect),
  getByUserId: catched(proyectController.getByUserId),

};
