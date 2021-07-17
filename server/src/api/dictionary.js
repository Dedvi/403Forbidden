const express = require('express');
const fetch = require('node-fetch');
const Joi = require('joi');
const { authenticateToken } = require('../middlewares');

const router = express.Router();

// Create Validation Schema
//Format for languages is listed here: https://dictionaryapi.dev/
const dictionarySchema = Joi.object({
    word: Joi.string().alphanum().required(),
    lang: Joi.string().alphanum().required(),
    wordTranslated: Joi.string().alphanum().required(),
    langTo: Joi.string().alphanum().required(),
})



router.get('/', authenticateToken, async (req, res, next) => {
    const { word, lang, wordTranslated, langTo } = req.body
    try {
        await dictionarySchema.validateAsync({ word, lang, wordTranslated, langTo });
        let url = "https://api.dictionaryapi.dev/api/v2/entries/" + lang + "/" + word;

        let settings = { method: "Get" };
        //store phonetics and definitions (phonetics are in article language meaning is in native language)
        const phoen = [];
        const def = [];

        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                for (let i = 0; i < json[0].phonetics.length; i++) {
                    phoen.push([json[0].phonetics[i].text, json[0].phonetics[i].audio])
                }
            });

        let url2 = encodeURI("https://api.dictionaryapi.dev/api/v2/entries/" + langTo + "/" + wordTranslated);

        fetch(url2, settings)
            .then(res => res.json())
            .then((json) => {
                for (let i = 0; i < json[0].meanings.length; i++) {
                    def.push([json[0].meanings[i].partOfSpeech, json[0].meanings[i].definitions[0].definition]);
                }
            });
        res.json({
            orginal: word,
            original: wordTranslated,
            phoen,
            def,
            lang,
            langTo
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;


const lang = "en_US";
const langTo = "ru";
const word = "hello";
const wordTranslated = "Привет"







////////////////////////////////


// translateString('Hello', 'English', 'Hindi');

router.get('/', authenticateToken, async (req, res, next) => {
    const { text, from, to } = req.body
    try {
        await transationSchema.validateAsync({ text, from, to });
        const translated = await translate(text, { from, to });
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
