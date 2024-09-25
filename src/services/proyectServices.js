import proyectModel from "../models/proyectModel.js";
import customErrors from "../utils/customError.js";
import validateObjectId from "../utils/validateObjectId.js";

const proyectServices = {

    async getAllproyects() {
        try {
            let allproyects = await proyectModel.find()
            console.log("algo", allproyects)
            return allproyects
        } catch (error) {
            console.log(error)
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
            console.log(error)
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
    },


    async getByUser(userId){
        try {
            const validateUser= validateObjectId(userId)
            if(!validateUser) throw new customErrors("invalid userId",400 )
            return await proyectModel.findById({user:userId})
            
        } catch (error) {
            
        }

    },

    async getUserById(userId){
        const validateUser= validateObjectId(userId)
        if(!validateUser) throw new customErrors("invalid userId",400 )
        return await proyectModel.findById(userId)
    }
    
    
}

export default proyectServices