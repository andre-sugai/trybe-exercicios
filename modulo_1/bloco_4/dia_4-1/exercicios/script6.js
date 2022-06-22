const xadrez = 'ReI';

switch (xadrez.toLowerCase()){
case 'peão':
    console.log("Uma ou duas casas para frente");
    break;
case 'cavalo':
    console.log("Em L");
    break;
case 'bispo':
    console.log('Em diagonal');
    break;
case 'torre':
    console.log('Em linha reta');
    break;
case 'rei':
    console.log('Uma casa em qualquer direção');
    break;
case 'rainha':
    console.log('Em todas as direções');
    break;
default:
    console.log('Não encontramos essa peça')
}

