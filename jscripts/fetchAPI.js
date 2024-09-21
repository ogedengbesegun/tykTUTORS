getmyText("fetch_info.txt");
async function getmyText(file) {

    let x = await fetch(file)
    let y = await x.text()

    // console.log(y);
};



getmyJSON("subjectsJSON/english.json");
async function getmyJSON(file) {
    let x = await fetch(file)
    let y = await x.json()

    for (let i = 0; i < y.length; i++) {
    console.log(y[i].a);

    }

};




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Mongoogedengbe_segun81:MongoSegden@81-DATA@cluster0.j1gjeaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.db("QstBank").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
