import joi from "joi";

const taskSchema = joi.object ({

title: joi.string().alphanum().required(),
text: joi.string().alphanum().required(),
user: joi.string().pattern(objectIDPattern).required(),
proyects: joi.string().pattern(objectIDPattern).required(),
}) //se usa object porque del body se saca un objeto  
export default taskSchema