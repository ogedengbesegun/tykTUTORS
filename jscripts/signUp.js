
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





// regDob.addEventListener('keydown', (event) => {
//     event.preventDefault()
// })
//////////


regDob.addEventListener('click', () => {
    // regDob.value = '1900-01-01'
    //////////////////
    let calendar = new Date;
    let yr = (calendar.getFullYear()).toString();
    let mth = (calendar.getMonth() + 1).toString();
    let dy = (calendar.getDate()).toString()
    dy = dy < 10 ? "0" + dy : dy
    mth = mth < 10 ? "0" + mth : mth
    let tStringMax = `${yr}-${mth}-${dy}`
    console.log(tStringMax)
    regDob.setAttribute('min', `${yr - 40}-01-01`);
    regDob.setAttribute('max', tStringMax);

    const dlg = document.createElement('dialog');
    dlg.style.width = '255px'

    dlg.className = 'm-auto  border-0 rounded-2 py-2 bg-light';
    dlg.innerHTML = `<h5 class="text-center text-info">tykTutors Says...
    <i class="fas fa-warning text-danger rounded-2 p-2 h1"></i></h5>
    <p class="p-2 my-1 text-danger text-center">Click Calendar Icon 
    <i class='far fa-calendar text-dark'></i> !!!</p>
    <p class='text-center pb-1 px-3 w-75 mx-auto'><b class='text-danger'>
    Note: </b>* Year ealier than ${yr - 40} is NOT allowed *</p>
    <button type="button" title="Ok" class="btn btn-danger w-50 d-block mt-1
    mx-auto btnok">OK</button>`
    document.body.append(dlg);
    dlg.showModal();

    /////close dlg
    const btnok = document.querySelector('.btnok');
    btnok.addEventListener('click', () => {
        if (btnok) {
            dlg.close();
            dlg.remove();
        }

    });
    // const inputTitle = document.querySelector("input[title='show date picker']")
    // inputTitle.style.display = 'none'

})

///////////////
const dialogg = document.querySelector(".dialogg");////dialog 
const dialoggh6 = document.querySelector(".dialogg h6");//dialog headings
let closebtn = document.querySelector(".closebtn");//to close the dialog message


/////// closebtnf to close dialogg msg
closebtnf()
function closebtnf() {
    /// click the closebtn to close modal
    closebtn.addEventListener("click", () => {
        dialogg.close()//it closes the modal
    });
}

//////////////////

// 1. configure the input elemnts to accept only number values
document.querySelector(".input-Val").addEventListener('input', function (e) {
    acceptOnlyNum(e);// function callback
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
        const emailValTrim = regEmail.value;
        if (Regex.test(emailValTrim)) {

        }
        else {
            dialogg.showModal();
            // alert("Please enter a Valid Email Address");
            closebtn.addEventListener('click', () => {
                regEmail.value = "";//remove
            })
        }

    })
}
emailOnly();
// //////////////////////////////////////////
// 2. set the input password to maxLenght 10
let limitPwds = document.querySelectorAll("input[type = 'password']");
limitPwds.forEach(limitPwd => {
    limitPwd.setAttribute("maxlength", 15);
    limitPwd.setAttribute("minlength", 6)
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
///////


// validate the form input

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

        }


    });


}
sameValue();

//////////
//pop up dialog msg onfocus for password
//
regPsw.addEventListener('click', () => {

    dialogg.showModal();
    dialoggh6.textContent = `NOTE:
               Password Max-length is 15`;
    // closebtn.addEventListener('click', () => {
    //     regPsw.setAttribute('autofocus', true)
    //     //   
    // })
}, { once: true });


// 4 reveal and toggle the password input to reveal the password
let reveal = document.querySelector(".reveal")
reveal.addEventListener("click", () => {
    if (reveal.classList.contains("fa-eye-slash")) {
        reveal.classList.remove("fa-eye-slash")
        reveal.classList.add("fa-eye");
        reveal.classList.remove("text-danger")
        reveal.style.color = "green";
        regPsw.setAttribute("type", "text");

    }
    else {
        reveal.classList.add("fa-eye-slash")
        reveal.classList.remove("fa-eye")
        reveal.classList.add("text-danger")

        regPsw.setAttribute("type", "password");

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
        closeSignUps.classList.add('text-danger');
        closeSignUps.classList.remove("text-primary")
    });

    closeSignUps.addEventListener("mouseleave", () => {
        closeSignUps.classList.add("text-primary");
        closeSignUps.classList.remove("text-danger")
    });

})






document.querySelector(".screenCover").style.display = "block";

const section = document.querySelector("section")// variable declaration
const accountsExist = document.querySelectorAll(".accountExist"); //variable declared
const stdLogin = document.querySelector(".stdLogin"); //variable declared
const stdRegBtns = document.querySelectorAll(".stdRegBtn");// declaration

stdLogin.classList.add('hide');///set display to none
accountsExist.forEach((accountExist) => {
    accountExist.addEventListener("click", () => {
        if (stdLogin.classList.contains("hide")) { // see if it has array object

            stdLogin.classList.remove("hide")// removes the hide class



            section.style.display = "none"; // add hide to classList



        }
    })
})

stdRegBtns.forEach((stdRegBtn) => {

    stdRegBtn.addEventListener("click", () => {
        stdLogin.classList.add("hide"); // hide the Login
        section.style.display = "block";// to display section
    });


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
    let url = "https://tyktutors.onrender.com"
    window.close();//closes first the active page
    const existing = window.open(url, 'index.html');
    // existing
    if (existing) {// if already existing focus on it
        window.focus()


    }

});



////////regSignup
////////////////
let dlgsex = document.querySelector('.dlgsex').textContent;


function sex() {
    if (regMale.checked) {
        return regMale.value
    } else if (regFemale.checked) {
        return regFemale.value
    }
    else {
        return ""
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
    dlgpassword.textContent = regPsw.type;
    dlgphone.textContent = regNum.value;
    // regPsw.setAttribute("")


    /////validate form
    if ((regSur.value === "") || (regOther.value === "") || (regDob.value === "")
        || (regNum.value === "") || (regEmail.value === "") || (regPsw.value === "")
        || (regPassword2.value === "") || !sex()) {
        /////preventDefault to submit form
        event.preventDefault();
        dialogg.showModal();
        dialoggh6.textContent = "Oops: Empty fields cannot Submit"

    } else {
        dlgConfirm.showModal()

        /////////to cancel submition for error reason
        xform.addEventListener('click', () => {
            // dlgConfirm.close()//close confirm dialog first
            // if (dlgConfirm.close()) {
            dlgConfirm.close()
            dialogg.showModal();
            dialoggh6.textContent = 'Registration is Cancelled !!!'
            // regPsw.value = '';
            closebtn.addEventListener("click", () => {

                location.reload();
            })


        });
        //////////////
        subform.addEventListener('click', () => {

            ///////////
            // if () {
            dialogg.showModal()
            dialoggh6.textContent = 'Signup is about to be completed';
            dialoggh6.classList.remove('text-danger');
            dialoggh6.style.color = 'green'
            let indicator = document.createElement('p');
            indicator.className = `ms-2 text-success
            fas fa-spinner fa-spin fs-2`;
            // indicator.innerHTML = `<span class=''></span>`;
            dialoggh6.append(indicator);
            closebtn.addEventListener('click', () => {
                ///

                reg();
                ////////////////

                setTimeout(() => {
                    dlgConfirm.close()// to close dialog element
                    location.reload()// to reload the page

                }, 1200)// close the dialog in secs

            })




        });






    }


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
        // const surtrim = regSur; //trim whitespace
        const regOther = document.querySelector('.regOther').value;
        // const othertrim = regOther.trim();//trim whitespace
        const regDob = document.querySelector('.regDob').value;
        ////////////
        // const regNum = document.querySelector('.regNum').value;
        // const regEmail = document.querySelector('.regEmail').value;

        const dlgemail = document.querySelector('.dlgemail').textContent;
        const dlgphone = document.querySelector('.dlgphone').textContent;


        const regPsw = document.querySelector('.regPsw').value;
        // const pswtrim = regPsw.trim()//trim whitespace
        const confirmsex = dlgsex = sex()// either M or F



        ////////
        const signupRes = await signup()// from insert ()
        const fetchstds = await fetch(signupRes, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                regSur: regSur.trim(), regOther: regOther.trim(),
                regDob: regDob, confirmsex: confirmsex,
                dlgphone: dlgphone, dlgemail: dlgemail,
                regPsw: regPsw.trim()
            })
        })

        const response = await fetchstds.json();


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

        return urlRes;
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
            // console.log(`${emailR.email} is TAKEN`)
            dialogg.showModal();
            if (dialoggh6.textContent = `${emailR.email} is TAKEN`) {
                closebtn.addEventListener('click', () => {
                    valEmail.value = "";

                });
            }




        }


    }
    catch (error) {

    }

}

regEmail.addEventListener('focusout', () => {// onfucus
    if (emailtaken()) {
        dialoggh6.textContent = `Please Enter a valid Email Address`

    };

});
////////addevent listener


// tel_taken()
async function tel_taken() {
    try {
        const regNum = document.querySelector(".regNum");
        const urltel = await urljson();
        console.log(urltel['getTel']);

        const getTel = await fetch(urltel['getTel'], {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                regNum: regNum.value
            })
        });
        const getTelResp = await getTel.json();
        console.log(getTelResp.telephone)
        ////
        if (regNum.value === getTelResp.telephone) {
            dialogg.showModal();

            // alert(`${regNum.value} is for another User`);
            if (dialoggh6.textContent = `${regNum.value} is for another User`) {
                closebtn.classList.add("closebtn2");
                let closebtn2 = document.querySelector(".closebtn2");
                closebtn2.addEventListener('click', () => {

                    // if (dialoggh6.textContent = `${regNum.value} is for another User`) {
                    regNum.value = "";

                    // }

                })

            }


        }
    }
    catch (error) {
        // console.error(`${error} error getting tel Num`)
    }
}
////// telephone taken by another User
regNum.addEventListener("focusout", () => {
    // alert("focus over")
    tel_taken();

})
/////////////