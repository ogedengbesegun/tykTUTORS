

//////
import express from 'express'
import { MongoClient } from 'mongodb'
import cors from 'cors'
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
let myURL = "mongodb://localhost:27017/";
const PORT2 = process.env.PORT2;
const client = new MongoClient(myURL);
client.connect().then(() => {
    const myDB = client.db("tykBank");
    const myCollection = myDB.collection("stds");

    app.post('/getLogin', async (req, res) => {
        try {
            const { logid, passwd } = req.body;
            const getlogin = await myCollection.findOne({ surname: logid, password: passwd })
            res.json(getlogin);

        }
        catch (error) {
            console.log("Check the password")

        }
    });

    app.listen(PORT2, () => {
        console.log(`The server is running on port ${PORT2}`);
    })

}).catch((error) => {
    console.log("The server failed to connect successfully", error)
});
