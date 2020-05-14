import IComponent from '../IComponent';

export default class Counter implements IComponent{
    private element: HTMLElement;
    private CounterDigits: Array<CounterDigit>;
    private decimalPlaces: number;

    public constructor(decimalPlaces: number)
    {
        this.element = document.createElement('DIV');
        this.element.classList.add("CounterContainer");

        this.decimalPlaces = decimalPlaces;
        this.CounterDigits = new Array<CounterDigit>(decimalPlaces);
        for(let i = 0; i < decimalPlaces; i++)
        {
            this.CounterDigits[i] = new CounterDigit();
            this.element.appendChild(this.CounterDigits[i].GetComponent());
        }
    }


    public SetValue(value: number)
    {
        const strValue = Math.floor(value).toString().padStart(this.decimalPlaces, '0');
        for(let i = 0; i < this.decimalPlaces; i++)
        {
            this.CounterDigits[this.decimalPlaces - 1 - i].SetValue(strValue[strValue.length - 1 - i]);
        }
    }

    public GetComponent() {
        return this.element;
    }
}


class CounterDigit implements IComponent{
    private element: HTMLDivElement;
    public constructor(){
        this.element = document.createElement("DIV") as HTMLDivElement;
        this.element.classList.add('CounterImage');
        this.element.draggable = false;
        this.SetValue('0');
    }

    public SetValue(value: string)
    {
        this.element.style.backgroundImage = "url(images/c"+value+".gif)";
    }

    public GetComponent()
    {
        return this.element;
    }
}