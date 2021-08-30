// implemente a função somaDoisMenoresNumeros
// essa função recebe um array como argumento
// ela deve retornar a soma dos dois menores números positivos
// exemplo [-2,3,5,6,10] --> retorna 8, pois 3 e 5 são os menores positivos contidos no array



function somaDoisMenoresNumeros(numeros){
    let valoresPositivos = numeros.filter(nr => nr > 0);
    valoresPositivos.sort(function(a, b) {
        return a - b;
      });
    return valoresPositivos[0] + valoresPositivos[1];
}


console.log(
    somaDoisMenoresNumeros([-1,2,5,8,10,200,-2,5,2]), //deve retornar 4
    somaDoisMenoresNumeros([19, 5, 42, 2, 77]), //deve retornar 7
    somaDoisMenoresNumeros([10, 343445353, 3453445, 3453545353453]) // deve retornar 3453455
)