
// this is a window object to get screen width of the user
console.log(window.screen.width);
// this will get you the user's screen height
console.log(window.screen.height);


// 1. configure the input elemnts to accept only number values
document.querySelector(".input-Val").addEventListener('input', function (e) {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
        e.target.value = value.replace(/\D/g, '');
        alert("Enter Valid Phone Numbers eg. (080*****123)")
    }
})

// 2. set the input password to maxLenght 10
let limitPwds = document.querySelectorAll("input[type = 'password']");
limitPwds.forEach(limitPwd => {
    limitPwd.setAttribute("maxlength", 15);
});


// 3.capitalise input text for firstName & lastName
document.querySelector("#regfirstName").style.textTransform = "capitalize";
document.querySelector(" #reglastName").style.textTransform = "capitalize";


// validate the form input
let regPassword = document.querySelector("#regPassword");
let regPassword2 = document.querySelector("#regPassword2")

function sameValue() {
    regPassword2.addEventListener("focus", () => {


        if (regPassword.classList.contains("border-0") && regPassword2.classList.contains("border-0")) {
            if (regPassword.value == regPassword2.value) {
                regPassword.classList.remove("border-0");
                regPassword2.classList.remove("border-0");

                console.log("hey we are the same");
            }
            else if (regPassword.value == '' && regPassword2.value == '') {
                regPassword.value = ""
                regPassword2.value = ""
            }


        }



    })


}
sameValue();

// 4 reveal and toggle the password input to reveal the password
let reveal = document.querySelector(".reveal")
reveal.addEventListener("click", () => {
    if (reveal.classList.contains("fa-eye-slash")) {
        reveal.classList.remove("fa-eye-slash")
        reveal.classList.add("fa-eye");
        reveal.classList.remove("text-danger")
        reveal.style.color = "green";
        document.querySelector("#regPassword").setAttribute("type", "text");

    }
    else {
        reveal.classList.add("fa-eye-slash")
        reveal.classList.remove("fa-eye")
        reveal.classList.add("text-danger")

        document.querySelector("#regPassword").setAttribute("type", "password");

    }
})

// the closeSign-up btn initialised or fired up
let closeSignUp = document.querySelector(".closeSignUp")
closeSignUp.addEventListener("click", () => {
    window.close();
    // window.back();
});

// hover to change element appearance

closeSignUp.addEventListener("mouseover", () => {
    closeSignUp.style.color = "white";
    closeSignUp.classList.remove("text-danger")
});

closeSignUp.addEventListener("mouseleave", () => {
    // closeSignUp.style.color = "white";
    closeSignUp.classList.add("text-danger")
});


let backpage = document.querySelector('.backpage'); // back to previuos page
backpage.addEventListener("click", () => {
    window.history.back();

})