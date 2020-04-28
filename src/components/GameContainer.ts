import IComponent from './IComponent';
import Board from './Board';
import HeadContainer from './HeadContainer';

export default class GameContainer implements IComponent {
    private board: Board;
    private head: HeadContainer;

    public get Board(): Board{
        return this.board;
    }

    public get Head(): HeadContainer{
        return this.head;
    }

    private boardContainer: HTMLElement;

    public constructor(){
        this.boardContainer = document.createElement('DIV');
        this.boardContainer.classList.add("ReversedBorderedContainer");
        this.boardContainer.style.marginTop = "10px";

        this.head = new HeadContainer();
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


        const headConteiner = document.createElement('DIV');
        headConteiner.classList.add("ReversedBorderedContainer");
        headConteiner.classList.add("HeadContainer");
        headConteiner.appendChild(this.head.GetComponent());

        container.appendChild(headConteiner);
        container.appendChild(this.boardContainer);

        return container;
    }

    public Reset(){
        this.head.Reset();
        this.board.Reset();
    }

}