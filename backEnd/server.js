
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
    const stds = db.collection('stds'); //  collection =stds name
    const tchers = db.collection('tchers'); //  collection =tchers details


    //////subjects db
    const comp = db.collection("comp");//db for computer-Studies
    const fina = db.collection("fina");//db for Financial-Accounting
    const math = db.collection("math");//db for Mathematics
    const engl = db.collection("engl");//db for English-Language
    const econ = db.collection("econ");//db for Economics
    const biol = db.collection("biol");//db for Biology
    const phys = db.collection("phys");//db for Physics
    const chem = db.collection("chem");//db for Chemistry
    const furt = db.collection("furt");//db for Further-Mathematics
    const comm = db.collection("comm");//db for Commerce
    const lite = db.collection("lite");//db for Literature-in-English
    const gove = db.collection("gove");//db for Government
    const civi = db.collection("civi");//db for Civic-Education
    const mart = db.collection("mart");//db for Marketing
    const proc = db.collection("proc");//db for Data-Processing
    const anim = db.collection("anim");//db for Animal-Husbandary
    ////////////////////////////////














    // const collection2 = db.collection("fina"); //collection fina
    // Endpoint to handle POST request for inserting data
    app.post('/getsignup', async (req, res) => {
        try {



            const { regSur, regOther,
                regDob, regNum, regEmail, regPsw, confirmsex } = req.body;

            // Insert the document into MongoDB
            const result = await stds.insertOne({
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
            const getlogin = await stds.findOne({ surname: logid, password: passwd })
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
            const getfin = fina.find({ sub: "fina" })
            const arrayfin = await getfin.toArray();// to get multiple res findMany
            res.json(arrayfin)
        }
        catch (error) {

        }
    });///////////////////////// end fina

    app.post('/tchers', async (req, res) => {
        try {
            const { adminsurname, adminothername, adminemail, admintel, adminpwd } = req.body;
            const tchersreg = tchers.insertOne({
                surname: adminsurname, other_name: adminothername,
                email: adminemail, tel: admintel, password: adminpwd
            })
            res.json(tchersreg);

            // const { adminLogtel, adminLogpwd } = req1.body;
            // const tcherlogin = await tchers.findOne({ tel: adminLogtel, password: adminLogpwd });
            // res1.json(tcherlogin);
        }
        catch (error) {
            console.error(`the server not received request, ${error}`)
        }

        //
        // try {
        //     const { adminLogtel, adminLogpwd } = req1.body;
        //     const tcherlogin = await tchers.findOne({ tel: adminLogtel, password: adminLogpwd });
        //     res1.json(tcherlogin);
        // }
        // catch (error) {

        // }
    });

    app.post('/tcherlogin', async (req, res) => {//login Admin //teacher
        ////
        try {
            const { adminLogtel, adminLogpwd } = req.body;
            const tcherlogin = await tchers.findOne({ tel: adminLogtel, password: adminLogpwd });
            res.json(tcherlogin);
        }
        catch (error) {

        }
    });
    ////////////getUserName
    // app.post('/getUserName', async (req, res) => {
    //     try {
    //         const oderNames = collection.find({ surname: 'ogedengbe' });
    //         const oderNamesRes = await oderNames.toArray();
    //         res.json(oderNamesRes)

    //     }
    //     catch (error) {

    //     }
    // });

    ////////Is_email_available
    app.post('/getEmail', async (req, res) => {
        try {

            const { valEmail } = req.body;

            const availemail = await stds.findOne({ email: valEmail })//to look for already existing email
            res.json(availemail)


        }
        catch (error) {

        }
    });
    /////comp
    app.post('/comp', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await comp.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////fina
    app.post('/fina', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await fina.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////math
    app.post('/math', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await math.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////engl
    app.post('/engl', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await engl.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////econ
    app.post('/econ', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await econ.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })

    //////biol
    app.post('/biol', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await biol.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////phys
    app.post('/phys', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await phys.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////chem
    app.post('/chem', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await chem.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////furt
    app.post('/furt', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await furt.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////comm
    app.post('/comm', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await comm.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////lite
    app.post('/lite', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await lite.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////gove
    app.post('/gove', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await gove.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////civi
    app.post('/civi', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await civi.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////mart
    app.post('/mart', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await mart.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////proc
    app.post('/proc', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await proc.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////anim
    app.post('/anim', async (req, res) => {
        const { sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await anim.insertOne({ subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    ////////////////
    ////////////////
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.error('Error connecting to MongoDB:', error)


);

///////////////////
