import EventManager from '../events/EventManager';
import EventHandler from '../events/EventHandler';
import Position from './Position';
import Cell from './Cell';

export interface OnCellChangeArgs{
    index: number;
    cell: Cell;
}

export interface OnWinArgs{}

export interface OnDefeatArgs{}

export enum GameEvents{
    cellChange = "cellChange",
    win = "win",
    defeat = "defeat"
}


function GetRange(start: number, end: number, step: number = 1, excluded: Array<number> = new Array<number>())
{
    const range = new Array<number>();
    for(let i = start; i < end; i += step)
    {
        if(!excluded.includes(i)){
            range.push(i);
        }
    }
    return range;
}

function PullRandom<T>( array: T[], quantity: number ){
    if(quantity > array.length){
        throw new Error("Quantity of elements to pull is larger than array lenght.");
    }
    const randomArray = new Array<T>();
    let indexMax = array.length - 1;
    while(quantity > 0)
    {
        var randomIndex = Math.floor(Math.random() * indexMax);

        randomArray.push(array[randomIndex]);

        var tmp = array[randomIndex];
        array[randomIndex] = array[indexMax];
        array[indexMax] = tmp;

        indexMax -= 1;
        quantity -= 1;
    }

    return randomArray;
}



export default class Game{
    private size: {width: number, height: number};
    private numberOfBombs: number;
    private firstClick: boolean;
    private eventManager: EventManager;

    private board: Cell[];

    public constructor(size: {width: number, height: number}, numberOfBombs: number){
        this.size = size;
        this.numberOfBombs = numberOfBombs;
        this.firstClick = true;
        this.eventManager = new EventManager();
        this.eventManager.AddEventHandler<OnCellChangeArgs>(GameEvents.cellChange);

        this.CreateBoard();
        
    }

    private CreateBoard(){
        const arrayLenght = this.size.width*this.size.height;
        this.board = new Array<Cell>();

        for(let i = 0; i < arrayLenght; i++)
        {
            this.board.push(new Cell());
        }
    }

    public GetEventHandler( event: GameEvents ) {
        return this.eventManager.GetEventHandler(event);
    }

    private BoardIndexOf(position: Position){
        return position.x+position.y*this.size.width;
    }

    private BoardPositionOf(index: number){
        if(index >= this.board.length){
            throw new Error("Index out of range.");
        }
        var x = index%this.size.width;
        var y = Math.floor(index/this.size.width)
        return new Position(x, y);
    }

    private IsInsside(position: Position){
        return position.x >= 0 && position.x < this.size.width && position.y >= 0 && position.y < this.size.height;
    }

    private GetMatrix(position: Position){
        const output = new Array<Position>();
        for(var i = position.x-1; i <= position.x +1; i++)
        {
            for(var j = position.y-1; j <= position.y +1; j++)
            {
                var neighborPosition = new Position(i, j);
                if(this.IsInsside( neighborPosition )){
                    output.push(neighborPosition);
                }
            }
        }
        return output;
    }

    private GetNeighborPositions(position: Position){
        return this.GetMatrix(position).filter(pos => !pos.Equals(position));
    }

    private GetUnopenedNeighborPosition(position: Position){
        const output = new Array<Position>();
        this.GetNeighborPositions(position).forEach(neighborPosition => {
            if(!this.board[this.BoardIndexOf(neighborPosition)].isOpened) {
                output.push(neighborPosition);
            }
        });
        return output;
    }




    public Open(position: Position){ // TODO cascade opening not implemented.
        if(this.firstClick){
            this.GenerateMap(position);
            this.firstClick = false;
        }
        const index = this.BoardIndexOf(position);
        const cell = this.board[index];
        if(cell.isOpened || cell.isMarked) { return; }
        if(cell.isBomb) { return; } // TODO - End of the game.
        this.CascadeOpen(position);
    }

    public Mark(position: Position){
        const index = this.BoardIndexOf(position);
        const cell = this.board[index];
        if(cell.isOpened) { return; }

        cell.isMarked = !cell.isMarked;
        this.CellChanged(position);
    }

    private CellChanged(position: Position){
        const OpenEventHandler = this.eventManager.GetEventHandler(GameEvents.cellChange) as EventHandler<OnCellChangeArgs>;
        const args: OnCellChangeArgs = {index: this.BoardIndexOf(position), cell: this.board[this.BoardIndexOf(position)] }
        OpenEventHandler.ExecuteListeners(args);
    }

    private CascadeOpen(position: Position){
        const cell = this.board[this.BoardIndexOf(position)];
        cell.isOpened = true;
        this.CellChanged(position);

        if(cell.neighborBombs != 0) { return; }

        const neighbors = this.GetNeighborPositions(position);
        neighbors.forEach(neighborPosition => {
            const neightbor = this.board[this.BoardIndexOf(neighborPosition)];
            if(!neightbor.isOpened && !neightbor.isMarked){
                this.CascadeOpen(neighborPosition);
            }
        });

    }

    private GenerateMap(firstClickPosition: Position){
        const excludedIndexes = this.GetMatrix(firstClickPosition).map(position => this.BoardIndexOf(position) )
        const availableIndexes = GetRange(0, this.board.length, 1, excludedIndexes)
        this.PlaceBombs(availableIndexes);
    }

    private PlaceBombs(availableIndexes: Array<number>){
        const positions = PullRandom<number>(availableIndexes, this.numberOfBombs).map(index => this.BoardPositionOf(index));
        positions.forEach(position => {
            this.SetBombAt(position);
        });

    }
    private SetBombAt(position: Position)
    {
        const index = this.BoardIndexOf(position);
        if(this.board[index].isBomb){
            return;
        }

        this.board[index].isBomb = true;
        const neighborIndexes = this.GetUnopenedNeighborPosition(position).map(p => this.BoardIndexOf(p));
        neighborIndexes.forEach(neighborIndex => {
            this.board[neighborIndex].AddNeigbourBomb();
        });
    }
}