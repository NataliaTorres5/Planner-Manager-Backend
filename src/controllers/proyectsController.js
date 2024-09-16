import proyectServices from "../services/proyectServices.js";

const proyectController = {
  async getAllProyects(req, res) {
    try {
      let allProyect = await proyectServices.getAllProyects();
      res.status().json({ allProyect });
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
  async createOneProyect(req, res){
    try {
      console.log(req.body)
        let newProyect = await proyectServices.createOneProyect(req.body)
        console.log(newProyect)
        res.status(201).json({newProyect});
    } catch (error) {
        res.status(400).json({ error });
    }
        
    }, 
    async deleteOneProyect (req, res){

        try {
            let proyect = await cproyectServices.deleteOneProyect(req.param.id)
            res.status(200).json({proyect});
        } catch (error) {
            res.status(400).json({ error });
        }

    }, 
    async updateOneProyect (req, res){

        try {
            
            let proyect = await proyectServices.updateOneProyect(req.param.id, req.body, {new:true})
            res.status(200).json({proyect});
        } catch (error) {
            res.status(400).json({ error });
        }
    }

  }


export default proyectController