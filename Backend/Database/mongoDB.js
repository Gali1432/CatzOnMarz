//Connector and retriever class
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cats:cats@catsoncluster.thyufs8.mongodb.net/?retryWrites=true&w=majority";
const databaseStr = 'CatDatabase';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

//basic VERY GENERAL CRUD functions (pass paramaters like type, object, and request)

const Interface = async (request, collection, object) => {
    // console.log(request, type, object);
    collection = collection + "";
    switch (request.toLowerCase()) {
        case "post":
            return await PostAny(collection, object);
        case "get":
            if (object === "all") { // Check if 'all' documents are requested
                return await GetAll(collection);
            } else {
                return await GetAny(collection, object);
            }
        case "patch":
            return await PatchAny(collection, object);
        case "delete":
            return await DeleteAny(collection, object);
        default:
            return 404;
    }
}

const GetAny = async (type, object) => {
    const database = client.db(databaseStr);
    const collection = database.collection(type);

    const cursor = collection.find(object)

    return await cursor.toArray()

}

const GetAll = async (type) => {
    const database = client.db(databaseStr);
    const collection = database.collection(type);

    const cursor = collection.find();
    return await cursor.toArray();
}

const PostAny = async (type, object) => {
    const database = client.db(databaseStr);
    const collection = database.collection(type);

    await collection.insertOne(object);
    return 200;
}

const PatchAny = async (type, object) => {
    const database = client.db(databaseStr);
    const collection = database.collection(type);

    const options = { upsert: true };
    const set = { $set: object[1] }

    await collection.updateOne(object[0], set, options);
    return 200
}

const DeleteAny = async (type, object) => {
    const database = client.db(databaseStr);
    const collection = database.collection(type);

    await collection.deleteOne(object);
    return 200;

}

run().catch(console.dir);

module.exports = {
    interface: Interface,
}