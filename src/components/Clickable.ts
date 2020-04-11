
export default abstract class Clickable {
    private listeners: Array<() => void>;
    private Enabled: boolean;

    public constructor(){
        this.listeners = new Array<() => {}>();
        this.Enabled = true;
    }

    /**
     * @returns Function which removes given event listener.
     */
    public AddOnClickListener(func: ()=>void){
        this.listeners.push(func);
        return () => {delete this.listeners[this.listeners.indexOf(func)]};
    }

    protected Clicked(){
        if(this.Enabled){
            this.listeners.forEach(listener => {
                listener();
            });
        }
    }

    public Enable(){
        this.Enabled = true;
    }

    public Disable(){
        this.Enabled = false;
    }
}