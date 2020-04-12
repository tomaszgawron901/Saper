export interface EventArgs {}

export default abstract class Clickable {
    private listeners: Array<(args?: EventArgs) => void>;
    private Enabled: boolean;

    public constructor(){
        this.listeners = new Array<(args?: EventArgs) => void>();
        this.Enabled = true;
    }

    /**
     * @returns Function which removes given event listener.
     */
    public AddOnClickListener(func: (args?: EventArgs)=>void){
        this.listeners.push(func);
        return () => {delete this.listeners[this.listeners.indexOf(func)]};
    }

    protected Clicked(args?: EventArgs){
        if(this.Enabled){
            this.listeners.forEach(listener => {
                listener(args);
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