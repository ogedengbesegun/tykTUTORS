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

xhttp.open("GET", "/subjectsJSON/financial.json", true);
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




let scoreResult = {
    success: 1,
    failure: 0
}

function answeredQtn1() {

    let inputValues = document.querySelectorAll(".inputValue1")
    let inputValue1 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn1.textContent == qtn[0].ask) {

        inputValue1[1].checked
        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }
    }
    else if (qstn1.textContent == qtn[1].ask) {

        inputValue1[3].checked
        if (inputValue1[3].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[2].ask) {

        inputValue1[0].checked
        if (inputValue1[0].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[3].ask) {

        inputValue1[2].checked
        if (inputValue1[2].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[4].ask) {

        inputValue1[1].checked
        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[5].ask) {

        inputValue1[1].checked
        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[6].ask) {

        inputValue1[0].checked
        if (inputValue1[0].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[7].ask) {

        inputValue1[3].checked
        if (inputValue1[3].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[8].ask) {

        inputValue1[3].checked
        if (inputValue1[3].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[9].ask) {

        inputValue1[3].checked
        if (inputValue1[3].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[10].ask) {
        inputValue1[0].checked

        if (inputValue1[0].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[11].ask) {
        inputValue1[2].checked

        if (inputValue1[2].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[12].ask) {
        inputValue1[0].checked

        if (inputValue1[0].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[13].ask) {
        inputValue1[2].checked

        if (inputValue1[2].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[14].ask) {
        inputValue1[3].checked

        if (inputValue1[3].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[15].ask) {
        inputValue1[1].checked

        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[16].ask) {
        inputValue1[1].checked

        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[17].ask) {
        inputValue1[1].checked

        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[18].ask) {
        inputValue1[3].checked

        if (inputValue1[3].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[19].ask) {
        inputValue1[1].checked

        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[20].ask) {
        inputValue1[2].checked

        if (inputValue1[2].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[21].ask) {
        0
        inputValue1[2].checked

        if (inputValue1[2].checked) {
            return 1

        } else { return 0 }

    }
    else if (qstn1.textContent == qtn[22].ask) {
        inputValue1[1].checked

        if (inputValue1[1].checked) {
            return 1

        } else { return 0 }

    }

}


// this is answers for shuffle for question 2
function answeredQtn2() {

    let inputValues = document.querySelectorAll(".inputValue2")
    let inputValue2 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn2.textContent == qtn[0].ask) {

        inputValue2[1].checked
        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn2.textContent == qtn[1].ask) {

        inputValue2[3].checked
        if (inputValue2[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[2].ask) {

        inputValue2[0].checked
        if (inputValue2[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[3].ask) {

        inputValue2[2].checked
        if (inputValue2[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[4].ask) {

        inputValue2[1].checked
        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[5].ask) {

        inputValue2[1].checked
        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[6].ask) {

        inputValue2[0].checked
        if (inputValue2[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[7].ask) {

        inputValue2[3].checked
        if (inputValue2[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[8].ask) {

        inputValue2[3].checked
        if (inputValue2[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[9].ask) {

        inputValue2[3].checked
        if (inputValue2[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[10].ask) {
        inputValue2[0].checked

        if (inputValue2[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[11].ask) {
        inputValue2[2].checked

        if (inputValue2[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[12].ask) {
        inputValue2[0].checked

        if (inputValue2[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[13].ask) {
        inputValue2[2].checked

        if (inputValue2[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[14].ask) {
        inputValue2[3].checked

        if (inputValue2[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[15].ask) {
        inputValue2[1].checked

        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[16].ask) {
        inputValue2[1].checked

        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[17].ask) {
        inputValue2[1].checked

        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[18].ask) {
        inputValue2[3].checked

        if (inputValue2[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[19].ask) {
        inputValue2[1].checked

        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[20].ask) {
        inputValue2[2].checked

        if (inputValue2[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[21].ask) {
        inputValue2[2].checked

        if (inputValue2[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn2.textContent == qtn[22].ask) {
        inputValue2[1].checked

        if (inputValue2[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 3
function answeredQtn3() {

    let inputValues = document.querySelectorAll(".inputValue3")
    let inputValue3 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn3.textContent == qtn[0].ask) {

        inputValue3[1].checked
        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn3.textContent == qtn[1].ask) {

        inputValue3[3].checked
        if (inputValue3[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[2].ask) {

        inputValue3[0].checked
        if (inputValue3[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[3].ask) {

        inputValue3[2].checked
        if (inputValue3[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[4].ask) {

        inputValue3[1].checked
        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[5].ask) {

        inputValue3[1].checked
        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[6].ask) {

        inputValue3[0].checked
        if (inputValue3[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[7].ask) {

        inputValue3[3].checked
        if (inputValue3[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[8].ask) {

        inputValue3[3].checked
        if (inputValue3[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[9].ask) {

        inputValue3[3].checked
        if (inputValue3[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[10].ask) {
        inputValue3[0].checked

        if (inputValue3[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[11].ask) {
        inputValue3[2].checked

        if (inputValue3[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[12].ask) {
        inputValue3[0].checked

        if (inputValue3[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[13].ask) {
        inputValue3[2].checked

        if (inputValue3[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[14].ask) {
        inputValue3[3].checked

        if (inputValue3[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[15].ask) {
        inputValue3[1].checked

        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[16].ask) {
        inputValue3[1].checked

        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[17].ask) {
        inputValue3[1].checked

        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[18].ask) {
        inputValue3[3].checked

        if (inputValue3[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[19].ask) {
        inputValue3[1].checked

        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[20].ask) {
        inputValue3[2].checked

        if (inputValue3[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[21].ask) {
        inputValue3[2].checked

        if (inputValue3[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn3.textContent == qtn[22].ask) {
        inputValue3[1].checked

        if (inputValue3[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 4
function answeredQtn4() {

    let inputValues = document.querySelectorAll(".inputValue4")
    let inputValue4 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn4.textContent == qtn[0].ask) {

        inputValue4[1].checked
        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn4.textContent == qtn[1].ask) {

        inputValue4[3].checked
        if (inputValue4[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[2].ask) {

        inputValue4[0].checked
        if (inputValue4[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[3].ask) {

        inputValue4[2].checked
        if (inputValue4[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[4].ask) {

        inputValue4[1].checked
        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[5].ask) {

        inputValue4[1].checked
        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[6].ask) {

        inputValue4[0].checked
        if (inputValue4[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[7].ask) {

        inputValue4[3].checked
        if (inputValue4[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[8].ask) {

        inputValue4[3].checked
        if (inputValue4[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[9].ask) {

        inputValue4[3].checked
        if (inputValue4[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[10].ask) {
        inputValue4[0].checked

        if (inputValue4[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[11].ask) {
        inputValue4[2].checked

        if (inputValue4[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[12].ask) {
        inputValue4[0].checked

        if (inputValue4[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[13].ask) {
        inputValue4[2].checked

        if (inputValue4[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[14].ask) {
        inputValue4[3].checked

        if (inputValue4[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[15].ask) {
        inputValue4[1].checked

        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[16].ask) {
        inputValue4[1].checked

        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[17].ask) {
        inputValue4[1].checked

        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[18].ask) {
        inputValue4[3].checked

        if (inputValue4[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[19].ask) {
        inputValue4[1].checked

        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[20].ask) {
        inputValue4[2].checked

        if (inputValue4[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[21].ask) {
        inputValue4[2].checked

        if (inputValue4[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn4.textContent == qtn[22].ask) {
        inputValue4[1].checked

        if (inputValue4[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 5
function answeredQtn5() {

    let inputValues = document.querySelectorAll(".inputValue5")
    let inputValue5 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn5.textContent == qtn[0].ask) {

        inputValue5[1].checked
        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn5.textContent == qtn[1].ask) {

        inputValue5[3].checked
        if (inputValue5[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[2].ask) {

        inputValue5[0].checked
        if (inputValue5[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[3].ask) {

        inputValue5[2].checked
        if (inputValue5[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[4].ask) {

        inputValue5[1].checked
        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[5].ask) {

        inputValue5[1].checked
        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[6].ask) {

        inputValue5[0].checked
        if (inputValue5[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[7].ask) {

        inputValue5[3].checked
        if (inputValue5[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[8].ask) {

        inputValue5[3].checked
        if (inputValue5[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[9].ask) {

        inputValue5[3].checked
        if (inputValue5[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[10].ask) {
        inputValue5[0].checked

        if (inputValue5[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[11].ask) {
        inputValue5[2].checked

        if (inputValue5[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[12].ask) {
        inputValue5[0].checked

        if (inputValue5[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[13].ask) {
        inputValue5[2].checked

        if (inputValue5[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[14].ask) {
        inputValue5[3].checked

        if (inputValue5[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[15].ask) {
        inputValue5[1].checked

        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[16].ask) {
        inputValue5[1].checked

        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[17].ask) {
        inputValue5[1].checked

        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[18].ask) {
        inputValue5[3].checked

        if (inputValue5[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[19].ask) {
        inputValue5[1].checked

        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[20].ask) {
        inputValue5[2].checked

        if (inputValue5[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[21].ask) {
        inputValue5[2].checked

        if (inputValue5[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn5.textContent == qtn[22].ask) {
        inputValue5[1].checked

        if (inputValue5[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 6
function answeredQtn6() {

    let inputValues = document.querySelectorAll(".inputValue6")
    let inputValue6 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn6.textContent == qtn[0].ask) {

        inputValue6[1].checked
        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn6.textContent == qtn[1].ask) {

        inputValue6[3].checked
        if (inputValue6[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[2].ask) {

        inputValue6[0].checked
        if (inputValue6[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[3].ask) {

        inputValue6[2].checked
        if (inputValue6[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[4].ask) {

        inputValue6[1].checked
        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[5].ask) {

        inputValue6[1].checked
        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[6].ask) {

        inputValue6[0].checked
        if (inputValue6[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[7].ask) {

        inputValue6[3].checked
        if (inputValue6[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[8].ask) {

        inputValue6[3].checked
        if (inputValue6[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[9].ask) {

        inputValue6[3].checked
        if (inputValue6[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[10].ask) {
        inputValue6[0].checked

        if (inputValue6[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[11].ask) {
        inputValue6[2].checked

        if (inputValue6[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[12].ask) {
        inputValue6[0].checked

        if (inputValue6[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[13].ask) {
        inputValue6[2].checked

        if (inputValue6[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[14].ask) {
        inputValue6[3].checked

        if (inputValue6[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[15].ask) {
        inputValue6[1].checked

        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[16].ask) {
        inputValue6[1].checked

        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[17].ask) {
        inputValue6[1].checked

        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[18].ask) {
        inputValue6[3].checked

        if (inputValue6[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[19].ask) {
        inputValue6[1].checked

        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[20].ask) {
        inputValue6[2].checked

        if (inputValue6[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[21].ask) {
        inputValue6[2].checked

        if (inputValue6[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn6.textContent == qtn[22].ask) {
        inputValue6[1].checked

        if (inputValue6[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 7
function answeredQtn7() {

    let inputValues = document.querySelectorAll(".inputValue7")
    let inputValue7 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn7.textContent == qtn[0].ask) {

        inputValue7[1].checked
        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn7.textContent == qtn[1].ask) {

        inputValue7[3].checked
        if (inputValue7[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[2].ask) {

        inputValue7[0].checked
        if (inputValue7[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[3].ask) {

        inputValue7[2].checked
        if (inputValue7[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[4].ask) {

        inputValue7[1].checked
        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[5].ask) {

        inputValue7[1].checked
        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[6].ask) {

        inputValue7[0].checked
        if (inputValue7[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[7].ask) {

        inputValue7[3].checked
        if (inputValue7[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[8].ask) {

        inputValue7[3].checked
        if (inputValue7[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[9].ask) {

        inputValue7[3].checked
        if (inputValue7[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[10].ask) {
        inputValue7[0].checked

        if (inputValue7[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[11].ask) {
        inputValue7[2].checked

        if (inputValue7[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[12].ask) {
        inputValue7[0].checked

        if (inputValue7[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[13].ask) {
        inputValue7[2].checked

        if (inputValue7[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[14].ask) {
        inputValue7[3].checked

        if (inputValue7[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[15].ask) {
        inputValue7[1].checked

        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[16].ask) {
        inputValue7[1].checked

        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[17].ask) {
        inputValue7[1].checked

        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[18].ask) {
        inputValue7[3].checked

        if (inputValue7[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[19].ask) {
        inputValue7[1].checked

        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[20].ask) {
        inputValue7[2].checked

        if (inputValue7[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[21].ask) {
        inputValue7[2].checked

        if (inputValue7[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn7.textContent == qtn[22].ask) {
        inputValue7[1].checked

        if (inputValue7[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 8
function answeredQtn8() {

    let inputValues = document.querySelectorAll(".inputValue8")
    let inputValue8 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn8.textContent == qtn[0].ask) {

        inputValue8[1].checked
        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn8.textContent == qtn[1].ask) {

        inputValue8[3].checked
        if (inputValue8[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[2].ask) {

        inputValue8[0].checked
        if (inputValue8[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[3].ask) {

        inputValue8[2].checked
        if (inputValue8[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[4].ask) {

        inputValue8[1].checked
        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[5].ask) {

        inputValue8[1].checked
        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[6].ask) {

        inputValue8[0].checked
        if (inputValue8[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[7].ask) {

        inputValue8[3].checked
        if (inputValue8[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[8].ask) {

        inputValue8[3].checked
        if (inputValue8[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[9].ask) {

        inputValue8[3].checked
        if (inputValue8[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[10].ask) {
        inputValue8[0].checked

        if (inputValue8[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[11].ask) {
        inputValue8[2].checked

        if (inputValue8[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[12].ask) {
        inputValue8[0].checked

        if (inputValue8[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[13].ask) {
        inputValue8[2].checked

        if (inputValue8[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[14].ask) {
        inputValue8[3].checked

        if (inputValue8[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[15].ask) {
        inputValue8[1].checked

        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[16].ask) {
        inputValue8[1].checked

        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[17].ask) {
        inputValue8[1].checked

        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[18].ask) {
        inputValue8[3].checked

        if (inputValue8[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[19].ask) {
        inputValue8[1].checked

        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[20].ask) {
        inputValue8[2].checked

        if (inputValue8[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[21].ask) {
        inputValue8[2].checked

        if (inputValue8[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn8.textContent == qtn[22].ask) {
        inputValue8[1].checked

        if (inputValue8[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 9
function answeredQtn9() {

    let inputValues = document.querySelectorAll(".inputValue9")
    let inputValue9 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn9.textContent == qtn[0].ask) {

        inputValue9[1].checked
        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn9.textContent == qtn[1].ask) {

        inputValue9[3].checked
        if (inputValue9[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[2].ask) {

        inputValue9[0].checked
        if (inputValue9[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[3].ask) {

        inputValue9[2].checked
        if (inputValue9[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[4].ask) {

        inputValue9[1].checked
        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[5].ask) {

        inputValue9[1].checked
        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[6].ask) {

        inputValue9[0].checked
        if (inputValue9[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[7].ask) {

        inputValue9[3].checked
        if (inputValue9[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[8].ask) {

        inputValue9[3].checked
        if (inputValue9[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[9].ask) {

        inputValue9[3].checked
        if (inputValue9[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[10].ask) {
        inputValue9[0].checked

        if (inputValue9[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[11].ask) {
        inputValue9[2].checked

        if (inputValue9[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[12].ask) {
        inputValue9[0].checked

        if (inputValue9[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[13].ask) {
        inputValue9[2].checked

        if (inputValue9[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[14].ask) {
        inputValue9[3].checked

        if (inputValue9[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[15].ask) {
        inputValue9[1].checked

        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[16].ask) {
        inputValue9[1].checked

        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[17].ask) {
        inputValue9[1].checked

        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[18].ask) {
        inputValue9[3].checked

        if (inputValue9[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[19].ask) {
        inputValue9[1].checked

        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[20].ask) {
        inputValue9[2].checked

        if (inputValue9[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[21].ask) {
        inputValue9[2].checked

        if (inputValue9[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn9.textContent == qtn[22].ask) {
        inputValue9[1].checked

        if (inputValue9[1].checked) {
            return 1
        } else { return 0 }

    }

}

// this is answers for shuffle for question 10
function answeredQtn10() {

    let inputValues = document.querySelectorAll(".inputValue10")
    let inputValue10 = Array.from(inputValues)
    var response = JSON.parse(xhttp.responseText)
    let qtn = response.question
    if (qstn10.textContent == qtn[0].ask) {

        inputValue10[1].checked
        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }
    }
    else if (qstn10.textContent == qtn[1].ask) {

        inputValue10[3].checked
        if (inputValue10[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[2].ask) {

        inputValue10[0].checked
        if (inputValue10[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[3].ask) {

        inputValue10[2].checked
        if (inputValue10[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[4].ask) {

        inputValue10[1].checked
        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[5].ask) {

        inputValue10[1].checked
        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[6].ask) {

        inputValue10[0].checked
        if (inputValue10[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[7].ask) {

        inputValue10[3].checked
        if (inputValue10[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[8].ask) {

        inputValue10[3].checked
        if (inputValue10[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[9].ask) {

        inputValue10[3].checked
        if (inputValue10[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[10].ask) {
        inputValue10[0].checked

        if (inputValue10[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[11].ask) {
        inputValue10[2].checked

        if (inputValue10[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[12].ask) {
        inputValue10[0].checked

        if (inputValue10[0].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[13].ask) {
        inputValue10[2].checked

        if (inputValue10[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[14].ask) {
        inputValue10[3].checked

        if (inputValue10[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[15].ask) {
        inputValue10[1].checked

        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[16].ask) {
        inputValue10[1].checked

        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[17].ask) {
        inputValue10[1].checked

        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[18].ask) {
        inputValue10[3].checked

        if (inputValue10[3].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[19].ask) {
        inputValue10[1].checked

        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[20].ask) {
        inputValue10[2].checked

        if (inputValue10[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[21].ask) {
        inputValue10[2].checked

        if (inputValue10[2].checked) {
            return 1
        } else { return 0 }

    }
    else if (qstn10.textContent == qtn[22].ask) {
        inputValue10[1].checked

        if (inputValue10[1].checked) {
            return 1
        } else { return 0 }

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


    console.log(array[0].ask)

    console.log(array.slice(9, 10)[0].ask)


    // inputValue[0].value = label1.textContent
    // console.log(inputValue[0].value)
    // console.log(inputValue[1].value)



    // running the timer


    let timerDisplay = document.querySelector(".countDownTimer");
    timerDisplay.style.color = "black";
    timerDisplay.style.fontSize = "18px";

    timerDisplay.style.backgroundColor = "white"


    let timer = setInterval(function () {
        // 1 to set timer for the user
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = 'Timer: ' + minutes + ':' + seconds;

        // 2 if the duration iterate -- less than zero
        if (--duration < 0) {
            // the clearInterval method is invoked 
            clearInterval(timer);

            // this  displays the timeup 
            timerDisplay.textContent = "Timer:" + " Time is Up!";
            timerDisplay.style.color = "red";


            // this will disable my input elements to stop users on countdown
            let inputValue = document.querySelectorAll(".inputValue")
            inputValue.forEach(inputValues => {
                inputValues.disabled = true;
            });

            // set a timeout to display the user result
            // setTimeout(() => {
            //     showResult()
            // }, 5000);


            // TO click on .submit Button to fire it open
            // $(".submit").click()
            // --------------------------------------


            // let qstnHide = document.querySelectorAll(".qstnHide")
            // qstnHide = Array.from(qstnHide)
            // qstnHide.forEach(qstnHid => {
            //     qstnHid.style.display = "none";




            // document.querySelector(".login").style.display = "block";

            // });
        }





    }, 1000);
    let duration = 1 * 60;







    // set the inputValue for each  (objective question's options) to each Label textContent



    // inputValueArray[0].value = label1.textContent
    // console.log(inputValueArray[0].value)














    // this is to declare the variable submit button
    let submit = document.querySelector(".submit")


    // this is to display the result sheet for the candidate
    submit.addEventListener("click", function () {




        if (confirm("Do you want to Submit?") == 1) {

            // confirm if user wants to truely Submit
            // confirm("Do you want to Submit and Print ?");
            // 1.   to close down the questions and display the login page
            let qstnHide = document.querySelectorAll(".qstnHide")
            qstnHide = Array.from(qstnHide)
            qstnHide.forEach(qstnHid2 => {
                qstnHid2.style.display = "none";

                document.querySelector(".login").style.display = "block";

            });


            // ----------------------------------------------------------------
            showResult()



        }




    });




}


// funtion to show result
function showResult() {

    // 2. to display the candidates result 
    let scoreSheetHead = document.querySelector(".scoreSheetHead")
    scoreSheetHead.style.display = "block";
    // ----------------------------------


    // 3 to initaiate the functions declared
    answeredQtn1()
    answeredQtn2()
    answeredQtn3()
    answeredQtn4()
    answeredQtn5()
    answeredQtn6()
    answeredQtn7()
    answeredQtn8()
    answeredQtn9()
    answeredQtn10()
    // -----------------------------------


    // 4 this is to add together the scores for each question 

    let allScore = (answeredQtn1() + answeredQtn2() + answeredQtn3() +
        answeredQtn4() + answeredQtn5()
        + answeredQtn6() + answeredQtn7() +
        answeredQtn8() + answeredQtn9() + answeredQtn10()) * 10 + "%"

    // ------------------------------------------------

    // 5 this laods TextContent into my scoreNumber class
    let scoreNumber = document.querySelector(".scoreNumber")

    scoreNumber.textContent = allScore
    // console.log(allScore)
    // -------------------------------------------------

    //6 to hide the submit Button
    // this.style.display = "none";
    // ----------------------------


}


// print the result in pdf

let printMyResult = document.querySelector(".printMyResult")
if (printMyResult) {
    printMyResult.addEventListener("click", () => {
        // let scoreSheet = document.querySelector(".scoreSheet")


        print()
        // print();
        printMyResult.style.display = "none";



    });
}

// --------------------------------------------------------------








// Subject Picker
// 1 set to display="none"
document.addEventListener("DOMContentLoaded", function () {
    let QuizQuestn = document.querySelector(".QuizQuestn");
    if (QuizQuestn) {
        QuizQuestn.addEventListener("click", function () {
            document.querySelector(".menuList").style.display = "none";
            document.querySelector(".screenCover").style.display = "block";
        });
    }

});






// this is directoryy is for allSubjects platform
// 1 English
let engl = document.querySelector(".engl")
let englURL = "/allSubjects/English-Language.html";

if (engl) {
    engl.addEventListener('click', () => {
        // this opens in the parent window
        // window.location.href="englURL"
        // ;
        // this opens a new window target=_blank
        window.open(englURL, "English-Language");
    })
}



//  2 Financial Accounting
let fina = document.querySelector(".fina")
let finaURL = "/allSubjects/Financial-Accounting.html";
if (fina) {
    fina.addEventListener('click', () => {
        window.open(finaURL, "Financial-Accounting")
    });
}


// signAdmin
let adminSign = document.querySelector(".adminSign");


if (adminSign) {
    adminSign.addEventListener("click", () => {
        let adminURL = "/Qstn-Admin/admin.html";

        window.open(adminURL, "admin");
    });

}
// --------------------------------------------
// picture Stories-------------
let picture = document.querySelector(".picture");
if (picture) {
    picture.addEventListener("click", () => {
        let pictureURL = "/pictureStories/stories.html"
        window.open(pictureURL, "stories")
    })
}




// close the subject page when any subject is clicked

let subsList = document.querySelectorAll(".subsList")
subsList.forEach(subLis => {
    subLis.addEventListener("click", () => {
        document.querySelector(".screenCover").style.display = "none"
    })
});


// --------------------------------------------------

// timeStamp for result printing
let timeStamp = document.getElementsByClassName('timeStamp')[0]
let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDate();

// console.log(day);

// months in words
function mymonth() {
    if (month == 1) {
        return "Jan"
    } else if (month == 2) {
        return "Feb"
    }
    else if (month == 3) {
        return "Mar"
    }
    else if (month == 4) {
        return "Apr"
    }
    else if (month == 5) {
        return "May"
    }
    else if (month == 6) {
        return "Jun"
    }
    else if (month == 7) {
        return "Jul"
    }
    else if (month == 8) {
        return "Aug"
    }
    else if (month == 9) {
        return "Sep"
    }
    else if (month == 10) {
        return "Oct"
    }
    else if (month == 11) {
        return "Nov"
    }
    else if (month == 12) {
        return "Dec"
    }
}
// month()


// days in st,th or nd
function myday() {
    if (day === 11 || day === 12 || day === 13) {
        return "th"
    }
    else if (day.toString().endsWith("1")) {
        return "st"

    }
    else if (day.toString().endsWith("2")) {
        return "nd"
    }
    else if (day.toString().endsWith("3")) {
        return "rd"
    }
    else {
        return "th"
    }

}



if (timeStamp) {
    timeStamp.textContent = year + "-" + mymonth() + "-" + day + myday()

}



// console.log(day)

// sign-up btn initiated
let signUp = document.querySelector(".sign-up");
if (signUp) {
    signUp.addEventListener("click", () => {
        let url = "/signUp.html";
        window.open(url, "blank");
    })
};

// mouseEnter: add class text-danger
const mouseEnter = document.querySelector(".mouseEnter");
if (mouseEnter) {
    mouseEnter.addEventListener("mouseenter", () => {
        mouseEnter.classList.add("text-danger");
    })

};


// mouseleave: remove class text-danger
if (mouseEnter) {
    mouseEnter.addEventListener("mouseleave", () => {
        mouseEnter.classList.remove("text-danger");
    });
};




// waec URL directory defined
let waec = document.querySelector(".waec")
let waecURL = "https://www.waecdirect.org/";
waec.addEventListener("click", () => {
    if (waec) {
        window.open(waecURL)
    }
})


// neco URL directory defined
let neco = document.querySelector(".neco");
let necoURL = "https://results.neco.gov.ng/";
neco.addEventListener("click", () => {
    if (neco) {
        window.open(necoURL);
    }
})

// ------------------------------------------------



// sites under Constructions
// printall
// contacts
let printall = document.querySelector(".printall");
let contacts = document.querySelector(".contacts");
let dlcontacts = document.querySelector(".dlcontacts");
let contactsok = document.querySelector(".contactsok");
if (contacts) {
    contacts.addEventListener("click", () => {

        dlcontacts.showModal();
        // document.querySelector(".menuList").style.display = "none";

    })
}

// close the dialog 
if (contactsok) {
    contactsok.addEventListener("click", () => {

        dlcontacts.close();
    })
};

// printall is under contruction too
if (printall) {
    printall.addEventListener(".click", () => {
        dlcontacts.showModal();
    })
}




// // show Login Details to be able to print result
// const subjResultLogin = document.querySelector(".subjResultLogin")
// const PrintResults = document.querySelector(".PrintResults");
// if (PrintResults) {
//     PrintResults.addEventListener("click", () => {

//         subjResultLogin.style.display = "block"
//         document.querySelector(".menuList").style.display = "none";

//     })
// };



















// JQuery CODES for ogd.js
$(document).ready(function () {
    // $("html,body").animate({ scrollButtom: 
    // $(".header").hide() });





    $(".navBarIcon").mouseenter(function () {
        $(".menuList").show(200)

        // $(".QuizQuestn").toggle()
    });


    $(".menuList").mouseleave(function () {
        // hide nav element for me
        $(this).hide(200);

        $(".contactsok").click();


    });

    $(".icon-menuList, .icon-close").click(function () {
        $(".menuList").hide();

    });

    // $(".contacts").click(function () {
    //     $(".contactMe").css( "z-index", 9999 )
    // })

    // $(".QuizQuestn").click(function () {

    // to scroll by animating to the top of .quiz class
    // $("html,body").animate({
    //     scrollTop: $(".quiz").offset().top
    // }, "fast")

    // })

    $(".picture").click(function () {
        $("html,body").animate({
            scrollTop: $(".sectionThree").offset().top

        }, "slow");
    });


    $(".viewMore, .personalities").click(function () {
        $(".SectionTwo").toggle(1000);
        ;
        // if ($(".viewMore").text() = "Collapse") {
        //     $(".viewMore").text().toggle()
        // }
    });





    // i want remove  the subject modal dialog
    $(".rm-subjList").click(() => {
        $(".screenCover").hide()
    })
    // ----------









});









