let nomeNave = prompt('Digite o nome da sua nave: ');
let velocidade = 0;

function nave(nome, velocidade){
    while(true){
        let opcao  = prompt('Digite a opção desejada:\n1: Acelerar a nave. \n2: Reduzir a velocidade. \n3: Ver dados. \n4: Sair.')
        
        if(opcao == 1){
            acelerar()
        } else if (opcao == 2){
            reduzir()
        } else if (opcao == 3){
            imprimirDados()
        } else if (opcao == 4 ){
            sair()
            break
        } else {
            alert('Opção incorreta')
            continue
        }
    }
    
    function acelerar(){
        alert('Acelerando');
        velocidade += 5;
        alert('Aumentando a velocidade da nave em 5km/s');
        return velocidade;
    }

    function reduzir(){
        alert('Reduzindo')
        if(velocidade <= 0){
            alert("A velocidade não pode ser menor do que 0");
        } else {
            velocidade -= 5;
            return velocidade
        }
    }

    function imprimirDados(){
        alert('Imprimindo')
        alert(`O nome da sua navé é ${nome} e está a ${velocidade}km/s`)
    }

    function sair(){
        alert('Saindo')
        
    }
}

nave(nomeNave, velocidade)