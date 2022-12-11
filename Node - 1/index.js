let Datastore = require('nedb');
let _ = require('lodash');
let serv = require('./serv');
let db = new Datastore({ filename: './DataBase', autoload: true });

let rawData = [
    {
        name: 'Vika',
        day: 27,
        testArr: [1, 'pupu', { a: 1 }],
    },
    {
        name: 'Vova',
        day: 26,
        testArr: [1, 'pupu', { a: 1 }],
    },
    {
        name: 'Maria',
        day: 24,
        testArr: [1, 'pupu', { a: 1 }],
    },
    {
        name: 'Kate',
        day: 25,
        testArr: [1, 'pupu', { a: 1 }],
    },
    {
        name: 'Mary',
        day: 23,
        testArr: [1, 'pupu', { a: 1 }],
    },
    {
        name: 'Oleg',
        day: 20,
        testArr: [1, 'pupu', { a: 1 }],
    },
]

// db.find({
//     $or: [{
//         name: /Vova/
//     },
//     {
//         day: {
//             $lt: 26,
//             $gt: 23,
//         }
//     }]
// }, function (err, docs) {
//     if (err) throw Error('Cannot find: ' + err);
//     for (let doc of docs) {
//         console.log(JSON.stringify(doc));
//     }
// });

db.remove({
    $not: {
        $or: [{
            name: /Vova/
        },
        {
            name: /Vika/
        }]
    }
}, { multi: true }, function (error, count) {
    if (error) throw Error("Ошибка " + error);
    console.log('База очищена');
})