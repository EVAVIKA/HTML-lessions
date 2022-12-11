const env = require('./env');
const server = require('./server');

// ПОТОМ ЗАКОММЕНТИРОВАТЬ
const _app = require('express')();

function InitAPI(app) {
    // GET
    app.get('/', (req, res) => {
        res.status(200).send('Сервер работает.');
    });
    app.get('/list', server.ListHandler);
    app.get('/all_messages', server.AllMessagesHandler)
    // POST
    app.post('/save_message', server.SaveMessageHandler);

}

module.exports = {
    InitAPI,
}