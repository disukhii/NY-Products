const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({ static: './build' });
const port = process.env.PORT || 3000; // порт на якому буде висіти сервер

// server.use('/', express.static(path.join(__dirname, 'build')))

server.use(middlewares);
server.use(router);

server.listen(port);


// тестовий сервер який читає чи є конект користувача з сайтом