// implemente a função alunosAprovados
// essa função recebe uma lista de alunos com o nome e a suas 3 notas na disciplina de programação
// a nota final é a média aritmética das 3 notas obtidas
// para um aluno ser aprovado sua nota final deve ser maior ou igual a 6
// essa função deve retornar uma lista com todos os alunos aprovados na disciplina e sua respectiva nota final

const notasAlunos = [
    {nome:'henrique', notas : [5, 7, 9.2] },
    {nome:'Bia', notas : [10, 6, 1]}, 
    {nome:'Roberto', notas : [4, 3.7, 5.5]},
    {nome:'Gabriel', notas:[8, 4, 9]},
    {nome:'Maicon', notas:[8, 5.5, 4.2]},
    {nome:'Geromel', notas:[6.3, 2.2, 3.8]},
    {nome:'Franciely', notas:[3.5, 6.3, 8.3]}
  ]
 
  function somaNotas(notasAlunos){
    var total = []
    for (var x = 0; x < notasAlunos.length; x++){
      total.push(notasAlunos[x].notas.reduce((total, currentElement) => (total + currentElement)))
    }
    return total 
  }
  //retornando array com as medias
  const somaDasNotas = somaNotas(notasAlunos) 

  function alunosAprovados(somaDasNotas){
    var aprovados = [];
      for (var x = 0; x < somaDasNotas.length; x++){
        var medias = Math.round(somaDasNotas[x] / 3)
        if (medias >= 6){
          aprovados.push(notasAlunos[x].nome + ' foi aprovado com nota ' + medias) 
        }
      }
      return aprovados
  }

console.log(
  alunosAprovados(somaDasNotas)
)
