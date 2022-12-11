const env = require('./env');
const database = require('./database');
const _ = require('lodash')

const DB = database.InitDatabase();

// GET

function ListHandler(req, res) {
    res.status(200).send('Test');
    return;
}

function AllMessagesHandler(req, res) {
    DB.find({}, function(err, docs){
        if (err) res.status(500).send(err);
        const result = _.orderBy(docs, 'date', 'desc');
        res.status(200).send(JSON.stringify(result));
    });
}

// POST

function SaveMessageHandler(req, res) {
    const body = req.body;
    if (!body.email.replaceAll(' ', '')) {
        res.status(400).send("Не заполнен Email");
        return;
    }
    if (!body.msg.replaceAll(' ', '')) {
        res.status(400).send("Не заполнен Message");
        return;
    }

    const doc = {
        email: body.email,
        msg: body.msg,
        date: new Date()
    }

    DB.insert(doc, function (err, newDoc) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(200).send(newDoc['_id']);
    });
}

module.exports = {
    ListHandler,
    SaveMessageHandler,
    AllMessagesHandler,
}