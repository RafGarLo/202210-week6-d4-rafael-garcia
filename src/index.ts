import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv';
dotenv.config();

import { program } from 'commander';
program.option('-u, --port <char>');
program.parse();

const port = 3400 || process.env.PORT;
const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url as string, true).query;
    if (!request.url?.startsWith('/calculator')) {
        response.writeHead(404);
        response.end();
        return;
    }
    if (!queryObject.num1 || !queryObject.num2) {
        response.writeHead(406, { 'Content-Type': 'text/html' });
        response.write('Please input valid characters');
        response.end();
        return;
    }

    const sum: number = Number(queryObject.num1) + Number(queryObject.num2);
    const addResult = `${queryObject.num1} + ${queryObject.num2} = ${sum}`;
    const substract: number =
        Number(queryObject.num1) - Number(queryObject.num2);
    const subResult = `${queryObject.num1} - ${queryObject.num2} = ${substract}`;
    const multiply: number =
        Number(queryObject.num1) * Number(queryObject.num2);
    const multResult = `${queryObject.num1} * ${queryObject.num2} = ${multiply}`;
    const divide: number = Number(queryObject.num1) / Number(queryObject.num2);
    const divResult = `${queryObject.num1} / ${queryObject.num2} = ${divide}`;
    console.log(sum, substract, multiply, divide);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Web Calculator');
    response.write(`<p>${addResult}</p>`);
    response.write(`<p>${subResult}</p>`);
    response.write(`<p>${multResult}</p>`);
    response.write(`<p>${divResult}</p>`);
    response.end();
});

server.listen(port);
console.log('listen on port', port);
