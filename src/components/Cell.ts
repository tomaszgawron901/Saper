import IComponent from './IComponent';
import Clickable from './Clickable'

export enum CellViewTypes{
    unopened,
    opened
}



export default class Cell extends Clickable<null> implements IComponent{
    private element: HTMLElement;
    private ViewType: CellViewTypes;
    private Value: number;
    constructor() {
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add("BorderedContainer");
        this.element.classList.add("CellInterior");
        this.element.classList.add("CellEnabled");
        this.element.addEventListener('click', ()=>{this.Clicked()});

        this.ViewType = CellViewTypes.unopened;
    }

    public Reset(){
        this.element.classList.add("BorderedContainer");
        this.ViewType = CellViewTypes.unopened;
        this.Enable();
    }

    public Open(){
        if(this.ViewType == CellViewTypes.opened) {
            return;
        }
        this.ViewType = CellViewTypes.opened;
        this.element.classList.replace("BorderedContainer", "NonBorderedContainer");
        this.Disable();
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