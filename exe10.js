// implemente a função FG
// essa função recebe uma string como argumento e checa se ela contém a mesma quantidade das letras "f" e "g"
// essa função deve ser invariante a letra maísculas e minúsculas
// essa função deve retornar um booleano true ou false

// exemplo: FG("ffgg")  --> retorna true
// exemplo: FG("fFgG")  --> retorna true
// exemplo: FG("fgFgFfgG")  --> retorna false

function FG(string){
    var achandoF = string.toUpperCase().split("F").length ;
    var achandoG = string.toUpperCase().split("G").length ;

    return achandoF == achandoG
}

console.log(FG("FFGg"))

