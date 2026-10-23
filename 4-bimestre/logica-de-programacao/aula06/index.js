const prompt = require("prompt-sync")()

const turnos = Number(prompt("Quantos turnos serão registrados:"))
let turnosAcimaDaMeta = 0
for (let i = 1; i<= turnos; i++){
    let producao = Number(prompt(`Quantidade de peças:${i}`))
    if (producao >15 ){
        turnosAcimaDaMeta++
    }
}

module.exports = turnosAcimaDaMeta