// --------------------------------------------------
// declare the variables in this project

// to declare the show result input element id
const subjId = document.querySelector(".subjId");
// the Show result page pswd
const subjPwd = document.querySelector(".subjPwd");
// to pick subject id from Select element
let subjSelect = document.querySelector("#subjSelect");
// score Sheet 
const subject = document.getElementsByClassName('subject')[0];
// subject.textContent = 'sfsfsfsf';

const subj = document.querySelector('#subj');
const option = document.querySelectorAll('.option')
const subTitle = document.querySelector('.sub-title');//result sub title
const title = document.querySelector('title');
const studentcolor = document.querySelector(".studentlogin");
studentcolor.style.backgroundColor = '#3333ff'//the backgroud set onload


////////
// const studentlogininput = document.querySelector('.studentlogin input[type="password"]')
// studentlogininput.setAttribute('readonly', true);







let sty;
sty = {
    marginTop: "250px",
    color: "light",


}





let selectsubmsg = document.createElement('dialog');
selectsubmsg.className = `border-0  
 text-center rounded-2 mx-auto dialog-lg dialog-sm position top-0 `;
const styleProp = selectsubmsg.style
styleProp.marginTop = sty.marginTop;
styleProp.backgroundColor = sty.color;
// styleProp.width = sty.width;

selectsubmsg.innerHTML = `<h3 class='text-success mt-2 px-2'>Select a Subject First</h3>
<p class='text-center mx-2 w-75 mx-auto'>Please ensure you have selected the Subject of
 choice first before login can be enabled !!!</p>
 <button type='button' title='info' 
 class='btn btn-secondary mx-auto  mb-3
 info'>Ok</button>`;


document.body.append(selectsubmsg);
// studentlogininput.addEventListener("mouseenter", () => {
// selectsubmsg.show();
// }, { once: true });

const info = document.querySelector('.info');

info.addEventListener('click', () => {
    // selectOne()



    selectsubmsg.close()
    // studentlogininput.removeEventListener("mouseenter", arguments.callee);


})
subj.addEventListener('input', () => {
    selectOne()
})

///////////////
function selectOne() {

    // option[i++].addEventListener('click', () => {
    if (subj.value === 'engl') {
        // if (studentcolor.classList.contains('text-bg-primary')) {
        // studentcolor.classList.remove('text-bg-primary');
        studentcolor.style.backgroundColor = color['orange']
        // }
        subject.textContent = option[0].text;
        subTitle.textContent = subject.textContent
        title.textContent = subject.textContent + " tykTutors"
    }
    else if (subj.value === 'math') {
        subject.textContent = option[1].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors";
        // studentcolor.classList.remove('text-bg-primary');

        studentcolor.style.backgroundColor = color['green']

    }
    else if (subj.value === 'fina') {
        subject.textContent = option[2].text;

        subTitle.textContent = subject.textContent
        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['ashblue']

    }
    else if (subj.value === 'econ') {
        subject.textContent = option[3].text;

        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['darkpink']

    }
    else if (subj.value === 'comp') {
        subject.textContent = option[4].text;

        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['purple']

    }
    else if (subj.value === 'biol') {
        subject.textContent = option[5].text;

        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['darkpink']

    }
    else if (subj.value === 'phys') {
        subject.textContent = option[6].text;

        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors";
        studentcolor.style.backgroundColor = color['ashes']

    }
    else if (subj.value === 'chem') {
        subject.textContent = option[7].text;

        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['blue']

    }
    else if (subj.value === 'furt') {
        subject.textContent = option[8].text;

        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['darkpink']

    }
    else if (subj.value === 'comm') {
        subject.textContent = option[9].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['lightgreen']

    }
    else if (subj.value === 'lite') {
        subject.textContent = option[10].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['orange']

    }
    else if (subj.value === 'gove') {
        subject.textContent = option[11].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['purple']

    }
    else if (subj.value === 'civi') {
        subject.textContent = option[12].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['lightgreen']

    }
    else if (subj.value === 'mart') {
        subject.textContent = option[13].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['blue']

    }
    else if (subj.value === 'proc') {
        subject.textContent = option[14].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color['ashblue']

    }
    else if (subj.value === 'anim') {
        subject.textContent = option[15].text;
        subTitle.textContent = subject.textContent

        title.textContent = subject.textContent + " tykTutors"
        studentcolor.style.backgroundColor = color["darkpink"]

    }
    else {
        subject.textContent = option[0].text;
        title.textContent = 'tykTUTORS-Subject Selection'
        // studentcolor.style.backgroundColor = color['green'];
        // studentlogininput.setAttribute('readonly', true);

    }

    // if (subject.textContent != "Select a Subject") {
    //     studentlogininput.removeAttribute('readonly', true);

    // }
    // else {
    //     studentlogininput.setAttribute('readonly', true);

    // }
}

const selectTime = document.querySelector('#selectTime');
const selectQstn = document.querySelector('#selectQstn');

///////
// let getTime;



let timeqstn;// seting Time ffor the queestion chosen by the user
// const showTime = document.querySelector('.showTime');
function getSelectTime() {
    if (selectTime.value === '1') {
        timeqstn = 5;
        // showTime.textContent = timeqstn;
    }
    else if (selectTime.value === '2') {
        timeqstn = 10;
        // showTime.textContent = timeqstn;
    }
    else if (selectTime.value === '3') {
        timeqstn = 20;
        // showTime.textContent = timeqstn;
    }
    else if (selectTime.value === '4') {
        timeqstn = 30;
        // showTime.textContent = timeqstn;
    }
    else if (selectTime.value === '5') {
        timeqstn = 60;
        // showTime.textContent = timeqstn;
    }
    else {
        timeqstn = 0;
        // showTime.textContent = timeqstn;
    }
    return timeqstn;
}
selectTime.addEventListener('input', () => {
    timeqstn = getSelectTime();
    console.log(timeqstn); // Initialize with 0 if not set

    // console.log(timeqstn += timeqstn); // Shows the updated timeqstn value
});
// 
let getQstn;
function getSelectQstn() {
    if (selectQstn.value === '10') {
        getQstn = 10;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '20') {
        getQstn = 20;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '30') {
        getQstn = 30;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '40') {
        getQstn = 40;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '50') {
        getQstn = 50;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '60') {
        getQstn = 60;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '70') {
        getQstn = 70;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '80') {
        getQstn = 80;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '90') {
        getQstn = 90;
        // showQstn.textContent = getQstn;
    }
    else if (selectQstn.value === '100') {
        getQstn = 100;
        // showQstn.textContent = getQstn;
    }

    else {
        getQstn = 0;
        // showQstn.textContent = getQstn;
    }
    return getQstn;
};
selectQstn.addEventListener('input', () => {
    getQstn = getSelectQstn();
    console.log(getQstn); // Initialize with 0 if not set

    // console.log(getQstn += getQstn); // Shows the updated getQstn value
});




//color selection
const color = {
    green: '#009900',
    clay: '#ff8000',
    blue: '#0000ff',
    lightgreen: '#006000',
    purple: '#9900cc',
    ashes: '#999966',
    darkpink: '#cc0066',
    orange: '#ff8000',
    ashblue: '#75a3a3'
};


// console.log(option1.text)


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









//1 to open forgotten password dialog
forgotPwd.addEventListener("click", () => {
    reEnterPwd.showModal();

});

//2 to close the modal showModal forgotten dialog
closeDlg.addEventListener("click", () => {
    reEnterPwd.close();
});

// vanilla script.////////////////




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
//score is required
let score = 0;


// 
// let rpt = 0

//////////////
function start() {
    // subj.disabled = true;
    document.querySelector(".start").style.
        backgroundColor = "green";
    document.querySelector(".start").textContent = 'Exams-in-Progress';



    document.querySelector(".start").disabled = true; // not clickable again
    selectTime.disabled = true; // not clickable again
    selectQstn.disabled = true; // not clickable again

    ///////////////////////////
    // send request to the server
    getsubj();
    async function getsubj() {

        ///////
        async function allsubjson() {//fetch http
            const luk4sub = document.querySelector('.subject');//select sub by user
            const getfina = await fetch("/url.json");//fetched http dir
            const finaCome = await getfina.json();
            // console.log((finaCome.getfina));
            if (luk4sub.textContent === 'English-Language') {
                return finaCome.getengl;

            }
            else if (luk4sub.textContent === 'Mathematics') {
                return finaCome.getmath
            }
            else if (luk4sub.textContent === 'Financial-Accounting') {
                return finaCome.getfina
            }
            else if (luk4sub.textContent === 'Economics') {
                return finaCome.getecon
            }
            else if (luk4sub.textContent === 'Computer-Studies') {
                return finaCome.getcomp
            }
            else if (luk4sub.textContent === 'Biology') {
                return finaCome.getbiol
            }
            else if (luk4sub.textContent === 'Physics') {
                return finaCome.getphys
            }
            else if (luk4sub.textContent === 'Chemistry') {
                return finaCome.getchem
            }
            else if (luk4sub.textContent === 'Further-Mathematics') {
                return finaCome.getfurt
            }
            else if (luk4sub.textContent === 'Commerce') {
                return finaCome.getcomm
            }
            else if (luk4sub.textContent === 'Literature-in-English') {
                return finaCome.getlite
            }
            else if (luk4sub.textContent === 'Government') {
                return finaCome.getgove
            }
            else if (luk4sub.textContent === 'Civic-Education') {
                return finaCome.getcivi
            }
            else if (luk4sub.textContent === 'Marketing') {
                return finaCome.getmart
            }
            else if (luk4sub.textContent === 'Data-Processing') {
                return finaCome.getproc
            }
            else if (luk4sub.textContent === 'Animal-Husbandary') {
                return finaCome.getanim
            }
        }

        try {
            const subj1 = await allsubjson()
            // console.log(fina1);
            const finans = await fetch(subj1,// got from asychronise
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({

                    })
                }
            );

            const resfina = await finans.json();
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
            const totalBlocks = 200;
            // Number of blocks to load per batch
            const batchSize = getQstn // to set the number of questions to load
            // Current index of loaded blocks
            let currentIndex = 0;



            // Template for the HTML structure
            const template = (index) => `
     <div class="mx-2 bg-success rounded-3 w-auto my-2 py-2 qstnHide${index} No-hide">
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
         <label for="optn4-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 mb-4 lb4" title="Option D">
             <input type="radio" id="optn4-${index}" class="ms-2 allinput inputValue${index}" name="op-${index}" title="Option D" value="d">
             <label for="optn4-${index}" class="me-1 p-1 rounded-1 d-block label4 lb4">${label4 = array.slice(index - 1, index)[0].d
                }</label>
         </label>
        
    </div> 
        `;


            // Function to load a batch of blocks
            function loadBatch() {
                let correctAnswers = {};

                const nextBatchEnd = Math.min(currentIndex + batchSize, totalBlocks);
                for (let i = currentIndex + 1; i <= nextBatchEnd; i++) {

                    qstsAll.insertAdjacentHTML('beforeend', template(i));





                    /////
                    let q = `q${i}`;
                    qstn = q
                    // console.log(q)
                    let qvalue = array.slice(`${i - 1}`, `${i}`)[0].ans;
                    // console.log(qvalue)
                    correctAnswers[q] = qvalue;




                }

                // console.log(correctAnswers)

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


                ////////////// to mark the question
                let seescore = document.querySelector('.seescore');

                let userAnswers = {}
                // console.log(userAnswers)
                for (let j = 1; j <= batchSize; j++) {


                    const options = document.querySelectorAll(`.inputValue${j}`)
                    options.forEach(option => {
                        option.addEventListener('change', (e) => {
                            const questionKey = `q${j}`;
                            // console.log(questionKey)
                            const selectedOption = e.target.value;

                            // Check if the answer was already given
                            if (userAnswers[questionKey]) {
                                // If previously correct and changed to wrong, deduct score
                                if (userAnswers[questionKey] === correctAnswers[questionKey] && selectedOption !== correctAnswers[questionKey]) {
                                    score--;
                                }
                                // If previously wrong and changed to correct, add score
                                else if (userAnswers[questionKey] !== correctAnswers[questionKey] && selectedOption === correctAnswers[questionKey]) {
                                    score++;
                                }
                            } else {
                                // First-time selection, add score if correct
                                if (selectedOption === correctAnswers[questionKey]) {
                                    score++;
                                }
                            }

                            // Update user's answer
                            userAnswers[questionKey] = selectedOption;
                            seescore.textContent = score
                        })

                    })

                }



                // Hide loading indicator if all blocks are loaded
                // if (currentIndex >= totalBlocks) {
                //     observer.unobserve(loadingIndicator);
                //     loadingIndicator.style.display = 'none';
                // }

            }

            // Intersection Observer to detect when loading indicator is visible
            // const observer = new IntersectionObserver((entries) => {
            //     if (entries[0].isIntersecting) {
            //         loadBatch();
            //     }
            // }, {
            //     root: null,
            //     rootMargin: '0px',
            //     threshold: 0.1
            // });

            // Start observing the loading indicator
            // observer.observe(loadingIndicator);

            ////
            ///////start markin with the first qstn1



            // }
            /////////////////





            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');
            let count = 1;



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



                }
                else {
                    if (count = batchSize) {
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
            setTimeout(() => {
                loadBatch();
                examtime()
            }, 2000)




            ////////

        }
        catch (error) {
            console.log("Check Connection Error", error)

        }
    }
    /////////////////////////////




    // running the timer




    function examtime() {
        ///////////////
        let countDownTimer = document.querySelector(".countDownTimer");
        countDownTimer.style.color = "black";
        countDownTimer.style.fontSize = "18px";

        countDownTimer.style.backgroundColor = "white"
        ///////////////////////////////
        // set time interval()
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

                setTimeout(() => {
                    // this will display the result sheet

                    dialog_msg.showModal();
                    dialog_text.style.color = "red";
                    dialog_text.textContent = `Time is Up!`;
                    dialog_btn_ok.textContent = "Ok";
                    dialog_btn_cancel.style.display = "none";
                    dialog_btn_ok.addEventListener('click', () => {
                        dialog_msg.close();
                        showResult();
                    });

                }, 3000)
            }





        }, 1000);
        let duration = (timeqstn * 60);

    }






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

    let allScore = Math.floor(Math.random() * (score / getQstn)) * 100 + "%"//* 10 + "%"
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


