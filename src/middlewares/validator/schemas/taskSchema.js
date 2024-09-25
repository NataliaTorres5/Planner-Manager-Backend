import joi from "joi";

const taskSchema = joi.object ({
    date: joi.date().required(),
title: joi.string().alphanum().required(),
text: joi.string().alphanum().required(),
user: joi.string().pattern(objectIDPattern).required(),
proyects: joi.string().pattern(objectIDPattern).required(),
}) .messages({
    "string.alphanum": "{#label} field can only contain alphanumeric characters.",
    "any.required": "{#label} is required.",
    }) 
    //se usa object porque del body se saca un objeto  
export default taskSchema