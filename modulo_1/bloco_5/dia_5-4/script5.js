window.onload = function() {
 let seletor = document.getElementById('corDeFundo');
 let paragrafo = document.querySelector('p');
 let h2 = document.querySelector('h2');
 let corDaFonte = document.getElementById('corDaFonte');
 let inputFontSize = document.querySelector('input[name="font-size"]');
 let inputLineHeight = document.querySelector('input[name="line-height"]');
 let fonte = document.getElementById('escolhaFonte');
 

function corDeFundo (){
seletor.selectedOptions[0];
document.body.style.backgroundColor = seletor.value;

localStorage.setItem('cor', seletor.value);
}

function mudarCorDaFonte (){
 corDaFonte.selectedOptions[0];
 paragrafo.style.color = corDaFonte.value;
 h2.style.color = corDaFonte.value;
    
 localStorage.setItem('corDaFonte', corDaFonte.value);
}

function tamanhoFonte (){
  paragrafo.style.fontSize = `${inputFontSize.value}px`;

  localStorage.setItem('fonte', `${inputFontSize.value}px`);
}

function espacoEntreLinhas (){
  paragrafo.style.lineHeight = `${inputLineHeight.value}px`;

  localStorage.setItem('espacoEntreLinhas', `${inputLineHeight.value}px`);
}

function selecionarFonte (){
  fonte.selectedOptions[0];
  paragrafo.style.fontFamily = fonte.value;
  h2.style.fontFamily = fonte.value;

 localStorage.setItem('fontesSalvas', fonte.value)
}

 inputFontSize.addEventListener('change', tamanhoFonte);
 seletor.addEventListener('change', corDeFundo);
 corDaFonte.addEventListener('change', mudarCorDaFonte);
 inputLineHeight.addEventListener('change', espacoEntreLinhas)
 fonte.addEventListener('change', selecionarFonte)

 let infos = localStorage.getItem('cor');
 document.body.style.backgroundColor = infos;

 let corDaFonteSalva = localStorage.getItem('corDaFonte');
 paragrafo.style.color = corDaFonteSalva;
 h2.style.color = corDaFonteSalva;

 let espacoEntreLinhasSalva = localStorage.getItem('espacoEntreLinhas');
 paragrafo.style.lineHeight = espacoEntreLinhasSalva;

 let fontesSalvas = localStorage.getItem('fontesSalvas');
 paragrafo.style.fontFamily = fontesSalvas;
 h2.style.fontFamily = fontesSalvas;

}



