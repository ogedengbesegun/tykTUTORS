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
    email: "wisdomworld28608@yahoo.com",
    password: "admin"
}]
// declare the variables for the object
let adminEmail = document.querySelector("#adminemail");
let adminpwd = document.querySelector("#adminpwd");
let adminpwd2 = document.querySelector("#adminpwd2");

let submitAdmin = document.querySelector(".submitAdmin")
let response = document.querySelector(".res");
let section = document.querySelector("section")


submitAdmin.addEventListener("click", () => {

    // set the password 1&2 to black onclick
    adminpwd.addEventListener("focus", () => {
        adminpwd.style.color = "black";
        adminpwd2.style.color = "black";
        response.textContent = ""
    })

    // creatElement to append into the response node
    let check = document.createElement("i");
    check.className = "fas fa-check";
    let times = document.createElement("i");
    times.className = "fas fa-close";


    for (let i = 0; i < admin.length; i++) {

        if ((admin[i].email == `${adminEmail.value}`)
            && (admin[i].password == `${adminpwd.value}`)
            && (`${adminpwd.value}` == `${adminpwd2.value}`)) {
            response.textContent = "Registration Successful "
            response.style.color = "green";
            // console.log(response.textContent);
            adminpwd.style.color = "green";
            adminpwd2.style.color = "green";

            // check.style.fontSize = "48px"
            response.appendChild(check);
            break

        }
        else {
            // times.style.fontSize = "48px"

            response.textContent = "Check Password ";
            response.appendChild(times);
            response.style.color = "red";
            // console.log(response.textContent);
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
