let dia = 6;
let dianome ="";

switch (dia) {
    case 1:
    dianome="Segunda-feira";
    break;

    case 2:
        dianome="Terça-feira";
        break;
    
    case 3:
        dianome="Quarta-feira";
        break;
    
    case 4:
        dianome="Quinta-feira";
        break;
    
    case 5:
        dianome="Sexta-feira";
        break;
    
    case 6:
        dianome="Sábado";
        break;

    case 7:
        dianome="Domingo";
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: " + dianome;



