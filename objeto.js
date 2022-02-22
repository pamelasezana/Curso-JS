let carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    ano: '2018',
    cor: 'Preto',
    preco: 'R$ 12.000,00',
    portas: 4,
    cambio: 'Manual',
    direcao: 'Traseira',
    combustivel: 'Flex',
    km: '0km',
    litros: '60L',
    vidros: 'Espelhos',
    airbag: 'Sim',
    ligado:false,

    ligar(){
        this.ligado = true;
        console.log("Ligando o " + this.modelo);
        console.log("Vrum vrum");
    },
    acelerar(){
        if (this.ligado==true){
            console.log("Riiiiihhh...");
        }
        else{
            console.log( this.marca + " não está ligado");
        }
     
    }
};
console.log("Modelo: " + carro.modelo);
carro.ligar();
carro.acelerar();