let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
}

function clickHandler(){
    let inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        console.log(json.contents.translated);
        })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler); 