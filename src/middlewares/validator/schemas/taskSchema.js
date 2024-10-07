import joi from "joi";


const taskSchema = joi
  .object({
    date: joi.date(),
    title: joi.string().required(),
    text: joi.string().required(),
    status: joi.string(),
    user: joi.string().required(),
    proyects: joi.string().required(),
    priority: joi.string()
  })
  .messages({
    "string.alphanum":
      "{#label} field can only contain alphanumeric characters.",
    "any.required": "{#label} is required.",
  });
//se usa object porque del body se saca un objeto
export default taskSchema;
