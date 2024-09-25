import joi from "joi";

const proyectSchema = joi.object ({  //se usa object porque del body se saca un objeto  
    date: joi.date().required(),
 name: joi.string().alphanum().required(),
description: joi.string().alphanum().required(),
user: joi.string().pattern(objectIDPattern).required(),
}).messages({
"string.alphanum": "{#label} field can only contain alphanumeric characters.",
"any.required": "{#label} is required.",
}) 

export default proyectSchema 
