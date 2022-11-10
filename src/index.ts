import http from 'http';
import url from 'url';

import { program } from 'commander';
program.parse();
program.option('-u, --user <char>');

const port = 3400;
const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url as string, true).query;
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
    response.write('Goodbye');
    console.log(sum, substract, multiply, divide);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Web Calculator');
    response.write(`<p>${addResult}</p>`);
    response.write(`<p>${subResult}</p>`);
    response.write(`<p>${multResult}</p>`);
    response.write(`<p>${divResult}</p>`);
});

server.listen(port);
console.log('listen on port', port);
