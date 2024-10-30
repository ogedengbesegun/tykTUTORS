
// const qstion = document.querySelector(".qstion")



// getmyText("/subjectsJSON/QstBank.fina.json");
// async function getmyText(file) {

//     let x = await fetch(file)
//     let y = await x.json()

//     console.log(y[0].ask);
//     qstion.value = y[23].ask
// };



// getmyJSON("subjectsJSON/english.json");
// async function getmyJSON(file) {
//     let x = await fetch(file)
//     let y = await x.json()

//     for (let i = 0; i < y.length; i++) {
//         console.log(y[i].a);

//     }

// };





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Mongoogedengbe_segun81:mongosegden@cluster0.j1gjeaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });


// // const qstion = document.querySelector(".qstion")

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();

//         // connect to db
//         const QstBank = client.db("QstBank");

//         // connect to collection
//         const fina = QstBank.collection("fina");

//         // Send a ping to confirm a successful connection
//         await client.db("QstBank").command({ ping: 1 });
//         //  result to show
//         const document = await fina.findOne({ ask: 'A subsidiary record is a book__' })
//         console.log(document)
//         // qstion.textContent = document
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");

//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);








//////////connection to the mongoDB
// const regSur = document.querySelector(".regSur");
// const regOther = document.querySelector(".regOther");
// const regNum = document.querySelector(".regNum");
// const regPsw = document.querySelector(".regPsw");

// const regSignup = document.querySelector(".regSignup");



// const regSignup = document.querySelector(".regSignup");

// });




////////////////////////////////////
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');

const app = express();
const uri = "mongodb://localhost:27017/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


// const qstion = document.querySelector(".qstion")
// click button
// regSignup.addEventListener("click", () => {
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // connect to db
        const tykBank = client.db("tykBank");

        // connect to collection
        const stds = tykBank.collection("stds");

        // Send a ping to confirm a successful connection
        await client.db("tykBank").command({ ping: 1 });

        //  result to show
        const document = await stds.findOne({ surname: "obafemi", password: "obafemi" });

        console.log(document)


        // qstion.textContent = document
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
