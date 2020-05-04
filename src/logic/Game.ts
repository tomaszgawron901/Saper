import EventManager from '../events/EventManager';
import EventHandler from '../events/EventHandler';
import Position from './Position';
import Cell from './Cell';
import Timer, { ITimerChangeHandler } from './timer';

export interface OnCellChangeArgs{
    index: number;
    cell: Cell;
}

export interface OnWinArgs{}

export interface OnDefeatArgs{
    lastOpenedIndex: number;
}

export interface OnBombsToDisarmChangedArgs{
    bombsToDisarm: number;
}

export enum GameEvents{
    cellChange = "cellChange",
    bombsToDisarmChanged = "bombsToDisarmChanged",
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
    private cellsToOpen: number;
    private bombsToDisarm: number;
    private numberOfBombs: number;
    private firstClick: boolean;
    private eventManager: EventManager;
    private inProgress: boolean;
    private timer: Timer;
    private board: Cell[];

    public get Timer(){
        return this.timer as ITimerChangeHandler;
    }

    private set BombsToDisarm(value: number) {
        if(this.bombsToDisarm == value){
            return;
        }
        this.bombsToDisarm = value;
        this.BombsToDisarmChanged()
    }

    public constructor(size: {width: number, height: number}, numberOfBombs: number){
        this.InitializeEvents()

        this.size = size;
        this.numberOfBombs = numberOfBombs;
        this.cellsToOpen = size.width*size.height - numberOfBombs;
        this.BombsToDisarm = numberOfBombs;
        this.firstClick = true;
        this.inProgress = true;
        this.timer = new Timer();

        this.CreateBoard();
    }

    private InitializeEvents(){
        this.eventManager = new EventManager();
        this.eventManager.AddEventHandler<OnCellChangeArgs>(GameEvents.cellChange);
        this.eventManager.AddEventHandler<OnDefeatArgs>(GameEvents.defeat);
        this.eventManager.AddEventHandler<OnWinArgs>(GameEvents.win);
        this.eventManager.AddEventHandler<OnBombsToDisarmChangedArgs>(GameEvents.bombsToDisarmChanged);
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

    public Open(position: Position){
        if(!this.inProgress) { return; }

        const index = this.BoardIndexOf(position);
        const cell = this.board[index];
        if(cell.isOpened || cell.isMarked) { return; }
        if(this.firstClick){
            this.OnFirstClick(position);
        }

        if(cell.isBomb) {
            this.OnGameLose(position);
            return; 
        }
        this.CascadeOpen(position);
    }

    public Mark(position: Position){
        if(!this.inProgress) { return; }

        const index = this.BoardIndexOf(position);
        const cell = this.board[index];
        if(cell.isOpened) { return; }

        cell.isMarked = !cell.isMarked;
        if(cell.isMarked){
            this.BombsToDisarm = this.bombsToDisarm - 1;
        }
        else{
            this.BombsToDisarm = this.bombsToDisarm + 1;
        }
        this.CellChanged(position);
    }

    private OnFirstClick(position: Position){
        this.GenerateMap(position);
        this.timer.Start();
        this.firstClick = false;
    }

    private OnGameLose(position: Position){
        this.OnGameEnd();
        this.DetonateAll();
        this.GameLost(position);
    }

    private OnGameWin(){
        this.OnGameEnd();
        this.MarkAll();
        this.GameWon();
    }

    private OnGameEnd(){
        this.inProgress = false;
        this.timer.Stop();
    }

    private CellChanged(position: Position | number){
        let index;
        if(position instanceof Position)
        { 
            index = this.BoardIndexOf(position); 
        } 
        else{
            index = position
        }

        const OpenEventHandler = this.eventManager.GetEventHandler(GameEvents.cellChange) as EventHandler<OnCellChangeArgs>;
        const args: OnCellChangeArgs = {index: index, cell: this.board[index] }
        OpenEventHandler.ExecuteListeners(args);
    }

    private GameLost(position: Position)
    {
        const DefeatEventHandler = this.eventManager.GetEventHandler(GameEvents.defeat) as EventHandler<OnDefeatArgs>;
        const args: OnDefeatArgs = {lastOpenedIndex: this.BoardIndexOf(position)};
        DefeatEventHandler.ExecuteListeners(args);
    }

    private GameWon(){
        const WinEventHandler = this.eventManager.GetEventHandler(GameEvents.win) as EventHandler<OnWinArgs>;
        const args: OnWinArgs = {};
        WinEventHandler.ExecuteListeners(args);
    }

    private BombsToDisarmChanged(){
        const BombsToDisarmEventHandler = this.eventManager.GetEventHandler(GameEvents.bombsToDisarmChanged) as EventHandler<OnBombsToDisarmChangedArgs>;
        const args: OnBombsToDisarmChangedArgs = { bombsToDisarm: this.bombsToDisarm };
        BombsToDisarmEventHandler.ExecuteListeners(args);
    }

    private DetonateAll()
    {
        const lenght = this.size.width*this.size.height
        for(let index = 0; index < lenght; index++)
        {
            const cell = this.board[index];
            if( (cell.isBomb && !cell.isMarked) || (cell.isMarked && !cell.isBomb))
            {
                cell.isOpened = true;
                this.CellChanged(index);
            }
        }
    }

    private MarkAll(){
        const lenght = this.size.width*this.size.height
        for(let index = 0; index < lenght; index++)
        {
            const cell = this.board[index];
            if( !(cell.isOpened || cell.isMarked))
            {
                cell.isMarked = true;
                this.CellChanged(index);
            }
        }
    }

    private CascadeOpen(position: Position){

        this.OpenCell(position);

        const cell = this.board[this.BoardIndexOf(position)];
        if(cell.neighborBombs != 0) { return; }

        const neighbors = this.GetNeighborPositions(position);
        neighbors.forEach(neighborPosition => {
            const neightbor = this.board[this.BoardIndexOf(neighborPosition)];
            if(!neightbor.isOpened && !neightbor.isMarked){
                this.CascadeOpen(neighborPosition);
            }
        });

    }

    private OpenCell(position: Position)
    {
        const cell = this.board[this.BoardIndexOf(position)];
        cell.isOpened = true;
        this.cellsToOpen -= 1;
        this.CellChanged(position);
        if(this.cellsToOpen == 0){
            this.OnGameWin();
        }
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
        const neighborIndexes = this.GetNeighborPositions(position).map(p => this.BoardIndexOf(p));
        neighborIndexes.forEach(neighborIndex => {
            this.board[neighborIndex].AddNeigbourBomb();
        });
    }


    public Dispatch(){
        this.timer.Stop();
    }
}