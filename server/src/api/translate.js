const express = require('express');
const fetch = require('node-fetch');
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

const dictionarySchema = Joi.object({
    word: Joi.string().alphanum().required(),
    rusWord: Joi.string().required(),
})

// translateString('Hello', 'English', 'Hindi');

router.post('/', authenticateToken, async (req, res, next) => {
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

router.post('/define', authenticateToken, async (req, res, next) => {
    const { word, rusWord } = req.body
    try {
        const lang = "en_US"
        const langTo = "ru"
        await dictionarySchema.validateAsync({ word, rusWord });
        let url = "https://api.dictionaryapi.dev/api/v2/entries/" + lang + "/" + word;

        let settings = { method: "Get" };
        //store phonetics and definitions (phonetics are in article language meaning is in native language)
        const phonetics = [];
        const rusPhonetics = [];

        await fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                for (let i = 0; i < json[0].phonetics.length; i++) {
                    phonetics.push([json[0].phonetics[i].text, json[0].phonetics[i].audio])
                }
            });

        let url2 = encodeURI("https://api.dictionaryapi.dev/api/v2/entries/" + langTo + "/" + rusWord);

        await fetch(url2, settings)
            .then(res => res.json())
            .then((json) => {
                for (let i = 0; i < json[0].meanings.length; i++) {
                    rusPhonetics.push([json[0].meanings[i].partOfSpeech, json[0].meanings[i].definitions[0].definition]);
                }
            });

            
        res.json({ orginal: word, russian: rusWord, phonetics, rusPhonetics });

    } catch (error) {
        next(error);
    }
});

module.exports = router;
