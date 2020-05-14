import IComponent from '../IComponent';
import Clickable from '../Clickable';
import Cell, {CellClickTypes} from './Cell';

export interface OnCellClickArgs{
    x: number;
    y: number;
    type: CellClickTypes;
}
export default class Board extends Clickable<OnCellClickArgs> implements IComponent{

    public readonly cells: Cell[];
    private size: {width: number, height: number};
    public constructor(size: {width: number, height:number}){
        super();
        this.size = size;
        this.cells = new Array<Cell>(this.size.width*this.size.height);
        this.FillBoard();
    }

    private BoardIndexOf(x: number, y:number){
        return x + y*this.size.width;
    }

    private FillBoard() {
        
        for(let y = 0; y < this.size.height; y++)
        {
            for(let x = 0; x < this.size.width; x++)
            {
                const cell = new Cell();
                const position = {x, y};
                cell.AddOnClickListener((args) => { 
                    const clickArgs = {...position, ...args}
                    this.Clicked(clickArgs) 
                });
                this.cells[this.BoardIndexOf(x, y)] = cell;
            }
        }
    }

    public GetComponent() {
        const container = document.createElement('DIV');
        container.classList.add("BoardContainer");
        for(var y = 0; y < this.size.height; y++){
            const row = document.createElement('DIV');
            row.classList.add("BoardRow");
            for(var x = 0; x < this.size.width; x++)
            {
                row.appendChild(this.cells[this.BoardIndexOf(x, y)].GetComponent());
            }
            container.appendChild(row);
        }
        return container;
    }

    public Reset(){
        this.cells.forEach(cell => {
            cell.Reset();
        });
    }
}