function alterar(titulo){
    document.getElementById("title").innerHTML  = titulo;
    document.getElementById("nome").value = titulo;
}

alterar("Alterar os dois campos");


function somar(x,y){
    let total = x+y;

    return total;
}

var resultado = somar(10,20);
console.log(resultado);




