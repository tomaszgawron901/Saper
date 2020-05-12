import IComponent from "./IComponent";

enum GameTypes{
    beginner = 0,
    intermediate = 1,
    expert = 2,
    custom = 3
}

function GetLabeledElement(element: HTMLElement, text: string)
{
    const label = document.createElement('LABEL') as HTMLLabelElement;
    const textElement = document.createElement('TEXT');
    textElement.innerText = text;
    label.appendChild(element);
    label.appendChild(textElement);
    return label;
}

class GameOptionsTable implements IComponent{
    private static curentID = 0;

    private table: HTMLTableElement;
    private radioButtnos: Array<HTMLInputElement>;
    private id: number;

    private gameType: GameTypes;
    private customValue: {width: number, height: number, bombs: number};

    public Check(gameType: GameTypes){
        this.radioButtnos[gameType].checked = true;
        this.OnSelectionChange(gameType);
    }

    public constructor(){
        this.id = GameOptionsTable.curentID++;
        this.InitializeRadioButtons();

        this.table = document.createElement('TABLE') as HTMLTableElement;
        this.table.classList.add('OptionsTab');
        
        this.AppendRow(0, ["", "Width", "Height", "Bombs"]);

        this.AppendRow(1, [GetLabeledElement(this.radioButtnos[0], "Beginner"), "8", "8", "10"]);

        this.AppendRow(2, [GetLabeledElement(this.radioButtnos[1], "Intermediate"), "16", "16", "40"]);


        this.AppendRow(3, [GetLabeledElement(this.radioButtnos[2], "Expert"), "32", "16", "99"]);

        const in1 = document.createElement('INPUT') as HTMLInputElement;
        in1.style.width = '40px';
        const in2 = document.createElement('INPUT') as HTMLInputElement;
        in2.style.width = '40px';
        const in3 = document.createElement('INPUT') as HTMLInputElement;
        in3.style.width = '40px';
        this.AppendRow(4, [GetLabeledElement(this.radioButtnos[3], "Custom"), in1, in2, in3]);
        this.Check(2);
    }

    private InitializeRadioButtons(){
        const numberOfButtons = 4;
        const name = "GameTypes" + this.id.toString();
        this.radioButtnos = new Array<HTMLInputElement>(numberOfButtons);
        for(let i = 0; i < numberOfButtons; i++)
        {
            this.radioButtnos[i] = document.createElement("INPUT") as HTMLInputElement;
            this.radioButtnos[i].setAttribute("type", "radio");
            this.radioButtnos[i].name = name;
            this.radioButtnos[i].onchange = () => {
                this.OnSelectionChange(i);
            }
        }
    }

    private OnSelectionChange(gameType: GameTypes){
        this.gameType = gameType;
        console.log(gameType);
        
    }

    private AppendRow(index: number = 0, elements: Array<HTMLElement | string>){
        const row = this.table.insertRow(index);
        for(let i = elements.length-1; i >= 0; i--)
        {
            const cell = row.insertCell(0);
            if(elements[i] instanceof HTMLElement)
            {
                cell.appendChild(elements[i] as HTMLElement);
            }
            else if (typeof elements[i] === 'string')
            {
                cell.innerHTML = elements[i] as string;
            }
        }
    }

    public GetComponent(){
        return this.table;
    }
}


export default class GameOptionsTab implements IComponent{
    private element: HTMLDivElement;
    
    public constructor(){
        this.element = document.createElement('DIV') as HTMLDivElement;
        const got = new GameOptionsTable();
        
        this.element.appendChild(got.GetComponent());
    }


    public GetComponent(){
        return this.element;
    }
}