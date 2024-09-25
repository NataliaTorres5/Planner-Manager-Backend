import taskModel from "../models/taskModel.js";
import customError from "../utils/customError.js";
import validateObjectId from "../utils/validateObjectId.js";

const taskServices = {
  async getAllTasks() {
    try {
      let allTasks = await taskModel.find();
      return allTasks;
    } catch (error) {
      throw new customError(error.message, 500);
    }
  },

  async getOneById(id) {
    try {
      let task = await taskModel.findById({ id });
      if (!task) throw new Error(`The Id does not match`);
      return proyect;
    } catch (error) {
        throw new customError(error.message, 400);
    }
  },

  async createOneTask(data) {
    try {
      let newTask = await taskModel.create({ data });
      if (!newTask) throw new Error(`The task couldn't be created`);
    } catch (error) {
        throw new customError(error.message, 400);
    }
  },

  async deleteOneTask(id) {
    try {
      let task = await taskModel.findByIdAndDelete({ id });
      if (!task) throw new Error(`couldn't find the task,  we couldn't delete`);
      return task;
    } catch (error) {
      throw new customError(error.message, 400);
    }
  },

  async updateOneTask(id, data, newTrue) {
    try {
      let task = await taskModel.findByIdAndUpdate({ _id: id }, data, {
        new: newTrue,
      });
      if (!task) throw new error(`Could't find the task, we couldn't update`);
    } catch (error) {
        throw new customError(error.message, 400);
    }
  },

async getById (proyectId){
  const validated = validateObjectId(proyectId)
  if(!validated) throw new customError("invalid Id", 400);
  return await taskModel.findById(proyectId).populate({path: "proyect", select: "-_id"}) 

},


  async getByProyect(proyectId) {

    try {
       const validated = validateObjectId(proyectId)
       if(!validated) throw new customError("invalid Id");
        return await taskModel.find({ proyect: proyectId });
        
    } catch (error) {
        throw new customError(error.message, 400);
    }
}
}

export default taskServices;
