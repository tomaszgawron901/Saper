import './main.scss';
import preLoadImages, {PreLoad} from './images/preLoad';

import Controller from './controller';
import GameOptionsMenuTab from './components/GameOptionsMenuTab';

PreLoad();
const controller = new Controller();
document.body.appendChild(controller.gameOptionsMenuTab.GetComponent());
document.body.appendChild(controller.gameContainerElement.GetComponent());
