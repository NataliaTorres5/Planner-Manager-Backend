import proyectServices from "../services/proyectServices.js";

const proyectController = {
  async getAllProyects(req, res) {
    try {
      let allComments = await proyectServices.getAllProyects();
      res.status().json({ allComments });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getOneById(req, res) {
    try {
      let proyect = await proyectServices.getOneById(req.params.id);
      res.status(200).json({ proyect });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async createOneComment(req, res){
    try {
        let newProyect = await proyectServices.createOneComment(req.body)
        res.status(201).json({newProyect});
    } catch (error) {
        res.status(400).json({ error });
    }
        
    }, 
    async deleteOneComment (req, res){

        try {
            let proyect = await cproyectServices.deleteOneComment(req.param.id)
            res.status(200).json({proyect});
        } catch (error) {
            res.status(400).json({ error });
        }

    }, 
    async updateOneComment (req, res){

        try {
            
            let proyect = await proyectServices.updateOneComment(req.param.id, req.body, {new:true})
            res.status(200).json({proyect});
        } catch (error) {
            res.status(400).json({ error });
        }
    }

  }


export default proyectController