import { BaseGameTypeNames, GameTypeNames} from "./logic/gameTypes";
import EventHandler, { ICustomerEventHandler } from "./events/EventHandler";
import {IScoreAndGameType, IMessage, MessageTypes, IRanking} from './serverThings/serverRequirements';


export default class Client{
  private url: string;
  public get URL(){
    return this.url;
  }

  private socket: WebSocket;
  private nick: string;

  public get Nick(){
    return this.nick;
  }
  public set Nick(value: string){
    this.nick = value;
  }

  private isOpened: boolean;
  public get IsOpened(){
    return this.isOpened;
  }

  private onOpenEventHandler: EventHandler<null>;
  private onReceiveEventHandler: EventHandler<IMessage>;
  private onErrorEventHandler: EventHandler<{e: Event}>;

  public get OnOpenEventHandler(): ICustomerEventHandler<null>{
    return this.onOpenEventHandler;
  }

  public get OnReceiveEventHandler(): ICustomerEventHandler<IMessage>{
    return this.onReceiveEventHandler;
  }

  public get OnErrorEventHandler(): ICustomerEventHandler<{e: Event}>{
    return this.onErrorEventHandler;
  }

  public constructor(nick = "unknown"){
    this.Nick = nick;
    this.isOpened = false;
    this.InitializeEventHandlers();
    
  }

  public Connect(url = "ws://localhost:8080"){
    this.url = url;
    this.socket = new WebSocket(this.url);
    this.socket.onopen = () => {
      this.InitializeSocket();
      this.Opened();
    }
  }

  private InitializeEventHandlers(){
    this.onOpenEventHandler = new EventHandler<null>();
    this.onReceiveEventHandler = new EventHandler<IMessage>();
    this.onErrorEventHandler = new EventHandler<{e: Event}>();
  }

  private InitializeSocket(){
    this.socket.onmessage = (event: MessageEvent) => { this.Received(event.data);};
    this.socket.onerror = (event: Event) => {this.Error(event)};
  }

  public Send(message: IMessage) {
    this.socket.send(JSON.stringify(message));
  }

  public SendRankingRequest(){
    const message: IMessage = {type: MessageTypes.rankingRequest, data: null};
    this.socket.send(JSON.stringify(message));
  }

  public SendScoreAndGameType(time: number, gameType: BaseGameTypeNames){
    const ScoreAndGameType: IScoreAndGameType = {nick: this.nick, time, gameType};
    const message: IMessage = {type: MessageTypes.scoreAndGameType, data: ScoreAndGameType};
    this.socket.send(JSON.stringify(message));
  }

  private Received(data: string){
    try{
      const message = JSON.parse(data) as IMessage;
      this.onReceiveEventHandler.ExecuteListeners(message);
    }
    catch{
      this.Error(new Event("Data parse error."));
    }
  }

  private Opened(){
    this.isOpened = true;
    this.onOpenEventHandler.ExecuteListeners();
  }

  private Error(e: Event){
    this.onErrorEventHandler.ExecuteListeners({e});
  }
}