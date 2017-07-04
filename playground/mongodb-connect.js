// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect Mongodb server');
  }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, res) => {
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //   console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    //insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //   name: 'Anand Gautam',
    //   age: 30,
    //   location: 'Toronto'
    // }, (err, res) => {
    //   if(err){
    //     return console.log('Unable to insert document', err);
    //   }
    //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // });


    db.close();
});
