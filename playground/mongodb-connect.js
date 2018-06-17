// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, results) => {
    //     if(err) {
    //         return console.log('Unable to insert task', err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Willo',
    //     age: 12,
    //     location: 'Sweden, Dalarna'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});