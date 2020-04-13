
export default class EventHandler<T>{
    private listeners: Array< (args?: T) => void >;
    public constructor() {
        this.listeners = new Array< (args?: T) => void >();
    }

    /**
     * 
     * @returns function which removes given function from event listeners.
     */
    public AddEventListener( func: (args?: T) => void) {
        this.listeners.push(func);
        return this.RemoveListener(func);
    }

    public ExecuteListeners( args?: T ) {
        this.listeners.forEach(listener => {
            listener(args);
        });
    }

    public RemoveListener(func: (args?: T) => void) {
        this.listeners.filter(listener => listener != func);
    }

}