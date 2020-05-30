import GameContainer from "./components/GameContainer";
import {GameEvents, OnCellChangeArgs, OnDefeatArgs, OnWinArgs, OnBombsToDisarmChangedArgs, Game, BeginerGame, IntermediateGame, ExpertGame} from "./logic/Game";
import {OnCellClickArgs} from './components/boardComponents/Board';
import Position from "./logic/Position";
import EventHandler from "./events/EventHandler";
import { CellClickTypes } from "./components/boardComponents/Cell";
import { IGameType, BaseGameTypes, GameTypeNames, BaseGameTypeNames, GameType} from "./logic/gameTypes";
import { OnSubmitArgs as OnGameTypeSubmitArgs } from "./components/MenuComponents/GameOptionsMenuTab";
import ThemeOptionsTab, { OnSubmitArgs as OnThemeTypeSubmitArgs } from "./components/MenuComponents/ThemeOptionsMenuTab";
import RankingOptionsTab, { OnNickSubmitEventArgs } from "./components/MenuComponents/RankingOprionsMenuTab";

import LocalStorageManager from './localStorageManager';
import GameOptionsTab from "./components/MenuComponents/GameOptionsMenuTab";
import Client from "./client";
import { LogMethod, logProperty } from "./logDecorators";
import RankingContainer from "./components/rankingComponents/RankingContainer";
import { IMessage, IRanking, MessageTypes } from "./serverThings/serverRequirements";
import Images from './images/preLoad';


export default class Controller { 
    public gameContainerElement: GameContainer;
    public game: Game;
    public readonly ranking: RankingContainer;


    private client: Client;
    private gameType: IGameType;
    private gameTypeName: GameTypeNames;

    private theme: string;

    public constructor(){
        this.ranking = new RankingContainer();
        this.InitializeClient();
        this.PullGamePropsFromStorage();
        this.PullThemePropsFromStorage();
        this.PullNickFromStorage();
        this.InitializeController();
    }

    private InitializeClient(){
        this.client = new Client();
        this.client.Connect();
        this.client.OnReceiveEventHandler.AddEventListener((args: IMessage) => {
            switch(args.type){
                case "rankingChanged":
                    console.log(args.data);
                    
                    this.ranking.Set(args.data as IRanking);
                    break;
                case "rankingRequest":
                    (args.data as IRanking[]).forEach(iranking => {
                        this.ranking.Set(iranking);
                    });
            }
        });

        this.client.OnOpenEventHandler.AddEventListener( () => {
            this.client.SendRankingRequest();
        });
    }

    private PushGamePropsToStorage(){
        LocalStorageManager.SetLastGameProps(this.gameTypeName, this.gameType);
    }

    private PullGamePropsFromStorage(){
        let GameProps: {gameTypeName: GameTypeNames, gameType: GameType};
        try{
            GameProps = LocalStorageManager.GetLastGameProps();
        }
        catch{
            GameProps = null;
        }

        if(GameProps == null){
            GameProps = {gameTypeName: GameTypeNames.beginner, gameType: BaseGameTypes[BaseGameTypeNames.beginner]};
        }
        
        this.gameTypeName = GameProps.gameTypeName;
        this.gameType = GameProps.gameType;
    }

    private PushThemePropsToStorage(){
        LocalStorageManager.SetLastThemeProps(this.theme);
    }

    private PullThemePropsFromStorage(){
        let ThemeProps: {theme: string};
        try{
            ThemeProps = LocalStorageManager.GetLastThemeProps();
        }
        catch{
            ThemeProps = null;
        }

        if(ThemeProps == null){
            ThemeProps = {theme: "normal_theme"};
        }
        
        this.theme = ThemeProps.theme;
    }

    private PushNickToStorage(){
        LocalStorageManager.SetNick(this.client.Nick);
    }

    private PullNickFromStorage(){
        this.client.Nick = LocalStorageManager.GetNick();
    }

    private InitializeController(){
        this.InitializeGame();
        this.InitializeGameComponent();
        this.InitializeGameOptionsTab();
        this.InitializeThemeOptionsTab();
        this.InitializeRankingOptionsTab();

    }

    public NewGame(){
        this.gameContainerElement.Head.NewGameBTN.SetImage(Images['e1'].src);
        this.UpdateGameComponentSize();
        this.InitializeGame();
    }

    private InitializeGame(){
        if(this.game != null){
            this.game.Dispatch();
        }

        switch(this.gameTypeName){
            case GameTypeNames.beginner:
                this.game = new BeginerGame();
                break;
            case GameTypeNames.intermediate:
                this.game = new IntermediateGame();
                break;
            case GameTypeNames.expert:
                this.game = new ExpertGame();
                break;
            case GameTypeNames.custom:
                this.game = new Game({width: this.gameType.width,height: this.gameType.height}, this.gameType.bombs);
                break;
            default:
                this.game = new BeginerGame();
                break;
        }
        (this.game.GetEventHandler(GameEvents.cellChange) as EventHandler<OnCellChangeArgs>).AddEventListener( (args: OnCellChangeArgs) => {
            this.OnCellChange(args);
        });
        (this.game.GetEventHandler(GameEvents.defeat) as EventHandler<OnDefeatArgs>).AddEventListener(
            (args: OnDefeatArgs) => {
                this.OnGameLose(args);
            }
        );
        (this.game.GetEventHandler(GameEvents.win) as EventHandler<OnWinArgs>).AddEventListener(
            (args: OnWinArgs) => {
                this.OnGameWin(args);
            }
        );
        (this.game.GetEventHandler(GameEvents.bombsToDisarmChanged) as EventHandler<OnBombsToDisarmChangedArgs>).AddEventListener(
            (args: OnBombsToDisarmChangedArgs) => {
                this.OnBombsToDisarmChange(args);
            }
        );

        this.game.Timer.AddOnTimeChangeEventListener((args)=>{
            this.gameContainerElement.Head.RigthCounter.SetValue(args.value);
            
        })
    }

    private InitializeGameOptionsTab(){
        const gameOptionsTab = this.gameContainerElement.Menu.GetItemByName("Game").Item as GameOptionsTab;
        gameOptionsTab.AddOnSubmitEventListener( (args: OnGameTypeSubmitArgs) => {
            this.OnGameTypeSubmit(args);
        } );
        gameOptionsTab.Check(this.gameTypeName);
    }

    private InitializeThemeOptionsTab(){
        const themeOptionsTab = this.gameContainerElement.Menu.GetItemByName("Theme").Item as ThemeOptionsTab;
        themeOptionsTab.AddOnSubmitEventListener( (args: OnThemeTypeSubmitArgs) => {
            this.OnThemeTypeSubmit(args);
        } );
        themeOptionsTab.themeList.Check(this.theme);
    }

    private InitializeRankingOptionsTab(){
        const rankingOptionsTab = this.gameContainerElement.Menu.GetItemByName("Ranking").Item as RankingOptionsTab;
        rankingOptionsTab.onSubmitEventHandler.AddEventListener( (args: OnNickSubmitEventArgs) => {
            this.OnNickSumbit(args);
        } );
        rankingOptionsTab.nickInput.Value = this.client.Nick;
    }

    private InitializeGameComponent(){
        this.gameContainerElement = new GameContainer();
        this.UpdateGameComponentSize();
        this.gameContainerElement.SetTheme(this.theme);
        this.gameContainerElement.Head.NewGameBTN.AddOnClickListener( () => {this.OnReset()} );
    }

    private UpdateGameComponentSize(){
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.gameContainerElement.SetNewBoard({width: this.gameType.width, height: this.gameType.height});
        this.gameContainerElement.Board.AddOnClickListener( (args: OnCellClickArgs) => {
            this.OnClick(args);
        } );
    }

    private OnClick(args: OnCellClickArgs){
        if(args.type == CellClickTypes.leftClick){
            this.OnLeftClick(args.x, args.y);
        }
        else if (args.type == CellClickTypes.rightClick){
            this.OnRightClick(args.x, args.y);
        }
    }

    private OnLeftClick(x: number, y: number)
    {
        this.game.Open(new Position(x, y));
    }

    private OnRightClick(x: number, y: number)
    {
        this.game.Mark(new Position(x, y));
    }

    private OnCellChange(args: OnCellChangeArgs){
        let imgPath: string;
        if(args.cell.isMarked)
        {
            if(args.cell.isOpened && !args.cell.isBomb)
            {
                imgPath = Images['notBomb'].src;
            }
            else
            {
                imgPath = Images['flag'].src;
            }
        }
        else if(args.cell.isOpened)
        {
            if(args.cell.isBomb)
            {
                imgPath = Images['bomb'].src;
            }else
            {
                if(args.cell.neighborBombs != 0)
                {
                    imgPath = Images["o" + args.cell.neighborBombs.toString()].src;
                }
            }
        }

        if(args.cell.isOpened){
            this.gameContainerElement.Board.cells[args.index].Disable();
        }
        this.gameContainerElement.Board.cells[args.index].SetImage(imgPath);

    }

    private OnReset(){
        this.gameContainerElement.Head.NewGameBTN.SetImage(Images['e1'].src);
        this.gameContainerElement.Reset();
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.InitializeGame();
    }

    private OnGameLose(args: OnDefeatArgs)
    {
        this.gameContainerElement.Head.NewGameBTN.SetImage(Images['e3'].src);
        this.gameContainerElement.Board.cells[args.lastOpenedIndex].SetBackgroundColor("red");
    }

    @LogMethod
    private OnGameWin(args: OnWinArgs)
    {
        this.gameContainerElement.Head.NewGameBTN.SetImage(Images['e4'].src);
        if(args.gameType != GameTypeNames.custom && this.client.IsOpened){
            this.client.SendScoreAndGameType(args.time, args.gameType as unknown as BaseGameTypeNames);
        }
    }

    private OnBombsToDisarmChange(args: OnBombsToDisarmChangedArgs){
        this.gameContainerElement.Head.LeftCounter.SetValue(args.bombsToDisarm);
    }

    private OnGameTypeSubmit(args: OnGameTypeSubmitArgs)
    {
        if(args.gameType != GameTypeNames.custom)
        {
            this.gameType = BaseGameTypes[args.gameType as unknown as BaseGameTypeNames];
        }
        else{
            try{
                const cv = (this.gameContainerElement.Menu.GetItemByName('Game').Item as GameOptionsTab).CustomValue;
                this.gameType = new GameType(cv.width, cv.height, cv.bombs);
            }
            catch{
                this.OnWrongArgsSubmit();
                return;
            }
        }
        this.gameTypeName = args.gameType;
        this.gameContainerElement.Reset();
        this.NewGame();
        this.PushGamePropsToStorage();
        this.gameContainerElement.Menu.GetItemByName('Game').Close();
    }

    private OnThemeTypeSubmit(args: OnThemeTypeSubmitArgs)
    {
        this.theme = args.theme
        this.gameContainerElement.SetTheme(this.theme);
        this.PushThemePropsToStorage();
        this.gameContainerElement.Menu.GetItemByName('Theme').Close();
    }

    private OnNickSumbit(args: OnNickSubmitEventArgs){
        this.client.Nick = args.nick;
        this.gameContainerElement.Menu.GetItemByName('Ranking').Close();
        this.PushNickToStorage();
    }

    private OnWrongArgsSubmit(){
        // TODO
    }

}