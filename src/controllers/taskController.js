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
    console.log("new Task",req.body)
    let newTask = await taskServices.createOneTask(req.body);
    console.log(newTask);
    httpResponse(res, 200, newTask);

  },
  async deleteOneTask(req, res) {
    console.log(req.params.id)
    let task = await taskServices.deleteOneTask(req.params.id);
    httpResponse(res, 200, task);
  },

  async updateOneTask(req, res) {
    let task = await taskServices.updateOneTask(req.params.id, req.body, {
      new: true,
    });
    httpResponse(res, 200, task);
  },

  async getByUserId(req, res){ //desde relaciones  NO ES USER ES PROYECT 
    const proyectId = req.params.id;
    const proyect = await taskServices.getByUserId(proyectId );
    if (!proyect) throw new customError("no tasks found", 404);
   
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
  getByUserId: catched(taskController.getByUserId),
  getByProyect: catched(taskController.getByProyect),
};
