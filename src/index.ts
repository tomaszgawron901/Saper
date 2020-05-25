import './styles/main.scss';
import './styles/gameBoard.scss';
import './styles/head.scss';
import './styles/menu.scss';
import preLoadImages, {PreLoad} from './images/preLoad';
import Client from './client';

import Controller from './controller';

const client = new Client("Tomek");
client.OnOpenEventHandler.AddEventListener(() => { console.log("client connected"); });
client.Connect();



PreLoad();
const controller = new Controller();
document.body.appendChild(controller.gameContainerElement.GetComponent());
