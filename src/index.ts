import './main.scss';
import preLoadImages, {PreLoad} from './images/preLoad';

import Controller from './controller';

PreLoad();
const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());