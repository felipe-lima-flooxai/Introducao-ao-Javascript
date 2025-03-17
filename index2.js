//função normal
function calc(n1, n2, operator) {
    return eval(`${n1} ${operator} ${n2}`);
}

let resultado = calc(1, 5, "*");
console.log(resultado);

//função anônima
let resultado2 = function(n1, n2, operator) { return eval(`${n1} ${operator} ${n2}`);}
console.log(resultado2(2, 7, "*"));

//função anônima na hora
(function(x1, x2, operator){
     console.log(eval(`${x1} ${operator} ${x2}`));
})(5, 3, "*");

//arrow function
let calc2 = (x1, x2, operator) => {
    return eval(`${n1} ${operator} ${n2}`);
}
console.log(calc(5, 5, "*"));

//TRABALHANDO COM DOM AGORA
window.addEventListener("focus", event => {
    console.log("Focus")
});

document.addEventListener("click", event => {
    console.log("click");
});

//datas
let agora = new Date();
console.log(agora.toLocaleDateString("pt-br"));

//array
let carros = ["palio 98", 'toro', "uno", 10, true, new Date(), function(){}];

carros.forEach(function(value, index) {
    console.log(index,value);
});

//objetos com function

let celular = function(){
    this.cor = "prata";

    this.ligar = function(){
        console.log("Uma ligação");
        return "ligando";
    } 
};

let objeto = new celular();
console.log(objeto);
console.log(objeto.ligar());

//objetos com class
class celular2 {
    constructor(){
        this.cor = "branco"
    }

    ligar(){
        console.log("Uma ligação");
        return "ligando";
    }
}

let objeto2 = new celular2();
console.log(objeto2);
console.log(objeto2.ligar());