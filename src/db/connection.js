require("dotenv").config()
const {MongoClient} = require("mongodb")

const client = new MongoClient(process.env.MONGO_URI)

const connection = async () =>{
    try{
        // the client gives us access to the mongoDB methods
        // using the MONGO_URI in the .env file
        await client.connect()

        //what we want to call out database
        const db = client.db("Movies")

        //return is used to grab our collection to perform CRUD operations on our database
        return db.collection("Movie")

    }catch (error){
        console.log(error)
    }
}

module.exports = {client, connection}