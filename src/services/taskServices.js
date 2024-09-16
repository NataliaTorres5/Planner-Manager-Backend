import taskModel from "../models/taskModel.js"

const taskServices = {

    async getAllTasks() {
        try {
            let allTasks = await taskModel .find()
            return allTasks
        } catch (error) {
            return error
        }
    },


    async getOneById(id){
        try{
            let task = await taskModel .findById({id})
            if(!task) throw new Error(`The Id does not match`)
            return proyect
        }
        catch (error){
            return error

        }
    }, 

    async createOneTask (data) {
        try{
            let newTask= await taskModel .create({data})
            if(!newTask) throw new Error(`The task couldn't be created`)
        }catch (error){
            return error 
        }
    },

    async deleteOneTask (id) {
    try {
        let task = await taskModel .findByIdAndDelete({id})
        if(!task) throw new Error(`couldn't find the task,  we couldn't delete`)
        return task
        
    } catch (error) {
        return(error)
        
    }
    },

    async updateOneTask (id, data, newTrue) {
        try {

            let task = await taskModel .findByIdAndUpdate({_id:id}, data, {new:newTrue})
            if (!task) throw new error (`Could't find the task, we couldn't update`)
            
        } catch (error) {
            return(error)
            
        }
    }
    
}

export default taskServices