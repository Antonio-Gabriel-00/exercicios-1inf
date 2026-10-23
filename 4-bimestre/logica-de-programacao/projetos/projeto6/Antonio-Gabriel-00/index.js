const prompt = require("prompt-sync")()
let quantidadeDeDias = Number(prompt("Digite a quantidade de dias que serão registrados:"))
let metaDiaria = Number(prompt ("Digite a meta de vendas diarias:"))
let metaSemanal = Number(prompt("Digite a meta de vendas semanais:"))
let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0





for (let i = 1; i <= quantidadeDeDias; i++){
    const venda = Number(prompt(`Digite a venda do dia ${i}`))

    totalVendido = totalVendido + venda

    if (venda >= metaDiaria){
        diasAcimaDaMeta++
    }
    if (venda >melhorDia){
        melhorDia = venda
    }
}



const mediaVendas = totalVendido / quantidadeDeDias

const situacaoSemana = totalVendido >= metaSemanal ? "Meta semanal atingida" : "Meta semanal não atingida"

const resumo = `Total vendido: ${totalVendido}
    Meta diaria: ${metaDiaria}
    Quantidade de dias que foram acima da media: ${diasAcimaDaMeta}
    melhor dia de vendas: ${melhorDia}
    media das vendas: ${mediaVendas}
    Situação FINAL da semana: ${situacaoSemana}`

    console.log (resumo)



module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}
