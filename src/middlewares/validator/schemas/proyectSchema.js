import joi from "joi";

const proyectSchema = joi
  .object({
    //se usa object porque del body se saca un objeto
    date: joi.date().required(),
    name: joi.string().required(),
    description: joi.string().required(),
    user: joi.string().required(),
  })
  .messages({
    "string.alphanum":
      "{#label} field can only contain alphanumeric characters.",
    "any.required": "{#label} is required.",
  });

export default proyectSchema;
