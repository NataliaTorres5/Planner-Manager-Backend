import joi from "joi";

const objectIDpattern = /^[0-9a-fA-F]{24}$/;

const commentSchema = joi.object({
    user: joi.string().required(),
    title: joi.string().required(),
    text: joi.string().required(),
    proyects: joi.string().required(),

}).messages({
    "string.alphanum": "{#label} field can only contain alphanumeric characters.",
    "any.required": "{#label} is required.",
    }) 
    

export default commentSchema