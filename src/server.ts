import { createServer, IncomingMessage, ServerResponse } from 'http';
import * as websocket from 'ws';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.end("I'm connected");
    
});

const socket = new websocket.Server({server});
socket.on('connection', function connection(ws) {
  console.log('connected');
  
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
  
    ws.send('something');
  });
server.listen(8080);