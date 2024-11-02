
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from 'mongodb';
// import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();


// Initialize Express app
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());
// MongoDB connection
const uri = process.env.MONGO_db; // Replace with your actual MongoDB connection string
const client = new MongoClient(uri);
const PORT = process.env.PORT;
// ,{ useNewUrlParser: true, useUnifiedTopology: true }
client.connect().then(() => {
    const db = client.db('tykBank'); //  database name
    const collection = db.collection('stds'); //  collection name
    // Endpoint to handle POST request for inserting data
    app.post("/insert", async (req, res) => {
        try {



            const { regSur, regOther,
                regDob, regNum, regEmail, regPsw, confirmsex } = req.body;

            // Insert the document into MongoDB
            const result = await collection.insertOne({
                surname: regSur, othernames: regOther, dob: regDob,
                sex: confirmsex, telephone: regNum,
                email: regEmail, password: regPsw
            });
            ///if it contains
            const Isamong = await collection.findOne({ email: regEmail });
            if (regEmail === Isamong) {
                console.log(Isamong + "is the same with" + regEmail)
                // res.json(Isamong)
            }

            if (result) {
                // Respond back to the Client side
                res.json(result);// client response
            }
            else if (Isamong) {
                res.json(message, "email is taken");

            }

            // res.json({ message: 'Document inserted successfully', insertedId: result.insertedId });
            // res.json({ message: 'Document inserted successfully', insertedId: result.insertedId });
        } catch (error) {
            console.error('Error inserting document:', error);
            res.status(500).json({ message: 'Error inserting document' });
        }
    });



    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.error('Error connecting to MongoDB:', error)


);

