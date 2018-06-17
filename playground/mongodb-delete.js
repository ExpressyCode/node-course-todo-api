// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'})
    //     .then((result) => console.log(result));

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    //     .then((result) => console.log(result));

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false})
    //     .then((result) => console.log(result));

    // challenges

    // db.collection('Users').deleteMany({name: 'Willo'})
    //     .then((result) => console.log(result));

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b26541ef3c1341234f8b045')})
        .then((result) => console.log(result));

    // db.close();
});