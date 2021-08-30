// Implemente a uma função  par_impar  que 
//recebe um inteiro como argumento e retorna "Par" para números pares ou "Ímpar" para números ímpares.

function  par_impar(number){
  if (number % 2 == 0) {
    return ("Par");
} else {
    return ("Impar");
}
}

console.log(par_impar(1))
