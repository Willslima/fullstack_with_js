// 1 - exibir alerta com mensagem de boas vidas
// 2 - pedir nome do usúario
// 3 - pedir idade do usúario
// 4 - pedir confirmação da idade
// 5 - exibir alerta com:
//     nome informado pelo usúario
//     idade informada
//     a confirmação da idade

alert('Bem-vindo! A seguir pediremos que informe alguns dados.')

let nome = prompt('Informe o seu nome por gentileza.')
let idade = prompt('Informe a sua idade.')

let confirmIdade = confirm(`A sua idade é ${idade}?`)

alert(`O nome do usúario é ${nome}, tem ${idade} anos. A idade foi confirmada? ${confirmIdade ? 'Sim' : 'Não'}`)