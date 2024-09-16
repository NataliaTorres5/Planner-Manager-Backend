import taskServices from "../services/taskServices.js";

const taskController = {
  async getAllTasks(req, res) {
    try {
      let allComments = await taskServices .getAllTasks();
      res.status().json({ allComments });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getOneById(req, res) {
    try {
      let task = await taskServices .getOneById(req.params.id);
      res.status(200).json({ task });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async createOneTask(req, res){
    try {
        let newTask = await taskServices .createOneTask(req.body)
        res.status(201).json({newTask});
    } catch (error) {
        res.status(400).json({ error });
    }
        
    }, 
    async deleteOneTask (req, res){

        try {
            let proyect = await taskServices .deleteOneTask(req.param.id)
            res.status(200).json({proyect});
        } catch (error) {
            res.status(400).json({ error });
        }

    }, 
    async updateOneTask (req, res){

        try {
            
            let proyect = await taskServices .updateOneTask(req.param.id, req.body, {new:true})
            res.status(200).json({proyect});
        } catch (error) {
            res.status(400).json({ error });
        }
    }

  }


export default taskController 