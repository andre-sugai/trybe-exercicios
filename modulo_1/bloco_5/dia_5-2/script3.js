// item 1
const pai = document.getElementById("pai");
const irmao = document.createElement("section");
irmao.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmao);

// item 2
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filho = document.createElement("section");
filho.id = "filhoDeElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filho);

// item 3
const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const segundoFilhoDoFilho = document.createElement("section");
segundoFilhoDoFilho.id = "segundoFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(segundoFilhoDoFilho);

//item 4
const terceiroFilho = segundoFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);