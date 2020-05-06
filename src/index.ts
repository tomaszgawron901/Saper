import './main.scss';
import preLoadImages from './images/preLoad';

import Controller from './controller';

preLoadImages();
const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());