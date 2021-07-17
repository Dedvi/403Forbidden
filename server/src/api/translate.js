const translate = require("translate");

translate.engine = "libre";
translate.url = "https://libretranslate.de/translate";

async function translateString(string, fromLanguage, toLanguage){
    try {
        const translated = await translate(string, {from: fromLanguage, to: toLanguage});
        console.log(translated);
        return translated;
    } catch (error) {
        console.error(error);
    }

}

// translateString('Hello', 'English', 'Hindi');