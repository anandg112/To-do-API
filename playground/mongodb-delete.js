// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect Mongodb server');
  }
    console.log('Connected to MongoDB server');
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });
    //deleteOne
      // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
      //   console.log(result);
      // });
    //findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //   console.log(result);
        // });
      // db.collection('Users').deleteMany({name: 'Anand Gautam'}).then((result) => {
      //   console.log(result);
      // });
      db.collection('Users').deleteOne({_id: new ObjectID('595ae7e24bd7f6ada222cef3')}).then((result) => {
        console.log(result);
      });
    // db.close();
  });
