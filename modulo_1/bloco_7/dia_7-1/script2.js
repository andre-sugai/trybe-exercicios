const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const organizaNumeros = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
};

const numeros = organizaNumeros();

console.log(oddsAndEvens); // será necessário alterar essa linha 😉
console.log(`Os números ${numeros} se encontram ordenados de forma crescente!`);