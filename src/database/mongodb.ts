import { MongoClient } from 'mongodb'

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'wild-types'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.error(`Unable to connect to ${databaseName} database!`)
    } else {
        console.log(`Connected to ${databaseName} database`)
    }

    const db = client.db(databaseName)

    // db.collection('test').insertOne({
    //     name: 'Ian',
    //     message: 'This is a connection test.'
    // })
})