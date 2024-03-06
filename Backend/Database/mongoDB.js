    //Connector and retriever class
    const { MongoClient, ServerApiVersion} = require('mongodb');
    const uri = "mongodb+srv://cats:cats@catsoncluster.thyufs8.mongodb.net/?retryWrites=true&w=majority&appName=CatsOnCluster";
    const databaseStr = "CatDatabase"

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
        console.log("into interface()")
        await client.connect();
        console.log(request, collection, object);
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

    const GetAny = async (collection, object) => {
        console.log("into GetAny()")
        const database = client.db(databaseStr);
        const dbCollection = database.collection(collection);

        const cursor = dbCollection.find(object)
        const data = await cursor.toArray()
        await client.close();
        return data;

    }

    const GetAll = async (collection) => {
        console.log("into GetAll");
        const database = client.db(databaseStr);
        console.log("Database: " + database);
        const dbCollection = database.collection(collection);
        console.log("dbCollection: " + dbCollection);
        const cursor = dbCollection.find();
        console.log("cursor: " + cursor);
        const data = await cursor.toArray();
        console.log("returned data " + data);
        await client.close();
        return data;
    }

    const PostAny = async (collection, object) => {
        console.log("into post any")
        const database = client.db(databaseStr);
        const dbCollection = database.collection(collection);

        await dbCollection.insertOne(object);
        await client.close();
        return 200;
    }

    const PatchAny = async (collection, object) => {
        const database = client.db(databaseStr);
        const dbCollection = database.collection(collection);

        const options = { upsert: true };
        const set = { $set: object[1] }

        await dbCollection.updateOne(object[0], set, options);
        await client.close();
        return 200
    }

    const DeleteAny = async (collection, object) => {
        const database = client.db(databaseStr);
        const dbCollection = database.collection(collection);

        await dbCollection.deleteOne(object);
        await client.close();
        return 200;

    }

    module.exports = {
        interface: Interface, run: run
    }