
export default class Cell {
    public isBomb: boolean;
    public isOpened: boolean;
    public isMarked: boolean;
    public neighborBombs: number;
    
    public constructor() {
        this.isBomb = false;
        this.isOpened = false;
        this.isMarked = false;
        this.neighborBombs = 0;
    }

    public AddNeigbourBomb() {
        this.neighborBombs += 1;
    }
}