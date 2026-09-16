const nome = "Gabriel Torres"
const idade = 15
const categoria = "comum"
let possuiIngresso = true
let bloqueado = false
const valorIngresso = 32
const valorPago = 32
let idadeStatus 
let nivelAcesso
let acessoStatus
let pagamentoStatus
let troco
let statusSessao


if (idade >= 18){
    idadeStatus = "Idade permitida"
} else { idadeStatus = "Idade não permitida"   
}
if (categoria === "gerente"|| categoria === "supervisor"){
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}
if (idade >= 18 && possuiIngresso === !false && bloqueado == !true) {
    acessoStatus = "Entrada na sala liberada"
} else {
    acessoStatus = "Entrada na sala negada"
}
if (valorPago >= valorIngresso){
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}
if (valorPago >= valorIngresso){
    troco = (valorPago - valorIngresso )
} else {
    troco = 0
}
if (acessoStatus === "Entrada na sala liberada" && pagamentoStatus === "Pagamento aprovado"){
    statusSessao = "Check-in da sessão confirmado"
} else {
    statusSessao = "Check-in da sessão não confirmado"
}

const resumo = (`nome do(a) cliente = ${nome}
    Idade = ${idade}
    Categoria = ${nivelAcesso}
    Valor do ingresso = ${valorIngresso}
    Valor pago = ${valorPago}
    troco = ${troco}
    Situação do acesso = ${acessoStatus}
    situação do pagamento = ${pagamentoStatus}
    situação final = ${statusSessao}`)


console.log (resumo)


module.exports = {
    nome,
    idade,
    categoria,
    possuiIngresso,
    bloqueado,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusSessao,
    resumo
}








