import joi from "joi";

const proyectSchema = joi.object ({
    date: joi.date().required(),
 name: joi.string().alphanum().required(),
description: joi.string().alphanum().required(),
user: joi.string().pattern(objectIDPattern).required(),
}) //se usa object porque del body se saca un objeto  

export default proyectSchema 
