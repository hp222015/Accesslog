import Joi from '@hapi/joi';

export const newNotesValidator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(4).required(),
    description: Joi.string().min(4).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
