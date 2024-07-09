// import { } from 'ogd Profile Page/studentLogin.js'

// import { answeredQtns } from '/answers.js'

let text = " ";
let arr = ["seun", "kayode", "akeem", "biodun", "sewa", "55"]
let awe = [1, 2, 3, 4, 5, 6]
let i = 0;

do {
    text = text + "we are " + i;
    i++;

}
while (i < 10);




// Setting my Start button to disabled at onLoadState.

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {



    if (this.readyState == 4 && this.status == 200) {

        // Typical action to be performed when the document is ready:

        console.log(xhttp.responseText);






    }



}

xhttp.open("GET", "question.json", true);
xhttp.send();


// console.log(response)














function show() {
    document.querySelector('.show').style.display = 'block';

}


let vang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let m = vang.length - 1; m > 0; m--) {
    const j = Math.floor(Math.random() * (m + 1));

    [vang[m], vang[j]] = [vang[j], vang[m]];

}

// console.log(vang.slice(0, 1)[0]);

// covert the inputs into Array
let inputValues = document.querySelectorAll(".inputValue")
let inputValue = Array.from(inputValues)
// console.log(inputValue)
// -----------

// these are variables declarations made global
let qstn1 = document.querySelector(".qstn1")
let label1 = document.querySelector(".label1")
let label2 = document.querySelector(".label2")
let label3 = document.querySelector(".label3")
let label4 = document.querySelector(".label4")

let qstn2 = document.querySelector(".qstn2")
let label21 = document.querySelector(".label21")
let label22 = document.querySelector(".label22")
let label23 = document.querySelector(".label23")
let label24 = document.querySelector(".label24")

let qstn3 = document.querySelector(".qstn3")
let label31 = document.querySelector(".label31")
let label32 = document.querySelector(".label32")
let label33 = document.querySelector(".label33")
let label34 = document.querySelector(".label34")

let qstn4 = document.querySelector(".qstn4")
let label41 = document.querySelector(".label41")
let label42 = document.querySelector(".label42")
let label43 = document.querySelector(".label43")
let label44 = document.querySelector(".label44")

let qstn5 = document.querySelector(".qstn5")
let label51 = document.querySelector(".label51")
let label52 = document.querySelector(".label52")
let label53 = document.querySelector(".label53")
let label54 = document.querySelector(".label54")

let qstn6 = document.querySelector(".qstn6")
let label61 = document.querySelector(".label61")
let label62 = document.querySelector(".label62")
let label63 = document.querySelector(".label63")
let label64 = document.querySelector(".label64")

let qstn7 = document.querySelector(".qstn7")
let label71 = document.querySelector(".label71")
let label72 = document.querySelector(".label72")
let label73 = document.querySelector(".label73")
let label74 = document.querySelector(".label74")

let qstn8 = document.querySelector(".qstn8")
let label81 = document.querySelector(".label81")
let label82 = document.querySelector(".label82")
let label83 = document.querySelector(".label83")
let label84 = document.querySelector(".label84")

let qstn9 = document.querySelector(".qstn9")
let label91 = document.querySelector(".label91")
let label92 = document.querySelector(".label92")
let label93 = document.querySelector(".label93")
let label94 = document.querySelector(".label94")

let qstn10 = document.querySelector(".qstn10")
let label101 = document.querySelector(".label101")
let label102 = document.querySelector(".label102")
let label103 = document.querySelector(".label103")
let label104 = document.querySelector(".label104")





function answeredQtns() {

    let inputValues = document.querySelectorAll(".inputValue")
    let inputValue = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    let g = "Correct"
    if (qstn1.textContent == qtn[0].ask) {

        inputValue[1].checked
        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }
    }
    else if (qstn1.textContent == qtn[1].ask) {

        inputValue[3].checked
        if (inputValue[3].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[2].ask) {

        inputValue[0].checked
        if (inputValue[0].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[3].ask) {

        inputValue[2].checked
        if (inputValue[2].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[4].ask) {

        inputValue[1].checked
        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[5].ask) {

        inputValue[1].checked
        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[6].ask) {

        inputValue[0].checked
        if (inputValue[0].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[7].ask) {

        inputValue[1].checked
        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[8].ask) {

        inputValue[3].checked
        if (inputValue[3].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[9].ask) {

        inputValue[3].checked
        if (inputValue[3].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[10].ask) {
        inputValue[0].checked

        if (inputValue[0].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[11].ask) {
        inputValue[2].checked

        if (inputValue[2].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[12].ask) {
        inputValue[0].checked

        if (inputValue[0].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[13].ask) {
        inputValue[2].checked

        if (inputValue[2].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[14].ask) {
        inputValue[3].checked

        if (inputValue[3].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[15].ask) {
        inputValue[1].checked

        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[16].ask) {
        inputValue[1].checked

        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[17].ask) {
        inputValue[1].checked

        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[18].ask) {
        inputValue[3].checked

        if (inputValue[3].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[19].ask) {
        inputValue[1].checked

        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[20].ask) {
        inputValue[2].checked

        if (inputValue[2].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[21].ask) {
        inputValue[2].checked

        if (inputValue[2].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }
    else if (qstn1.textContent == qtn[22].ask) {
        inputValue[1].checked

        if (inputValue[1].checked) {
            alert(g)
        } else { alert("Incorrect") }

    }

}
// for ease of use for other functions-------------------

function start() {



    document.querySelector(".start").style.
        backgroundColor = "green";





    // document.querySelector(".start").style.;
    // border-bottom-left-radius: 32px;
    // border-top-right-radius: 32px;
    // border-bottom-right-radius: 32px;}


    document.querySelector(".start").disabled = true
    var response = JSON.parse(xhttp.responseText)


    let array = response.question








    // console.log(array[20].ask)
    for (let i = array.length - 1; i > 0; i--) {
        let m = Math.floor(Math.random() * (i + 1));

        [array[m], array[i]] = [array[i], array[m]];

    };


    // console.log(array.slice(0, 1)[0].ask)
    // set value Attribute for each radio button



    qstn1.textContent = array.slice(0, 1)[0].ask
    inputValue[0].value = label1.textContent = array.slice(0, 1)[0].a
    inputValue[1].value = label2.textContent = array.slice(0, 1)[0].b
    inputValue[2].value = label3.textContent = array.slice(0, 1)[0].c
    inputValue[3].value = label4.textContent = array.slice(0, 1)[0].d

    qstn2.textContent = array.slice(1, 2)[0].ask
    inputValue[4].value = label21.textContent = array.slice(1, 2)[0].a
    inputValue[5].value = label22.textContent = array.slice(1, 2)[0].b
    inputValue[6].value = label23.textContent = array.slice(1, 2)[0].c
    inputValue[7].value = label24.textContent = array.slice(1, 2)[0].d


    qstn3.textContent = array.slice(2, 3)[0].ask;
    inputValue[8].value = label31.textContent = array.slice(2, 3)[0].a
    inputValue[9].value = label32.textContent = array.slice(2, 3)[0].b
    inputValue[10].value = label33.textContent = array.slice(2, 3)[0].c
    inputValue[11].value = label34.textContent = array.slice(2, 3)[0].d



    qstn4.textContent = array.slice(3, 4)[0].ask;
    inputValue[12].value = label41.textContent = array.slice(3, 4)[0].a
    inputValue[13].value = label42.textContent = array.slice(3, 4)[0].b
    inputValue[14].value = label43.textContent = array.slice(3, 4)[0].c
    inputValue[15].value = label44.textContent = array.slice(3, 4)[0].d


    qstn5.textContent = array.slice(4, 5)[0].ask;
    inputValue[16].value = label51.textContent = array.slice(4, 5)[0].a
    inputValue[17].value = label52.textContent = array.slice(4, 5)[0].b
    inputValue[18].value = label53.textContent = array.slice(4, 5)[0].c
    inputValue[19].value = label54.textContent = array.slice(4, 5)[0].d


    qstn6.textContent = array.slice(5, 6)[0].ask;
    inputValue[20].value = label61.textContent = array.slice(5, 6)[0].a
    inputValue[21].value = label62.textContent = array.slice(5, 6)[0].b
    inputValue[22].value = label63.textContent = array.slice(5, 6)[0].c
    inputValue[23].value = label64.textContent = array.slice(5, 6)[0].d


    qstn7.textContent = array.slice(6, 7)[0].ask;
    inputValue[24].value = label71.textContent = array.slice(6, 7)[0].a
    inputValue[25].value = label72.textContent = array.slice(6, 7)[0].b
    inputValue[26].value = label73.textContent = array.slice(6, 7)[0].c
    inputValue[27].value = label74.textContent = array.slice(6, 7)[0].d


    qstn8.textContent = array.slice(7, 8)[0].ask;
    inputValue[28].value = label81.textContent = array.slice(7, 8)[0].a
    inputValue[29].value = label82.textContent = array.slice(7, 8)[0].b
    inputValue[30].value = label83.textContent = array.slice(7, 8)[0].c
    inputValue[31].value = label84.textContent = array.slice(7, 8)[0].d



    qstn9.textContent = array.slice(8, 9)[0].ask;
    inputValue[32].value = label91.textContent = array.slice(8, 9)[0].a
    inputValue[33].value = label92.textContent = array.slice(8, 9)[0].b
    inputValue[34].value = label93.textContent = array.slice(8, 9)[0].c
    inputValue[35].value = label94.textContent = array.slice(8, 9)[0].d


    qstn10.textContent = array.slice(9, 10)[0].ask;
    inputValue[36].value = label101.textContent = array.slice(9, 10)[0].a
    inputValue[37].value = label102.textContent = array.slice(9, 10)[0].b
    inputValue[38].value = label103.textContent = array.slice(9, 10)[0].c
    inputValue[39].value = label104.textContent = array.slice(9, 10)[0].d;






    // inputValue[0].value = label1.textContent
    console.log(inputValue[0].value)
    console.log(inputValue[1].value)



    // running the timer


    let timerDisplay = document.querySelector(".countDownTimer");
    timerDisplay.style.color = "black";
    timerDisplay.style.fontSize = "18px";

    timerDisplay.style.backgroundColor = "white"


    let timer = setInterval(function () {

        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = 'Timer: ' + minutes + ':' + seconds;

        if (--duration < 0) {
            clearInterval(timer);
            timerDisplay.textContent = "Timer:" + " Time is Up!";
            timerDisplay.style.color = "red";


            let qstnHide = document.querySelectorAll(".qstnHide")
            qstnHide = Array.from(qstnHide)
            qstnHide.forEach(element => {
                element.style.display = "none";

                document.querySelector(".login").style.display = "block";

            });
        }
    }, 1000);
    let duration = 10 * 60;







    // set the inputValue for each  (objective question's options) to each Label textContent



    // inputValueArray[0].value = label1.textContent
    // console.log(inputValueArray[0].value)


    let answers = [
        "of final entry",



        "resale",

        "float",



        "fixed and current assets",

        "capital account",


        "gross profit",


        "contra entry",



        "Purchases ledger",


        "Purchases ledger",


        "land and building",

        "machinery",



        "bulk purchases",

        "Creditor",


        "Cash Book",


        "Debtor",

        "discount column",


        "prompt payment",


        "trading account",


        "loan",

        "contra entry",



        "profit and loss account",


        "the arithemetical accuracy of the ledger",

        "I, III and V"

    ]

    // for (let i = 0; i < answerOptions.length; i++) {

    //     let inputValue = document.querySelectorAll(".inputValue")
    //     let inputValueArray = Array.from(inputValue);
    //     // const answerValue = answer[i];
    //     // console.log(answerOptions[i]);
    //     // console.log(inputValueArray)

    //     inputValueArray.forEach(inputvalueeach => {
    //         // console.log(inputvalueeach.value = answer[i])
    //         answerOptions.forEach(answerOption => {
    //             console.log(inputvalueeach.value = answerOption[i])

    //         })
    //         let correctAnswers = ["of original entry", "resale", "float",
    //             "fixed and current assets", "capital account",
    //             "gross profit", "contra entry", "Purchases ledger",
    //             "land and building", "machinery", "bulk purchases",
    //             "Creditor", "Cash Book",]


    //         let submitTest = document.querySelector(".submit")

    //         submitTest.addEventListener("click", function () {
    //             for (let j = 0; j < correctAnswers.length; j++) {
    //                 // const element = array[j];
    //                 if (correctAnswers[j].includes(inputvalueeach.value)) {
    //                     alert("we are doing fine")
    //                 }
    //                 else {
    //                     alert("incorrect Answer")
    //                 }
    //             }
    //         })
    //     })


    // }


    // inputValue[0].checked





    // for (const d of response.question) {

    //     console.log([d.ask])

    //     if ((d.ask).includes(qstn1.textContent)) {

    //         console.log(response.question[0].a)

    //         let optn1s = document.getElementsByName("optn1")
    //         let optn1 = Array.from(optn1s)
    //         for (const k of optn1) {
    //             console.log(k)
    //             if (answers.includes(k.value)) {
    //                 k.checked
    //                 console.log(k.value)
    //             }
    //         }


    //     }

    // }




    let submitTest = document.querySelector(".submit")

    // This is a score counter for the result sheet per candidate
    let scoreCounter = 1
    console.log(scoreCounter += 1)

    // ----------------------------------------

    // this is to display the result sheet for the candidate
    submitTest.addEventListener("click", function () {



        let scoreSheetHead = document.querySelector(".scoreSheetHead")
        scoreSheetHead.style.display = "block";

        answeredQtns()




    });




}




// let start = document.querySelector(".start")





// JQuery CODES
$(document).ready(function () {
    // $("html,body").animate({ scrollButtom: 
    // $(".header").hide() });





    $(".navBarIcon").mouseenter(function () {
        $("nav").toggle(200)
    });


    $(".menuList").mouseleave(function () {
        $("nav").hide(200);
    });

    $(".icon-menuList").click(function () {
        $("nav").hide();
    });

    // $(".contacts").click(function () {
    //     $(".contactMe").css( "z-index", 9999 )
    // })

    $(".QuizQuestn").click(function () {
        $("html,body").animate({
            scrollTop: $(".quiz").offset().top
        }, "fast")

        // $(".SectionOne").hide()
    })

    $(".picture").click(function () {
        $("html,body").animate({
            scrollTop: $(".sectionThree").offset().top

        }, "slow");
    });

    // show SectionThree
    // $(".SectionThree").hide();

    // $(" .picture").click(function () {
    //     $(".SectionThree").toggle(1000)
    //     $(".quiz").hide();
    //     $(".SectionOne").hide()

    // });

    $(".viewMore, .personalities").click(function () {
        $(".SectionTwo").toggle(1000);
        ;
        // if ($(".viewMore").text() = "Collapse") {
        //     $(".viewMore").text().toggle()
        // }
    });


    // $(".menuList").mouseleave(function () {
    //     $("nav").fadeToggle(500);


    // })

});



// 







