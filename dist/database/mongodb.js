"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var connectionURL = 'mongodb://127.0.0.1:27017';
var databaseName = 'wild-types';
mongodb_1.MongoClient.connect(connectionURL, { useNewUrlParser: true }, function (error, client) {
    if (error) {
        return console.error("Unable to connect to " + databaseName + " database!");
    }
    else {
        console.log("Connected to " + databaseName + " database");
    }
    var db = client.db(databaseName);
    // db.collection('test').insertOne({
    //     name: 'Ian',
    //     message: 'This is a connection test.'
    // })
});
