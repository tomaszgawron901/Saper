import './main.scss';
import preLoadImages, {PreLoad} from './images/preLoad';

import Controller from './controller';
import GameOptionsTab from './components/GameOptionsTab';

PreLoad();
const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());
document.body.appendChild(controller.gameOptionsTab.GetComponent());