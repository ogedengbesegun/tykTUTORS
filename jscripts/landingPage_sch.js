// import { stringify } from "path-to-regexp";

const eyeblind = document.querySelector('.eyeblind');

const signupP = document.querySelector('#signupP');
const signupE = document.querySelector('#signupE');

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
        // eyeblind.classList.add("text-danger")

        signupP.setAttribute("type", "password");

    }

});

//////////////////////////////////////////////////////////////////////////////////////////////
const onpage1 = document.querySelector('.onpage1');
const onpage2 = document.querySelector('.onpage2');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

page2.style.display = "none"

onpage1.addEventListener('click', () => {
    page2.style.display = "block";
    page1.style.display = "none"
})
////
onpage2.addEventListener('click', () => {
    page2.style.display = "none";
    page1.style.display = "block"
});

//////////////////signupE and validation
const submitlogin = document.querySelector('.submitlogin');
// submitlogin.addEventListener()


function formValidation() {
    signupP.addEventListener('invalid', (e) => {
        alert('error input, please')
    });


};

signupP.addEventListener('focusout', () => {
    if (signupP.value === '') {
        alert('error empty field')
    }


})

//pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$&!?])[A-Za-z\d@$&!?]+$" title="Use at least one Uppercase, Lowercase,Digit and special char e.g (@$&!?) " 


//url
// url() getting all url
async function url() {
    const geturl = await fetch('/url.json');
    const okurl = await geturl.json();
    // console.log(okurl.submitlogin)
    return okurl
}


async function fSubmitlogin() {

    const getsubmitlogin = await url()

    const oksubmitlogin = await getsubmitlogin.submitlogin
    console.log(oksubmitlogin);
    ////////////////////////

    const signupP = document.querySelector('#signupP').value;
    const signupE = document.querySelector('#signupE').value;
    //////////
    try {


        const submitBtn = await fetch(oksubmitlogin,
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ signupE: signupE, signupP: signupP })
            })
        let resp = await submitBtn.json();
        // if (resp) { console.log("sent successfully") }
    } catch (error) {
        console.log("Failure to send request", error)
    }
}


submitlogin.addEventListener('click', () => {
    fSubmitlogin()

})