const env = require('./env');
const API = require('./API');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json());

app.listen(env.PORT, function () {
    console.log(`Сервер запущен на порту ${env.PORT}.`);
});

API.InitAPI(app);