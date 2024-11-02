
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

//////////// server url fetch from url.json
async function url() {// url from json
    try {
        const myurl = await fetch("/url.json");

        const response = await myurl.json();
        console.log(response.myurl);
    }
    catch (error) {
        console.error("failure to load the data", error)
    }
};
// url();



// 1. configure the input elemnts to accept only number values
document.querySelector(".input-Val").addEventListener('input', function (e) {
    acceptOnlyNum(e)
})

// Accept Only Numbers No Alphabeths
function acceptOnlyNum(e) {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
        e.target.value = value.replace(/\D/g, '');
        alert("Enter Valid Phone Numbers eg. (080*****123)")
    }


}


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


        if ((regPassword2.value === regPsw.value) || (regPsw.value === regPassword2.value) && regSur.value != ""
            && regOther.value != "" && regNum.value != "" && regEmail.value != "") {
            regPsw.classList.add("border-success");
            regPassword2.classList.add("border-success");


            regPsw.classList.remove("border-danger");
            regPassword2.classList.remove("border-danger");
            document.querySelector(".regSignup").disabled = false;

            console.log("hey we are the same");
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
            document.querySelector(".regSignup").disabled = true;
            regPsw.classList.remove("border-success");// revert
            regPassword2.classList.remove("border-success"); // revert

            regPsw.classList.remove("border-danger"); // revert
            regPassword2.classList.remove("border-danger"); // revert

        }
    });


}
sameValue();
//////////


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
let form = document.querySelector('.form'); //variable
const sverURL = url(); //server URl

form.setAttribute("action", sverURL);


regSignup.addEventListener('click', () => {

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
    dlgConfirm.showModal();

    xform.addEventListener('click', () => {
        dlgConfirm.close()// to close dialog element
        if (alert('Registration NOT Submitted yet!!!'), 1) { // its to int with the user
            location.reload()// reload present page

        };
    })

    subform.addEventListener('click', () => {
        ///////////
        if (reg()) {
            alert('Registration Successful')
        }
        else {
            alert('Registration Failed')
        }
        ////////////////
        setTimeout(() => {
            dlgConfirm.close()// to close dialog element

        }, 1000)// close dthe dialog in secs
        location.reload()// to reload the page
    });

});
//    this.preventDefault();

///http address server
async function reg() {
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


        // const sex = () => {
        //     if (regMale.checked) { return "Male" }// return male


        //     else if (regFemale.checked) { return "Female" }// femalae
        // }
        ////////
        const fetchstds = await fetch(sverURL, {
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



    }
    catch (error) {
        console.log("Not connecting to the server", error)
    }


};







