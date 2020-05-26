import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import * as websocket from 'ws';
import { BaseGameTypeNames } from '../logic/gameTypes';
import {Ranking, RankingManager, IGameScore} from './ranking';

export enum MessageTypes{
  handshake = "handshake",
  gameScore = "gameScore"
}

interface RankingArgs{
  gameType: BaseGameTypeNames;
  values: {nick: string, time: number}[];
}

const rankingManager = new RankingManager();

const OnMessageReceive = (data: websocket.Data) => {
  console.log(data);
  const gameScore = JSON.parse(data as string) as IGameScore;
  rankingManager.rankings[gameScore.gameType].Add(gameScore);
  console.log(rankingManager);
}


const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.end("I'm connected elo");
});

const socket = new websocket.Server({server});
rankingManager.OnChangeEventHandler.AddEventListener(() => {
  socket.clients.forEach(client => {
    client.send("update");
  });
});

socket.on('connection', (ws: websocket) => {
  console.log("connencted.");
  
  ws.on('message', (message) => {
    OnMessageReceive(message);
  });
});

server.listen(8080);




