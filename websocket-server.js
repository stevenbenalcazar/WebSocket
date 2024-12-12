const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    socket.send('Hola Mundo!');
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
