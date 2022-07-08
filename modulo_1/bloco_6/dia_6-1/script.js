// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function evitarComportamento (event){
event.preventDefault();
}

function letras (event){
    const letra = event.key;
    if (letra !== 'a'){
        event.preventDefault();
    }
    }

HREF_LINK.addEventListener('click', evitarComportamento);

INPUT_CHECKBOX.addEventListener('click', evitarComportamento);

INPUT_TEXT.addEventListener('keypress', letras);