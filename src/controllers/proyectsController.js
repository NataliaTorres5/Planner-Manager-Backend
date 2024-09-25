import proyectServices from "../services/proyectServices.js";
import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";

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
    console.log(req.body);
    let newProyect = await proyectServices.createOneProyect(req.body);
    console.log(newProyect);
    httpResponse(res, 200, newProyect);
  },
  async deleteOneProyect(req, res) {
    let proyect = await proyectServices.deleteOneProyect(req.param.id);
    httpResponse(res, 200, proyect);
  },
  async updateOneProyect(req, res) {
    let proyect = await proyectServices.updateOneProyect(
      req.param.id,
      req.body,
      { new: true }
    );
    httpResponse(res, 200, proyect);
  },

  

  async getByUser(req, res) {
    const userOwner = req.params.userOwner;
    const proyect = await proyectServices.getByUser(userOwner);
    httpResponse(res, 200, proyect);

  }, 

  async getById(req, res){
    const idUser = req.params.id
    const user = await proyectServices.getById(idUser);
    httpResponse(res, 200, user);

  }
};

export default {
  getAllProyects: catched(proyectController.getAllProyects),
  getOneById: catched(proyectController.getOneById),
  createOneProyect: catched(proyectController.createOneProyect),
  deleteOneProyect: catched(proyectController.deleteOneProyect),
  updateOneProyect: catched(proyectController.updateOneProyect),
};
