//implemente a função temMenorDeIdade que recebe uma lista como argumento
// e deve retornar true se tiver alguem menor de idade na lista 
//ou false se não tiver alguem menor de idade na lista 

const listaDePessoas = [
  {nome : 'vitoria', idade:27},
  {nome : 'bia', idade:18},
  {nome : 'henrique', idade:21},
  {nome : 'gabriel', idade:22},
  {nome : 'joão', idade:23},
  {nome : 'giovana', idade:21},
  {nome : 'marcelo', idade:20}
]


// deve retornar o numero de pessoas maior de idade
//function temMenorDeIdade(listaDePessoas){

//}

// const numeroDePessoasMenorDeIdade = listaDePessoas.filter((user) => user.idade < 18);

// function temMenorDeIdade () {
//   if (numeroDePessoasMenorDeIdade.length !== 0) {
//   return true
//   } else {
//   return false;
//   }
// }

// ==================

function temMenorDeIdade(lista){
  return lista.some((user) => user.idade < 18)
}


console.log(
  temMenorDeIdade(listaDePessoas)
)