import GameContainer from "./components/GameContainer";
import Game, {GameEvents, OnCellChangeArgs} from "./logic/Game";
import {OnCellClickArgs} from './components/Board';
import Position from "./logic/Position";
import EventHandler from "./events/EventHandler";
import Cell, { CellClickTypes } from "./components/Cell";
import Images from './logic/images';

export default class Controller {
    public gameContainerElement: GameContainer;
    public game: Game;    

    public constructor(){
        
        this.NewGame();


    }

    public NewGame(){
        this.game = new Game({width: 15,height: 15}, 40);
        (this.game.GetEventHandler(GameEvents.cellChange) as EventHandler<OnCellChangeArgs>).AddEventListener( (args: OnCellChangeArgs) => {
            this.OnCellChange(args);
        });
        this.gameContainerElement = new GameContainer();
        this.gameContainerElement.board.AddOnClickListener( (args: OnCellClickArgs) => {
            this.OnClick(args);
        } )
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
                    img.src =Images[args.cell.neighborBombs.toString()].src;
                }
            }
        }

        if(args.cell.isOpened){
            this.gameContainerElement.board.cells[args.index].Disable();
        }
        this.gameContainerElement.board.cells[args.index].SetImage(img);
    }


}