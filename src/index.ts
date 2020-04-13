import './main.scss';
import Board, { OnCellClickArgs} from './components/Board';
import GameContainer from './components/GameContainer';
import Game, { GameEvents, OnOpenArgs } from './logic/Game';
import Position from './logic/Position';
import EventHandler from './events/EventHandler';

const game = new Game({width: 15, height: 15}, 40);
const g = new GameContainer();
g.board.AddOnClickListener((args: OnCellClickArgs) => {
    game.Open(new Position(args.x, args.y));
});

(game.GetEventHandler(GameEvents.open) as EventHandler<OnOpenArgs>).AddEventListener( (args: OnOpenArgs) => {
    console.log(args.position.ToString(), args.value);
    
} )
document.body.appendChild(g.GetComponent());
