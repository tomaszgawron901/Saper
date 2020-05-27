import { BaseGameTypeNames } from "../logic/gameTypes";
import EventHandler, { ICustomerEventHandler } from "../events/EventHandler";
import rankingStorage from "./rankingStorage";

interface IScoreAndGameType{
    nick: string;
    gameType: BaseGameTypeNames;
    time: number;
}

interface IScore{
    nick: string,
    time: number
}

interface IRanking{
    gameTypeName: BaseGameTypeNames,
    array: Array<IScore>
}

interface OnRankingChangeArgs{
    ranking: IRanking;
}
class Ranking implements IRanking{
    public static Parse(str: string): Ranking{
        let parsedIRanking: IRanking;
        try{
            parsedIRanking = JSON.parse(str) as IRanking;
        }
        catch{
            throw new Error("Unable to parse.");
        }
        return Ranking.ParseIRanking(parsedIRanking);
    }

    public static ParseIRanking(ranking: IRanking){
        const newRanking = new Ranking(ranking.gameTypeName);
        ranking.array.forEach(score => {
            newRanking.Add(score);
        });
        return newRanking;
    }

    public readonly maxLenght: number;

    private index: number;
    public readonly array: Array<IScore>;
    public readonly gameTypeName: BaseGameTypeNames;
    private readonly onChangeEventChandler: EventHandler<null>;
    public get OnChangeEventChandler(){
        return this.onChangeEventChandler as ICustomerEventHandler<null>;
    }

    public constructor(gameTypeName: BaseGameTypeNames){
        this.maxLenght = 5;
        this.gameTypeName = gameTypeName;
        this.array = new Array<IScore>();
        this.onChangeEventChandler = new EventHandler<null>();
        this.index = 0;
    }

    public Add(element: IScoreAndGameType | IScore)
    {
        if( (element as IScoreAndGameType).gameType != null && (element as IScoreAndGameType).gameType != this.gameTypeName){
            throw new Error("Wrong element gameTypeName.");
        }
        const score: IScore = {nick: element.nick, time: element.time};
        if(this.index < this.maxLenght)
        {
            this.array[this.index] = score;
            this.index += 1;
        }
        else if(this.index == this.maxLenght)
        {
            const lastIndex = this.maxLenght-1;
            if(this.array[lastIndex].time > score.time)
            {
                this.array[lastIndex] = score;
            }
        }
        else
        {
            return;
        }
        this.array.sort( (a, b) => a.time - b.time );
        this.Changed();
    }

    public Simplyfy(): IRanking{
        return {gameTypeName: this.gameTypeName, array: this.array};
    }

    private Changed(){
        this.onChangeEventChandler.ExecuteListeners();
    }
}

class RankingManager{
    private rankings: Ranking[];
    public get Rankings(){
        return this.rankings
    }

    private readonly onChangeEventHandler: EventHandler<OnRankingChangeArgs>;
    public get OnChangeEventHandler(){
        return this.onChangeEventHandler as ICustomerEventHandler<OnRankingChangeArgs>;
    }

    public constructor()
    {
        this.onChangeEventHandler = new EventHandler<OnRankingChangeArgs>();
        this.rankings = new Array<Ranking>();
        this.InitializeRankings();
    }

    public InitializeRankings(){
        for(let i = 0; i < 3; i++){
            // let ranking = rankingStorage.GetRanking(i);
            // if(ranking == null)
            // {
            //     ranking = new Ranking(i);
            // }
            const ranking = new Ranking(i);
            this.rankings[i] = ranking;
            this.rankings[i].OnChangeEventChandler.AddEventListener(() => {this.Changed( this.rankings[i]); });
        }
    }

    private Changed(ranking: Ranking){
        this.onChangeEventHandler.ExecuteListeners( {ranking: ranking} );
        //rankingStorage.PushRanking(ranking);
    }

    public Simplify(){
        const array = new Array<IRanking>();
        this.rankings.forEach(ranking => {
            array.push(ranking.Simplyfy());
        });
        return array;
    }
}

export {Ranking, IRanking, RankingManager, IScore, IScoreAndGameType, OnRankingChangeArgs};