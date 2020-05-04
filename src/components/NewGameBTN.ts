import Clickable from "./Clickable";
import IComponent from "./IComponent";


export interface OnNewGameBTNClickArgs{

}

export default class NewGameBTN extends Clickable<OnNewGameBTNClickArgs> implements IComponent
{
    private element: HTMLElement;

    public constructor(){
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add('NewGameBTN');
        this.element.classList.add('BorderedContainer');

        this.element.addEventListener('click', () => {this.Clicked();});
    }


    public GetComponent(){
        return this.element;
    }

}