import IComponent from './IComponent';
import Clickable, {EventArgs} from './Clickable';
import Cell from './Cell';

export interface BoardElementClickArgs extends EventArgs{
    x: number;
    y: number;
}

export default class Board extends Clickable implements IComponent{

    private cells: Cell[];
    private size: {width: number, height: number};
    public constructor(size: {width: number, height:number}){
        super();
        this.size = size;
        this.CreateBoard();
    }

    private BoardIndexOf(x: number, y:number){
        return x + y*this.size.width;
    }

    private CreateBoard() {
        this.cells = new Array<Cell>(this.size.width*this.size.height);
        var y: number;
        var x: number;
        for(y = 0; y < this.size.height; y++)
        {
            for(x = 0; x < this.size.width; x++)
            {
                const cell = new Cell();
                const eventArgs = {x, y};
                cell.AddOnClickListener(() => { this.Clicked(eventArgs) });
                this.cells[this.BoardIndexOf(x, y)] = cell;
            }
        }
        x = 2137;
    }

    public GetComponent() {
        const container = document.createElement('DIV');
        container.classList.add("ReversedBorderedContainer");
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
}