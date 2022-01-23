//Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

var prompt = require("prompt-sync")();

total_dias = +prompt("Digite o total de dias vividos: ");

anos = parseInt(total_dias / 365);
resto_dias_anos = parseInt(total_dias % 365);
meses = parseInt(resto_dias_anos / 30);
dias = parseInt(resto_dias_anos % 30);

console.log(`Sua idade em anos é ${anos}, sua idade em meses é ${meses} e em dias ${dias}`);