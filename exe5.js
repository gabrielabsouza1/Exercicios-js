// você tem uma lista de pessoas que entraram numa festa 
// essa lista contem homens e mulheres 
// implemente uma função que recebe uma lista de pessoas como argumento e  retorne um objeto com os homens separado das mulheres
// abaixo você tem um exemplo do tipo de  objeto que sua função de retornar

// const ObjetoHomensEMulheres = {
//   homens : [
//     {nome : 'Carlos', genero:'h'},
//     {nome : 'Gabriel', genero:'h'},
//     {nome : 'Henrique', genero:'h'},
//   ],
//   mulheres: [
//     {nome : 'Carlos', genero:'m'},
//     {nome : 'Gabriel', genero:'m'},
//     {nome : 'Henrique', genero:'m'},
//   ]
// }

listaDePessoas = [
  {nome : 'Carlos', genero:'h'},
  {nome : 'Gabriel', genero:'h'},
  {nome : 'Henrique', genero:'h'},
  {nome : 'bia', genero:'m'},
  {nome : 'maria', genero:'m'},
  {nome : 'gabi', genero:'m'},
  {nome : 'jose', genero:'h'}
]


// essa função deve retornar um objeto com os homens separado das mulheres
// function pessoasSeparadasPorGenero(listaDePessoas){

//   let separandoHomens = listaDePessoas.slice (0, 3);
//   let separandoMulheres = listaDePessoas.slice (3, 6);
  
//   generosSeparados = [separandoHomens, separandoMulheres]
//   return generosSeparados
// }

function pessoasSeparadasPorGenero(listaDePessoas){
  const separandoHomens = listaDePessoas.filter(pessoa => pessoa.genero == 'h')
  const separandoMulheres = listaDePessoas.filter(pessoa => pessoa.genero == 'm')
  
  generosSeparados = [separandoHomens, separandoMulheres]
  return generosSeparados
}



console.log(
  pessoasSeparadasPorGenero(listaDePessoas)
)

