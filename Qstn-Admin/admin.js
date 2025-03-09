
// declare my variables

// let btnNext = document.querySelector(".btnNext")
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imgstart = document.querySelector(".imgstart");
let imgstory = document.querySelectorAll(".imgstory");

let nextone = document.querySelector(".next1")
///accept only email into regEmail.value
const dialogg = document.querySelector(".dialogg");
const adminemail = document.querySelector("#adminemail");

function emailOnly() {
    ///////

    /////////
    const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const admintrim = adminemail.value.trim()
    if (Regex.test(admintrim)) {
        dialogg.close()

    }
    else {
        dialogg.showModal()

    }
    // const regEmail = document.querySelector(".regEmail");

}
// emailOnly();
//////////////

adminemail.addEventListener("focusout", () => {

    emailOnly();


})
const closebtn = document.querySelector(".closebtn")
closebtn.addEventListener("click", () => {
    dialogg.close()
    adminemail.value = "";
    admintel.value = "";

})







// declare the variables for the object
let adminEmail = document.querySelector("#adminemail");
let adminpwd = document.querySelector("#adminpwd");
let adminpwd2 = document.querySelector("#adminpwd2");
let admintel = document.querySelector("#admintel");

let submitAdmin = document.querySelector(".submitAdmin")
let section = document.querySelector("section")
////////////////////////////
//set min for adminpwd
adminpwd.addEventListener('change', () => {

    if (adminpwd.value.length < 6) {
        alert("Minimum of '6' characters required");
        adminpwd.value = "";
    }
})


////////////////////////////
// set the adminpwd to have an Attribute of maxlength
let adminPwds = document.querySelectorAll("input[type=password]");
adminPwds.forEach(adminPwdEach => {
    adminPwdEach.setAttribute("maxlength", "15");
})
// =================================================

// make all the placeholder to color in green
// let inputPlaceholders = document.querySelectorAll("input[placeholder]");
// inputPlaceholders.forEach(inputPlaceholder => {
//     inputPlaceholder.style.color = "green"
// });


///// tolowercase()
let names = document.querySelectorAll(".names");
names.forEach(eachName => {
    eachName.addEventListener("input", () => {
        eachName.value = eachName.value.toLowerCase();
    })
})
//////////////////////////

// adminClose 
let adminClose = document.querySelectorAll(".adminClose");
adminClose.forEach(adminclose => { //to fireUp all the classes called adminClose
    adminclose.addEventListener("click", () => {
        let url = "/index.html";
        window.open(url, 'index');////open landing page
        window.close();//close current page
    })
})

let toggleeye = document.querySelector(".toggle-eye")

toggleeye.addEventListener("click", () => {
    if (toggleeye.classList.contains("fa-eye-slash")) {
        toggleeye.classList.remove("fa-eye-slash");
        toggleeye.classList.add("fa-eye");
        toggleeye.classList.remove("text-danger");
        toggleeye.style.color = "green";
        document.querySelector("#adminpwd").setAttribute("type", "text");
    }
    else {


        toggleeye.classList.add("fa-eye-slash");
        toggleeye.classList.remove("fa-eye");
        toggleeye.classList.add("text-danger");
        document.querySelector("#adminpwd").setAttribute("type", "password")

    }


});




// 1. configure the input elemnts to accept only number values
admintel.addEventListener('input', (e) => {
    notNumbers(e); // from !Numbers () declared
});


// #forgot password input number acccepts only number, no strings
const teachNum = document.querySelector("#teachNum");
teachNum.addEventListener("input", (e) => {
    notNumbers(e); // will not accept !alphabeths--------
})

// function !Numbers are rejected
function notNumbers(e) {
    const valued = e.target.value;
    if (!/^\d*$/.test(valued)) {
        e.target.value = valued.replace(/\D/g, '');
        alert("Enter Valid Phone Numbers eg. (080*****123)")
    }
};
// 


let teacherlogin = document.querySelector(".teacherlogin"); //variable declared
teacherlogin.setAttribute("disabled", "true"); // make the button notactive

// select thee subject appropriately
let teacherSub = document.querySelector("#teacherSub"); // variable teacherSub

// decalre 
let selectedSubject = document.querySelector(".selectedSubject");
///declare samp element
let samp = document.querySelector("samp");
/////
teacherSub.addEventListener("input", () => {
    // teacherSub.value; // onclick remain in your state

    if (teacherSub.value == "Select Subject") {

        //  = `${teacherSub.value}`;
        teacherlogin.setAttribute("disabled", "true")
        /////subjectHeading class
        const subjectHeading = document.querySelector(".subjectHeading")

        subjectHeading.textContent = "Subject: ";
        /////////

    }

    else {

        teacherlogin.removeAttribute("disabled", "true");
        selectedSubject.textContent = subjectText(); //from the ()=> declared

        samp.style.display = "none";
        /////subjectHeading class
        const subjectHeading = document.querySelector(".subjectHeading")
        subjectHeading.textContent = "Subject: " + subjectText();
        /////////
        const reqError = document.querySelector(".reqError");

        reqError.textContent = ""
    }
});// end of teacherSub click event

teacherSub.addEventListener("mouseenter", () => {
    // teacherSub.style.color = "red"
    teacherSub.value = "Select Subject"
    teacherlogin.setAttribute("disabled", "true")
    // selectedSubject
    selectedSubject.textContent = ""; //set to NULL

    /////subjectHeading class
    const subjectHeading = document.querySelector(".subjectHeading")
    subjectHeading.textContent = "Subject: ";
    /////////
});




let adminLogpwd = document.querySelector("#adminLogpwd");
let adminLogtel = document.querySelector("#adminLogtel");
adminLogtel.setAttribute("maxlength", "11"); // set attribute of maxlength
adminLogpwd.addEventListener("input", () => {

    if (selectedSubject.textContent === subjectText()) {
        // reveal the samp element
        samp.style.display = "none";
    }
    else {
        if (selectedSubject.textContent != subjectText()) {
            samp.style.display = "block";
            selectedSubject.textContent = "";
            teacherlogin.disabled = true;
        }
    }
});


adminLogtel.addEventListener("input", (e) => {
    notNumbers(e); // does not accept !alphabeths

})





// write a function the subject selections
function subjectText() { //declaration of function to change to textContent

    if (teacherSub.value == "engl") {
        return "English-Language"
    }
    else if (teacherSub.value == "math") {
        return "Mathematics"
    }
    else if (teacherSub.value == "fina") {
        return "Financial-Accounting"
    }
    else if (teacherSub.value == "econ") {
        return "Economics"
    }
    else if (teacherSub.value == "comp") {
        return "Computer-Studies"
    }
    else if (teacherSub.value == "biol") {
        return "Biology"
    }
    else if (teacherSub.value == "phys") {
        return "Physics"
    }
    else if (teacherSub.value == "chem") {
        return "Chemistry"
    }
    else if (teacherSub.value == "furt") {
        return "Further-Mathematics"
    }
    else if (teacherSub.value == "comm") {
        return "Commerce"
    }
    else if (teacherSub.value == "lite") {
        return "Literature-in-English"
    }
    else if (teacherSub.value == "gove") {
        return "Government"
    }
    else if (teacherSub.value == "civi") {
        return "Civic-Education"
    }
    else if (teacherSub.value == "mart") {
        return "Marketing"
    }
    else if (teacherSub.value == "proc") {
        return "Data-Processing"
    }
    else if (teacherSub.value == "anim") {
        return "Animal-Husbandary"
    }

    else {
    }
}
/////to  hide  dnamically
const loginSection = document.querySelector(".loginSection ")
const createQst = document.querySelector(".createQst");
loginSection.style.display = "none";
createQst.style.display = "none";
//////////////////////




// signUP
let signUp = document.querySelectorAll(".signUp"); //declaration
signUp.forEach(signUps => {
    signUps.addEventListener("click", function () {
        document.querySelector(".regSection").style.display = "block"; //make visible
        document.querySelector(".loginSection").style.display = "none"; //make invinsible
        document.querySelector(".createQst").style.display = "none"



        logSignToggle.close(); // close the modal
    });
});


// use the dialog element
const Login = document.querySelectorAll(".Login"); // variable declaration
// const signUp = document.querySelector(".Login");
// signUp.addEventListener("click", () => {

//     document.querySelector(".regSection").classList.remove("hide"); //make visible
//     document.querySelector(".loginSection").classList.add("invisible"); //make invinsible
//     document.querySelector(".createQst").style.display = "none";

// });
Login.forEach(logins => {
    logins.addEventListener('click', () => {
        document.querySelector(".regSection").style.display = "none"; //make visible
        document.querySelector(".loginSection").style.display = "block"; //make invinsible
        document.querySelector(".createQst").style.display = "none";

        logSignToggle.close(); // close the modal

    });

    //////onMouseenter change text-bg-dark
    logins.addEventListener("mouseenter", () => {
        logins.classList.remove('text-bg-primary');
        logins.classList.add('text-bg-danger');

    });
    //////onMouseenter change text-bg-danger

    logins.addEventListener('mouseleave', () => {
        logins.classList.remove('text-bg-danger');
        logins.classList.add('text-bg-primary');

    })
});

// 

const regex = /^[a-d]+$/
let txtans = document.querySelector(".txtans"); // this the variable for 
let answerPopup = document.querySelector(".answerPopup");
txtans.addEventListener("input", () => {

    if (regex.test(txtans.value)) {
        txtans.value
    }

    else {
        answerPopup.showModal();
        document.querySelector(".answerPopup").addEventListener("click", () => {
            document.querySelector(".answerPopup").close(); //close the dialog onscreen click
            txtans.value = ""
        });
    }
});
// Starting point menu toggle
const btnMenu = document.querySelector(".btnMenu"); //variable declaration
const logSignToggle = document.querySelector(".logSignToggle");

btnMenu.addEventListener("click", () => {
    logSignToggle.showModal(); //to showModal method
});


btnMenu.addEventListener("mouseenter", () => { // to show Menu text
    document.querySelector(".d-flex small").style.display = "block"
})

btnMenu.addEventListener("mouseleave", () => {
    document.querySelector(".d-flex small").style.display = "none"
})

// to close the showModal method
const teacherClose = document.querySelector(".teacherClose"); //variable
teacherClose.addEventListener("click", () => { // close onclick
    logSignToggle.close(); // close the modal

});







// to get teaforgotpwd forgotten input 
let reEnterPwd = document.querySelector(".reEnterPwd");
const closeDlg = document.querySelector(".closeDlg");
const teaforgotpwd = document.querySelector(".teaforgotpwd")
//1 to open forgotten password dialog
teaforgotpwd.addEventListener("click", () => {
    reEnterPwd.showModal();

});

//2 to close the modal showModal forgotten dialog
closeDlg.addEventListener("click", () => {
    reEnterPwd.close();
});


// countqst

let mycount = 1; //declaration 
/////////
const countInc = () => { // countInc ()init
    return mycount++;
};//////////////////////
///////////
const countDec = () => {// countDec ()init
    return mycount--;
}
///////////////////

// let mycount = 0;
let backcount = document.querySelector(".backcount");
let forwardcount = document.querySelector(".forwardcount");
const countqst = document.querySelector(".countqst");

countqst.addEventListener("click", () => {
    countqst.textContent = 1;
});

///////////////////////////////////


////////////////////////
async function allurl() {
    try {
        const qstFetch = await fetch('/url.json');
        const qstResult = await qstFetch.json();

        return qstResult; // Directly return the JSON object
    } catch (error) {
        console.error("Error fetching URL data:", error);
        throw new Error("Unable to fetch URLs");
    }
}
/////////////
async function findsub() {
    try {
        const getQsturl = await allurl();
        console.log(getQsturl)
        const selectedSubject = document.querySelector(".selectedSubject").textContent;
        let teacherSub = document.querySelector("#teacherSub").value;

        // Normalize subject to match keys in the JSON (e.g., English-Language -> engl)
        const subjectKey = selectedSubject.replace(selectedSubject, teacherSub);

        if (getQsturl[subjectKey]) {
            console.log(getQsturl[subjectKey]);
            return getQsturl[subjectKey];
        } else {
            console.error(`Subject URL not found for: ${selectedSubject}`);
            throw new Error(`Invalid subject: ${selectedSubject}`);
        }
    } catch (error) {
        console.error("Error finding subject URL:", error);
        throw error;
    }
}

async function setsub() {
    try {
        const reqError = document.querySelector(".reqError");
        reqError.textContent = "";
        const response = await findsub(); // Resolve dynamically based on the selected subject

        if (!response) {
            console.error("No URL found for the selected subject.");
            const reqError = document.querySelector(".reqError");
            reqError.textContent = "Unable to find URL for the selected subject.";
            return;
        }

        // Fetch input values
        const qstion = document.querySelector(".qstion").value;
        const txta = document.querySelector(".txta").value;
        const txtb = document.querySelector(".txtb").value;
        const txtc = document.querySelector(".txtc").value;
        const txtd = document.querySelector(".txtd").value;
        const txtans = document.querySelector(".txtans").value;
        const sub = document.querySelector(".selectedSubject").textContent;
        const author = document.querySelector(".author").textContent;
        // Send the request
        const sendqst = await fetch(response, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                author: author.toLowerCase(),
                qstion: qstion,
                txta: txta,
                txtb: txtb,
                txtc: txtc,
                txtd: txtd,
                txtans: txtans,
                sub: sub,
            }),
        });

        const sendqstRes = await sendqst.json();
        ////////

        // console.log("Submission response:", sendqstRes);
    } catch (error) {
        console.error("Error in setsub function:", error);
        const reqError = document.querySelector(".reqError");

        reqError.textContent = "Check your Internet or Select a Subject first." + error;
    }
}




///////////////////
//Ssubject Submission Button fired-up
///////////////////
const submitqst = document.querySelector(".submitqst");

submitqst.addEventListener("click", (event) => {
    const qstion = document.querySelector(".qstion");
    const txta = document.querySelector(".txta");
    const txtb = document.querySelector(".txtb");
    const txtc = document.querySelector(".txtc");
    const txtd = document.querySelector(".txtd");
    const txtans = document.querySelector(".txtans");
    const sub = document.querySelector(".selectedSubject");
    const author = document.querySelector(".author");
    ////////////////////
    if (qstion.value === "" || txta.value === ""
        || txtb.value === "" || txtc.value === "" || txtd.value === ""
        || txtans.value === "" || sub.textContent === "" || author.textContent === "") {
        event.preventDefault();
        alert(`Empty Field(s) Cannot be Submitted!!!`);
    }
    else {

        setsub();
        alert(`${sub.textContent} is Successfully Submitted`);
        setTimeout(() => {
            qstion.value = ""; txta.value = "";
            txtb.value = ""; txtc.value = ""; txtd.value = "";
            txtans.value = "";
        }, 2000)
    }
});



//////////////

// to use form API checkValidity()method and validityMessage property
async function emailexist() {
    // const admintel = document.querySelector("#admintel").value;
    const adminemail = document.querySelector("#adminemail").value;

    try {
        const findEmail = await allurl();
        // adminEmail.value === findEmail.email
        // console.log(findEmail["tcherlogin"]);
        const tcherlogurl = findEmail["tcheremailexist"]
        console.log(tcherlogurl)
        const ftcheremail = await fetch(tcherlogurl, {
            method: "POST"
            , headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ adminemail: adminemail })
        })
        const response = await ftcheremail.json();
        if (adminemail === response.email) {
            // alert("email already exist")
            const dialogg = document.querySelector(".dialogg");

            const dialoggh6 = document.querySelector(".dialogg h6");
            dialoggh6.textContent = `${adminemail} Already Exist!!!`;
            dialogg.showModal()
        }

        // console.log(response.email);
    } catch (error) {
        console.log(`Not found ${error}`);
        // adminemail = ""
    }
}

//////////focusin password
adminemail.addEventListener("focusout", () => {
    emailexist()
    // adminemail.value = "";

})
//////////////////////////
async function telexist() {
    const admintel = document.querySelector("#admintel")
    // console.log(admintel.value)
    const urladmintel = await allurl();
    const responseurl = urladmintel["tchertelexist"]
    try {
        const admintelurl = await fetch(responseurl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ admintel: admintel.value })
        });
        const response = await admintelurl.json();

        if (admintel.value === response.tel) {
            const dialoggh6 = document.querySelector(".dialogg h6")
            dialogg.showModal();
            dialoggh6.textContent = `${admintel.value} already Exist!!!`
        }
    }
    catch (error) {

    }

}//////// asynchronous
admintel.addEventListener('focusout', () => {
    telexist();

});
//////



//Teachers Registration
////////////////////////////////
async function tcherReg() {
    const adminsurname = document.getElementById('adminsurname').value;
    const adminothername = document.getElementById('adminothername').value;
    const adminemail = document.getElementById('adminemail').value;
    const admintel = document.getElementById('admintel').value;
    const adminpwd = document.getElementById('adminpwd').value;

    /////////indicator
    // indicator.showModal()
    // const delay = (ms) => new Promise((resolve) => {
    //     setTimeout(resolve, ms)
    // })
    // await delay(2000);
    //////////////

    try {
        const url = await allurl();
        const tchers = url["tchers"]
        const sendmail = url["sendmail"]
        console.log(tchers);
        const tcher = await fetch(tchers, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                adminsurname: adminsurname,
                adminothername: adminothername,
                adminemail: adminemail, admintel: admintel,
                adminpwd: adminpwd
            })
        });
        if (tcher.ok) {
            const tcherResponse = await tcher.json()

            if (alert("Registration is Successful"), 1) {
                nodemail()
            }

            async function nodemail() {
                try {
                    const dmail = await fetch(sendmail,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                adminemail: adminemail, admintel: admintel,
                                adminothername: adminothername
                                , adminpwd: adminpwd
                            })
                        });

                    // if (dmail.ok) { 
                    alert(`Message Sent to your Email-Box ${adminemail}`);
                    // }
                    const resmail = await dmail.json();


                    // else {
                    //     alert(`Check your email Address, ${adminemail} failure`)

                    // }

                }
                catch {
                    // alert(`Check internet Network`)

                }
            }

        }
        else {
            alert('Not Successful, try Again')
        }
        //     // console.log(tcherResponse)

    }
    catch (error) {
        console.log(error + "internet NOT connected")
    }
}

///////

////////////////////////
submitAdmin.addEventListener('click', function (event) {
    ///deactivated the button once clicked
    //////////////////////////

    let adminsurname = document.getElementById('adminsurname').value;
    let adminothername = document.getElementById('adminothername').value;
    // let adminemail = document.getElementById('adminemail').value;
    let admintel = document.getElementById('admintel').value;
    let adminpwd = document.getElementById('adminpwd').value;
    /////////////////


    ///////////////
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(adminEmail.value)) {
        emailOnly();
        // alert('Please enter a valid email address.');   // an alert to warn users
        adminEmail.value = ""; // set the value back to nothing
        event.preventDefault(); // Prevent form submission

    }
    else if ((adminsurname === "") || (adminothername === "")
        || (admintel === "") || (adminpwd === "")) {

        /////bring-in existing modal, change innerHTML//
        const dialogg = document.querySelector(".dialogg");

        const dialoggh6 = document.querySelector(".dialogg h6");
        dialoggh6.textContent = "Oops, Please Complete all fields...";
        dialogg.showModal();



        event.preventDefault(); // Prevent form submission
        setTimeout(() => {
            dialogg.close();

            dialoggh6.textContent = "Please Enter a valid Email Address";

        }, 2000);
        // alert("Requred information")
    }
    else {
        // if (tcherReg()) {
        setTimeout(() => {
            tcherReg();



        }, 2000)
        // setTimeout(() => {
        indicator.showModal()

        /////settimeout for reload
        setTimeout(() => {
            indicator.close();

            window.location.reload();
        }, 5000)




        // };
    }
});

///////Adminlogin req
const indicator = document.querySelector('.indicator');
async function tcherlogRequest() {
    const adminLogtel = document.querySelector("#adminLogtel").value;
    const adminLogpwd = document.querySelector("#adminLogpwd").value;
    const author = document.querySelector(".author");
    indicator.showModal();
    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // await delay(5000);

    ////delay execution of Promise
    const delay = (ms) =>
        new Promise((resolve) =>
            setTimeout(resolve, ms)

        )
    await delay(3000);

    try {
        const url = await allurl();
        const tcherlogurl = url["tcherlogin"]
        // console.log(tcherlogurl);
        const logTcher = await fetch(tcherlogurl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                adminLogtel: adminLogtel,
                adminLogpwd: adminLogpwd
            })
        });
        const tcherReq = await logTcher.json();
        // console.log(tcherReq);
        // console.log(tcherReq.tel);
        // console.log(tcherReq["surname"])
        /////////conditional statement for output
        if ((adminLogtel === tcherReq.tel) && (adminLogpwd === tcherReq.password)) {
            document.querySelector(".createQst").style.display = "block";
            //give marginTop 5px
            document.querySelector(".createQst").style.marginTop = "10px"
            // author.style.textAlign = "start";
            author.textContent = tcherReq.surname.toUpperCase()
                + " " + tcherReq.other_name;
            if (alert("Login Successful"), 1) {
                document.querySelector("#adminLogpwd").value = "";//set to ""
                document.querySelector("#adminLogtel").value = "";//set to ""

            };
            loginSection.style.display = "none";//// 
        }

    }
    catch (error) {
        const adminLogpwd = document.querySelector("#adminLogpwd");

        alert(`Oops, Check your password!!!`);
        adminLogpwd.value = "";
        // console.error(`the request failed ${error}`)
    }
    finally {
        indicator.close();
    }
};
/////////
teacherlogin.addEventListener("click", () => {
    tcherlogRequest();
})
////////////


/////logOut Admin/teacher button logout////
const logout = document.querySelector(".logout");
logout.addEventListener('click', () => {
    const author = document.querySelector(".author");

    if (confirm(`${author.textContent}: Do you want to Logout ?`, 1)) {
        location.reload()

    }
    else {

    }
})



const search = document.querySelector('.search');
const userheader = document.querySelectorAll('.userheader');

search.addEventListener('input', () => {
    userheader.forEach(userhead => {
        if ((userhead.innerHTML.toLowerCase()).includes(search.value.toLowerCase())) {
            userhead.scrollIntoView({ behavior: 'smooth' })

        }
        else {
            for (let i = 0; i < userhead.length; i++) {
                alert[i]
            }
        }

    })
})
///////////////////////////////////
// const ans = { 'a': 'aaa', 'b': 'bbb', 'c': 'ccc', 'd': 'ddd' }
// const { a, b, c, d } = ans;
// console.log(`${d}/${c}`);
// let response = ''
// async function emailsend() {

//     // const adminemail = document.querySelector('#adminemail')
//     // adminemail.value;

//     const resmail = await allurl()
//     const sendm = resmail['sendmail']
//     console.log(sendm);

//     const sendmail = await fetch(sendm,
//         {
//             method: "POST"
//             // headers: { 'Content-Type': 'application/json' },
//             // body: JSON.stringify()
//         }
//     );
//     const response = await sendmail.json()
//     alert(response)
//     // console.log(response.message)
//     // }
//     // catch (error) {
//     //     console.log(error)

//     // };



// }
// const mail = document.querySelector('.mail');
// mail.addEventListener('click', () => {
//     emailsend()
// })

