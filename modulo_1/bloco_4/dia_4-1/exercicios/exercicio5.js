const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;
let triangulo = angulo1 + angulo2 + angulo3;

if (triangulo == 180){
    console.log (true);
} else if (triangulo < 0){
    console.log('ângulo inválido');
}
else {
    console.log(false);
}