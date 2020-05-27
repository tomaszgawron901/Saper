import { IScoreAndGameType, IRanking, IScore} from "./ranking";

function GetSimpleRanking(ranking: IRanking){
    const simpleRanking: IRanking = {gameTypeName: ranking.gameTypeName, array: ranking.array};
    return simpleRanking;
}

enum MessageTypes{
    rankingRequest = "rankingRequest",
    scoreAndGameType = "scoreAndGameType"
  }
  
  interface IMessage{
    type: MessageTypes,
    data: any
  }
  
  export {IScoreAndGameType, IScore, IMessage, MessageTypes, IRanking, GetSimpleRanking}