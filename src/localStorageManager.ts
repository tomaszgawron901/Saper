import { GameTypeNames, GameType } from "./logic/gameTypes";

export default class {
    
    static GetLastGameProps(){
        return JSON.parse(localStorage.getItem('LastGameProps')) as {gameTypeName: GameTypeNames, gameType: GameType};
    }

    static SetLastGameProps(gameTypeName: GameTypeNames, gameType: GameType){
        localStorage.setItem('LastGameProps', JSON.stringify( {gameTypeName, gameType} ))
    }
}