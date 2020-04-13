export default class Position{
    public x: number;
    public y: number;

    public constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    
    public Equals(other: Position){
        return this.x == other.x && this.y == other.y;
    }

    public ToString(){
        return this.x.toString() + " " + this.y.toString();
    }
}