import GameContainer from "./components/GameContainer";
import Game, {GameEvents, OnCellChangeArgs} from "./logic/Game";
import {OnCellClickArgs} from './components/Board';
import Position from "./logic/Position";
import EventHandler from "./events/EventHandler";
import { CellClickTypes } from "./components/Cell";

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
        
    }

    private OnRightClick(x: number, y: number)
    {
        this.game.Mark(new Position(x, y))
    }

    private OnCellChange(args: OnCellChangeArgs){
        const img = document.createElement("IMG") as HTMLImageElement;
        img.src = 'images/flag.png';
        this.gameContainerElement.board.cells[args.index].SetImage(img);
    }


}