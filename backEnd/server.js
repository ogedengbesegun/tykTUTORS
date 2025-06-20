

// const sgMail = require('@sendgrid/mail')

import dotenv from 'dotenv'; //to have access to the .env 
import express from 'express';
import { MongoClient } from 'mongodb';
// import bodyParser from 'body-parser';
// import uuid from 'uuid'
import nodemailer from 'nodemailer';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
// import { Clerk } from '@clerk/clerk-js';
// Clerk
import bcrypt from "bcrypt";


dotenv.config();

const app = express();


// Initialize Express app
app.use(express.json());
//Allow frontend origin (replace with your real domain later)
const allowedOrigins = [
  'http://127.0.0.1:5501',        // for local dev
  'https://tyktutor.onrender.com'  // ← your public frontend domain
];

app.use(cors(
    {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
));
//////////
// console.log(btnmail)

// app.use(bodyParser.json());
// MongoDB connection
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const uri = process.env.MONGO_db2;//Replace with your actual MongoDB connection string
const client = new MongoClient(uri)
const PORT = process.env.PORT || 8080;
// ,{ useNewUrlParser: true, useUnifiedTopology: true }
client.connect().then(() => {
    const db = client.db('tykBank'); //  database name
    const stds = db.collection('stds'); //  collection =stds name
    const tchers = db.collection('tchers'); //  collection =tchers details
    const schoolSignUp = db.collection('schoolSignUp');

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


    //////// delete duplicate objects

    // const collection2 = db.collection("fina"); //collection fina
    // Endpoint to handle POST request for inserting data
    app.post('/getsignup', async (req, res) => {
        try {



            const { regSur, regOther,
                regDob, dlgphone, dlgemail, regPsw, confirmsex } = req.body;

            // Insert the document into MongoDB
            const result = await stds.insertOne({
                surname: regSur, othernames: regOther, dob: regDob,
                sex: confirmsex, telephone: dlgphone,
                email: dlgemail, password: regPsw
            });

            res.json(result);


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
            const getfin = fina.find({ subject: "Financial-Accounting" })
            const arrayfin = await getfin.toArray();// to get multiple res findMany
            res.json(arrayfin)
        }
        catch (error) {

        }
    });/// fina
    app.post('/getengl', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const geteng = engl.find({ subject: "English-Language" })
            const arrayeng = await geteng.toArray();// to get multiple res findMany
            res.json(arrayeng)
        }
        catch (error) {

        }
    });
    ////eng

    app.post('/getmath', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getmath = math.find({ subject: "Mathematics" })
            const arraymath = await getmath.toArray();// to get multiple res findMany
            res.json(arraymath)
        }
        catch (error) {

        }
    });
    ////math
    //econ
    app.post('/getecon', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getecon = econ.find({ subject: "Economics" })
            const arrayecon = await getecon.toArray();// to get multiple res findMany
            res.json(arrayecon)
        }
        catch (error) {

        }
    });
    //econ
    ////comp
    app.post('/getcomp', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getcomp = comp.find({ subject: "Computer-Studies" })
            const arraycomp = await getcomp.toArray();// to get multiple res findMany
            res.json(arraycomp)
        }
        catch (error) {

        }
    });
    ////comp
    ////biol
    app.post('/getbiol', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getbiol = biol.find({ subject: "Biology" })
            const arraybiol = await getbiol.toArray();// to get multiple res findMany
            res.json(arraybiol)
        }
        catch (error) {

        }
    });
    ////biol
    ////phys
    app.post('/getphys', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getphys = phys.find({ subject: "Physics" })
            const arrayphys = await getphys.toArray();// to get multiple res findMany
            res.json(arrayphys)
        }
        catch (error) {

        }
    });
    ////phys
    ////chem
    app.post('/getchem', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getchem = chem.find({ subject: "Chemistry" })
            const arraychem = await getchem.toArray();// to get multiple res findMany
            res.json(arraychem)
        }
        catch (error) {

        }
    });
    ////chem
    ////furt
    app.post('/getfurt', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getfurt = furt.find({ subject: "Further-Mathematics" })
            const arrayfurt = await getfurt.toArray();// to get multiple res findMany
            res.json(arrayfurt)
        }
        catch (error) {

        }
    });
    ////furt
    ////comm
    app.post('/getcomm', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getcomm = comm.find({ subject: "Commerce" })
            const arraycomm = await getcomm.toArray();// to get multiple res findMany
            res.json(arraycomm)
        }
        catch (error) {

        }
    });
    ////comm
    ////lite
    app.post('/getlite', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getlite = lite.find({ subject: "Literature-in-English" })
            const arraylite = await getlite.toArray();// to get multiple res findMany
            res.json(arraylite)
        }
        catch (error) {

        }
    });
    ////lite
    ////gove
    app.post('/getgove', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getgove = gove.find({ subject: "Government" })
            const arraygove = await getgove.toArray();// to get multiple res findMany
            res.json(arraygove)
        }
        catch (error) {

        }
    });
    ////civi
    ////civi
    app.post('/getcivi', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getcivi = civi.find({ subject: "Civic-Education" })
            const arraycivi = await getcivi.toArray();// to get multiple res findMany
            res.json(arraycivi)
        }
        catch (error) {

        }
    });
    ////civi
    ////mart
    app.post('/getmart', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getmart = mart.find({ subject: "Marketing" })
            const arraymart = await getmart.toArray();// to get multiple res findMany
            res.json(arraymart)
        }
        catch (error) {

        }
    });
    ////mart
    ////proc
    app.post('/getproc', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getproc = proc.find({ subject: "Data-Processing" })
            const arrayproc = await getproc.toArray();// to get multiple res findMany
            res.json(arrayproc)
        }
        catch (error) {

        }
    });
    ////proc
    ////anim
    app.post('/getanim', async (req, res) => {
        try {
            // req.body;
            // const getfin = await collection2.findOne({ author: "ogedengbe segun" });
            const getanim = anim.find({ subject: "Animal-Husbandary" })
            const arrayanim = await getanim.toArray();// to get multiple res findMany
            res.json(arrayanim)
        }
        catch (error) {

        }
    });
    ////anim

    app.post('/tchers', async (req, res) => {
        try {
            const ymd = new Date()
            const { adminsurname, adminothername, adminemail, admintel, adminpwd } = req.body;
            const tchersreg = await tchers.insertOne({

                surname: adminsurname, other_name: adminothername,
                email: adminemail, tel: admintel, password: adminpwd,
                date: ymd.getFullYear() + '-' + (ymd.getMonth() + 1) + '-' + ymd.getDate()
            })
            res.json(tchersreg);
            ////////////
            ///////////



        }
        catch (error) {
            res.statusCode()
            console.error(`the server not received request, ${error}`)
        }

    });

    app.post('/tcherlogin', async (req, res) => {//login Admin //teacher
        ////
        try {
            const { adminLogtel, adminLogpwd } = req.body;
            const tcherlogin = await tchers.findOne({
                tel: adminLogtel,
                password: adminLogpwd
            });
            res.json(tcherlogin);
            ////////////////////////
        }
        catch (error) {

        }
    });
    app.post("/tcheremailexist", async (req, res) => {

        try {

            const { adminemail } = req.body;
            const alreadyexist = await tchers.findOne({
                email: adminemail
            });
            res.json(alreadyexist)

        }
        catch (error) {

        }

    });

    app.post('/tchertelexist', async (req, res) => {
        try {
            const { admintel } = req.body;
            const alreadytelexist = await tchers.findOne({
                tel: admintel
            })
            res.json(alreadytelexist);
        }
        catch (error) {

        }
    })


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
    ////getTel  to weeds off duplication in the db
    app.post("/getTel", async (req, res) => {
        try {
            const { regNum } = req.body;
            const getTel = await stds.findOne({ telephone: regNum });
            res.json(getTel);
        }
        catch (error) {

        }
    })


    /////comp
    app.post('/comp', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await comp.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////fina
    app.post('/fina', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await fina.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////math
    app.post('/math', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await math.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////engl
    app.post('/engl', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await engl.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////econ
    app.post('/econ', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await econ.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })

    //////biol
    app.post('/biol', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await biol.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////phys
    app.post('/phys', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await phys.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////chem
    app.post('/chem', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await chem.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////furt
    app.post('/furt', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await furt.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////comm
    app.post('/comm', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await comm.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////lite
    app.post('/lite', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await lite.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////gove
    app.post('/gove', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await gove.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////civi
    app.post('/civi', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await civi.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////mart
    app.post('/mart', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await mart.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////proc
    app.post('/proc', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await proc.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    //////anim
    app.post('/anim', async (req, res) => {
        const { author, sub, qstion, txta, txtb, txtc, txtd, txtans } = req.body;
        const resDB = await anim.insertOne({ author: author, subject: sub, ask: qstion, a: txta, b: txtb, c: txtc, d: txtd, ans: txtans })
        res.json(resDB)
    })
    ////////////////
    app.post('/sendmail', async (req, res) => {
        const { adminemail, admintel, adminothername, adminpwd } = req.body


        //     //nodemailer
        // mymail()
        function mymail() {
            // const { adminemail } = req.body
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'wisdomworld28608@gmail.com',
                    pass: 'hdyruzocsvzlpsem'
                }
            });
            ////////////
            // let admintel = '09012345678'
            // let adminpwd = 'freedoom123@me'
            // let adminothername = 'segun oluwaseun james'
            const split = adminpwd.split("")
            const join = split[0] + split[1] + split[2] + '****' + adminpwd.slice(adminpwd.length - 2, adminpwd.length)///
            let sepname = adminothername.split(" ")//
            ////////
            const mailOptions = {
                from: 'wisdomworld28608@gmail.com',
                to: adminemail,
                subject: 'tyktutor Academy Consultant',
                html: `<div class='card bg-primary text-center'>
                    <h3 class='bg-text-primary text-center'>
                Welcome to tykTutor Platform</h3>
            <h4>Congratulations ${sepname[0].toUpperCase()}, your Registration is Successful</h4>
                <p>Password: ${adminpwd.replace(adminpwd, join)}</p>
                <p>Registered Phone Number: ${admintel}</p>
                <img src="https://tyktutor.onrender.com/images/tykicon.jpg"><br>
                <p class='text-success text-center'>This is the link to our Services 
                to serving you better at our Academy</p>
                <strong><u><a href='https://tyktutor.onrender.com'>Click Me</a></u></strong>
                </div>
                `
            };//

            transporter.sendMail(mailOptions);
        }

        //     ////////////////
        res.json(mymail());
    })
    //////////////////
    //schoolSignUp
    app.post('/submitsignup', async (req, res) => {

        const { signupE, signupP } = req.body;
        // /////


        const saltRounds = 10;
        try {



            // async function storeUserPassword(signupP) {

            const hashedPassword = await bcrypt.hash(signupP, saltRounds);

            // Now store `hashedPassword` in MongoDB
            await schoolSignUp.insertOne({ email: signupE, password: hashedPassword });
            return res.json({ success: true, message: `Congratulations, ${signupE} is Successfully Registered` });
            // res.json(insertres)
            // }
            //////
            // storeUserPassword(signupP);

        } catch (error) {
            console.error('Error occurred during signup:', error);
            return res.status(500).json({ success: false, message: 'Server Error' });
        }
        // const Dhashedpassword = await hashedPassword

    });
    /////////
    ///////////submitSchool login4sch/////
    ///////
    app.post('/login4sch', async (req, res) => {
        const { loginP, loginE } = req.body;

        try {
            const loginsch = await schoolSignUp.findOne({ email: loginE });

            if (!loginsch) {
                return res.status(404).json({ success: false, message: 'Email is Not Found Please, Sign Up' });
            }

            const match = await bcrypt.compare(loginP, loginsch.password);

            if (!match) {
                return res.status(401).json({ success: false, message: 'Incorrect Password' });
            }

            res.json({ success: true, message: 'Login Successful' });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    });


    /////////checksignupE

    app.post('/checksignupE', async (req, res) => {
        try {
            const { signupE, schoolE } = req.body;
            const checkEmail = await schoolSignUp.findOne({ email: signupE || schoolE });
            res.json(checkEmail);
        } catch (error) {
            console.log(`Email address is taken`, error)
            res.json({ success: false, message: 'Error Checking Email or Internet Failure' });
        }
    })
    ////////////////
    /////////checksignupE

    app.post('/checkschoolE', async (req, res) => {
        try {
            const { schoolE } = req.body;
            const checkEmail = await schoolSignUp.findOne({ email: schoolE });
            if (checkEmail) {
                return res.status(401).json({ success: true, message: "Email is Not Registered" })
            }
            res.json(checkEmail);
        } catch (error) {
            console.log(`Email address is taken`, error)
        }
    })
    ////////////////
    /////////////validate///////
    app.post('/validateEmail', async (req, res) => {
        const { schoolE, dbName } = req.body;

        if (!dbName?.trim()) {
            return res.status(400).json({ success: false, message: 'School Name Cannot be Empty' });
        }

        try {
            await client.connect();
            const db2 = client.db(dbName.split(' ').map(word => word[0]).join(''));
            const collection = db2.collection("school_collection");

            // const schoolSignUp = db2.collection('sign_up_collection'); // define it

            const searchEmail = await schoolSignUp.findOne({ email: schoolE });

            if (!searchEmail) {
                return res.status(404).json({ success: false, message: "Email Not Found, Please Sign Up" });
            }

            if (searchEmail.email && searchEmail.school_name) {
                return res.status(400).json({ success: false, message: "School Name already registered." });
            }

            const updateSchool = await schoolSignUp.updateOne(
                { email: schoolE },
                { $set: { school_name: dbName } }
            );

            if (updateSchool.modifiedCount === 0) {
                return res.status(500).json({ success: false, message: "Failed to register school name." });
            }

            await collection.insertOne({ school_name: dbName, email: schoolE });

            res.json({ success: true, message: "School name registered successfully!" });

        } catch (error) {
            console.error('Server error:', error);
            res.status(500).json({ success: false, message: "Server Error" });
        }
    });

    /////senndGrid_Email
    app.post('/sendGridEmail', async (req, res) => {
        const { changeE } = req.body;
        // try {

        const msg = {
            to: `${changeE}`, // Change to your recipient
            from: 'wisdomworld28608@gmail.com', // Change to your verified sender
            subject: 'You are trying to change your email',
            text: 'Code will be sent to you shortly',
            html: `<strong>we keep <span class='fas fa-spin fa-leaf'</span> you moving</strong>`,
        }

        sgMail
            .send(msg)
            .then((response) => {
                console.log(response[0].statusCode)
                console.log(response[0].headers)
            })
            .catch((error) => {
                console.error(error)
            })

    })


    /////////////////
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.error('Error connecting to MongoDB:', error));


//////////////////
// app.post("/send-email", async (req, res) => {
//     try {
//         const { email } = req.body
//         let transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: 'wisdomworld28608@gmail.com',
//                 pass: 'hdyruzocsvzlpsem'
//             },
//         });

//         let info = await transporter.sendMail({
//             from: 'wisdomworld28608@gmail.com',
//             to: email,
//             subject: 'tyktutor academy consultant',
//             html: `<div class='card bg-primary text-center'>
//             <h3 class='bg-text-primary text-center'>
//         Welcome to tykTutor Platform</h3>
//         <p class='text-success text-center'>This is the link to our Services
//         to serving you better at our Academy</p>
//         <div class="mx-auto w-75">
//         <img src="https://tyktutor.onrender.com/images/tykicon.jpg"><br><br>
//         <u><a href='tyktutor.onrender.com' >Click Me</a></u>
//         </div>`
//         });

//         res.json(info);
//     } catch (error) {
//         res.status(500).json({ message: "Error sending email", error: error.message });
//     }
// });
///////////////////


// C:\Users\ubec\Desktop\tykTUTORS\images


// console.log(btnmail)