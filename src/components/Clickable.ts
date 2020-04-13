import EventManager from '../events/EventManager';


export default abstract class Clickable<T> {
    private eventManager: EventManager;
    private Enabled: boolean;

    public constructor(){
        this.eventManager = new EventManager();
        this.eventManager.AddEventHandler<T>("click");
        this.Enabled = true;
    }

    /**
     * @returns Function which removes given event listener.
     */
    public AddOnClickListener(func: (args?: T)=>void){
        return this.eventManager.GetEventHandler("click").AddEventListener(func);
    }

    protected Clicked(args?: T){
        if(this.Enabled){
            this.eventManager.GetEventHandler("click").ExecuteListeners(args);
        }
    }

    public Enable(){
        this.Enabled = true;
    }

    public Disable(){
        this.Enabled = false;
    }
}