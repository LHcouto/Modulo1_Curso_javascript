//Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.

var prompt = require("prompt-sync")();

var peca1 = +prompt("Digite a primeira peça: ");
var quant1 = +prompt("Digite a quantidade da primeira peça: ");
var valor1 = +prompt("Digite o valor da primeira peça: ");

var peca2 = +prompt("Digite a seungda peça: ");
var quant2 = +prompt("Digite a quantidade da segunda peça: ");
var valor2 = +prompt("Digite o valor da segunda peça: ");

var valortotal = quant1 * valor1 + quant2 * valor2;
console.log(`o valor total a ser pago é ${valortotal}`);
