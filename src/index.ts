import './styles/main.scss';
import './styles/gameBoard.scss';
import './styles/head.scss';
import './styles/menu.scss';
import preLoadImages, {PreLoad} from './images/preLoad';

import {server} from "./server";

console.log(server);


import Controller from './controller';

PreLoad();
const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());
