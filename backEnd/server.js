
import dotenv from 'dotenv'; //to have access to the .env 
import express from 'express';
import { MongoClient } from 'mongodb';
// import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();


// Initialize Express app
app.use(express.json());
app.use(cors());
//////////
// app2.use(express.json());
// app2.use(cors());
// app.use(bodyParser.json());
// MongoDB connection
const uri = process.env.MONGO_db; // Replace with your actual MongoDB connection string
const client = new MongoClient(uri)
const PORT = process.env.PORT;
// ,{ useNewUrlParser: true, useUnifiedTopology: true }
client.connect().then(() => {
    const db = client.db('tykBank'); //  database name
    const collection = db.collection('stds'); //  collection name

    //////

    const collection2 = db.collection("fina"); //collection fina
    // Endpoint to handle POST request for inserting data
    app.post('/getsignup', async (req, res) => {
        try {



            const { regSur, regOther,
                regDob, regNum, regEmail, regPsw, confirmsex } = req.body;

            // Insert the document into MongoDB
            const result = await collection.insertOne({
                surname: regSur, othernames: regOther, dob: regDob,
                sex: confirmsex, telephone: regNum,
                email: regEmail, password: regPsw
            });

            res.json(result);

            ///if it contains
            // const Isamong = await collection.findOne({ surname: logid, password: passwd });
            // if (Isamong) {
            //     console.log(Isamong + "is the same with" + regEmail)
            //     // res.json(Isamong)
            // }

            // if (result) {
            //     // Respond back to the Client side
            //     // client response
            // }
            // else if (Isamong) {
            //     res.json(myFind);

            // }

            // res.json({ message: 'Document inserted successfully', insertedId: result.insertedId });
            // res.json({ message: 'Document inserted successfully', insertedId: result.insertedId });
        } catch (error) {
            console.error('Error inserting document:', error);
            res.status(500).json({ message: 'Error inserting document' });
        }
    });

    ///request 2
    app.post('/getLogin', async (req, res) => {
        try {
            const { logid, passwd } = req.body;
            const getlogin = await collection.findOne({ surname: logid, password: passwd })
            res.json(getlogin);

        }
        catch (error) {
            console.log("Check the password")

        }
    });

    /////request from fina
    app.post('/getfina', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getfin = collection2.find({ sub: "fina" })
            const arrayfin = await getfin.toArray();// to get multiple res findMany
            res.json(arrayfin)
        }
        catch (error) {

        }
    });///////////////////////// end fina

    ////////////getUserName
    app.post('/getUserName', async (req, res) => {
        try {
            const oderNames = collection.find({ surname: 'ogedengbe' });
            const oderNamesRes = await oderNames.toArray();
            res.json(oderNamesRes)

        }
        catch (error) {

        }
    });

    ////////Is_email_available
    app.post('/getEmail', async (req, res) => {
        try {

            const { valEmail } = req.body;

            const availemail = await collection.findOne({ email: valEmail })//to look for already existing email
            res.json(availemail)


        }
        catch (error) {

        }
    })

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.error('Error connecting to MongoDB:', error)


);

