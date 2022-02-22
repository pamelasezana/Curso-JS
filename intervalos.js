//funcoes de controle, começar e parar

let timer;
function start(){
     timer = setInterval(showTime, 1000);
}

function stop(){
    clearInterval(timer);
}

// funcao exibe o tempo
function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt= h + ":" + m + ":" + s;

    document.querySelector('.demo').innerHTML = txt;
}
    


