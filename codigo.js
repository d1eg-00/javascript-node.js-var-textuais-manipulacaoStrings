const fs = require("fs")

exports.validacaoPlaca = function (placa) {
    try{
        let ultima_posicao = placa[placa.length - 1]
        let ultima_posicao_num = Number(ultima_posicao);

        let date = new Date()
        let dia_semana = date.getDay()

        let carro_invalido_dia = "Seu carro não pode circular hoje"
        let carro_valido_dia = "Seu carro pode circular hoje"

        if(dia_semana === 1) {
            if(ultima_posicao_num === 1 || ultima_posicao_num === 2) {
                return console.log(carro_invalido_dia);
            }
            console.log(carro_valido_dia);
        } else if(dia_semana === 2) {
            if(ultima_posicao_num === 3 || ultima_posicao_num === 4) {
                return console.log(carro_invalido_dia);
            }
            console.log(carro_valido_dia);
        } else if(dia_semana === 3) {
            if(ultima_posicao_num === 5 || ultima_posicao_num === 6) {
                return console.log(carro_invalido_dia);
            }
            console.log(carro_valido_dia);
        } else if(dia_semana === 4) {
            if(ultima_posicao_num === 7 || ultima_posicao_num === 8) {
                return console.log(carro_invalido_dia);
            }
            console.log(carro_valido_dia);
        } else if(dia_semana === 5) {
            if(ultima_posicao_num === 9 || ultima_posicao_num === 0) {
                return console.log(carro_invalido_dia);
            }
            console.log(carro_valido_dia);
        } else {
            console.log("Hoje é fim de semana, pode circular")
        }
        
    }catch(e) {
        console.log(e);
    }
}

exports.formatacaoData = function (data) {
    try{
        let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        let array_data = data.split("/");

        let indice_meses = Number(array_data[1]) - 1
        let mes_extenso = meses[indice_meses]

        array_data[1] = mes_extenso

        let data_formatada = array_data.join(" de ");

        console.log(data_formatada);
        
    }catch(e){
        console.log(e);
    }
    
}

exports.validacaoDivisao = function (dividendo, divisor) {
    
    try {
        if(divisor === 0) {
            throw new Error("O divisor é zero, digite outro!")
        }

        let divisao = dividendo / divisor

        console.log(divisao);
    }catch(e) {
        console.log(e);
    }
}

exports.lerPessoas = function () {
    let arquivo = fs.readFileSync("./pessoas.json", "utf-8")
    let arr = JSON.parse(arquivo);
    console.log(arr);
  
}

