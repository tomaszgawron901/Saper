import EventHandler from './EventHandler';

export default class EventManager{
    private eventHandlers: Map<string, EventHandler<any>>;

    public constructor() {
        this.eventHandlers = new Map<string, EventHandler<any>>();
    }

    public AddEventHandler<T>(name: string){
        if(this.eventHandlers.has(name)){
            throw new Error("EventHandler already exist.");
        }
        this.eventHandlers.set(name,  new EventHandler<T>() );
    }

    public GetEventHandler (name: string) {
        return this.eventHandlers.get(name);
    }
}