
enum BaseGameTypeNames{
    beginner = 0,
    intermediate = 1,
    expert = 2
}

enum GameTypeNames{
    beginner = 0,
    intermediate = 1,
    expert = 2,
    custom = 3
}

interface IGameType{
    width: number;
    height: number;
    bombs: number;
}

class GameType implements IGameType{
    public readonly width: number;
    public readonly height: number;
    public readonly bombs: number;

    public constructor(width: number, height: number, bombs: number){

        if(width%1 != 0 || width <= 0) { throw new Error("Argument Exception.") };
        if(height%1 != 0 || height <= 0) { throw new Error("Argument Exception.") };
        if(bombs%1 != 0 || bombs <= 0) { throw new Error("Argument Exception.") };
        if(width*height-9 < bombs) { throw new Error("Argument Exception.") };

        this.width = width;
        this.height = height;
        this.bombs = bombs;
    }
}


const BaseGameTypes: {[index in BaseGameTypeNames]: GameType} = {
    [BaseGameTypeNames.beginner]: new GameType(8, 8, 10),
    [BaseGameTypeNames.intermediate]: new GameType(16, 16, 40),
    [BaseGameTypeNames.expert]: new GameType(30, 16, 99)
}

export {IGameType, GameType, BaseGameTypes, GameTypeNames, BaseGameTypeNames};