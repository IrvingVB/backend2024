// const express = require('express');

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.listen(3000, () => {
//     console.log('Example app listening on port 3000');
// });

const {Server} =  require('./server');

const server = new Server();

server.start();
