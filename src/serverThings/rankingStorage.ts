import { IRanking, RankingManager, Ranking } from "./ranking";
import { BaseGameTypeNames } from "../logic/gameTypes";

export default class {
    static GetRanking(gameType: BaseGameTypeNames){
        const name = 'Ranking' + gameType.toString();
        try
        {
            return Ranking.Parse(localStorage.getItem(name));
        }
        catch
        {
            return null;
        }
    }

    static PushRanking(ranking: IRanking){
        const simpleRanking: IRanking = {gameTypeName: ranking.gameTypeName, array: ranking.array}; 

        console.log(ranking, JSON.stringify( simpleRanking ));
        const name = 'Ranking' + ranking.gameTypeName.toString();
        localStorage.setItem(name, JSON.stringify( simpleRanking ));
    }
}