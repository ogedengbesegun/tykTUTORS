const express = require("express");
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;


// Initialize Express app
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const uri = 'mongodb://localhost:27017/'; // Replace with your actual MongoDB connection string
const client = new MongoClient(uri,
    { useNewUrlParser: true, useUnifiedTopology: true });

client.connect().then(() => {
    const db = client.db('tykBank'); // Replace with your database name
    const collection = db.collection('stds'); // Replace with your collection name

    // Endpoint to handle POST request for inserting data
    app.post('/insert', async (req, res) => {
        try {

            const { regSur, regOther, regNum, regEmail, regPsw } = req.body;

            // Insert the document into MongoDB
            const result = await collection.insertOne({
                surname: regSur, othernames: regOther,
                telephone: regNum, email: regEmail, password: regPsw
            });

            // Respond with success message
            res.json({ message: 'Document inserted successfully', insertedId: result.insertedId });
            console.log(res.json())
        } catch (error) {
            console.error('Error inserting document:', error);
            res.status(500).json({ message: 'Error inserting document' });
        }
    });

    // Start the server
    app.listen(PORT, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => console.error('Error connecting to MongoDB:', error));
