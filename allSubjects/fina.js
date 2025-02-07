// --------------------------------------------------

//

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
let dialog7 = document.querySelector(".dialog7");

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

//////for dialog msg
const dialog_msg = document.querySelector(".dialog_msg")

const dialog_text = document.querySelector(".dialog_text");
const dialog_btn_ok = document.querySelector(".dialog_btn_ok");
const dialog_btn_cancel = document.querySelector(".dialog_btn_cancel");

// --------------------------------------------------

// to make the password input have maxlength of 9 
subjPwd.setAttribute("maxlength", 15)





// this uses the select element value
subjSelect.addEventListener("click", () => {
    // dialog7.style.display = "none"

    // 

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
            // -----------------------

        }, 2000);


        bell.style.display = "none";

        dialog7.close();

    }
    else if (subjSelect.value === "Select One") {
        document.querySelector("option").disabled = true;
    }

    else {



        dialog7.show()
        bell.style.color = "red";
        bell.style.display = "inline";


    }


});

// subjSelect.addEventListener("mouseenter", () => {
//     dialog7.style.display = "none"


// });


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
// let logDetail = [{
//     id: "ebun",
//     pwd: "ebun001"
// }, {
//     id: "segun",
//     pwd: "segun001"
// }, {
//     id: "bolu",
//     pwd: "bolu001"
// }, {
//     id: "sade",
//     pwd: "sade001"
// }, {
//     id: "enny",
//     pwd: "enny001"
// }
// ];


//1. onclick class:loginR, button
loginR.addEventListener("click", () => {
    for (let i = 0; i < logDetail.length; i++) {
        if ((logDetail[i].id === `${subjId.value}`) && (logDetail[i].pwd === `${subjPwd.value}`)) {

            // to  msg the user
            msgUser.textContent = "Successfully";


            // to show select Subject and showselect
            showselect.style.display = "block";

            // to remove text-danger class from msgUser
            msgUser.classList.remove("text-danger");

            break;///to stop others from running
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
        window.close();
        // window.history.back(); // to previous page
    });
}

//  powerOff declaration
const powerOff = document.querySelector(".powerOff");

powerOff.addEventListener("mouseenter", () => {
    if (powerOff.classList.contains("text-light")) {
        powerOff.classList.remove("text-light");

        powerOff.classList.add("text-danger");
    }
    // else if() {
    //     
    // }
}); // mouseenter ends
powerOff.addEventListener("mouseleave", () => {
    powerOff.classList.add("text-light");

    powerOff.classList.remove("text-danger");

}); // mouseleave ends

//ppowerOff clicks event
powerOff.addEventListener("click", () => {
    window.close(); // to close thepage completely
});


// 


// show Login Details to be able to print result
const subjResultLogin = document.querySelector(".subjResultLogin")
const PrintResults = document.querySelector(".PrintResults");
if (PrintResults) {
    PrintResults.addEventListener("click", () => {

        subjResultLogin.style.display = "block"
        document.querySelector(".menuList").style.display = "none";
        // limit password value to 8
    })
};

// closeUp the login dialog page
const closeUp = document.querySelector('.closeUp')
if (closeUp) {
    closeUp.addEventListener("click", () => {
        subjResultLogin.style.display = "none"
    })
};
///////////////////
//////////////
///////////////
//start()
// let rpt;

let count2 = 0;
let qstnsSet = 20;

// console.log(rpt)
let rpt0 = 0;
let rpt1 = 0;
let rpt2 = 0;
let rpt3 = 0;
let rpt4 = 0;

// 
// let rpt = 0

//////////////
function start() {

    document.querySelector(".start").style.
        backgroundColor = "green";
    document.querySelector(".start").textContent = 'Exams-in-Progress';



    document.querySelector(".start").disabled = true
    // let response = JSON.parse(xhttp.responseText);
    // let array = response
    // let qtn = response


    ///////////////////////////
    // send request to the server
    getfina();
    async function getfina() {

        ///////
        async function finajson() {//fetch http
            const getfina = await fetch("/url.json");//fetched http dir
            const finaCome = await getfina.json();
            // console.log((finaCome.getfina));
            return (finaCome.getfina);

        }

        try {
            const fina1 = await finajson()
            // console.log(fina1);
            const fina = await fetch(fina1,// got from asychronise
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({

                    })
                }
            );

            const resfina = await fina.json();
            let array = resfina;

            for (let i = array.length - 1; i > 0; i--) {
                const rm = Math.floor(Math.random() * (i + 1));
                [array[rm], array[i]] = [array[i], array[rm]];//array destructuring

            }

            //////inject the responses into DOM
            //////////////////////
            // Total number of blocks to load
            const qstsAll = document.querySelector('.qstsAll');
            const loadingIndicator = document.getElementById('loading');
            ////////
            const totalBlocks = 100;
            // Number of blocks to load per batch
            const batchSize = qstnsSet;
            // Current index of loaded blocks
            let currentIndex = 0;



            // Template for the HTML structure
            const template = (index) => `
     <div class="mx-5 bg-success rounded-3 w-auto my-2 py-2 qstnHide${index} No-hide">
         <h5 class="text-center mt-1 text-light qstNo" id="page${index}" value=${index}>Question ${index}</h5>
         <p class="fs-5 p-1 text-center text-light qstn1${index}">${qstn1 = array.slice(index - 1, index)[0].ask}</p>

         <label for="optn1-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb1" title="Option A">
             <input type="radio" id="optn1-${index}" class="ms-2 allinput inputValue${index}" name="op-${index}" title="Option A" value="a">
             <label for="optn1-${index}" class="me-1 p-1 rounded-1 label1 lb1">${label1 = array.slice(index - 1, index)[0].a
                }</label>
         </label>
         <label for="optn2-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb2" title="Option B">
             <input type="radio" id="optn2-${index}" class="ms-2 allinput inputValue${index}" name="op-${index}" title="Option B" value="b">
             <label for="optn2-${index}" class="me-1 p-1 rounded-1 d-block label2 lb2">${label2 = array.slice(index - 1, index)[0].b
                }</label>
         </label>
         <label for="optn3-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb3" title="Option C">
             <input type="radio" id="optn3-${index}" class="ms-2 allinput inputValue${index}" name="op-${index}" title="Option C" value="c">
             <label for="optn3-${index}" class="me-1 p-1 rounded-1 d-block label3 lb3">${label3 = array.slice(index - 1, index)[0].c
                }</label>
         </label>
         <label for="optn4-${index}" class="d-flex mx-2 bg-white rounded-1 my-2 lb4" title="Option D">
             <input type="radio" id="optn4-${index}" class="ms-2 allinput inputValue${index}" name="op-${index}" title="Option D" value="d">
             <label for="optn4-${index}" class="me-1 p-1 rounded-1 d-block label4 lb4">${label4 = array.slice(index - 1, index)[0].d
                }</label>
         </label>
        
    </div> 
        `;

            // Function to load a batch of blocks
            function loadBatch() {
                const nextBatchEnd = Math.min(currentIndex + batchSize, totalBlocks);
                for (let i = currentIndex + 1; i <= nextBatchEnd; i++) {
                    qstsAll.insertAdjacentHTML('beforeend', template(i));
                }

                // next.addEventListener("click", () => {
                //     // console.log("l am here")
                //     const qstnHide = document.querySelector(`.qstnHide${count}`);
                //     const rect = qstnHide.getBoundingClientRect();
                //     qstsAll.style.height = (rect.height).toString() + "px"


                // })
                const qstnHide = document.querySelector(`.qstnHide${1}`);
                const rect = qstnHide.getBoundingClientRect();

                /// set overflow-y & height
                qstsAll.style.overflowY = 'hidden';

                qstsAll.style.height = (rect.height).toString() + "px"
                qstsAll.scrollIntoView({ behavior: "smooth" })
                //////////
                const controlBtns = document.querySelector('.controlBtns');
                controlBtns.style.display = 'block';
                ////////to show previously hidden btns
                currentIndex += batchSize;


                ////////////// to mark the first question
                const ans1 = array.slice(`${0}`, `${1}`)[0].ans;
                console.log(ans1)
                ///////////
                const ans0 = document.querySelectorAll(`.inputValue${1}`);
                ans0.forEach((input0, index) => {
                    input0.addEventListener("click", () => {
                        const opt1 = input0.getAttribute("value")
                        if (index === 0 && (opt1 === ans1)) {
                            rpt0 = 1
                        }
                        else if (index === 1 && (opt1 === ans1)) {
                            rpt0 = 1
                        }
                        else if (index === 2 && (opt1 === ans1)) {
                            rpt0 = 1
                        }
                        else if (index === 3 && (opt1 === ans1)) {
                            rpt0 = 1
                        }
                        else {
                            rpt0 = 0
                        }
                        return rpt0
                    })

                })
                ////////




                // Hide loading indicator if all blocks are loaded
                if (currentIndex >= totalBlocks) {
                    observer.unobserve(loadingIndicator);
                    loadingIndicator.style.display = 'none';
                }

            }

            // Intersection Observer to detect when loading indicator is visible
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    loadBatch();
                }
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });

            // Start observing the loading indicator
            observer.observe(loadingIndicator);

            ////
            ///////start markin with the first qstn1



            // }
            /////////////////


            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');
            let count = 1;

            ////////



            next.addEventListener('click', () => {
                prev.disabled = false;


                // answer();
                // console.log(count)
                count = count + 1;

                if (count < batchSize + 1) {
                    const pgnext = document.querySelector(`#page${count}`);
                    pgnext.scrollIntoView({ behavior: 'smooth' });

                    ///////
                    const qstnHide = document.querySelector(`.qstnHide${count}`);
                    const rect = qstnHide.getBoundingClientRect();
                    qstsAll.style.height = (rect.height).toString() + "px";
                    ////////


                    const ans = array.slice(`${count - 1}`, `${count}`)[0].ans;

                    ///////////////////////////////




                    console.log(ans);

                    ////


                    let input = document.querySelectorAll(`.inputValue${count}`)
                    console.log(input[0].value)
                    input.forEach((eachinput, index) => {

                        // let arrayinput = Array.from(eachinput)
                        // console.log(arrayinput)
                        eachinput.addEventListener("change", (event) => {
                            if (event.target.value === ans && index === 0) {


                                // alert('checked & answered')
                                rpt1 += 1;
                            }
                            else if (event.target.value === ans && index === 1) {
                                rpt1 += 1
                            }
                            else if (event.target.value === ans && index === 2) {
                                rpt1 += 1

                            }
                            else if (event.target.value === ans && index === 3) {
                                rpt1 += 1

                            }
                            else {

                                // alert('Unchecked')
                                rpt1 = 0

                            }
                            return rpt1
                        })
                    })






                }
                else {
                    if (count = batchSize - 1) {
                        next.disabled = true;

                    }
                    // count = 0;

                }




            })////////scroll back
            prev.addEventListener('click', () => {
                next.disabled = false;
                count = count - 1;
                console.log(count)
                if (count >= 1) {
                    const pgprev = document.querySelector(`#page${count}`);
                    pgprev.scrollIntoView({ behavior: 'smooth' });

                    ///////
                    const ans = array.slice(`${count - 1}`, `${count}`)[0].ans;
                    console.log(ans)
                    ///////
                    ////////
                    const qstnHide = document.querySelector(`.qstnHide${count}`);
                    const rect = qstnHide.getBoundingClientRect();
                    qstsAll.style.height = (rect.height).toString() + "px";
                    ///////////////
                    ////////////
                    let input = document.querySelectorAll(`.inputValue${count}`)
                    // console.log(input[0].value)
                    input.forEach((eachinput, index) => {

                       
                        eachinput.addEventListener("change", (event) => {
                            console.log(rpt1)
                            // rpt1
                            if (event.target.value === ans && index === 0) {


                                // alert('checked & answered')
                                rpt1 + 1;
                            }
                            else if (event.target.value === ans && index === 1) {
                                rpt1 + 1
                            }
                            else if (event.target.value === ans && index === 2) {
                                rpt1 + 1

                            }
                            else if (event.target.value === ans && index === 3) {
                                rpt1 + 1

                            }
                            else {

                                rpt1 + 0

                            }
                            return rpt1
                        })
                    })



                }
                else {
                    if (count = 1) {
                        prev.disabled = true;

                    };
                }

            })


            // })
            // console.log(optn1.value)

            // Initial load
            loadBatch();

            ////////

        }
        catch (error) {
            console.log("Check Connection Error", error)

        }
    }
    /////////////////////////////




    // running the timer


    let countDownTimer = document.querySelector(".countDownTimer");
    countDownTimer.style.color = "black";
    countDownTimer.style.fontSize = "18px";

    countDownTimer.style.backgroundColor = "white"


    let timer = setInterval(function () {
        // 1 to set timer for the user
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownTimer.textContent = 'Timer: ' + minutes + ':' + seconds;

        // 2 if the duration iterate -- less than zero
        if (--duration < 0) {
            // the clearInterval method is invoked 
            clearInterval(timer);

            // this  displays the timeup 
            // countDownTimer.textContent = "Timer:" + " Time is Up!";
            countDownTimer.style.color = "red";

            //// once time up disable the start btn
            document.querySelector(".start").disabled = true;
            document.querySelector(".start").textContent = 'Exams Ended';
            document.querySelector(".start").style.backgroundColor = "red";
            // this will disable my input elements to stop users_
            //from selecting on countdown
            let allinput = document.querySelectorAll(".allinput")
            allinput.forEach(Eachinput => {
                Eachinput.disabled = true;
            });


        }





    }, 1000);
    let duration = 3 * 60;








    // this is to declare the variable submit button
    let submit = document.querySelector(".submit")


    // this is to display the result sheet for the candidate
    submit.addEventListener("click", function () {


        dialog_msg.showModal();
        dialog_text.textContent = `Do you want to Submit ?`;

        dialog_btn_ok.addEventListener('click', () => {
            let qstnHide = document.querySelectorAll(".qstnHide")
            // qstnHide = Array.from(qstnHide)
            qstnHide.forEach(qstnHid2 => {
                qstnHid2.style.display = "none";

                document.querySelector(".studentlogin").style.display = "block";

            });

            showResult();
            dialog_msg.close();
        })

        dialog_btn_cancel.addEventListener('click', () => {
            dialog_msg.close()
        })


    });




}

// funtion to show result
function showResult() {

    // 2. to display the candidates result 
    let scoreSheetHead = document.querySelector(".scoreSheetHead")
    scoreSheetHead.style.display = "block";
    // ----------------------------------
    // + rpt2 + rpt3 + rpt4 + zero

    // console.log(rpt2)
    // console.log(rpt3)
    // console.log(rpt4)

    let allScore = (rpt0 + rpt1) / qstnsSet * 100 + "%"//* 10 + "%"
    console.log(allScore)
    // ------------------------------------------------

    // 5 this laods TextContent into my scoreNumber class
    let scoreNumber = document.querySelector(".scoreNumber")

    scoreNumber.textContent = allScore;

    // -------------------------------------------------

    //6 to hide the submit Button
    // this.style.display = "none";
    // ----------------------------


}



// const countn = () => {
//     // index = []
//     for (let i = 1; i < 100; i++) {
//         const mycount = [i]
//         console.log(mycount[0])
//         console.log(mycount[0].toString())
//     }
// }
// countn();
// const qstn1 = document.querySelector(`.qstn1${count}`);
// let count = 0; count < 10 + 1; count++


// const optn1 = document.querySelector(`#optn1-${count}`);
// const optn2 = document.querySelector(`#optn2-${count}`);
// const optn3 = document.querySelector(`#optn3-${count}`);
// const optn4 = document.querySelector(`#optn4-${count}`);

// // const ans = array.slice(`${count}` - 1, `${count}`)[0].ans
// // console.log(ans)
// optn1.checked;
// optn2.checked;
// optn3.checked;
// optn4.checked;

// // index = `${count}`
// function optn_1() {
//     optn1.addEventListener('click', () => {
//         if ((optn1.checked) && (optn1.value == ans)) {
//             // alert(`${ans} is Correct`);
//             // console.log(1);

//             return 1
//         } else {
//             // alert("NOT correct");
//             // console.log(0);

//             return 0

//         }

//     })
// };

// function optn_2() {
//     optn2.addEventListener('click', () => {
//         if ((optn2.checked) && (optn2.value == ans)) {
//             // alert(`${ans} is Correct`);
//             // console.log(1);

//             return 1
//         } else {
//             // alert("NOT correct");
//             // console.log(0);

//             return 0

//         }

//     })
// };

// function optn_3() {
//     optn3.addEventListener('click', () => {
//         if ((optn3.checked) && (optn3.value == ans)) {
//             // alert(`${ans} is Correct`);
//             // console.log(1);

//             return 1
//         } else {
//             // alert("NOT correct");
//             // console.log(0);

//             return 0

//         }

//     })
// };

// function optn_4() {
//     optn4.addEventListener('click', () => {
//         if ((optn4.checked) && (optn4.value == ans)) {
//             // alert(`${ans} is Correct`);
//             // console.log(1);
//             return 1
//         } else {
//             // alert("NOT correct");
//             // console.log(0);

//             return 0

//         }

//     })
// }



