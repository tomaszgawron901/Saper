import './styles/main.scss';
import './styles/gameBoard.scss';
import './styles/head.scss';
import './styles/menu.scss';
import preLoadImages, {PreLoad} from './images/preLoad';

import Controller from './controller';

enum aa{
    a = 1,
    b = 2
}

PreLoad();
const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());
