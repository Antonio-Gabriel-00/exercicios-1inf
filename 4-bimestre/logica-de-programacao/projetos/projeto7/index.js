
const prompt = require("prompt-sync")()

let limiteEstoqueBaixo = Number(prompt("Digite o limite de estoque baixo: "))
let quantidadeProdutos = Number(prompt("Digite a quantidade de produtos: "))

let catalogo = []

for (let i = 0; i < quantidadeProdutos; i++) {
    let nome = prompt(`Produto ${i + 1} - nome: `)
    let preco = Number(prompt(`Produto ${i + 1} - preço: `))
    let estoque = Number(prompt(`Produto ${i + 1} - estoque: `))

    catalogo.push({
        nome: nome,
        preco: preco,
        estoque: estoque
    })
}

console.log("Catálogo:")

for (let i = 0; i < catalogo.length; i++) {
    console.log(`${i + 1}. ${catalogo[i].nome} - preço ${catalogo[i].preco} - estoque ${catalogo[i].estoque}`)
}

console.log(`Limite de estoque baixo: ${limiteEstoqueBaixo}`)
let produtoMaisCaro = catalogo[0]

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].preco > produtoMaisCaro.preco) {
        produtoMaisCaro = catalogo[i]
    }
}

produtoMaisCaro = produtoMaisCaro.nome

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal += catalogo[i].estoque
}


let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}
let nomeReajuste = prompt("Reajuste - nome do produto: ")
let aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeReajuste) {
        catalogo[i].preco += aumento
    }
}
let resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log(resumo)

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}
