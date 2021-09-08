function limparDisplay() {
    document.getElementById('tela').value = ''
}

function btnNumeros(index) {
    let key = document.querySelectorAll('.botao')[index].innerText


        document.getElementById('tela').value = document.getElementById('tela').value + key
    
}

function somar() {
    limparDisplay()
}

function subtrair() {
    limparDisplay()
}

function multiplicar() {
    limparDisplay()
}

function dividir() {
    limparDisplay()
}

function resultado() {
    limparDisplay()
}
 function ponto(index){
    let key = document.querySelectorAll('.botao')[index].innerText

    if (document.getElementById('tela').value.includes('.')) {
        document.getElementById('tela').value = document.getElementById('tela').value 
    } else {
        document.getElementById('tela').value = document.getElementById('tela').value + key
    }
 }
