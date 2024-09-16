import fileServices from "../services/fileServices";
const fileController = {
  async getAllFiles(req, res) {
    try {
      let allComments = await fileController.getAllFiles();
      res.status().json({ allFiles });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getOneById(req, res) {
    try {
      let comment = await fileController.getOneById(req.params.id);
      res.status(200).json({ comment });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async createOneFile (req, res){
    try {
        let newFile = await fileController.createOneFile (req.body)
        res.status(201).json({newFile});
    } catch (error) {
        res.status(400).json({ error });
    }
        
    }, 
    async deleteOneFile (req, res){

        try {
            let comment = await fileController.deleteOneFile(req.param.id)
            res.status(200).json({comment});
        } catch (error) {
            res.status(400).json({ error });
        }

    }, 
    async updateOneFile (req, res){

        try {
            
            let comment = await fileController.updateOneFile(req.param.id, req.body, {new:true})
            res.status(200).json({comment});
        } catch (error) {
            res.status(400).json({ error });
        }
    }

  }


export default fileController