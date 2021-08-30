// implemente a função numeroDePessoasMaiorDeIdade que recebe uma lista como argumento
// e deve retornar o numero total de pessoas maoir de idade 

const listaDePessoas = [
  {nome : 'gabriel', idade:22},
  {nome : 'bia', idade:18},
  {nome : 'henrique', idade:21},
  {nome : 'joão', idade:10},
  {nome : 'giovana', idade:21},
  {nome : 'marcelo', idade:9},
  {nome : 'vitoria', idade:7}
]

// deve retornar o numero de pessoas maior de idade
//function numeroDePessoasMaiorDeIdade (listaDePessoas){
  //let totalMenoresDeIdade = 0;
//  for (let i = 0; listaDePessoas.length; i++) {
  //    if (listaDePessoas.idade > 18){
    //    totalMenoresDeIdade += 1
      //   }     
  //}  
 // return totalMenoresDeIdade
//}

const numeroDePessoasMaiorDeIdade = listaDePessoas.filter((user) => user.idade >= 18).length;


console.log(
numeroDePessoasMaiorDeIdade
)