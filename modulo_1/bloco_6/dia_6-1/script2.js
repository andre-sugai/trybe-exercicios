function cancelar (event){
    event.preventDefault();
}

function apagar() {
    const campos = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < campos.length; index += 1) {
      const input = campos[index];
      input.value = '';
      input.checked = false;
    }
    textArea.value = '';
  }

window.onload = function (){
const btn = document.getElementById('btn');
btn.addEventListener('click', cancelar);
const btnApagar = getElementById('btnApagar');
btnApagar.addEventListener('click', apagar);
}