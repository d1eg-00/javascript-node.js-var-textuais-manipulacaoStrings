const utils = require("./codigo.js");
const prompt = require("prompt-sync")();

let placa = prompt("Digite a placa do seu veículo: ");

utils.validacaoPlaca(placa)

let data = prompt("Digite data no formato DD/MM/AAAA: ");

utils.formatacaoData(data);

let dividendo = Number(prompt("Digite um número para ser o dividendo: "));
let divisor = Number(prompt("Digite outro número para ser o divisor: ")) ;
    
utils.validacaoDivisao(dividendo, divisor);
utils.lerPessoas();








