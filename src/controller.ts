import GameContainer from "./components/GameContainer";
import Game, {GameEvents, OnCellChangeArgs, OnDefeatArgs, OnWinArgs, OnBombsToDisarmChangedArgs} from "./logic/Game";
import {OnCellClickArgs} from './components/Board';
import Position from "./logic/Position";
import EventHandler from "./events/EventHandler";
import Cell, { CellClickTypes } from "./components/Cell";
import Images from './images/images';

export default class Controller {
    public gameContainerElement: GameContainer;
    public game: Game;    

    public constructor(){
        
        this.NewGame();


    }

    public NewGame(){
        this.InitializeGame()

        this.gameContainerElement = new GameContainer();
        this.gameContainerElement.Board.AddOnClickListener( (args: OnCellClickArgs) => {
            this.OnClick(args);
        } );
        this.gameContainerElement.Head.NewGameBTN.AddOnClickListener( () => {this.OnReset()} );
    }

    private InitializeGame(){
        if(this.game != null){
            this.game.Dispatch();
        }
        this.game = new Game({width: 15,height: 15}, 40);
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
        const img = document.createElement("IMG") as HTMLImageElement;
        img.style.marginTop = "2px";
        img.style.marginLeft = "2px";
        if(args.cell.isMarked)
        {
            if(args.cell.isOpened && !args.cell.isBomb)
            {
                img.src = Images['notBomb'].src;
            }
            else
            {
                img.src = Images['flag'].src;
            }
        }
        else if(args.cell.isOpened)
        {
            if(args.cell.isBomb)
            {
                img.src = Images['bomb'].src;
            }else
            {
                if(args.cell.neighborBombs != 0)
                {
                    img.src =Images["o"+args.cell.neighborBombs.toString()].src;
                }
            }
        }

        if(args.cell.isOpened){
            this.gameContainerElement.Board.cells[args.index].Disable();
        }
        this.gameContainerElement.Board.cells[args.index].SetImage(img);
    }

    private OnReset(){
        this.gameContainerElement.Reset();
        this.InitializeGame();
    }

    private OnGameLose(args: OnDefeatArgs)
    {
        this.gameContainerElement.Board.cells[args.lastOpenedIndex].SetBackgroundColor("red");
    }

    private OnGameWin(args: OnWinArgs)
    {
        console.log("won");
        
    }

    private OnBombsToDisarmChange(args: OnBombsToDisarmChangedArgs){
        this.gameContainerElement.Head.LeftCounter.SetValue(args.bombsToDisarm);
        
    }

}