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


module.exports = {
    UpdateItem,
}