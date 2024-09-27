import Joi from "joi";

const signUpSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().valid('admin', 'user', 'instructor').default('user'),
}).messages({
    "string.alphanum": "{#label} field can only contain alphanumeric characters.",
    }) 
    

export default signUpSchema