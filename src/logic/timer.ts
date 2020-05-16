import EventManager from "../events/EventManager";
import EventHandler from "../events/EventHandler";

export interface OnTimeChangeArgs{
    value: number;
}

export enum TimerEvents{
    onTimeChange = "onTimeChange",
}

export interface ITimerChangeHandler{
    AddOnTimeChangeEventListener( func: (args?: OnTimeChangeArgs) => void ): () => void
}

export default class Timer implements ITimerChangeHandler{
    private value: number;
    private frequency: number;
    private step: number;
    private started: boolean;
    private eventManager: EventManager;
    private interval: NodeJS.Timeout;
    private timerStart: number;

    public get TimerStart(){
        return this.timerStart;
    }

    public constructor(startValue: number = 0, step: number = 1, frequency: number = 1){
        this.eventManager = new EventManager()
        this.eventManager.AddEventHandler<OnTimeChangeArgs>(TimerEvents.onTimeChange);

        this.value = startValue;
        this.frequency = frequency;
        this.step = step;
        this.started = false;
    }

    public AddOnTimeChangeEventListener( func: (args?: OnTimeChangeArgs) => void){
        return (this.eventManager.GetEventHandler(TimerEvents.onTimeChange) as EventHandler<OnTimeChangeArgs>).AddEventListener(func);
    }

    private TimeChanged(){
        const TimeChangedEventHandler = this.eventManager.GetEventHandler(TimerEvents.onTimeChange) as EventHandler<OnTimeChangeArgs>;
        const args: OnTimeChangeArgs = { value: this.value };
        TimeChangedEventHandler.ExecuteListeners(args);
    }

    private MoveByStep(){
        this.value += this.step;
        this.TimeChanged();
    }

    public Start(){
        if(this.started){
            return;
        }
        this.started = true;
        this.interval = setInterval(() => {
            this.MoveByStep();
        }, 1000/this.frequency);
        this.timerStart = Date.now();
    }

    public Stop(){
        if(!this.started){
            return;
        }
        this.started = false;
        clearInterval(this.interval);
    }
}