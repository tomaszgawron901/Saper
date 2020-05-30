import IComponent from "../IComponent";
import EventHandler from "../../events/EventHandler";


class NickInput implements IComponent{
    private element: HTMLInputElement;

    public get Value(){
        return this.element.value;
    }

    public set Value(value: string){
        this.element.value = value;
    }

    public constructor(){
        this.element = document.createElement('INPUT') as HTMLInputElement;
        this.element.type = 'text';
        this.element.maxLength = 20;
    }

    public GetComponent(){
        return this.element;
    }

}

export interface OnNickSubmitEventArgs{
    nick: string;
}

export default class RankingOprionsMenuTab implements IComponent{
    private element: HTMLDivElement;
    private submitBTN: HTMLButtonElement;
    public readonly nickInput: NickInput;
    public readonly onSubmitEventHandler: EventHandler<OnNickSubmitEventArgs>;

    public constructor()
    {
        this.onSubmitEventHandler = new EventHandler<OnNickSubmitEventArgs>();
        this.nickInput = new NickInput();
        this.InitializeSubmitBTN();
        this.InitializeElement();   
    }

    private InitializeElement(){
        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.classList.add('BorderedContainer');
        this.element.style.width = 'fit-content';
        this.element.style.padding = '5px';

        const inputContainer = document.createElement('DIV') as HTMLDivElement;
        inputContainer.classList.add('ReversedBorderedContainer');

        const label = document.createElement('DIV') as HTMLDivElement;
        label.innerText = "Nick";

        inputContainer.appendChild(label);
        inputContainer.appendChild(this.nickInput.GetComponent());

        this.element.appendChild(inputContainer);
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
        const nick = this.nickInput.Value;
        this.onSubmitEventHandler.ExecuteListeners({nick});
    }

    public GetComponent(){
        return this.element;
    }

}