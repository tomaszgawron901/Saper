import IComponent from "./IComponent";
import EventManager from "../events/EventManager";
import EventHandler from "../events/EventHandler";
import {GameTypeNames} from '../logic/gameTypes';


export interface OnSubmitArgs{
    gameType: GameTypeNames;
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

    private gameType: GameTypeNames;

    private customWidthInput: HTMLInputElement;
    private customHeightInput: HTMLInputElement;
    private customBombsInput: HTMLInputElement;

    public get GameType(){
        return this.gameType;
    }

    public get CustomValue(){
        return {width:  parseInt(this.customWidthInput.value) , height: parseInt(this.customHeightInput.value), bombs: parseInt(this.customBombsInput.value)};
    }

    public Check(gameType: GameTypeNames){
        this.radioButtnos[gameType].checked = true;
        this.OnSelectionChange(gameType);
    }

    public constructor(){
        this.id = GameOptionsTable.curentID++;
        this.InitializeRadioButtons();

        this.table = document.createElement('TABLE') as HTMLTableElement;
        this.table.classList.add('ReversedBorderedContainer');
        
        this.AppendRow(0, ["", "Width", "Height", "Bombs"]);
        this.AppendRow(1, [GetLabeledElement(this.radioButtnos[0], "Beginner"), "8", "8", "10"]);
        this.AppendRow(2, [GetLabeledElement(this.radioButtnos[1], "Intermediate"), "16", "16", "40"]);
        this.AppendRow(3, [GetLabeledElement(this.radioButtnos[2], "Expert"), "32", "16", "99"]);

        this.customWidthInput = document.createElement('INPUT') as HTMLInputElement;
        this.customWidthInput.style.width = '40px';
        this.customHeightInput = document.createElement('INPUT') as HTMLInputElement;
        this.customHeightInput.style.width = '40px';
        this.customBombsInput = document.createElement('INPUT') as HTMLInputElement;
        this.customBombsInput.style.width = '40px';
        this.AppendRow(4, [GetLabeledElement(this.radioButtnos[3], "Custom"), this.customWidthInput, this.customHeightInput, this.customBombsInput]);
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

    private OnSelectionChange(gameType: GameTypeNames){
        this.gameType = gameType;
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


class GameOptionsTab implements IComponent{
    private element: HTMLDivElement;
    private got: GameOptionsTable;
    private eventManager: EventManager;
    
    public constructor(){
        this.eventManager = new EventManager();
        this.eventManager.AddEventHandler<OnSubmitArgs>("OnSubmit");

        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.classList.add('BorderedContainer');
        this.element.style.width = 'fit-content';
        this.element.style.padding = '5px';

        this.got = new GameOptionsTable();
        this.element.appendChild(this.got.GetComponent());

        const subBTN = document.createElement('BUTTON') as HTMLButtonElement;
        subBTN.innerText = "Submit";
        subBTN.style.width = '100%';
        subBTN.style.marginTop = '5px';
        subBTN.classList.add("BorderedContainer");
        subBTN.addEventListener('click', () => { this.Submited(); })
        this.element.appendChild(subBTN);

    }

    public get CustomValue(){
        return this.got.CustomValue;
    }

    public Check(gameType: GameTypeNames){
        this.got.Check(gameType);
    }

    public AddOnSubmitEventListener( func: (args: OnSubmitArgs) => void )
    {
        this.eventManager.GetEventHandler('OnSubmit').AddEventListener(func);
    }

    private Submited(){
        const onSubmitEventHandler = this.eventManager.GetEventHandler('OnSubmit') as EventHandler<OnSubmitArgs>;
        onSubmitEventHandler.ExecuteListeners({gameType: this.got.GameType});
    }


    public GetComponent(){
        return this.element;
    }
}

export default class GameOptionsMenuTab implements IComponent{
    private element: HTMLDivElement
    public readonly gameOptionsTab: GameOptionsTab;

    private gameOptionsTabElement: HTMLElement;
    private nameElement: HTMLElement;

    private static tabName = "Game";
    private static height = "20px";

    public constructor(){
        this.gameOptionsTab = new GameOptionsTab();
        this.gameOptionsTabElement = this.gameOptionsTab.GetComponent();
        this.gameOptionsTabElement.style.position = 'relative';
        this.gameOptionsTabElement.style.visibility = 'hidden';
        this.gameOptionsTabElement.style.top = '-5px';

        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.style.height = GameOptionsMenuTab.height;
        this.nameElement = document.createElement('DIV') as HTMLDivElement;
        this.nameElement.innerHTML = GameOptionsMenuTab.tabName;
        this.nameElement.style.userSelect = 'none';
        this.nameElement.classList.add('MenuTab');
        this.element.appendChild(this.nameElement);
        this.element.appendChild(this.gameOptionsTabElement);

        this.nameElement.onclick = () => {
            if(this.gameOptionsTabElement.style.visibility == 'hidden')
            {
                this.Open();
            }else{
                this.Close();
            }
        }
    }

    public Close(){
        this.gameOptionsTabElement.style.visibility = 'hidden';
        this.nameElement.style.fontWeight = 'normal';
    }

    public Open(){
        this.gameOptionsTabElement.style.visibility = 'visible';
        this.nameElement.style.fontWeight = 'bold';
    }
    

    public GetComponent(){
        return this.element;
    }
}