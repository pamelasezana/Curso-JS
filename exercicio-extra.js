function mudar(value){
    let android = document.getElementById('android');
    let iphone = document.getElementById('iphone');
    let windows= document.getElementById('windows');
    let botao1 = document.getElementById('botao1');
    let botao2 = document.getElementById('botao2');
    let botao3 = document.getElementById('botao3');
    let botao4 = document.getElementById('botao4');
   
    switch(value){
        case 1:
            this.android.classList.remove('div-none');
            this.iphone.classList.add('div-none');
            this.windows.classList.add('div-none');
            this.linux.classList.add('div-none');
            this.botao1.classList.add('area-ativa');
            this.botao2.classList.remove('area-ativa');
            this.botao3.classList.remove('area-ativa');
            this.botao4.classList.remove('area-ativa');
          
        break;
        case 2:
            this.android.classList.add('div-none');
            this.windows.classList.add('div-none');
            this.linux.classList.add('div-none');
            this.iphone.classList.remove('div-none');
            this.botao1.classList.remove('area-ativa');
            this.botao2.classList.add('area-ativa');
            this.botao3.classList.remove('area-ativa');
            this.botao4.classList.remove('area-ativa');
           
        break;
        case 3:
            this.windows.classList.remove('div-none');
            this.android.classList.add('div-none');
            this.iphone.classList.add('div-none');
            this.linux.classList.add('div-none');
            this.botao1.classList.remove('area-ativa');
            this.botao2.classList.remove('area-ativa');
            this.botao3.classList.add('area-ativa');
            this.botao4.classList.remove('area-ativa');
            break;

        case 4:
            this.linux.classList.remove('div-none');
            this.android.classList.add('div-none');
            this.iphone.classList.add('div-none');
            this.windows.classList.add('div-none');
            this.botao1.classList.remove('area-ativa');
            this.botao2.classList.remove('area-ativa');
            this.botao3.classList.remove('area-ativa');
            this.botao4.classList.add('area-ativa');
            break;
    }
}