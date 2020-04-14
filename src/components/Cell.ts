import IComponent from './IComponent';
import Clickable from './Clickable'

export enum CellClickTypes{
    rightClick,
    leftClick
}

export default class Cell extends Clickable<CellClickTypes> implements IComponent{
    private element: HTMLElement;
    constructor() {
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add("BorderedContainer");
        this.element.classList.add("CellInterior");
        this.element.classList.add("CellEnabled");
        this.element.addEventListener('click', ()=>{this.Clicked(CellClickTypes.leftClick)});
        this.element.addEventListener('contextmenu', ()=>{this.Clicked(CellClickTypes.rightClick)});
    }

    public Reset(){
        this.element.classList.add("BorderedContainer");
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
            this.element.classList.remove("BorderedContainer");
            this.element.classList.add("NonBorderedContainer");
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