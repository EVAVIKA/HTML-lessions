const env = require('./env');
const datastore = require('nedb');

// Инициализация базы данных
function InitDatabase() {
    const DB = new datastore({
        filename: `./Datastore/${env.MAIN_BASE}`,
    });
    DB.loadDatabase(function (err) {
        if (err) throw Error(err);
        console.log(`База данных загружена из файла: ${env.MAIN_BASE}`);
    });

    return DB;
}

module.exports = {
    InitDatabase,
}

