import IComponent from './IComponent';
import Board from './boardComponents/Board';
import HeadContainer from './headComponents/HeadContainer';
import Menu from './MenuComponents/menu';
import GameOptionsTab from './MenuComponents/GameOptionsMenuTab';

export default class GameContainer implements IComponent {
    private board: Board;
    private head: HeadContainer;
    private menu: Menu;

    public get Board(): Board{
        return this.board;
    }

    public get Head(): HeadContainer{
        return this.head;
    }

    public get Menu(): Menu{
        return this.menu;
    }

    private boardContainer: HTMLElement;

    public constructor(){
        this.boardContainer = document.createElement('DIV');
        this.boardContainer.classList.add("ReversedBorderedContainer");
        this.boardContainer.style.marginTop = "10px";
        this.boardContainer.style.userSelect = 'none';

        this.head = new HeadContainer();
        
        this.InitializeMenu();
        this.SetNewBoard({width: 15, height: 15});
    }

    private InitializeMenu(){
        this.menu = new Menu();
        this.menu.AddItem(0, "Game", new GameOptionsTab());
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

        container.appendChild(this.menu.GetComponent());
        container.appendChild(headConteiner);
        container.appendChild(this.boardContainer);

        return container;
    }

    public Reset(){
        this.head.Reset();
        this.board.Reset();
    }

}