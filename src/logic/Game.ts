import EventManager from '../events/EventManager';
import EventHandler from '../events/EventHandler';
import Position from './Position';

export interface OnOpenArgs{
    index: number;
    value: number;
}

export interface OnWinArgs{}

export interface OnDefeatArgs{}

export enum GameEvents{
    open = "open",
    win = "win",
    defeat = "defeat"
}

export default class Game{
    private size: {width: number, height: number};
    private numberOfBombs: number;
    private firstClick: boolean;
    private eventManager: EventManager;

    /*
     * Meaning of numbers inside board.
     * <0, 8> - unopened cell, number of neighbor bombs
     * <-9, -1> - opened cell, bitwise not number of neighbor bombs
     * 9 - unopened bomb
     * -10 - opened bomb
     */
    private board: number[];
    private bombIndexes: number[];

    public constructor(size: {width: number, height: number}, numberOfBombs: number){
        this.size = size;
        this.numberOfBombs = numberOfBombs;
        this.firstClick = true;
        this.eventManager = new EventManager();
        this.eventManager.AddEventHandler<OnOpenArgs>(GameEvents.open);

        this.board = new Array<number>(this.size.width*this.size.height);
    }

    public GetEventHandler( event: GameEvents ) {
        return this.eventManager.GetEventHandler(event);
    }

    private BoardIndexOf(position: Position){
        return position.x+position.y*this.size.width;
    }

    private IsInsside(position: Position){
        return position.x >= 0 && position.x < this.size.width && position.y >= 0 && position.y < this.size.height;
    }

    private IsUnOpened(position: Position){
        return this.board[this.BoardIndexOf(position)] >= 0;
    }

    private IsBomb(position: Position){
        return this.board[this.BoardIndexOf(position)] == 9;
    }

    private SetValue(position: Position, value: number){
        this.board[this.BoardIndexOf(position)] = value;
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
            if(this.IsUnOpened(neighborPosition)) {
                output.push(neighborPosition);
            }
        });
        return output;
    }

    private GetNumberOfAdjacentBombs(position: Position){
        var sum = 0;
        this.GetNeighborPositions(position).forEach(neighborPosition => {
            if(this.IsBomb(neighborPosition)) {
                sum += 1;
            }
        });
        return sum;
    }

    public Open(position: Position){ // TODO cascade opening not implemented.
        if(this.firstClick){
            this.GenerateMap(position);
            this.firstClick = false;
        }
        const OpenEventHandler = this.eventManager.GetEventHandler(GameEvents.open) as EventHandler<OnOpenArgs>;
        const args: OnOpenArgs = {index: this.BoardIndexOf(position), value: this.board[this.BoardIndexOf(position)]}
        OpenEventHandler.ExecuteListeners(args);
    }

    /**
     * @param position Make sure that cell at given position is not bomb.
     * @param opened Array of opeend cells.
     */
    private CascadeOpen(position: Position, opened: Array<{index: number, value: number}>){
        const neighbors = this.GetUnopenedNeighborPosition(position);

    }

    private GenerateMap(firstClickPosition: Position){
        const excludedIndexes = this.GetMatrix(firstClickPosition).map(position => this.BoardIndexOf(position) )
        this.PlaceBombs(excludedIndexes);
        this.CalculateNeighborBombs();
    }

    private PlaceBombs(excludedIndexes: number[]){
        this.bombIndexes = new Array<number>();
        const indexes = new Array<number>();
        var indexMax = this.size.width * this.size.height - 1;
        for(var i =0; i <= indexMax; i++){
            if(!excludedIndexes.includes(i)){
                indexes.push(i);
            }
        }
        indexMax -= excludedIndexes.length;

        while(this.bombIndexes.length < this.numberOfBombs){
            var randomIndex = Math.floor(Math.random() * indexMax);

            this.board[indexes[randomIndex]] = 9;
            this.bombIndexes.push(randomIndex);

            var tmp = indexes[randomIndex];
            indexes[randomIndex] = indexes[indexMax];
            indexes[indexMax] = tmp;

            indexMax -= 1;
        }

    }

    private CalculateNeighborBombs(){
        for(var i = 0; i < this.size.width; i++) {
            for( var j =0; j < this.size.height; j++ ) {
                const position = new Position(i, j);
                const index = this.BoardIndexOf(position);
                if(!this.IsBomb(position)){
                    this.SetValue(position, this.GetNumberOfAdjacentBombs(position))
                }
            }
        }
    }


}