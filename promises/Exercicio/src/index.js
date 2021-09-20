import Spaceship from "./spaceship";
import SpaceEngine from "./spaceship_engine";

const sophia = new Spaceship('Sophia, 10, 5')
const amsterda = new Spaceship('Amsterdã', 14, 10)
const dwarfStart = new Spaceship('Estrela-Anã',20,4)

const sophiaEngine = new SpaceEngine(sophia)
const amsterdaEngine = new SpaceEngine(amsterda)
const dwarfStartEngine = new SpaceEngine(dwarfStart)

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()