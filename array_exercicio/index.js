// 1 - array bidimensional
// 2 - 1: Nome, 2: qtd de tripulante, 3: processo de engate concluido ?
// 3 - se nave parada indice +1 

// 1 - filtar naves com + de 9 tripulantes
// 2 - informar o número da plataforma em que está a primeira nave que está com o engate pendente
        //Utilizar o findIndex - e join
// 3 - destacar o nome de todas as naves colocando-as em caixa alta e exibindo
// 4 - exibir um alerta com todas as informações

let spaceShips = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]


let Filtered  = spaceShips.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceshipName => {
    return spaceshipName[0]
})

let ongoigHitchPlatform = spaceShips.findIndex(spaceship => {
    return spaceship[2] == false
})

let highLightedSpaceships = spaceShips.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = `Espaçonaves com mais de 9 tripulantes: ${Filtered.join(', ')}\n
Plataforma com processo de engate: ${ongoigHitchPlatform + 1}\n
Espaçonaves destacadas: ${highLightedSpaceships.join(', ')}`

alert(message)