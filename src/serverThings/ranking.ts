import { BaseGameTypeNames } from "../logic/gameTypes";
import EventHandler, { ICustomerEventHandler } from "../events/EventHandler";

interface IGameScore{
    nick: string;
    gameType: BaseGameTypeNames;
    time: number;
}

class Ranking{
    public readonly maxLenght: number;

    private index: number;
    public readonly array: Array<IGameScore>;
    public readonly gameTypeName: BaseGameTypeNames;
    private readonly onChangeEventChandler: EventHandler<null>;
    public get OnChangeEventChandler(){
        return this.onChangeEventChandler as ICustomerEventHandler<null>;
    }

    public constructor(lenght: number, gameTypeName: BaseGameTypeNames){
        if( lenght <= 0 ) { throw new Error("lenght Argument Error."); }
        this.maxLenght = lenght;
        this.gameTypeName = gameTypeName;
        this.array = new Array<IGameScore>(lenght);
        this.onChangeEventChandler = new EventHandler<null>();
        this.index = 0;
    }

    public Add(element: IGameScore)
    {
        if(element.gameType != this.gameTypeName){
            throw new Error("Wrong element gameTypeName.");
        }
        const lastIndex = this.maxLenght - 1;
        if(this.index < lastIndex)
        {
            this.array[this.index] = element;
            this.index += 1;
        }
        else if(this.index == lastIndex && this.array[this.index] > element)
        {
                this.array[this.index] = element;
        }
        else
        {
            return;
        }
        this.array.sort();
        this.Changed();
    }

    private Changed(){
        this.onChangeEventChandler.ExecuteListeners();
    }
}

class RankingManager{
    public readonly rankings: Ranking[];
    private rankingLenght: number;
    private readonly onChangeEventHandler: EventHandler<null>;
    public get OnChangeEventHandler(){
        return this.onChangeEventHandler as ICustomerEventHandler<null>;
    }

    public constructor(lenght = 5)
    {
        this.onChangeEventHandler = new EventHandler<null>();
        this.rankingLenght = lenght;
        this.rankings = new Array<Ranking>();
        this.InitializeRanking();
    }

    private InitializeRanking(){
        for(let i = 0; i < 3; i++){
            this.rankings[i] = new Ranking(this.rankingLenght, i);
            this.rankings[i].OnChangeEventChandler.AddEventListener(() => {this.Changed();});
        }
    }

    private Changed(){
        this.onChangeEventHandler.ExecuteListeners();
    }
}

export {Ranking, RankingManager, IGameScore};