
export class Position{
    public x: number;
    public y: number;

    public constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    
    public Equals = (other: Position) => {
        return this.x == other.x && this.y == other.y;
    }
}

export default class Game{
    private size: {x: number, y: number};
    private numberOfBombs: number;
    private firstClick: boolean;

    /*
     * Meaning of numbers inside board.
     * <0, 8> - unopened cell, number of neighbor bombs
     * <-9, -1> - opened cell, bitwise not number of neighbor bombs
     * 9 - unopened bomb
     * -10 - opened bomb
     */
    private board: number[];
    private bombIndexes: number[];

    public constructor(size: {x: number, y: number}, numberOfBombs: number){
        this.size = size;
        this.numberOfBombs = numberOfBombs;
        this.firstClick = true;

        this.board = new Array<number>(this.size.x*this.size.y);
    }

    private BoardIndexOf = (position: Position) => {
        return position.x+position.y*this.size.x;
    }

    private IsInsside = (position: Position) => {
        return position.x >= 0 && position.x < this.size.x && position.y >= 0 && position.y < this.size.y;
    }

    private IsUnOpened = (position: Position) => {
        return this.board[this.BoardIndexOf(position)] >= 0;
    }

    private IsBomb = (position: Position) => {
        return this.board[this.BoardIndexOf(position)] == 9;
    }

    private SetValue = (position: Position, value: number) => {
        this.board[this.BoardIndexOf(position)] = value;
    }

    private GetMatrix = (position: Position) => {
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

    private GetNeighborPositions = (position: Position) => {
        return this.GetMatrix(position).filter(pos => !pos.Equals(position));
    }

    private GetUnopenedNeighborPosition = (position: Position) => {
        const output = new Array<Position>();
        this.GetNeighborPositions(position).forEach(neighborPosition => {
            if(this.IsUnOpened(neighborPosition)) {
                output.push(neighborPosition);
            }
        });
        return output;
    }

    private GetNumberOfAdjacentBombs = (position: Position) =>{
        var sum = 0;
        this.GetNeighborPositions(position).forEach(neighborPosition => {
            if(this.IsBomb(neighborPosition)) {
                sum += 1;
            }
        });
        return sum;
    }

    public Open = (position: Position) => {
        if(this.firstClick){
            this.GenerateMap(position);
            this.firstClick = false;
        }
        // TODO - cell opening
    }

    private GenerateMap = (firstClickPosition: Position) => {
        const excludedIndexes = this.GetMatrix(firstClickPosition).map(this.BoardIndexOf)
        this.PlaceBombs(excludedIndexes);
        this.CalculateNeighborBombs();
    }

    private PlaceBombs = (excludedIndexes: number[]) => {
        this.bombIndexes = new Array<number>();
        const indexes = new Array<number>();
        var indexMax = this.size.x * this.size.y - 1;
        for(var i =0; i <= indexMax; i++){
            if(!excludedIndexes.includes(i)){
                indexes.push(i);
            }
        }

        while(this.bombIndexes.length < this.numberOfBombs){
            var randomIndex = Math.floor(Math.random() * indexMax);

            this.board[randomIndex] = 9;
            this.bombIndexes.push(randomIndex);

            var tmp = indexes[randomIndex];
            indexes[randomIndex] = indexes[indexMax];
            indexes[indexMax] = tmp;

            indexMax -= 1;
        }

    }

    private CalculateNeighborBombs = () => {
        for(var i = 0; i < this.size.x; i++) {
            for( var j =0; j < this.size.y; j++ ) {
                const position = new Position(i, j);
                const index = this.BoardIndexOf(position);
                if(!this.IsBomb(position)){
                    this.SetValue(position, this.GetNumberOfAdjacentBombs(position))
                }
            }
        }
    }
}