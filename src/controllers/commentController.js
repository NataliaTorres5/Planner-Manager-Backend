import commentServices from "../services/commentServices.js";
import catched from "../utils/catched.js"
import httpResponse from "../utils/httpResponse.js";

const commentController = {
  async getAllComments(req, res) {
      let allComments = await commentServices.getAllComments();
      httpResponse(res, 200, allComments)
 
  },
  async getOneById(req, res) {
      let comment = await commentServices.getOneById(req.params.id);
      httpResponse(res, 200, comment)

  },
  async createOneComment(req, res) {
      let newComment = await commentServices.createOneComment(req.body);
      httpResponse(res, 200, newComment)

  },
  async deleteOneComment(req, res) {
      let comment = await commentServices.deleteOneComment(req.param.id);
      httpResponse(res, 200, comment)

  },
  async updateOneComment(req, res) {

      let comment = await commentServices.updateOneComment(
        req.param.id,
        req.body,
        { new: true });
        httpResponse(res, 200, comment)
 
  },    async getByProyect(req, res) {
    const proyectId = req.params.proyect;
    const tasks = await taskServices.getByProyect(proyectId);
    httpResponse(res, 200, tasks);
  
    }
};

export default {
  getAllComments: catched(commentController.getAllComments),
  getOneById: catched(commentController.getOneById),
  createOneComment: catched(commentController.createOneComment),
  deleteOneComment: catched(commentController.deleteOneComment),
  updateOneComment: catched(commentController.updateOneComment),
} ;
