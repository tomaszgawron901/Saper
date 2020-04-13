import './main.scss';
import Board, { OnCellClickArgs} from './components/Board';
import GameContainer from './components/GameContainer';
import Game, {Position} from './logic/Game';

//const game = new Game({x: 10, y: 10}, 20);
//game.Open(new Position(5, 5));
const g = new GameContainer();
g.board.AddOnClickListener((args: OnCellClickArgs) => {console.log(args.x, args.y);
});
document.body.appendChild(g.GetComponent());
