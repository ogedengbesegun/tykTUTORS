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

page2.style.display = "none";

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

function formValidation() {
    signupP.addEventListener('invalid', () => {
        if ((signupP.value = "")) {
            alert("Use Uppercase, Lowercase @, 123")
        }
    });


};

submitlogin.addEventListener('click', () => {
    // 
    formValidation();

})