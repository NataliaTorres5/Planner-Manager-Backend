import proyectModel from "../models/proyectModel.js";

const proyectServices = {

    async getAllproyects() {
        try {
            let allproyects = await proyectModel.find()
            return allproyects
        } catch (error) {
            return error
        }
    },


    async getOneById(id){
        try{
            let proyect = await proyectModel.findById({id})
            if(!proyect) throw new Error(`The Id does not match`)
            return proyect
        }
        catch (error){
            return error

        }
    }, 

    async createOneProyect (data) {
        try{
            console.log(data)
            let newProyect= await proyectModel.create(data)
            if(!newProyect) throw new Error(`The Proyect couldn't be created`)
                console.log(newProyect)
            return newProyect
        }catch (error){
            return error 
        }
    },

    async deleteOneProyect (id) {
    try {
        let proyect = await proyectModel.findByIdAndDelete({id})
        if(!proyect) throw new Error(`couldn't find the proyect,  we couldn't delete`)
        return proyect
        
    } catch (error) {
        return(error)
        
    }
    },

    async updateOneProyect (id, data, newTrue) {
        try {

            let proyect = await commentModel.findByIdAndUpdate({_id:id}, data, {new:newTrue})
            if (!proyect) throw new error (`Could't find the proyect, we couldn't update`)
            
        } catch (error) {
            return(error)
            
        }
    }
    
}

export default proyectServices