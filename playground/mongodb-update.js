// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect Mongodb server');
  }
    console.log('Connected to MongoDB server');

    //  db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID('595b1780297db851d925f878')
    //  }, {
    //    $set: {
    //      completed: true
    //    }
    //  }, {
    //    returnOriginal: false
    //  }).then((result) => {
    //    console.log(result);
    //  });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('595ae54abf99a1ad725c3dde')
    }, {
      $inc: {
        age: 1
      },
      $set: {
        name: 'Andy Gautam'
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
    // db.close();
  });
