import IComponent from './IComponent';
import images from '../images/images';

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
        }
    }


    public SetValue(value: number)
    {
        for(let i = 0; i < this.decimalPlaces; i++)
        {
            const digit = Math.floor(value % Math.pow(10, i+1) / Math.pow(10, i));
            this.CounterDigits[this.decimalPlaces - 1 - i].SetValue(digit);
        }
    }

    public GetComponent() {
        this.element.innerHTML = "";
        this.CounterDigits.forEach(digit => {
            this.element.appendChild(digit.GetComponent());
        });
        return this.element;
    }
}


class CounterDigit implements IComponent{
    private element: HTMLImageElement;
    public constructor(){
        this.element = document.createElement("IMG") as HTMLImageElement;
        this.SetValue(0);
    }

    public SetValue(value: number)
    {
        this.element.src = images["c"+value.toString()].src;
    }

    public GetComponent()
    {
        return this.element;
    }
}