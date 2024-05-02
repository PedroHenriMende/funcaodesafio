/*
Nome: Pedro Henrique Mendes de Jesus
*/
console.clear();
const teclado = require(`prompt-sync`)();

let d: number = parseInt(teclado(`Digite o Dia: `));
let m: number = parseInt(teclado(`Digite o Mês: `));
let a: number = parseInt(teclado(`Digite o Ano: `));


function dataA(): void{
    const data = new Date();
    let dia: number = data.getDate();
    let mes: number = data.getMonth();
    let ano: number = data.getFullYear();

    if(dia == d && mes == m + 1 && ano == a){
        console.log(`Hoje é ${d}/${m}/${a}`);
    }
    else if(dia != d && mes == m++ && ano == a){
        console.log(`O dia não está atual ${d}/${m}/${a}`);
    }
    else if(dia == d && mes != m++ && ano == a){
        console.log(`O Mês não está atual ${d}/${m}/${a}`);
    }
    else if(dia == d && mes == m++  && ano != a){
        console.log(`O Ano não está atual ${d}/${m}/${a}`);
    }else if(dia != d && mes != m++  && ano != a){
        console.log(`Nada Atual`);
    }

}
function dataCorreta(): void{
    if(d >= 1 && d <= 31){
    console.log(`Dia é Válido`);
    }
    else{
        console.log(`Dia Inválido`);
    }
    if(m >= 1 && m <= 12){
        console.log(`Mês é Válido`);
    }
    else{
        console.log(`Mês é Inválido`);
    }
    if(a >= 1980 && m <= 2024){
        console.log(`Ano é Válido`);
    }
    else{
        console.log(`Ano é inválido`);
    }
}
dataA();
dataCorreta();
