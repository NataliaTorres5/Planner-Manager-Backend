import taskServices from "../services/taskServices.js";
import catched from "../utils/catched.js";
import customError from "../utils/customError.js";
import httpResponse from "../utils/httpResponse.js";

const taskController = {
  async getAllTasks(req, res) {
    let allComments = await taskServices.getAllTasks();
    httpResponse(res, 200, allComments);
  },
  async getOneById(req, res) {
    let task = await taskServices.getOneById(req.params.id);
    httpResponse(res, 200, task);
  },
  async createOneTask(req, res) {
    let newTask = await taskServices.createOneTask(req.body);
    httpResponse(res, 200, newTask);
  },
  async deleteOneTask(req, res) {
    let task = await taskServices.deleteOneTask(req.param.id);
    httpResponse(res, 200, task);
  },
  async updateOneTask(req, res) {
    let task = await taskServices.updateOneTask(req.param.id, req.body, {
      new: true,
    });
    httpResponse(res, 200, task);
  },

  async getById(id){ //desde relaciones
    const getProyectById = req.params.proyect;
    const proyect = await taskServices.getById(getProyectById);
   
    httpResponse(res, 200, proyect);

  },

  async getByProyect(req, res) {  //desde relaciones
  const proyectId = req.params.proyect;
  const tasks = await taskServices.getByProyect(proyectId);
  if (!tasks) throw new customError("no tasks found", 404);
  httpResponse(res, 200, tasks);

  }
};

export default {
  getAllTasks: catched(taskController.getAllTasks),
  getOneById: catched(taskController.getOneById),
  createOneTask: catched(taskController.createOneTask),
  deleteOneTask: catched(taskController.deleteOneTask),
  updateOneTask: catched(taskController.updateOneTask),
  getById: catched(taskController.getById),
  getByProyect: catched(taskController.getByProyect),
};
