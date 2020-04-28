import IComponent from './IComponent';
import Clickable from './Clickable'

export enum CellClickTypes{
    rightClick,
    leftClick
}

export interface OnCellClickArgs {
    type: CellClickTypes;
}

export default class Cell extends Clickable<OnCellClickArgs> implements IComponent{
    private element: HTMLElement;
    constructor() {
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add("BorderedContainer");
        this.element.classList.add("CellInterior");
        this.element.classList.add("CellEnabled");
        this.SetBackgroundColor();
        this.element.addEventListener('click', ()=>{this.Clicked({type: CellClickTypes.leftClick})});
        this.element.addEventListener('contextmenu', ()=>{this.Clicked({type: CellClickTypes.rightClick})});
    }

    public SetImage(img : HTMLImageElement){
        this.element.innerHTML = "";
        img.draggable = false;
        this.element.appendChild(img);
    }

    public SetBackgroundColor(color: string = null)
    {
        if(color == null) {
            this.element.style.backgroundColor = "";
            return;
        }
        this.element.style.backgroundColor = color;
    }

    public Reset(){
        this.element.classList.add("BorderedContainer");
        this.element.classList.add("CellEnabled");
        this.SetBackgroundColor();
        this.Enable();
    }

    public Enable(){
        if(!this.element.classList.contains("CellEnabled")){
            this.element.classList.add("CellEnabled");
        }
        super.Enable()
    }

    public Disable(){
        if(this.element.classList.contains("CellEnabled")){
            this.element.classList.remove("CellEnabled");
            this.element.classList.replace("BorderedContainer", "NonBorderedContainer");
        }
        super.Disable();
    }

    public GetComponent(){
        
        const container = document.createElement('DIV');
        container.classList.add('CellContainer');
        container.appendChild(this.element);
        return container;
    }
}