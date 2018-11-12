const Joi = require('joi');

const bookSchemaValidator = Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
    pages: Joi.number(),
    readed: Joi.bool(),
    image: Joi.string(),
});

module.exports = bookSchemaValidator;