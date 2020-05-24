import IComponent from "../IComponent";
import {GetLabeledElement} from './functions';

const themes = [
    'normal_theme',
    'dark_theme',
    'hight_contrast_theme',
    'end_city_theme'
];

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


export default class OptionsMenuTab implements IComponent{
    private element: HTMLDivElement;
    private submitBTN: HTMLButtonElement;

    public themeList: ThemeList;

    public constructor(){
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

    private Submited(){

    }


    public GetComponent(){
        return this.element;
    }
}