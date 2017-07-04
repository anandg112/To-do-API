// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect Mongodb server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('595b056f297db851d925f5b4')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log("Unable to find the documents!", err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log("Unable to find the documents!", err);

    db.collection('Users').find({name: 'Anand Gautam'}).toArray().then((docs) => {
      console.log('Names:');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to find the documents!');
    });

    db.close();
  });
