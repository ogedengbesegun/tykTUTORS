
//variables declarations
const regSur = document.querySelector('.regSur');
const regOther = document.querySelector('.regOther');
const regDob = document.querySelector('.regDob');
const regMale = document.querySelector('.regMale');
const regFemale = document.querySelector('.regFemale');
const regNum = document.querySelector('.regNum');
const regEmail = document.querySelector('.regEmail');
const regPsw = document.querySelector('.regPsw');
const regPassword2 = document.querySelector("#regPassword2");

///////////////


// 1. configure the input elemnts to accept only number values
document.querySelector(".input-Val").addEventListener('input', function (e) {
    acceptOnlyNum(e);// function call
})

// Accept Only Numbers No Alphabeths
function acceptOnlyNum(e) {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
        e.target.value = value.replace(/\D/g, '');
        alert("Enter Valid Phone Numbers eg. (080*****123)")
    }


}
////////////////////////////
///accept only email into regEmail.value
function emailOnly() {
    const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const regEmail = document.querySelector(".regEmail");
    regEmail.addEventListener("focusout", () => {
        const emailValTrim = regEmail.value.trim();
        if (Regex.test(emailValTrim)) {

        }
        else {
            alert("Please enter a Valid Email Address");
            regEmail.value = "";//remove
        }

    })
}
emailOnly();
// //////////////////////////////////////////
// 2. set the input password to maxLenght 10
let limitPwds = document.querySelectorAll("input[type = 'password']");
limitPwds.forEach(limitPwd => {
    limitPwd.setAttribute("maxlength", 15);
});


/////////////toLowerCase()

let stdNames = document.querySelectorAll(".stdNames");
stdNames.forEach(eName => {
    eName.addEventListener("input", () => {
        eName.value = eName.value.toLowerCase();
    })
});
/////////////////////////////////

////disable sign/Register button 1st
document.querySelector(".regSignup").disabled = true;/// disable submit button
///////


// validate the form input
// let regPsw = document.querySelector(".regPsw"); //aready declared

///// to ensure enter password and confirm are same
function sameValue() { //give border-success when same value input
    regPsw.classList.remove("border-success");
    regPassword2.classList.remove("border-success");

    regPassword2.addEventListener("input", () => {


        if ((regPassword2.value === regPsw.value) || (regPsw.value === regPassword2.value)) {
            regPsw.classList.add("border-success");
            regPassword2.classList.add("border-success");


            regPsw.classList.remove("border-danger");
            regPassword2.classList.remove("border-danger");


            // console.log("hey we are the same");
        }
        else {


            regPsw.classList.remove("border-success");
            regPassword2.classList.remove("border-success");

            regPsw.classList.add("border-danger");
            regPassword2.classList.add("border-danger");

            document.querySelector(".regSignup").disabled = true;

        }





    });

    regPsw.addEventListener("input", () => { //ist input
        if (regPsw.value != regPassword2.value) { //if val !=
            regPassword2.value = "";// return empty
            // ////////////
            regPsw.classList.remove("border-success");// revert
            regPassword2.classList.remove("border-success"); // revert

            regPsw.classList.remove("border-danger"); // revert
            regPassword2.classList.remove("border-danger"); // revert
            ////
            document.querySelector(".regSignup").disabled = true;

        }
    });


}
sameValue();

//////////
function formValid() {//////////
    const formValidity = document.querySelector('.form');

    if (formValidity.checkValidity()) {//dont submit empty input){

        document.querySelector(".regSignup").disabled = false;

    } else {
        if (alert("Fill all required fields..."), 1) {
            document.querySelector(".regSignup").disabled = true;

            regPsw.value = '';

        };


    }
    /////////////to ensure all form fields are filled

}

////Once focusout on Confirm Passworm input
regPassword2.addEventListener('focusout', () => {
    formValid();//trigger form validation
})


////////formValid();

// 4 reveal and toggle the password input to reveal the password
let reveal = document.querySelector(".reveal")
reveal.addEventListener("click", () => {
    if (reveal.classList.contains("fa-eye-slash")) {
        reveal.classList.remove("fa-eye-slash")
        reveal.classList.add("fa-eye");
        reveal.classList.remove("text-danger")
        reveal.style.color = "green";
        document.querySelector(".regPsw").setAttribute("type", "text");

    }
    else {
        reveal.classList.add("fa-eye-slash")
        reveal.classList.remove("fa-eye")
        reveal.classList.add("text-danger")

        document.querySelector(".regPsw").setAttribute("type", "password");

    }
})

// the closeSign-up btn initialised or fired up
let closeSignUp = document.querySelectorAll(".closeSignUp")

closeSignUp.forEach(closeSignUps => {
    closeSignUps.addEventListener("click", () => {
        window.close();
        // window.back();
    });


    // hover to change element appearance

    closeSignUps.addEventListener("mouseover", () => {
        closeSignUps.style.color = "white";
        closeSignUps.classList.remove("text-danger")
    });

    closeSignUps.addEventListener("mouseleave", () => {
        // closeSignUps.style.color = "white";
        closeSignUps.classList.add("text-danger")
    });

})




// let backpage = document.querySelector('.backpage'); // back to previuos page
// backpage.addEventListener("click", () => {
//     window.history.back();

// })

// fetch("/html/signUp.html")
//     .then(response => response.text())
//     .then(data => {
//         document.querySelector("#content").innerHTML = data
//     });

// fetch("/html/signUp.html")
//     .then(response => response.text())
//     .then(data => {
//         document.querySelector("#content1").innerHTML = data
//     });



const section = document.querySelector("section")// variable declaration
const accountExist = document.querySelector(".accountExist"); //variable declared
const stdLogin = document.querySelector(".stdLogin"); //variable declared
const stdRegBtn = document.querySelector(".stdRegBtn");// declaration
accountExist.addEventListener("click", () => {
    if (stdLogin.classList.contains("hide")) { // see if it has array object

        stdLogin.classList.remove("hide")// removes the hide class



        section.style.display = "none"; // add hide to classList



    }
})

stdRegBtn.addEventListener("click", () => {
    stdLogin.classList.add("hide"); // hide the Login
    section.style.display = "block";// to display section
});

///////////////

// const subsList = document.querySelectorAll(".subsList");
// subsList.forEach(subslist => {
//     subslist.addEventListener("click", () => {
//         console.log("Just got clicked Now")
//     })
// })

const signHome = document.querySelector(".signHome"); //variable declared
signHome.addEventListener("click", () => {
    let url = "/index.html"
    window.close();//closes first the active page
    window.open(url, 'index.html'); //open the url
});



////////regSignup
////////////////

let dlgsex = document.querySelector('.dlgsex').textContent;


function sex() {
    if (regMale.checked) {
        return regMale.value
    } else {
        if (regFemale.checked) {
            return regFemale.value
        }
    }
};
// dlgsex = sex();
//////////////
const regSignup = document.querySelector('.regSignup')
const form = document.querySelector(".form")

async function urlform() {
    const urlF = await fetch("/url.json");
    const urlR = await urlF.json()
    return urlR.signup
}

async function wrk() {
    const urlinsert = await urlform()
    form.setAttribute("action", urlinsert)
    console.log(form.getAttribute("action"));
}
// wrk();
////////////////
regSignup.addEventListener('click', (event) => {
    ////////
    const dlgConfirm = document.querySelector('.dlgConfirm'); ///dialog v

    const dlgsur = document.querySelector('.dlgsur');
    const dlgother = document.querySelector('.dlgother');
    const dlgdob = document.querySelector('.dlgdob');
    const dlgsex = document.querySelector('.dlgsex');

    const dlgemail = document.querySelector('.dlgemail');
    const dlgpassword = document.querySelector('.dlgpassword');
    const dlgphone = document.querySelector('.dlgphone');
    const xform = document.querySelector('.xform');
    const subform = document.querySelector('.subform');

    ///////////////
    dlgsur.textContent = regSur.value.toUpperCase();
    dlgother.textContent = regOther.value.toUpperCase();
    dlgdob.textContent = regDob.value;
    dlgsex.textContent = sex();
    dlgemail.textContent = regEmail.value;
    dlgpassword.textContent = regPsw.value;
    dlgphone.textContent = regNum.value;



    /////validate form

    event.preventDefault();
    dlgConfirm.showModal();




    /////////to cancel submition for error reason
    xform.addEventListener('click', () => {
        dlgConfirm.close()// to close dialog element
        alert('Registration NOT Submitted yet!!!')// its to int with the user
        // location.reload()// reload present page
        regPsw.value = '';


    });
    //////////////
    subform.addEventListener('click', () => {
        ///////////
        // reg()
        if (reg()) {
            alert('Signup is about to be completed')
        }

        ////////////////
        setTimeout(() => {
            dlgConfirm.close()// to close dialog element
            location.reload()// to reload the page

        }, 5000)// close the dialog in secs
    });

});
//    this.preventDefault();

///http address server
async function reg() {
    ////fetch the http for server
    async function signup() {
        const signupF = await fetch("/url.json"); // fetch the url for server
        const signupR = await signupF.json()// return the object
        console.log(signupR.signup)
        return signupR.signup// returns obj properties

    }

    try {
        const regSur = document.querySelector('.regSur').value;
        const regOther = document.querySelector('.regOther').value;
        const regDob = document.querySelector('.regDob').value;
        // const regMale = document.querySelector('.regMale').value;
        // const regFemale = document.querySelector('.regFemale').value;
        const regNum = document.querySelector('.regNum').value;
        const regEmail = document.querySelector('.regEmail').value;
        const regPsw = document.querySelector('.regPsw').value;
        const confirmsex = dlgsex = sex()// either M or F



        ////////
        const signupRes = await signup()// from insert ()
        const fetchstds = await fetch(signupRes, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                regSur: regSur, regOther: regOther,
                regDob: regDob, confirmsex: confirmsex,
                regNum: regNum, regEmail: regEmail,
                regPsw: regPsw
            })
        })

        const response = await fetchstds.json();
        // if (response) {
        //     alert("Successfully Registered, Congratullations")
        // }
        // response.myInsert;
        // console.log("Already existing email", response.myFind)

    }
    catch (error) {
        console.log("Not connecting to the server", error)

        // alert("The registration failed, Try again!!!")
    }


};



////////
async function urljson() {
    try {
        const urlf = await fetch('/url.json');
        const urlRes = await urlf.json();
        // console.log(urlRes);
        const signup = urlRes.signup;
        const getLogin = urlRes.getLogin;
        const getfina = urlRes.getfina;
        const getUserName = urlRes.getUserName;
        const getEmail = urlRes.getEmail
        return { signup, getLogin, getfina, getUserName, getEmail };

    }
    catch (error) {
        console.log("getUserName NOT available", error)
    }

}

async function emailtaken() {
    ////
    const valEmail = document.querySelector('.regEmail');

    try {


        const geturl = await urljson();
        const geturlemail = geturl.getEmail
        console.log(geturlemail)
        // console.log(geturl.getUserName)
        const emailf = await fetch(geturlemail, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ valEmail: valEmail.value })
        })

        let emailR = await emailf.json();



        if (valEmail.value === emailR.email) {
            console.log(`${emailR.email} is TAKEN`)

            if (alert(`${emailR.email} is TAKEN`), 1) {
                valEmail.value = "";
            };

        }
        else {
            console.log(`${emailR.email} is available`)

        }

        // else {

        // }


    }
    catch (error) {

    }

}

const focusPsw = document.querySelector(".regPsw");// onfucus
focusPsw.addEventListener('focusin', () => {
    emailtaken()

});
////////addevent listener
