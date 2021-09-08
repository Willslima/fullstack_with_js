let currentVelocity = 150;

function slowDown(currentVelocity) {
    let downVelocity = currentVelocity
    for(let i = 0; i <= currentVelocity; i++){
        alert(`Estamos parando a nave, velocidade atual ${downVelocity}`)
        downVelocity -= 20;
        if(downVelocity <= 0){
            alert('A nave está parada e as comportas podem ser abertas')
            break
        }
    }
    
}


slowDown(currentVelocity)