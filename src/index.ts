import './main.scss';
import Board, {BoardElementClickArgs} from './components/Board';
import Game, {Position} from './logic/Game';

const game = new Game({x: 10, y: 10}, 20);
game.Open(new Position(5, 5));
const b = new Board({width: 10, height: 10});
b.AddOnClickListener((args: BoardElementClickArgs) => {console.log(args.x, args.y);
});
document.body.appendChild(b.GetComponent());
