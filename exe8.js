// Você é dono de uma Seguradora de Carros e recebe uma lista de pessoas contendo o nome e idade
// voce deve clasificar o tipo  de seguro atravez da idade da pessoa 

// pessoas com idade entre 21 anos e 30 tem o tipo de seguro C

// pessoas com idade entre 31 anos e 59 tem o tipo de seguro B

// pessoas com idade entre 60 anos e 80 tem o tipo de seguro A

// sua função deve retornar  a lista de pessoas, mas agora cada pessoa deve conter um propriedade a mais chamada tipoDeSeguro 
// que contem a classificação do tipo de seguro 

// Abaixo está o exemplo do retorno da função  
// [
//   {nome:'henrique', idade :33 , tipoDeSeguro: 'B' },
//   {nome:'Bia', idade :21 , tipoDeSeguro: 'C' },
//   {nome:'Roberto', idade :60 , tipoDeSeguro: 'A' },
//   {nome:'Rodolfo', idade :33 , tipoDeSeguro: 'B' },
//   {nome:'Maicon', idade :22 , tipoDeSeguro: 'C' }
// ]

var listaDePessoas = [
  {nome:'henrique', idade :33 },
  {nome:'Bia', idade :21 },
  {nome:'Roberto', idade :60 },
  {nome:'Rodolfo', idade :33 },
  {nome:'Maicon', idade :22 }
]
// const listaDeSeguroC = {tipoDeSeguro: 'C'}
// const listaDeSeguroB = {tipoDeSeguro: 'B'}
// const listaDeSeguroA = {tipoDeSeguro: 'A'}

// //funçao para separar pessoas tipo C
// function separarPessoasTipoC(listaDePessoas){
//   return listaDePessoas.filter(listaDePessoas => listaDePessoas.idade >= 21 && listaDePessoas.idade <= 30);
// }
// const classeTipoC = separarPessoasTipoC(listaDePessoas);

// //funçao para separar pessoas tipo B
// function separarPessoasTipoB(listaDePessoas){
//   return listaDePessoas.filter(listaDePessoas => listaDePessoas.idade >= 31 && listaDePessoas.idade <= 59);
// }
// const classeTipoB = separarPessoasTipoB(listaDePessoas);


// //funçao para separar pessoas tipo A
// function separarPessoasTipoA(listaDePessoas){
//   return listaDePessoas.filter(listaDePessoas => listaDePessoas.idade >= 60 && listaDePessoas.idade <= 80);
// }
// const classeTipoA = separarPessoasTipoA(listaDePessoas);


// //função que adiciona a classe
// function adicionaClasificacaoDoTipoDeSeguro(listaDePessoas){
//   var listaPessoas = []
//   for (var i=0; i < classeTipoC.length; i++) {
//     listaPessoas.push(Object.assign(classeTipoC[i], listaDeSeguroC))
//   }
//   for (var i=0; i < classeTipoB.length; i++) {
//     listaPessoas.push(Object.assign(classeTipoB[i], listaDeSeguroB))
//   }
//   for (var i=0; i < classeTipoA.length; i++) {
//     listaPessoas.push(Object.assign(classeTipoA[i], listaDeSeguroA))
//   }
//   return listaPessoas
// }


//====================================

function adicionaClasificacaoDoTipoDeSeguro(listaDePessoas){
  listaDePessoas.forEach(pessoa => {
    if(pessoa.idade >= 60 && pessoa.idade <= 80){
      pessoa.tipoDeSeguro = 'A'
    }
    if(pessoa.idade >= 31 && pessoa.idade <= 59){
      pessoa.tipoDeSeguro = 'B'
    }
    if(pessoa.idade >= 21 && pessoa.idade <= 30){
      pessoa.tipoDeSeguro = 'C'
    }

  });

  return listaDePessoas
}


console.log(adicionaClasificacaoDoTipoDeSeguro(listaDePessoas))
