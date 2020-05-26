import { BaseGameTypeNames} from "./logic/gameTypes";
import EventHandler, { ICustomerEventHandler } from "./events/EventHandler";
import { LogMethod } from "./logDecorators";

export interface MessageArgs{
  nick: string;
  gameType: BaseGameTypeNames;
  time: number;
}

export interface RankingArgs{
  gameType: BaseGameTypeNames;
  values: {nick: string, time: number}[]
}

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
  private onReceiveEventHandler: EventHandler<RankingArgs>;
  private onErrorEventHandler: EventHandler<{e: Event}>;

  public get OnOpenEventHandler(): ICustomerEventHandler<null>{
    return this.onOpenEventHandler;
  }

  public get OnReceiveEventHandler(): ICustomerEventHandler<RankingArgs>{
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
    this.onReceiveEventHandler = new EventHandler<RankingArgs>();
    this.onErrorEventHandler = new EventHandler<{e: Event}>();
  }

  private InitializeSocket(){
    this.socket.onmessage = (event: MessageEvent) => { this.Received(event.data);};
    this.socket.onerror = (event: Event) => {this.Error(event)};
  }

  public Send(gameType: BaseGameTypeNames, time: number) {
    const args: MessageArgs = {nick: this.Nick, gameType, time};
    const message = JSON.stringify(args);
    this.socket.send(message);
  }

  @LogMethod
  private Received(data: string){
    try{
      const rankingArgs = JSON.parse(data) as RankingArgs;
      this.onReceiveEventHandler.ExecuteListeners(rankingArgs);
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