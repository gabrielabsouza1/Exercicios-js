

// Nathan adora andar de bicicleta.

// Nathan sabe que é importante se manter hidratado, ele bebe 0,5 litro de água por hora de ciclismo.

// Você obtém o tempo em horas e precisa retornar o número de litros que Nathan beberá, arredondado para o menor valor.

//  Implemente a função calculaLitros que retorna o valor que Nathan bebeu dado o tempo

// Exemplo: tempo = 3 --> 1 litro
// tempo = 6.7 --> 3 litros
// tempo = 11.8 --> 5 litros

function calculaLitros(tempo){
    var litro = 0.5;
    var litroPorTempo = tempo * litro

    return Math.floor(litroPorTempo)
}

console.log(
    calculaLitros(3),
    calculaLitros(5),
    calculaLitros(11.8),
    calculaLitros(10.1),
    calculaLitros(22),
)