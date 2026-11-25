const prompt = require("prompt-sync")()

const calcularSubtotal = (preco, quantidade) => {
    return preco * quantidade
}

const calcularTotalComFrete = (preco, quantidade, frete) => {
    let subtotal = calcularSubtotal(preco, quantidade)

    return subtotal + frete
}

const preco = Number(prompt("Preço do produto: "))
const quantidade = Number(prompt("Quantidade: "))
const frete = Number(prompt("Valor do frete: "))

const total = calcularTotalComFrete(preco, quantidade, frete)

module.exports = total