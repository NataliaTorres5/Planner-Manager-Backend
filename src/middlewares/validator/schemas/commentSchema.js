import joi from "joi";

const objectIDpattern = /^[0-9a-fA-F]{24}$/;

const commentSchema = joi.object({
    user: joi.string().pattern(objectIDpattern).required(),
    title: joi.string().alphanum().required(),
    text: joi.string().alphanum().required(),
    proyects: joi.string().pattern(objectIDpattern).required(),

}).messages({
    "string.alphanum": "{#label} field can only contain alphanumeric characters.",
    "any.required": "{#label} is required.",
    }) 
    

export default commentSchema