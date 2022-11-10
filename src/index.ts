import http from 'http';
import url from 'url';

import { program } from 'commander';
program.parse();
program.option('-u, --user <char>');

const port = 3400;
const server = http.createServer((request, response) => {
    response.write('Web Calculator');
    const queryObject = url.parse(request.url as string, true).query;
    const sum: number = Number(queryObject.num1) + Number(queryObject.num2);
    response.write(`${queryObject.num1} + ${queryObject.num2} = ${sum}`);
    response.write(`HOLA`);
});

server.listen(port);
console.log('listen on port', port);
