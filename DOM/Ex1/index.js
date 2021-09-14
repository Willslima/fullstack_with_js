// * Adicionar lista de casa com 2 informações
// bairro - cidade

// * Exibir 2 campos para preencher. Quando clicar em "Adicionar" a casa deve
// ser adicionada numa lista logo abaixo do formulário

// * Quando o elemento for adicionado tem que adicionar também um botão remover,
// para quando for clicado remover o elemento atual

function adicionar() {
    let bairro = document.querySelector('.bairro').value
    let cidade = document.querySelector('.cidade').value

    let p = document.createElement('p')
    p.textContent = `Bairro: ${bairro} - Cidade: ${cidade} `

    let getDiv = document.querySelector('div')

    getDiv.appendChild(p)

    let btn = document.createElement('button')
    btn.textContent = 'Remover'
    btn.setAttribute('onclick', `remover(this)`)

    p.appendChild(btn)

}

function remover(elemento) {
    elemento.parentNode.remove()

}