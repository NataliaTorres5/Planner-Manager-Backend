import { get } from 'mongoose';
import userModel from '../models/userModel.js'
import bcrypt from "bcrypt";

const userServices = {

   async getAllUsers() {
    return await userModel.find()

   },

   async getOneUserById(id) {

    return await userModel.findById({ _id: id })
   },

    async getByEmail (data) {
        try {
            console.log(data, "data")
            return await userModel.findOne({ email:data})
            
        } catch (error) {
            console.log(error, "error catch")
            
        }
      
    },

    async deleteUser(id){
        return await userModel.findByIdAndDelete({_id: id,} )
    },

    async create(data){
        const passwordHash = bcrypt.hashSync(data.password || "", 10);
      data.password = passwordHash;
      return  await userModel.create(data);

    },
    checkPassword(password, passwordHash){
        return bcrypt.compareSync(password || "", passwordHash);

    }
}

export default userServices