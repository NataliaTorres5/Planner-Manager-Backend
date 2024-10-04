import joi from "joi";

const commentSchema = joi
.object({
    user: joi.string().required(),
    date: joi.date(),
    text: joi.string().required(),
    proyects: joi.string().required(),

}).messages({
    "string.alphanum": "{#label} field can only contain alphanumeric characters.",
    "any.required": "{#label} is required.",
    }) 
    

export default commentSchema