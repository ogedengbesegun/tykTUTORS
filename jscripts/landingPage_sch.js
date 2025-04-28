// import { stringify } from "path-to-regexp";

const eyeblind = document.querySelector('.eyeblind');
const eyeblind2 = document.querySelector('.eyeblind2');
///////////////
const signupP = document.querySelector('#signupP');
const signupE = document.querySelector('#signupE');
/////login
const loginP = document.querySelector('#loginP');
const loginE = document.querySelector('#loginE');
// ///////

// signupP attribute min=6 & maxlength to 18//////////////////
signupP.setAttribute("maxlength", "18");
signupP.setAttribute("minlength", "6");

//////////////////////////////////////

eyeblind.addEventListener('click', () => {
    if (eyeblind.classList.contains("fa-eye-slash")) {
        eyeblind.classList.remove("fa-eye-slash")
        eyeblind.classList.add("fa-eye");
        signupP.setAttribute("type", "text");

    }
    else {
        eyeblind.classList.add("fa-eye-slash")
        eyeblind.classList.remove("fa-eye")

        signupP.setAttribute("type", "password");

    }

});
//////////////////////////////////////////////////
//////////////////////////////////////

eyeblind2.addEventListener('click', () => {
    if (eyeblind2.classList.contains("fa-eye-slash")) {
        eyeblind2.classList.remove("fa-eye-slash")
        eyeblind2.classList.add("fa-eye");
        loginP.setAttribute("type", "text");

    }
    else {
        eyeblind2.classList.add("fa-eye-slash")
        eyeblind2.classList.remove("fa-eye")

        loginP.setAttribute("type", "password");

    }

});
//////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
const onpage1 = document.querySelectorAll('.onpage1');
const onpage2 = document.querySelector('.onpage2');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

page2.style.display = "none"

onpage1.forEach(onpage => {

    //i 've 2 onpage1 let each of them do this
    onpage.addEventListener('click', () => {
        page2.style.display = "block";
        page1.style.display = "none"
    })
    ////
})

onpage2.addEventListener('click', () => {
    page2.style.display = "none";
    page1.style.display = "block"
});

//////////////////signupE and validation


//url
// url() getting all url
async function url() {
    const geturl = await fetch('/url.json');
    const okurl = await geturl.json();
    // console.log(okurl.submitsignup)
    return okurl
}
/////////////////////

async function fSubmitsignup() {

    const getsubmitsignup = await url()

    const oksubmitsignup = await getsubmitsignup.submitsignup
    console.log(oksubmitsignup);
    ////////////////////////

    const signupP = document.querySelector('#signupP').value;
    const signupE = document.querySelector('#signupE').value;
    //////////
    try {


        const submitBtn = await fetch(oksubmitsignup,
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ signupE: signupE, signupP: signupP })
            })
        let resp = await submitBtn.json();


    } catch (error) {
        console.log("Failure to send request", error)
    }
}

////////
async function checkEmail() {
    const signupE = document.querySelector('#signupE').value;

    const geturl = await url()
    console.log(geturl.checksignupE)
    const valMail = await fetch(geturl.checksignupE,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ signupE: signupE })
        }
    );
    const response = valMail.json();
    ////if that happens
    if (await response) {
        const signupE = document.querySelector('#signupE');

        alert(`${signupE.value} Already Exist!!! Check Emaill Address.`)
        signupE.value = '';
    }
}
//////////////////

//submitsignup
const submitsignup = document.querySelector('.submitsignup');
/////////////////
const regexx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//email
const Regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$&!?])[A-Za-z\d@$&!?]+$/;//password
submitsignup.addEventListener('click', (e) => {

    if (Regex.test(signupP.value) === false || regexx.test(signupE.value) === false) {
        // console.log(Regex.test(signupP.value))
        e.preventDefault()
        alert(`Error! Check your Emaill Address or Password
         Use at least one Uppercase, Lowercase, Digit and 
         Special Characters e.g Az 09 @ $ & ! ?`);

    }


    else {
        if (confirm(` Please, ${signupE.value} Confirm SignUp`)) {
            fSubmitsignup();

            setTimeout(() => {
                signupE.value = '';
                signupP.value = '';
                alert(`Congratulations, Sign UP is Successful`);

            }, 2000)


        }
        else {
            e.preventDefault()
        }
    }


});

//////////////////////
////on focus out
signupE.addEventListener('focusout', () => {
    checkEmail()

});
//////////////////////////////
/////////////////////////////
// schoollogin()
async function schoollogin() {
    const loginP = document.querySelector('#loginP').value;
    const loginE = document.querySelector('#loginE').value;
    try {
        const geturl = await url()
        const schlogin = geturl.login4sch
        console.log(schlogin)
        const schloginf = await fetch(schlogin, {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ loginP: loginP, loginE: loginE })
        })
        const respon = await schloginf.json()
        if (respon.success) {
            alert(respon.message)
        }
        else {
            alert(respon.message)
        }
    } catch (error) {
        console.log('failure to login', error)
    }
}
//////////
///submitlogiin btn
const submitlogin = document.querySelector('.submitlogin');
submitlogin.addEventListener('click', () => {
    if (schoollogin().ok) {
        window.open('/html/myschool.html', 'blank')

    }

})