import IComponent from './IComponent';
import Clickable from './Clickable'

export enum CellViewTypes{
    unopened,
    opened
}

export default class Cell extends Clickable implements IComponent{
    private element: HTMLElement;
    private ViewType: CellViewTypes;
    private Value: number;
    constructor(Value: number) {
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add("BorderedContainer");
        this.element.addEventListener('click', ()=>{this.Clicked()});

        this.ViewType = CellViewTypes.unopened;
        this.Value = Value;
    }

    

    public Open = () => {
        if(this.ViewType == CellViewTypes.opened) {
            return;
        }
        this.ViewType = CellViewTypes.opened;
        this.element.classList.replace("BorderedContainer", "NonBorderedContainer");
        this.Disable();
    }

    public Enable = () => {
        if(!this.element.classList.contains("CellEnabled")){
            this.element.classList.add("CellEnabled");
        }
        super.Enable()
    }

    public Disable = () => {
        if(this.element.classList.contains("CellEnabled")){
            this.element.classList.remove("CellEnabled");
        }
        super.Disable()
    }

    public GetComponent = () =>{
        
        const container = document.createElement('DIV');
        container.classList.add('CellContainer');
        container.appendChild(this.element);
        return container;
    }
}