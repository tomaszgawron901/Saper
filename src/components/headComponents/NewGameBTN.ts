import Clickable from "../Clickable";
import IComponent from "../IComponent";


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
        this.element.classList.add('CellEnabled');

        this.SetImage('images/e1.png');
        this.element.addEventListener('click', () => {this.Clicked();});
    }

    public SetImage(path: string){
        const img = document.createElement('DIV');
        img.classList.add('ImgDIV');
        img.style.backgroundImage = "url("+path+")";
        img.style.width = "100%";
        img.style.height = "100%";
        this.element.innerHTML = "";
        this.element.appendChild(img);
    }


    public GetComponent(){
        return this.element;
    }

}