import fileModel from "../models/fileModel.js"

const fileServices = {

    async getAllFiles() {
        try {
            let allFiles = await fileModel.find()
            return allFiles
        } catch (error) {
            return error
        }
    },

    async getOneById(id){
        try{
            let file = await fileModel.findById({id})
            if(!file) throw new Error(`The Id does not match`)
            return file
        }
        catch (error){
            return error

        }
    }, 

    async createOneFile (data) {
        try{
            let newComment = await fileModel.create({data})
            if(!newComment) throw new Error(`The file couldn't be created`)
        }catch (error){
            return error 
        }
    },

    async deleteOneFile (id) {
    try {
        let file = await fileModel.findByIdAndDelete({id})
        if(!file) throw new Error(`couldn't find the file,  we couldn't delete`)
        return file
        
    } catch (error) {
        return(error)
        
    }
    },

    async updateOneFile (id, data, newTrue) {
        try {

            let file = await fileModel.findByIdAndUpdate({_id:id}, data, {new:newTrue})
            if (!file) throw new error (`Could't find the file, we couldn't update`)
            
        } catch (error) {
            return(error)
            
        }
    }
    
}

export default fileServices