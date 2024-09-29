import joi from "joi";

const objectIdpattern = /^[0-9a-fA-F]{24}$/;
const taskSchema = joi
  .object({
    date: joi.date().required(),
    title: joi.string().required(),
    text: joi.string().required(),
    user: joi.string().required(),
    proyects: joi.string().pattern(objectIdpattern).required(),
  })
  .messages({
    "string.alphanum":
      "{#label} field can only contain alphanumeric characters.",
    "any.required": "{#label} is required.",
  });
//se usa object porque del body se saca un objeto
export default taskSchema;
