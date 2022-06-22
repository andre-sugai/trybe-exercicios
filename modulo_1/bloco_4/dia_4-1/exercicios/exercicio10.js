const custo = 100 + 20;
const venda = 150;

const lucro = venda - custo;
console.log(lucro);

if (custo < 0 || venda < 0){
    console.log('Valor abaixo de zero');
}