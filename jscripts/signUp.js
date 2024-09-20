
// this is a window object to get screen width of the user
console.log(window.screen.width);
// this will get you the user's screen height
console.log(window.screen.height);


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


// 3.capitalise input text for firstName & lastName
document.querySelector("#regfirstName").style.textTransform = "capitalize";
document.querySelector(" #reglastName").style.textTransform = "capitalize";


// validate the form input
let regPassword = document.querySelector("#regPassword");
let regPassword2 = document.querySelector("#regPassword2")


function sameValue() { //give border-success when same value input
    regPassword.classList.remove("border-success");
    regPassword2.classList.remove("border-success");

    regPassword2.addEventListener("input", () => {


        if ((regPassword2.value === regPassword.value) || (regPassword.value === regPassword2.value)) {
            regPassword.classList.add("border-success");
            regPassword2.classList.add("border-success");


            regPassword.classList.remove("border-danger");
            regPassword2.classList.remove("border-danger");

            console.log("hey we are the same");
        }
        else {


            regPassword.classList.remove("border-success");
            regPassword2.classList.remove("border-success");

            regPassword.classList.add("border-danger");
            regPassword2.classList.add("border-danger");
        }





    });

    regPassword.addEventListener("input", () => { //ist input
        if (regPassword.value != regPassword2.value ) { //if val !=
            regPassword2.value = "";// return empty
            // ////////////

            regPassword.classList.remove("border-success");// revert
            regPassword2.classList.remove("border-success"); // revert

            regPassword.classList.remove("border-danger"); // revert
            regPassword2.classList.remove("border-danger"); // revert

        }
    });


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
