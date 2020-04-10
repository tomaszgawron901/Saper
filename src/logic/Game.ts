
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
    }

    private BoardIndexOf = (position: {x: number, y: number}) => {
        return position.x+position.y*(this.size.x+1);
    }

    private IsInsside = (position: {x: number, y: number}) => {
        return position.x >= 0 && position.x < this.size.x && position.y >= 0 && position.y < this.size.y;
    }

    private IsUnOpened = (position: {x: number, y: number}) => {
        return this.board[this.BoardIndexOf(position)] >= 0;
    }


    private GetUnopenedNeighborIndexes = (position: {x: number, y: number}) => {
        const output = new Array<number>();
        for(var i = position.x-1; i <= position.x +1; i++)
        {
            for(var j = position.y-1; j <= position.y +1; j++)
            {
                var position = {x: i, y: j};
                if(this.IsInsside( position ) && this.IsUnOpened(position)){
                    output.push(this.BoardIndexOf(position));
                }
            }
        }
        return output;
    }

    public Open = (position: {x: number, y: number}) => {
        if(this.firstClick){
            this.GenerateMap(position);
        }
    }

    private GenerateMap = (firstClickPosition: {x: number, y: number}) => {
        this.PlaceBombs(this.GetUnopenedNeighborIndexes(firstClickPosition));

    }

    private PlaceBombs = (excludedIndexes: number[]) => {
        this.bombIndexes = new Array<number>(this.numberOfBombs);
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
            this.bombIndexes.push();

            var tmp = indexes[randomIndex];
            indexes[randomIndex] = indexes[indexMax];
            indexes[indexMax] = tmp;

            indexMax -= 1;
        }

    }


}