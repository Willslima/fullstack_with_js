function limparDisplay() {
    document.getElementById('tela').value = ''
}

function btnNumeros(index) {
    let key = document.querySelectorAll('.botao')[index].innerText
    document.getElementById('tela').value = document.getElementById('tela').value + key
    let display = document.getElementById('tela').value
    
}

function resultado() {
    let display = document.getElementById('tela').value
    let result = eval(display)
    document.getElementById('tela').value = result
    console.log(result)
} 

 function ponto(index){
    let key = document.querySelectorAll('.botao')[index].innerText

    if (document.getElementById('tela').value.includes('.')) {
        document.getElementById('tela').value = document.getElementById('tela').value 
    } else {
        document.getElementById('tela').value = document.getElementById('tela').value + key
    }
 }
