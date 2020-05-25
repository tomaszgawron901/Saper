import IComponent from "../IComponent";
import {GetLabeledElement} from './functions';
import EventManager from "../../events/EventManager";
import EventHandler from "../../events/EventHandler";

const themes = [
    'normal_theme',
    'dark_theme',
    'hight_contrast_theme',
    'end_city_theme'
];

export interface OnSubmitArgs{
    theme: string;
}

class ThemeList implements IComponent{
    private static curentID = 0;

    private element: HTMLDivElement;
    private id: number;
    private radioButtnos: Array<HTMLInputElement>;
    private value: string;

    public get Value(){
        return this.value;
    }

    public constructor(){
        this.id = ThemeList.curentID++;
        this.InitializeRadioButtons();
        this.InitializeElement();
    }

    public Check(theme: string){
        for(let i = 0; i < themes.length; i++){
            if(themes[i] == theme){
                this.radioButtnos[i].checked = true;
                this.OnSelectionChange(i);
                return;
            }
        }
    }

    private InitializeElement(){
        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.classList.add("ReversedBorderedContainer");

        const numberOfButtons = themes.length;
        for(let i = 0; i < numberOfButtons; i++){
            this.element.appendChild(GetLabeledElement(this.radioButtnos[i], themes[i]));
        }
    }

    private InitializeRadioButtons(){
        const name = 'ThemeList' + this.id.toString();
        const numberOfButtons = themes.length;

        this.radioButtnos = new Array<HTMLInputElement>(numberOfButtons);
        for(let i = 0; i < numberOfButtons; i++){
            this.radioButtnos[i] = document.createElement("INPUT") as HTMLInputElement;
            this.radioButtnos[i].setAttribute("type", "radio");
            this.radioButtnos[i].name = name;
            this.radioButtnos[i].onchange = () => {
                this.OnSelectionChange(i);
            } 
        }
    }

    private OnSelectionChange(index: number){
        this.value = themes[index];
    }

    public GetComponent(){
        return this.element;
    }

}


export default class ThemeOptionsMenuTab implements IComponent{
    private element: HTMLDivElement;
    private submitBTN: HTMLButtonElement;
    private eventManager: EventManager;

    public themeList: ThemeList;

    public constructor(){
        this.eventManager = new EventManager();
        this.eventManager.AddEventHandler<OnSubmitArgs>("OnSubmit");

        this.themeList = new ThemeList();
        this.InitializeSubmitBTN();
        this.InitializeElement();
    }

    private InitializeElement(){
        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.classList.add('BorderedContainer');
        this.element.style.width = 'fit-content';
        this.element.style.padding = '5px';

        this.element.appendChild(this.themeList.GetComponent());
        this.element.appendChild(this.submitBTN);
    }

    private InitializeSubmitBTN(){
        this.submitBTN = document.createElement('BUTTON') as HTMLButtonElement;
        this.submitBTN.innerText = "Submit";
        this.submitBTN.style.width = '100%';
        this.submitBTN.style.marginTop = '5px';
        this.submitBTN.classList.add("BorderedContainer");
        this.submitBTN.addEventListener('click', () => { this.Submited(); })
    }

    public AddOnSubmitEventListener( func: (args: OnSubmitArgs) => void )
    {
        this.eventManager.GetEventHandler('OnSubmit').AddEventListener(func);
    }

    private Submited(){
        const onSubmitEventHandler = this.eventManager.GetEventHandler('OnSubmit') as EventHandler<OnSubmitArgs>;
        onSubmitEventHandler.ExecuteListeners({theme: this.themeList.Value});
    }


    public GetComponent(){
        return this.element;
    }
}