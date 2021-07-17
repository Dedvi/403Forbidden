const express = require('express');
const translate = require("translate");
const Joi = require('joi');
const {authenticateToken} = require('../middlewares');

const router = express.Router();

translate.engine = "libre";
translate.url = "https://libretranslate.de/translate";

// Create Validation Schema
const transationSchema = Joi.object({
    text: Joi.string().alphanum().required(),
    from: Joi.string().alphanum().required(),
    to: Joi.string().alphanum().required(),
})

// translateString('Hello', 'English', 'Hindi');

router.get('/', authenticateToken, async (req, res, next) => {
    const {text, from, to} = req.body
    try {
        await transationSchema.validateAsync({text, from, to});
        const translated = await translate(text, {from, to});
        res.json({
            orginal: text,
            translated,
            from, 
            to
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
