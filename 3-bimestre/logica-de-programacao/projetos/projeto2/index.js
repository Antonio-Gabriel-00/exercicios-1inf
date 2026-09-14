const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = (preco*quantidade)
let estoqueDisponivel = "aguardando"
const valorDesconto = 10
const descontoPercentual = subtotal*valorDesconto/100
const valorFinal = subtotal-descontoPercentual
const troco = valorPago-valorFinal
let statusPedido = "aguardando"
let pagamentoStatus = "aguardando"

if (quantidade <= estoque) {  
    estoqueDisponivel = "Sim"
     statusPedido = "Pedido disponivel"
} else{
    estoqueDisponivel = "Não"
    statusPedido = "Pedido indisponivel"
}
if (subtotal >= 1000) {
    console.log ( `O desconto será de ${descontoPercentual}`)
} else {
    console.log ("Sua compra não terá desconto")
}
if (subtotal >= 1000) {
    console.log (`O valor final é de ${valorFinal}`)
} else {
    console.log (`O valor final é de ${subtotal}`)
}
if (valorFinal <= valorPago){
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "pagamento insuficiente"
}
if (troco >0) {
    console.log (`seu troco foi de ${troco}`)
}else {
    console.log ("sua compra não teve troco")
}
const resumo = `
Cliente: ${cliente}
Produto: ${produto}
Preço: ${preco}
Quantidade: ${quantidade}
Estoque: ${estoque}
Valor pago: ${valorPago}
Subtotal: ${subtotal}
Valor de Desconto: ${descontoPercentual}
Estoque disponivel: ${estoque}
Valor Final: ${valorFinal}
Valor Pago: ${valorPago}
Troco: ${troco}



${pagamentoStatus}
${statusPedido}`
console.log (resumo)