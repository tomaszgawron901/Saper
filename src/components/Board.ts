import IComponent from './IComponent';
import Cell from './Cell';

export default class Board implements IComponent{

    private cells: Cell[];
    private size: {width: number, height: number};
    public constructor(size: {width: number, height:number}){
        this.cells = new Array<Cell>();
        this.size = size;
        for(var y = 0; y < this.size.height; y++)
        {
            for(var x = 0; x < this.size.width; x++)
            {
                const cell = new Cell();
                cell.AddOnClickListener(() => { this.Clicked(x, y); });

            }
        }
    }

    private Clicked(x: number, y: number){

    }


    public render = () => {

        return;
    }
}