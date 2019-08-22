'use strict';

const Hapi = require('@hapi/hapi');
const path = require('path');

const init = async () => {
    const port = 3000;

    const server = Hapi.server({
        port: port,
        host: 'localhost',
        routes: {
            files: {
                relativeTo: path.join(__dirname, 'public')
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('index.html');
        }
    });

    await server.register(require('inert'));

    await server.start();
    console.log('Server running on port: ' + port);
}

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();