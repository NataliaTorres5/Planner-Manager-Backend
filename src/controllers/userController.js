import userServices from '../services/userServices.js'
    import userModel from '../models/userModel.js'
    import bcrypt from 'bcrypt'


const userController = {
        async getAllUsers(req, res) {
        try {
            let allUsers = await userServices.getAllUsers()
            res.status(200).json({allUsers})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByID(req, res) {
        try {
            let user = await userServices.getOneUserByID( req.params.id )
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    
    async getOneUserByName(req, res) {
        try {
            
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async updateUser(req, res) {
        try {
            let updatedUser = await userServices.updateUser({_id:req.params.id}, req.body, {new:true})
            res.status(200).json({updatedUser})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async deleteUser(req, res) {
        try {
           let user = await userServices.deleteUser( req.params.id)
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async createOneUser(req, res) {
        try {
            let user = await userServices.createOneUser( req.body )
            res.status(201).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async signInUser( req, res ){
        try {
            const data=req.body
            const  emailInUse = await userServices.findOne({email: data.email})
            let user = await userModel.findOne( { email:req.body.email } )
            if(!user) throw new Error(`Email isn't registed`)
            user.logged = true
            res.status()
            res.status(200).json( {message: 'Log in successful', user} )
        } catch (error) {
            res.status(400).json({error})
        }
    },

    async signUpUser( req, res ){
       
        try {
            const data = req.body
            const emailInUse = await userServices.findOne({email: data.email})
            if (emailInUse) throw new Error ("Email already exists")

                bcrypt.hashSync(data.password, 10)

                const passwordHash = bcrypt.hashSync(data.password, 10)

                data.password = passwordHash

                const newUser = await userServices.createOneUser( data )

                res.status(201).json( {message: 'Sign up successful', newUser} )
        } catch (error) {
            
        }
    },
    async LogOutUser(req, res){
        try {
            let user = await userModel.findOne( { email:req.body.email } )
            user.logged = false
            res.status(200).json( 'Log out successful' )
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default userController