import './styles/main.scss';
import './styles/gameBoard.scss';
import './styles/head.scss';
import './styles/menu.scss';

import Controller from './controller';

const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());
document.body.appendChild(controller.ranking.GetComponent());