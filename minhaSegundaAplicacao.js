//Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.

let espectador = require('./espectador');

let grupoEspectador = require('./grupoEspectador');

// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

// a média das idades das pessoas que responderam ótimo;
espectador.mediaIdadeOpiniao(grupoEspectador, 3);

// a quantidade de pessoas que responderam regular;
espectador.qtdPessoas(grupoEspectador, 1);

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
espectador.porcentagemRespostas(grupoEspectador, 2);