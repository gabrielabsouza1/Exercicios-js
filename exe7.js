// implemente a função ordenaLista que recebe um array como argumento e ordena ela
// em ordem ascendente
// exemplo: recebe o array [3,2,1] --> deve retornar o array ordenado [1,2,3]
// exemplo: recebe o array [2,3,1,2,3] --> deve retornar o array ordenado [1,2,2,3,3]

function ordenaLista(array){
return array.sort(function(a, b) {
    return a - b;
  });
}

console.log(
    ordenaLista([3,2,1]),
    ordenaLista([2,3,1,2,3]),
    ordenaLista([1,2,3,4,13,7,8,3,1,43,6,]),
    ordenaLista([2,3,1,4,10,2.3,1.2,11,2.4,99]),
    ordenaLista([1,0,-1,-2,-3,-10,0,1,2,2]),
)

