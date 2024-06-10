const app = require('./app');
const http = require('http');

const port = 3001;

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server is running on port: 3001");
})