let Datastore = require('nedb');
let _ = require('lodash');
let db = new Datastore({ filename: './DataBase', autoload: true });
let obj = {
    _id: 'today_3',
    number: 11,
    month: 01,
    year: 1999,
}

// UpdateItem({_id: obj['_id']}, obj, {}, function(){
//     console.log('Документ обновлен.');
// });

// UpadteItemWithRemove({_id: obj['_id']}, obj, {}, function(){
//     console.log('Документ обновлен.');
// });

function UpdateItem(query, doc, options = {}, callback) {
    const docCopy = _.cloneDeep(doc);
    delete docCopy["_id"];
    db.update(query, { $set: docCopy }, options, function (err, numReplaced) {
        if (err) throw Error("Ошибка: " + err);
        if (numReplaced === 0) {
            db.insert(doc, function (err, newDoc) {
                if (err) throw Error("Ошибка: " + err);
                callback();
            });
        } else callback();
    });
}

function UpadteItemWithRemove(query, doc, options = {}, callback) {
    db.remove(query, options, function(err, count) {
        db.insert(doc, function(err, newDoc) {
            if(err) throw Error("Ошибка: " + err);
            callback();
        });
    })
}

db.persistence.setAutocompactionInterval(2000);