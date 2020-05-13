import GameContainer from "./components/GameContainer";
import Game, {GameEvents, OnCellChangeArgs, OnDefeatArgs, OnWinArgs, OnBombsToDisarmChangedArgs} from "./logic/Game";
import Board, {OnCellClickArgs} from './components/Board';
import Position from "./logic/Position";
import EventHandler from "./events/EventHandler";
import Cell, { CellClickTypes } from "./components/Cell";
import { IGameType, BaseGameTypes, GameTypeNames, BaseGameTypeNames, GameType} from "./logic/gameTypes";
import { LogMethod } from "./logDecorators";
import GameOptionsTab, { OnSubmitArgs } from "./components/GameOptionsTab";

export default class Controller {
    public gameContainerElement: GameContainer;
    public gameOptionsTab: GameOptionsTab;
    public game: Game;

    private gameType: IGameType;
    private gameTypeName: GameTypeNames;

    public constructor(){
        this.gameType = BaseGameTypes[BaseGameTypeNames.intermediate];
        this.InitializeController();
    }

    private InitializeController(){
        this.InitializeGame();
        this.InitializeGameOptionsTab();

        this.gameContainerElement = new GameContainer();
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.gameContainerElement.SetNewBoard({width: this.gameType.width, height: this.gameType.height});
        this.gameContainerElement.Board.AddOnClickListener( (args: OnCellClickArgs) => {
            this.OnClick(args);
        } );
        this.gameContainerElement.Head.NewGameBTN.AddOnClickListener( () => {this.OnReset()} );
    }

    public NewGame(){
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e1.png");
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.gameContainerElement.SetNewBoard({width: this.gameType.width, height: this.gameType.height});
        this.gameContainerElement.Board.AddOnClickListener( (args: OnCellClickArgs) => {
            this.OnClick(args);
        } );
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
        this.gameOptionsTab = new GameOptionsTab();
        this.gameOptionsTab.AddOnSubmitEventListener( (args: OnSubmitArgs) => {
            this.OnGameTypeSubmit(args);
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
        console.log(x, y, 'Left Click');
        
    }

    private OnRightClick(x: number, y: number)
    {
        this.game.Mark(new Position(x, y));
        console.log(x, y, 'Right Click');
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

    @LogMethod
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

    @LogMethod
    private OnGameTypeSubmit(args: OnSubmitArgs)
    {
        if(args.gameType != GameTypeNames.custom)
        {
            this.gameType = BaseGameTypes[args.gameType as unknown as BaseGameTypeNames];
        }
        else{
            try{
                const cs = this.gameOptionsTab.CustomValue;
                this.gameType = new GameType(cs.width, cs.height, cs.bombs);
            }
            catch{
                this.OnWrongArgsSubmit();
                return;
            }
        }
        this.gameTypeName = args.gameType;
        this.NewGame();
    }

    private OnWrongArgsSubmit(){

    }

}