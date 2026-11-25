const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))

let totalProduzido = 0

for (let i = 1; i <= dias; i++) {
    let producao = Number(prompt(`Produção do dia ${i}: `))

    totalProduzido = totalProduzido + producao
}

module.exports = totalProduzido