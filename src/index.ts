import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3300;
const server = http.createServer((request, response) => {
    request.method;
    request.url;
    response.write('Hola Super PAQUETE!! 😎');
    response.end();
});

server.listen(port);
console.log('listen on port', port);
