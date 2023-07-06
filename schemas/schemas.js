const Joi = require("joi");

const addSchema = Joi.object().keys({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).email().required(),
  phone: Joi.string().min(10).required(),
});
module.exports = addSchema;
