const cliente = "Rafael Torres"
const opcaoMenu = 2
const quantidade = 3
const formaPagamento = "pix"
const statusPedido = "pendente"
let prato = "Aguardando"
let precoUnitario = 0
let pagamentoMensagem = "Aguardando"
let descontoPercentual = 0
let statusMensagem = "aguardando"

switch (opcaoMenu) {
    case 1:
        prato = "Marmita Pequena"
        break
    case 2:
        prato = "Marmita Grande"
        break
    case 3:
        prato = "Suco Natural"
        break
    case 4:
        prato = "Pudim"
    default:
        prato = "Opção inválida"
        break
}
switch (prato) {
    case "Marmita Pequena":
        precoUnitario = 16
        break
    case "Marmita Grande":
        precoUnitario = 22
        break
    case "Suco Natural":
        precoUnitario = 7
        break
    case "Pudim":
        precoUnitario = 9
        break
    default:
        precoUnitario = 0
        break
}
switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartão":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "Dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
    default:
        pagamentoMensagem = "Forma de pagamento inválida"
}
switch (formaPagamento) {
    case "pix":
        descontoPercentual = 15
        break
    case "Dinheiro":
        descontoPercentual = 15
        break
    default:
        descontoPercentual = 0
}
switch (statusPedido) {
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "Aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "Enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "Cancelado":
        statusMensagem = "Pedido cancelado"
    default:
        statusMensagem = "Status desconhecido"
}


const subtotal = precoUnitario * quantidade
let freteStatus = subtotal >= 80 ? "Frete Gratis" : "Frete pago"
const frete = freteStatus == "Frete grátis" ? 0 : 15
const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete
const resumo = `Nome do cliente: ${cliente}
    item: ${prato}
    quantidade: ${quantidade}
    subtotal: ${subtotal}
    situação do frete: ${freteStatus}
    valor do frete: ${frete}
    Desconto: ${desconto}
    total: ${total}
    situação do pedido: ${statusPedido}
    forma de pagamento: ${pagamentoMensagem}
    status mensagem: ${statusMensagem}`
    
console.log(resumo)















module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}




