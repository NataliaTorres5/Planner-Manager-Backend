import { get } from 'mongoose';
import userModel from '../models/userModel.js'
import bcrypt from "bcrypt";

const userServices = {
    /*
    async getAllUsers() {
        try {
            let allUsers = await userModel.find()
            return allUsers
        } catch (error) {
            return error
        }

    },
    async getOneUserByID(id) {
        try {
            let user = await userModel.findById({ id })
            if (!user) throw new Error(`The provided ID doesn't match any registered IDs`)
            return user
        } catch (error) {
            return error
        }
    },
    async getOneUserByName(data) {
        try {
            let user = await userModel.findOne({ firstName: data.firstName })
            if (!user) throw new Error('No users found with the provided name')
            return user
        } catch (error) {
            return error
        }
    },
    async updateUser(id, data, ){
        try {
            let updatedUser = await userModel.findByIdAndUpdate( {id}, data, {new:true} )
            if(!updatedUser) throw new Error( `The provided ID doesn't match any registered users, couldn't update` )
            return updatedUser
        } catch (error) {
            return error
        }
    },
    async deleteUser(){
        try {
            let user = await userModel.findByIdAndDelete( {id} )
           if(!user) throw new Error( `The provided ID doesn't match any registered IDs, couldn't delete` )
            return user
        } catch (error) {
            return error
        }
    },
    async createOneUser( data ){
        try {
            let user = await userModel.create( data )
            if(!user) throw new Error( `User couldn't be created` )
            return user
        } catch (error) {
            return error
        }
    },
    */
   async getAllUsers() {
    return await userModel.find()

   },

   async getOneUserById(id) {

    return await userModel.findById({ _id: id })
   },

    async getByEmail (data) {
        return await userModel.findOne({ email: data.email })
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