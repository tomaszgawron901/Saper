import MenuItem from "./menuItem";
import IComponent from "../IComponent";


export default class Menu implements IComponent{
    private element: HTMLDivElement;
    private items: Array<MenuItem>;

    public constructor(){
        this.items = new Array<MenuItem>();

        this.InitializeElement();

    }

    private InitializeElement(){
        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.classList.add('Menu');

    }

    private ReloadItems(){
        this.element.innerHTML = "";
        this.items.forEach(item => {
            this.element.appendChild(item.GetComponent());
        });
    }

    public AddItem(index: number, name: string, element: IComponent)
    {
        if(index < 0) { index = 0; }
        if(index > this.items.length) { index = this.items.length }

        const item = new MenuItem(name, element);
        const newItems = new Array<MenuItem>();
        for(let i = 0; i < index; i++)
        {
            newItems.push(this.items[i]);
        }
        newItems.push(item);
        for(let i = index; i < this.items.length; i++)
        {
            newItems.push(this.items[i]);
        }
        this.items = newItems;
        this.ReloadItems();
    }

    public GetItemByIndex(index: number)
    {
        return this.items[index];
    }

    public GetItemByName(name: string){
        for(let i = 0; i < this.items.length; i++)
        {
            if(this.items[i].Name == name)
            {
                return this.items[i];
            }
        }
        return undefined;
    }

    public GetComponent(){
        return this.element;
    }
}