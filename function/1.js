function multiplicarTresNumeros(x,y,z){
    return x*y*z;
}
console.log(multiplicarTresNumeros(2, 3, 4))

const mult = multiplicarTresNumeros(5, 4 ,8)

console.log(mult);

function podeDirigir(idade, cnh){
if(idade >= 18 && cnh == true)
    console.log('pode dirigir');
else{
    console.log('nao pode dirigir')
    }
}

podeDirigir(18,0);
