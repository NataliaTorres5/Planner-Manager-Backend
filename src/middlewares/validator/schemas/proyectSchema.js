import joi from "joi";

const proyectSchema = joi
  .object({
    //se usa object porque del body se saca un objeto
    date: joi.date(),
    name: joi.string().required(),
    description: joi.string().required(),
    user: joi.string().required(),
    status: joi.string(),
    priority: joi.string()
  })
  .messages({
    "any.required": "{#label} is required.",
  });

export default proyectSchema;
