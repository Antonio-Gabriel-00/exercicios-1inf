const prompt = require("prompt-sync")()

const meta = Number(prompt("Meta de caixas: "))

let caixas = 0

while (caixas <meta){
    caixas++
}
console.log (`A meta era ${meta} e a quantidade de caixas produzidas foram: ${caixas}`)

module.exports = caixas