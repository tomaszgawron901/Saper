import IComponent from "../IComponent";
import Counter from "./Counter";
import NewGameBTN from "./NewGameBTN";

export default class HeadContainer implements IComponent{
    private leftCounter: Counter;
    private rightCounter: Counter;
    private newGameBTN: NewGameBTN;

    public get LeftCounter(): Counter{
        return this.leftCounter;
    }

    public get RigthCounter(): Counter{
        return this.rightCounter;
    }

    public get NewGameBTN(): NewGameBTN{
        return this.newGameBTN;
    }

    public constructor(){
        this.leftCounter = new Counter(3);
        this.rightCounter = new Counter(3);
        this.newGameBTN = new NewGameBTN();
    }

    public Reset(){
        this.leftCounter.SetValue(0);
        this.rightCounter.SetValue(0);
    }

    public GetComponent(){
        const element = document.createElement('DIV') as HTMLDivElement;
        element.classList.add("HeadContainer");
        element.appendChild(this.leftCounter.GetComponent());
        element.appendChild(this.newGameBTN.GetComponent());
        element.appendChild(this.rightCounter.GetComponent());
        return element;
    }
}