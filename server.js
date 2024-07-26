const express = required('express');
const mongoose = required('mongoose');
const bodyParser = required('body-parser');

const app = express();


// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/formdata', {
    useNewUrlParser: true, useUnifiedTopology: true
});

// Define a schema

const formDataSchema = new mongoose.Schema({
    regfirstName: String,
    reglastName: String,
    regNumber: String,
    regPassword: String


});

// Define model
const FormData = mongoose.model('FormData', formDataSchema);


//Middleware 
app.use(bodyParser.urlencoded({ extended: true }));

// serve HTML form) 
app.get('/', (req, res) => {


    res.sendFile( '/signUp.html');
});


// handle form submission
app.post('/submit', (req, res) => {
    const formData = new FormData({
        regfirstName: req.boody.regfirstName,
        reglastName: req.body.reglastName,
        regNumber: req.body.regNumber,
        regPassword: req.body.regPassword
    });

    formData.save((err) => {
        if (err) {
            res.status(500).send('Err or saving to database.');
        } else {
            res.send('Form data saved to database');
        }
    });
});

// start the server
app.listen(3000, () => {
    console.log('server is running on port 3000');
});