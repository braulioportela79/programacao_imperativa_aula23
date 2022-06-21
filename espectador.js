let Espectador = function(idade, opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
};

Espectador.mediaIdadeOpiniao = (obj, opi) => {
    let arrayOpiniao = obj.filter(e => e.opiniao == opi);
    let arrayIdades = arrayOpiniao.map(e => e.idade);
    let somaIdades = 0;
    for (let i = 0; i < arrayIdades.length; i++) {
        somaIdades += arrayIdades[i] / arrayIdades.length;
    };
    if (opi == 1) {
        console.log(`A média de idade que responderam regular é ${somaIdades.toFixed(2)}.`);
    } else if (opi == 2) {
        console.log(`A média de idade que responderam bom é ${somaIdades.toFixed(2)}.`);
    } else if (opi == 3) {
        console.log(`A média de idade que responderam ótimo é ${somaIdades.toFixed(2)}.`);
    };
};

Espectador.qtdPessoas = (obj, opi) => {
    let arrayOpiniao = obj.filter(e => e.opiniao == opi);
    if (opi == 1) {
        console.log(`A quantidade de pessoas que responderam regular é de ${arrayOpiniao.length}.`);
    } else if (opi == 2) {
        console.log(`A quantidade de pessoas que responderam bom é de ${arrayOpiniao.length}.`);
    } else if (opi == 3) {
        console.log(`A quantidade de pessoas que responderam ótimo é de ${arrayOpiniao.length}.`);
    };
};

Espectador.porcentagemRespostas = (obj, opi) => {
    let arrayOpiniao = obj.filter(e => e.opiniao == opi);
    let porcentagem = (arrayOpiniao.length / obj.length * 100).toFixed(2)
    if (opi == 1) {
        console.log(`A porcentagem de pessoas que responderam regular foi de ${porcentagem}%.`);
    } else if (opi == 2) {
        console.log(`A porcentagem de pessoas que responderam bom foi de ${porcentagem}%.`);
    } else if (opi == 3) {
        console.log(`A porcentagem de pessoas que responderam ótimo foi de ${porcentagem}%.`);
    };
};

module.exports = Espectador;