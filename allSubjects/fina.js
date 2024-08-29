// --------------------------------------------------

// declare the variables in this project

// to declare the show result input element id
const subjId = document.querySelector(".subjId");
// the Show result page pswd
const subjPwd = document.querySelector(".subjPwd");
// to pick subject id from Select element
let subjSelect = document.querySelector("#subjSelect");
// score Sheet 
const scoreSheetHead = document.querySelector(".scoreSheetHead");
// loginResult
const loginR = document.querySelector(".loginR");
// to get the dialog element with class dialog
let dialog = document.querySelector(".dialog");
// to get pwd forgotten input 
let reEnterPwd = document.querySelector(".reEnterPwd");
// 
let forgotPwd = document.querySelector(".forgotPwd");
// 
const closeDlg = document.querySelector(".closeDlg");

//feedback msg to user logged-in details
const msgUser = document.querySelector(".msg-User");

// selectSubject variable to display "red Alert"
let selectSubject = document.querySelector(".selectSubject");

// to select bell class for alert purposes
let bell = document.querySelector(".bell");

// showselect element initialized
let showselect = document.querySelector(".showselect")





// --------------------------------------------------





subjSelect.addEventListener("click", () => {

    if (subjSelect.value === "fina") {


        setTimeout(() => {
            scoreSheetHead.style.display = "block";
            // close up the current page
            subjResultLogin.style.display = "none";

            // to clear off the inputs
            // -------------------------
            subjId.value = "";
            subjPwd.value = "";

            showselect.style.display = "none";

            msgUser.textContent = "";
            // ---------------------------

        }, 2000);


        bell.style.display = "none";
        // dialog.close();

    }
    else {


        // dialog.show()
        bell.style.color = "red";
        bell.style.display = "inline";


    }


});

// this is to display error msg on on readonly attribute



//1 to open forgotten password dialog
forgotPwd.addEventListener("click", () => {
    reEnterPwd.showModal();

});

//2 to close the modal showModal forgotten dialog
closeDlg.addEventListener("click", () => {
    reEnterPwd.close();
});



// -------------vanilla Script-----------------------------
// object declaration
let logDetail = [{
    id: "ebun",
    pwd: "ebun001"
}, {
    id: "segun",
    pwd: "segun001"
}, {
    id: "bolu",
    pwd: "bolu001"
}, {
    id: "sade",
    pwd: "sade001"
}, {
    id: "enny",
    pwd: "enny001"
}
];


//1. onclick class:loginR, button
loginR.addEventListener("click", () => {
    for (let i = 0; i < logDetail.length; i++) {
        if ((logDetail[i].id == `${subjId.value}`) && (logDetail[i].pwd == `${subjPwd.value}`)) {

            // to  msg the user
            msgUser.textContent = "Successfully";


            // to show select Subject and showselect
            showselect.style.display = "block";

            // to remove text-danger class from msgUser
            msgUser.classList.remove("text-danger");

            break
        }
        else {

            msgUser.textContent = "Incorrect Details";

            msgUser.classList.add("text-danger")
        }



    };
});

//2. clear the input values on focus of the cursor [err correction]
subjPwd.addEventListener("click", () => {
    subjPwd.value = "";

    showselect.style.display = "none";

    msgUser.textContent = "";
})


// home page navigating back
let homePage = document.querySelector(".homePage");

if (homePage) {
    homePage.addEventListener("click", () => {
        let myHomeURL = "/index.html"
        window.open(myHomeURL, "index");
        window.location = close();

    });
}


// show Login Details to be able to print result
const subjResultLogin = document.querySelector(".subjResultLogin")
const PrintResults = document.querySelector(".PrintResults");
if (PrintResults) {
    PrintResults.addEventListener("click", () => {

        subjResultLogin.style.display = "block"
        document.querySelector(".menuList").style.display = "none";

    })
};

// closeUp the login dialog page
const closeUp = document.querySelector('.closeUp')
if (closeUp) {
    closeUp.addEventListener('click', () => {
        subjResultLogin.style.display = "none"
    })
};


