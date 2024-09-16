import fileServices from "../services/fileServices.js";

const fileController = {
  async getAllFiles(req, res) {
    try {
      let allFiles = await fileServices.getAllFiles();
      res.status().json({ allFiles });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getOneById(req, res) {
    try {
      let file = await fileServices.getOneById(req.params.id);
      res.status(200).json({ file });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async createOneFile (req, res){
    try {
        let newFile = await fileServices.createOneFile (req.body)
        res.status(201).json({newFile});
    } catch (error) {
        res.status(400).json({ error });
    }
        
    }, 
    async deleteOneFile (req, res){

        try {
            let file = await fileServices.deleteOneFile(req.param.id)
            res.status(200).json({file});
        } catch (error) {
            res.status(400).json({ error });
        }

    }, 
    async updateOneFile (req, res){

        try {
            
            let file = await fileServices.updateOneFile(req.param.id, req.body, {new:true})
            res.status(200).json({file});
        } catch (error) {
            res.status(400).json({ error });
        }
    }

  }


export default fileController