import Joi from "joi";

const signUpSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    role: Joi.string().valid('admin', 'user', 'instructor').default('user'),
}).messages({
    'any.required': '{#label} is required.',
    'string.empty': `{#label} cannot be empty.`,
    'string.pattern.base': '{#label} must contain a valid ID.',
    'any.only': 'Role can only be one of the following: admin, user, instructor.',
    'string.email': 'Email must contain a valid address.',
})

export default signUpSchema