// declare my variables
// let btnNext = document.querySelector(".btnNext")
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imgstart = document.querySelector(".imgstart");
let imgstory = document.querySelectorAll(".imgstory");

let nextone = document.querySelector(".next1")



// declare an object admin
let admin = [{
    firstname: "segun",
    lastname: "ogedengbe",
    email: "wisdomworld28608@gmail.com",
    phonenumber: "08036749218",
    password: "admin001"
},
{
    firstname: "sade",
    lastname: "ogedengbe",
    email: "wisdomworld1201@gmail.com",
    phonenumber: "08038542690",
    password: "admin002"
},
{
    firstname: "eniolorunfe",
    lastname: "ogedengbe",
    email: "wisdomworld1234@gmail.com",
    phonenumber: "09034645647",
    password: "admin003"
}]





// declare the variables for the object
let adminEmail = document.querySelector("#adminemail");
let adminpwd = document.querySelector("#adminpwd");
let adminpwd2 = document.querySelector("#adminpwd2");
let admintel = document.querySelector("#admintel");

let submitAdmin = document.querySelector(".submitAdmin")
let res = document.querySelector(".res");
let section = document.querySelector("section")

// set the adminpwd to have an Attribute of maxlength
let adminPwds = document.querySelectorAll("input[type=password]");
adminPwds.forEach(adminPwdEach => {
    adminPwdEach.setAttribute("maxlength", "15");
})
// =================================================

// make all the placeholder to color in green
let inputPlaceholders = document.querySelectorAll("input[placeholder]");
inputPlaceholders.forEach(inputPlaceholder => {
    inputPlaceholder.style.color = "green"
});

// email-input validation to ensure


submitAdmin.addEventListener("click", () => {

    // set the password 1&2 to black onclick
    adminpwd.addEventListener("focus", () => {
        adminpwd.style.color = "black";
        adminpwd2.style.color = "black";
        res.textContent = ""


        // if (!(adminEmail.hasAttribute("type", "email"))) {
        //     alert("This is NOT an email input")
        // }
    })

    // creatElement to append into the res node
    let check = document.createElement("i");
    check.className = "fas fa-check";
    let times = document.createElement("i");
    times.className = "fas fa-close";


    for (let i = 0; i < admin.length; i++) {

        if ((admin[i].email == `${adminEmail.value}`)
            && (admin[i].password == `${adminpwd.value}`)
            && (`${adminpwd.value}` == `${adminpwd2.value}`)) {
            res.textContent = "Registration Successful "
            res.style.color = "green";
            // console.log(res.textContent);
            adminpwd.style.color = "green";
            adminpwd2.style.color = "green";

            // check.style.fontSize = "48px"
            res.appendChild(check);
            break

        }
        else {
            // times.style.fontSize = "48px"

            res.textContent = "Check Password ";


            res.appendChild(times);
            res.style.color = "red";
            // console.log(res.textContent);
            adminpwd.style.color = "red";
            adminpwd2.style.color = "red";



        }




    }


});

// adminClose 
let adminClose = document.querySelectorAll(".adminClose");
adminClose.forEach(adminclose => { //to fireUp all the classes called adminClose
    adminclose.addEventListener("click", () => {
        window.close();
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

// to use form API checkValidity()method and validityMessage property
document.querySelector(".form").addEventListener('submit', function (event) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(adminEmail.value)) {

        alert('Please enter a valid email address.');   // an alert to warn users
        adminEmail.value = ""; // set the value back to nothing
        event.preventDefault(); // Prevent form submission
    } else {

        document.querySelector(".form").setAttribute("method", ""); // to send to the server into the db
        confirm("Congratullations, Form Submitted Successfully")
    }
});


// 1. configure the input elemnts to accept only number values
admintel.addEventListener('input', (e) => {
    notNumbers(e); // from !Numbers () declared
});


// #forgot password input number acccepts only number, no strings
const teachNum = document.querySelector("#teachNum");
teachNum.addEventListener("input", (e) => {
    notNumbers(e); // will not accept !number--------
})

// function !Numbers are rejected
function notNumbers(e) {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
        e.target.value = value.replace(/\D/g, '');
        alert("Enter Valid Phone Numbers eg. (080*****123)")
    }
};
// 



let teacherlogin = document.querySelector(".teacherlogin"); //variable declared
teacherlogin.setAttribute("disabled", "true"); // make the button notactive

// select thee subject appropriately
let teacherSub = document.querySelector("#teacherSub"); // variable teacherSub

// decalre 
let selectedSubject = document.querySelector(".selectedSubject")

teacherSub.addEventListener("click", () => {
    // teacherSub.value; // onclick remain in your state

    if (teacherSub.value == ">>>Select One") {

        //  = `${teacherSub.value}`;
        teacherlogin.setAttribute("disabled", "true")


    }

    else {

        teacherlogin.removeAttribute("disabled", "true");
        selectedSubject.textContent = subjectText(); //from the ()=> declared


    }
});// end of teacherSub click event

teacherSub.addEventListener("mouseenter", () => {
    // teacherSub.style.color = "red"
    teacherSub.value = ">>>Select One"
    teacherlogin.setAttribute("disabled", "true")
    // selectedSubject
    selectedSubject.textContent = ""; //set to NULL
});
// teacherlogin.addEventListener("mouseenter", () => {
//     // hide the samp element
// document.querySelector("samp").style.display = "none";
// });

let adminLogpwd = document.querySelector("#adminLogpwd");
let adminLogtel = document.querySelector("#adminLogtel");
adminLogtel.setAttribute("maxlength", "11"); // set attribute of maxlength
adminLogpwd.addEventListener("click", () => {
    // reveal the samp element
    document.querySelector("samp").style.display = "block";
});

adminLogpwd.addEventListener("input", () => {
    // hide the samp element
    if (adminLogpwd) {
        document.querySelector("samp").style.display = "none";
    }

    else {
        document.querySelector("samp").style.display = "block";

    }

})

adminLogtel.addEventListener("input", (e) => {
    notNumbers(e); // does not accept !numbers

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
// subjectText


// signUP
let signUp = document.querySelector("form .signUp"); //declaration
signUp.addEventListener("click", function () {
    document.querySelector(".regSection").classList.remove("hide"); //make visible
    document.querySelector(".loginSection").classList.add("invisible"); //make invinsible
    document.querySelector(".createQst").style.display = "none"
});

// use the dialog element
const logToggle = document.querySelector("#logToggle"); // variable declaration

logToggle.addEventListener("click", () => {
    if (logToggle.value == "SignUp") {
        document.querySelector(".regSection").classList.remove("hide"); //make visible
        document.querySelector(".loginSection").classList.add("invisible"); //make invinsible
        document.querySelector(".createQst").style.display = "none";

    }

    else if (logToggle.value == "Login") {
        document.querySelector(".regSection").classList.add("hide"); //make visible
        document.querySelector(".loginSection").classList.remove("invisible"); //make invinsible
        document.querySelector(".createQst").style.display = "block";

    }
});
// 


let txtans = document.querySelector(".txtans"); // this the variable for 
let answerPopup = document.querySelector(".answerPopup");
txtans.addEventListener("input", () => {
    if (txtans.value === txtans.value.toUpperCase()) {
        // alert("Revert to lowerCase")
        txtans.value = txtans.value.toLowerCase();



    }
    else if ((txtans.value === "a") || (txtans.value === "b") ||
        (txtans.value === "c") || (txtans.value === "d")) {



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

// to close the showModal method
const teacherClose = document.querySelector(".teacherClose"); //variable
teacherClose.addEventListener("click", () => { // close onclick
    logSignToggle.close(); // close the modal

});

//to click outside

// let isClickInsideDialog = false;
// logSignToggle.addEventListener("mousedown", (event) => {
//     isClickInsideDialog = true;
//     console.log(isClickInsideDialog = true);
// });

// document.addEventListener("mousedown", (event) => {
//     if (!logSignToggle.contains(event.target)) {
//         isClickInsideDialog = false;
//     }
// });

// document.addEventListener("click", (event) => {
//     if (isClickInsideDialog) {

//         logSignToggle.close(); // close the modal

//     }

// });

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
