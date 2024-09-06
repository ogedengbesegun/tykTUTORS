// declare my variables
// let btnNext = document.querySelector(".btnNext")
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imgstart = document.querySelector(".imgstart");
let imgstory = document.querySelectorAll(".imgstory");

let nextone = document.querySelector(".next1")

// next.addEventListener("click", next1);
// nextone.addEventListener("click", next2)

// function next1() {
//     imgstory[0].classList.remove("hide")
//     imgstart.classList.add("hide");
//     // this.classList.remove()
// }
// function next2() {
//     imgstory[0].classList.add("hide")

//     imgstory[1].classList.remove("hide")


// }



// declare an object admin
let admin = [{
    email: "wisdomworld28608@gmail.com",
    password: "admin"
},
{
    email: "wisdomworld1201@gmail.com",
    password: "admin"
},
{
    email: "wisdomworld",
    password: "admin"
}]





// declare the variables for the object
let adminEmail = document.querySelector("#adminemail");
let adminpwd = document.querySelector("#adminpwd");
let adminpwd2 = document.querySelector("#adminpwd2");

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
let adminClose = document.querySelector(".adminClose");
adminClose.addEventListener("click", () => {
    window.close();
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
// adminEmail.addEventListener("click", () => {

//     if (!adminEmail.checkValidity()) {

//         adminEmail.validityMessage
//     };
// })


