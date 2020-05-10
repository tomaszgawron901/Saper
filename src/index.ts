import './main.scss';
import preLoadImages, {PreLoad} from './images/preLoad';

import Controller from './controller';
import GameOptionsTab from './components/GameOptionsTab';

PreLoad();
const gameOptionsTable = new GameOptionsTab();
const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());
document.body.appendChild(gameOptionsTable.GetComponent());