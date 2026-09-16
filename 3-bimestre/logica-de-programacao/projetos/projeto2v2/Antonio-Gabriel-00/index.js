const cliente = "Otávio Nunes"
const produtoNatural = "Vitamina C Natural"
const preco = 8
const quantidade = 5
const estoque = 15
const valorPago = 20
const subtotal = preco * quantidade
let estoqueDisponivel
let descontoStatus
let valorDesconto
let valorFinal
let pagamentoStatus
let troco
let statusVenda
if (quantidade <= estoque) {
    estoqueDisponivel = "Estoque suficiente"
} else {
    estoqueDisponivel = "Estoque insuficiente"
}
if (subtotal >= 100) {
    descontoStatus = "Desconto aplicado"
    valorDesconto = 20
} else {
    descontoStatus = "Sem desconto"
    valorDesconto = 0
}
if (subtotal >= 100) {
    valorFinal = subtotal - valorDesconto
} else {
    valorFinal = subtotal
}
if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}
if (pagamentoStatus == "Pagamento aprovado") {
    troco = valorPago - valorFinal
} else {
    troco = 0
}
if (estoqueDisponivel == "Estoque insuficiente") {
    statusVenda = "Venda não pode ser confirmada por falta de estoque"
} else if (pagamentoStatus == "Pagamento insuficiente") {
    statusVenda = "Venda pendente de pagamento"
} else {
    statusVenda = "Venda confirmada"
}
const resumo = (`Nome do cliente = ${cliente}

Produto vendido = ${produtoNatural}

Preço = ${preco}

Quantidade = ${quantidade}

Estoque = ${estoqueDisponivel}

Desconto = ${descontoStatus}

Valor final = ${valorFinal}

Aprovação do pagamento = ${pagamentoStatus}

Troco = ${troco}

Confirmação da venda = ${statusVenda}`)


console.log(resumo)


module.exports = {
    cliente,
    produtoNatural,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusVenda,
    resumo
}




