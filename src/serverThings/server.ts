import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import * as websocket from 'ws';
import {Ranking, RankingManager, OnRankingChangeArgs} from './ranking';
import {IScoreAndGameType, IScore, IMessage, MessageTypes, IRanking, GetSimpleRanking} from './serverRequirements';


const rankingManager = new RankingManager();

const OnMessageReceive = (ws: websocket, data: websocket.Data) => {
  try
  {
    const message = JSON.parse(data as string) as IMessage;
    switch(message.type)
    {
      case MessageTypes.rankingRequest:
        OnRankingRequest(ws);
        break;
      case MessageTypes.scoreAndGameType:
        OnScoreReceived(message.data);
        break;
    }
  }
  catch(e)
  {
    console.log(e);
  }
}

const OnRankingRequest = (ws: websocket) => {
  const message: IMessage = {type: MessageTypes.rankingRequest, data: rankingManager.Simplify()};
  ws.send(message); 
}

const OnScoreReceived = (score: IScoreAndGameType) => {
  rankingManager.Rankings[score.gameType].Add(score);
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.end(("connected"));
  
});

const socket = new websocket.Server({server});
rankingManager.OnChangeEventHandler.AddEventListener((args: OnRankingChangeArgs) => {
  socket.clients.forEach(client => {
    const simpleRanking = GetSimpleRanking(args.ranking);
    client.send(JSON.stringify(simpleRanking));
  });
});

socket.on('connection', (ws: websocket) => {
  console.log("connencted.");
  ws.on('message', (message) => {
    OnMessageReceive(ws, message);
  });
});

server.listen(8080);




