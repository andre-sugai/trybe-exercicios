console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'André'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('lastname', 'Sugai'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem('firstname')); // retorna o valor 'André'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0