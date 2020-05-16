import IComponent from "../IComponent";

export default class MenuItem implements IComponent{
    private element: HTMLDivElement;
    private label: HTMLDivElement;
    private itemContainer: HTMLDivElement;
    private opened: boolean;

    private item: IComponent;
    public get Item(){
        return this.item;
    }

    private name: string;
    public get Name(){
        return this.name;
    }

    public constructor(name: string, item: IComponent)
    {
        this.opened = false;
        this.InitializeLabel();
        this.InitializeItemContainer();
        this.InitializeElement();

        this.SetName(name);
        this.SetItem(item);
    }

    private InitializeElement(){
        this.element = document.createElement('DIV') as HTMLDivElement;

        this.element.appendChild(this.label);
        this.element.appendChild(this.itemContainer);
    }

    private InitializeLabel(){
        this.label = document.createElement('DIV') as HTMLDivElement;
        this.label.classList.add('MenuItemLabel');
        this.label.onclick = () => {
            this.OnLabelClick();
        }
    }

    private InitializeItemContainer(){
        this.itemContainer = document.createElement('DIV') as HTMLDivElement;
        this.itemContainer.classList.add('MenuItemContainer');
        this.itemContainer.style.visibility = 'hidden';
    }

    private SetName(name: string){
        this.name = name;
        this.label.innerText = this.name;
    }

    private SetItem(item: IComponent)
    {
        if(item == undefined) { return; }
        this.item = item;
        this.itemContainer.appendChild(this.item.GetComponent());
    }

    public Close(){
        this.itemContainer.style.visibility = 'hidden';
        this.label.style.fontWeight = 'normal';
        this.opened = false;
    }

    public Open(){
        this.itemContainer.style.visibility = 'visible';
        this.label.style.fontWeight = 'bold';
        this.opened = true;
    }

    private OnLabelClick(){
        if(this.opened)
        {
            this.Close();
        }
        else
        {
            this.Open();
        }
    }

    public GetComponent(){
        return this.element;
    }

}