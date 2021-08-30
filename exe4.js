// implemente a função que retorna o número de pessoas dentro do ônibus
// após várias paradas
// você vai receber como argumento um array de arrays somente com números inteiros
// onde o primeiro elemento de cada array é o número de pessoas que ENTRA no ônibus 
// e o segundo elemento de cada array é o número de pessoas que SAI no ônibus 

// exemplo: paradas = [[10,5], [5,2]] --> na primeira parada entraram 10 pessoas e saíram 5. 
// Já na segunda parada entraram 5 e saíram 2 pessoas.


//const paradas = numero_pessoas_onibus();
//const juntandoParadas = paradas.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual), []);


// function numero_pessoas_onibus(paradas){
//     let totalPessoasNoBusao = 0;
//      for (let i=0; i < paradas.length; i++) {
//          const entram = paradas[i][0];
//          const saem = paradas[i][1];
//          totalPessoasNoBusao += entram - saem
//      }
//      return totalPessoasNoBusao
// }

function numero_pessoas_onibus(paradas){
    let totalPessoasNoBusao = 0;
    paradas.forEach((parada) =>{
        const entram = parada[0];
        const saem = parada[1];
        totalPessoasNoBusao += entram - saem
    })
     return totalPessoasNoBusao
}


// const lista = ['a','b','c']

// lista.forEach((letra) => console.log(letra) )

// testes
console.log(numero_pessoas_onibus([[10,5], [5,2]])) //resultado deve ser 3
console.log(numero_pessoas_onibus([[15,10], [5,2], [2,1], [3,2]])) //resultado deve ser 10
console.log(numero_pessoas_onibus([[10,2], [5,2], [2,3], [3,2], [2,6]])) // resultado deve ser 7