let maisVelha = prompt('Digite a idade da pessoa mais velha')
let nomeMaisVelha = prompt('Digite o nome da pessoa mais velha')
let maisNova = prompt('Digite a idade da pessoa mais nova')
let nomeMaisNova = prompt('Digite o nome da pessoa mais nova')

let velha = parseInt(maisVelha)
let nova = parseInt(maisNova)

alert(`O nome da pessoa mais velha é ${nomeMaisVelha} e ela/ele tem ${maisVelha} anos.`)
alert(`O nome da pessoa mais nova é ${nomeMaisNova} e ela/ele tem ${maisNova} anos.`)
alert(`A diferença de idade entre eles/elas é de ${maisVelha - maisNova} anos.`)
