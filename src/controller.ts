import GameContainer from "./components/GameContainer";
import Game, {GameEvents, OnCellChangeArgs, OnDefeatArgs, OnWinArgs, OnBombsToDisarmChangedArgs} from "./logic/Game";
import {OnCellClickArgs} from './components/boardComponents/Board';
import Position from "./logic/Position";
import EventHandler from "./events/EventHandler";
import { CellClickTypes } from "./components/boardComponents/Cell";
import { IGameType, BaseGameTypes, GameTypeNames, BaseGameTypeNames, GameType} from "./logic/gameTypes";
import { LogMethod } from "./logDecorators";
import { OnSubmitArgs as OnGameTypeSubmitArgs } from "./components/MenuComponents/GameOptionsMenuTab";
import OptionsMenuTab, { OnSubmitArgs as OnThemeTypeSubmitArgs } from "./components/MenuComponents/OptionsMenuTab";

import LocalStorageManager from './localStorageManager';
import GameOptionsTab from "./components/MenuComponents/GameOptionsMenuTab";

export default class Controller { 
    public gameContainerElement: GameContainer;
    public game: Game;

    private gameType: IGameType;
    private gameTypeName: GameTypeNames;

    private theme: string;

    public constructor(){
        this.PullGamePropsFromStorage();
        this.PullThemePropsFromStorage();
        this.InitializeController();
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

    private InitializeController(){
        this.InitializeGame();
        this.InitializeGameComponent();
        this.InitializeGameOptionsTab();
        this.InitializeOptionsTab();

    }

    public NewGame(){
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e1.png");
        this.UpdateGameComponentSize();
        this.InitializeGame();
    }

    private InitializeGame(){
        if(this.game != null){
            this.game.Dispatch();
        }
        this.game = new Game({width: this.gameType.width,height: this.gameType.height}, this.gameType.bombs);
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

    private InitializeOptionsTab(){
        const optionsMenuTab = this.gameContainerElement.Menu.GetItemByName("Options").Item as OptionsMenuTab;
        optionsMenuTab.AddOnSubmitEventListener( (args: OnThemeTypeSubmitArgs) => {
            this.OnThemeTypeSubmit(args);
        } );
        optionsMenuTab.themeList.Check(this.theme);
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
                imgPath = "images/notbomba.png";
            }
            else
            {
                imgPath = "images/flag.png";
            }
        }
        else if(args.cell.isOpened)
        {
            if(args.cell.isBomb)
            {
                imgPath = "images/bomba.png";
            }else
            {
                if(args.cell.neighborBombs != 0)
                {
                    imgPath = "images/o"+ args.cell.neighborBombs.toString() +".png";
                }
            }
        }

        if(args.cell.isOpened){
            this.gameContainerElement.Board.cells[args.index].Disable();
        }
        this.gameContainerElement.Board.cells[args.index].SetImage(imgPath);

    }

    private OnReset(){
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e1.png");
        this.gameContainerElement.Reset();
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.InitializeGame();
    }

    private OnGameLose(args: OnDefeatArgs)
    {
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e3.png");
        this.gameContainerElement.Board.cells[args.lastOpenedIndex].SetBackgroundColor("red");
    }

    private OnGameWin(args: OnWinArgs)
    {
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e4.png");
        
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
        this.gameContainerElement.Menu.GetItemByName('Options').Close();
    }

    private OnWrongArgsSubmit(){
        // TODO
    }

}