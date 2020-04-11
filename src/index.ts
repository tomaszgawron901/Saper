import './main.scss';
import Cell from './components/Cell';
import Game, {Position} from './logic/Game';

const game = new Game({x: 10, y: 10}, 20);
game.Open(new Position(5, 5));
const c = new Cell();
c.AddOnClickListener(() => {c.Disable()});
document.body.appendChild(c.GetComponent());
