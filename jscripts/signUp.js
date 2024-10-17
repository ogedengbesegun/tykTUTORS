



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


document.querySelector("button[type=submit]").disabled = true;/// disable submit button



// validate the form input
let regPassword = document.querySelector(".regPsw");
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
            document.querySelector("button[type=submit]").disabled = false;

            console.log("hey we are the same");
        }
        else {


            regPassword.classList.remove("border-success");
            regPassword2.classList.remove("border-success");

            regPassword.classList.add("border-danger");
            regPassword2.classList.add("border-danger");

            document.querySelector("button[type=submit]").disabled = true;

        }





    });

    regPassword.addEventListener("input", () => { //ist input
        if (regPassword.value != regPassword2.value) { //if val !=
            regPassword2.value = "";// return empty
            // ////////////
            document.querySelector("button[type=submit]").disabled = true;
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

const regSignup = document.querySelector('.regSignup')
regSignup.addEventListener('click', function () {

    // alert('Registration Failed')

});
//    this.preventDefault();

async function reg() {
    const regSur = document.querySelector('.regSur').value;
    const regOther = document.querySelector('.regOther').value;
    const regNum = document.querySelector('.regNum').value;
    const regEmail = document.querySelector('.regEmail').value;
    const regPsw = document.querySelector('.regPsw').value;




    const response = await fetch('http://localhost:3000/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            regSur: regSur, regOther: regOther,
            regNum: regNum, regEmail: regEmail, regPsw: regPsw
        }),
    });

    const result = await response.json();
    console.log(result);
};


// async function get() {

//     const response = await fetch('http://localhost:3000/insert', {
//         method: 'get',
//         headers: {
//             'Content-Type': 'application/json'
//         }

//     });

//     const fetchget = await response.json();
// // fetchget.
// }

