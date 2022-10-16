import express from 'express';

const server = express();

let out: string = 'hello world';
console.log(out);
server.listen(3333, () => console.log('server ON: http://localhost:3333'));
