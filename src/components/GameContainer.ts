import IComponent from './IComponent';
import Board from './Board';

export default class GameContainer implements IComponent {
    public board: Board;
    public head: any; // TODO create head component

    private boardContainer: HTMLElement;
    private headConteiner: HTMLElement;

    public constructor(){
        this.boardContainer = document.createElement('DIV');
        this.boardContainer.classList.add("ReversedBorderedContainer");

        this.headConteiner = document.createElement('DIV');
        this.headConteiner.classList.add("ReversedBorderedContainer");
        this.boardContainer.style.marginTop = "10px";

        this.SetNewBoard({width: 15, height: 15});
    }


    public SetNewBoard( size: {width: number, height: number}) {
        this.board = new Board(size);
        this.boardContainer.innerHTML = "";
        this.boardContainer.appendChild(this.board.GetComponent());
    }

    public GetComponent() {
        const container = document.createElement('DIV');
        container.classList.add("GameContainer");
        container.classList.add("BorderedContainer");
        container.addEventListener('contextmenu', event => event.preventDefault());

        container.appendChild(this.headConteiner);
        container.appendChild(this.boardContainer);

        return container;
    }

    public Reset(){
        // TODO HEADER RESET !!!
        this.board.Reset();
    }

}