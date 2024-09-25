import joi from "joi";

const objectIDpattern = /^[0-9a-fA-F]{24}$/;

const commentSchema = joi.object({
    user: joi.string().pattern(objectIDpattern).required(),
    title: joi.string().alphanum().required(),
    text: joi.string().alphanum().required(),
    proyects: joi.string().pattern(objectIDpattern).required(),

})

export default commentSchema