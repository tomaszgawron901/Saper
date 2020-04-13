
export interface GameEventArgs{}

export interface OnOpenEventArgs extends GameEventArgs{

}

export default class GameOnOpenEventManager{
    private listeners: Array<(args?: OnOpenEventArgs)=>{}>;
    public constructor(){
        this.listeners = new Array<(args?: OnOpenEventArgs)=>{}>();
    }

    /**
     * @returns Function which removes given event listener.
     */
    public AddOnOpenEventListener(func: (args?: OnOpenEventArgs)=>{}){
        this.listeners.push(func);
        return () => {delete this.listeners[this.listeners.indexOf(func)]};
    }

    public Opened(args?: OnOpenEventArgs){
        this.listeners.forEach(listener => {
            listener(args);
        });
    }
}