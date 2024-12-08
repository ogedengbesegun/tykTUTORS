





// Setting my Start button to disabled at onLoadState.
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {



    if (this.readyState == 4 && this.status == 200) {

        // Typical action to be performed when the document is ready:

        // console.log(xhttp.responseText);






    }



}

xhttp.open("GET", "/subjectsJSON/tykBank.fina.json", true);
xhttp.send();




// console.log(response)














// function show() {
//     document.querySelector('.show').style.display = 'block';

// }


// let vang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let m = vang.length - 1; m > 0; m--) {
//     const j = Math.floor(Math.random() * (m + 1));

//     [vang[m], vang[j]] = [vang[j], vang[m]];

// }

// console.log(vang.slice(0, 1)[0]);

// covert the inputs into Array
let inputValues = document.querySelectorAll(".inputValue");
let inputValue = Array.from(inputValues)
// console.log(inputValue)
let lb1 = document.querySelectorAll('.lb1');
let lb2 = document.querySelectorAll('.lb2');
let lb3 = document.querySelectorAll('.lb3');
let lb4 = document.querySelectorAll('.lb4');

// -----------

// these are variables declarations made global
let qstn1 = document.querySelector(".qstn1")
let label1 = document.querySelector(".label1")
let label2 = document.querySelector(".label2")
let label3 = document.querySelector(".label3")
let label4 = document.querySelector(".label4")



let scoreResult = {
    success: 1,
    failure: 0
}


////////////////////////////question 1 load
function answeredQtn100000() {

    let inputValues = document.querySelectorAll(".inputValue1")
    let inputValue1 = Array.from(inputValues)
    const response = JSON.parse(xhttp.responseText)
    let qtn = response

    // ////////////////////////////////
    for (let i = 0; i < qtn.length; i++) {
        if (qstn1.textContent == qtn[i].ask) {
            return console.log(qst[i].ans)

        }
        break;
    }

    /////////////////////////////////////////////


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
/////////////////qst 1 end

// this is answers for shuffle for question 2
// function answeredQtn2() {

//     let inputValues = document.querySelectorAll(".inputValue2")
//     let inputValue2 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn2.textContent == qtn[0].ask) {

//         inputValue2[1].checked
//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn2.textContent == qtn[1].ask) {

//         inputValue2[3].checked
//         if (inputValue2[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[2].ask) {

//         inputValue2[0].checked
//         if (inputValue2[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[3].ask) {

//         inputValue2[2].checked
//         if (inputValue2[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[4].ask) {

//         inputValue2[1].checked
//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[5].ask) {

//         inputValue2[1].checked
//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[6].ask) {

//         inputValue2[0].checked
//         if (inputValue2[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[7].ask) {

//         inputValue2[3].checked
//         if (inputValue2[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[8].ask) {

//         inputValue2[3].checked
//         if (inputValue2[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[9].ask) {

//         inputValue2[3].checked
//         if (inputValue2[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[10].ask) {
//         inputValue2[0].checked

//         if (inputValue2[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[11].ask) {
//         inputValue2[2].checked

//         if (inputValue2[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[12].ask) {
//         inputValue2[0].checked

//         if (inputValue2[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[13].ask) {
//         inputValue2[2].checked

//         if (inputValue2[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[14].ask) {
//         inputValue2[3].checked

//         if (inputValue2[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[15].ask) {
//         inputValue2[1].checked

//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[16].ask) {
//         inputValue2[1].checked

//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[17].ask) {
//         inputValue2[1].checked

//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[18].ask) {
//         inputValue2[3].checked

//         if (inputValue2[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[19].ask) {
//         inputValue2[1].checked

//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[20].ask) {
//         inputValue2[2].checked

//         if (inputValue2[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[21].ask) {
//         inputValue2[2].checked

//         if (inputValue2[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn2.textContent == qtn[22].ask) {
//         inputValue2[1].checked

//         if (inputValue2[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 3
// function answeredQtn3() {

//     let inputValues = document.querySelectorAll(".inputValue3")
//     let inputValue3 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn3.textContent == qtn[0].ask) {

//         inputValue3[1].checked
//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn3.textContent == qtn[1].ask) {

//         inputValue3[3].checked
//         if (inputValue3[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[2].ask) {

//         inputValue3[0].checked
//         if (inputValue3[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[3].ask) {

//         inputValue3[2].checked
//         if (inputValue3[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[4].ask) {

//         inputValue3[1].checked
//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[5].ask) {

//         inputValue3[1].checked
//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[6].ask) {

//         inputValue3[0].checked
//         if (inputValue3[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[7].ask) {

//         inputValue3[3].checked
//         if (inputValue3[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[8].ask) {

//         inputValue3[3].checked
//         if (inputValue3[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[9].ask) {

//         inputValue3[3].checked
//         if (inputValue3[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[10].ask) {
//         inputValue3[0].checked

//         if (inputValue3[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[11].ask) {
//         inputValue3[2].checked

//         if (inputValue3[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[12].ask) {
//         inputValue3[0].checked

//         if (inputValue3[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[13].ask) {
//         inputValue3[2].checked

//         if (inputValue3[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[14].ask) {
//         inputValue3[3].checked

//         if (inputValue3[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[15].ask) {
//         inputValue3[1].checked

//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[16].ask) {
//         inputValue3[1].checked

//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[17].ask) {
//         inputValue3[1].checked

//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[18].ask) {
//         inputValue3[3].checked

//         if (inputValue3[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[19].ask) {
//         inputValue3[1].checked

//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[20].ask) {
//         inputValue3[2].checked

//         if (inputValue3[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[21].ask) {
//         inputValue3[2].checked

//         if (inputValue3[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn3.textContent == qtn[22].ask) {
//         inputValue3[1].checked

//         if (inputValue3[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 4
// function answeredQtn4() {

//     let inputValues = document.querySelectorAll(".inputValue4")
//     let inputValue4 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn4.textContent == qtn[0].ask) {

//         inputValue4[1].checked
//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn4.textContent == qtn[1].ask) {

//         inputValue4[3].checked
//         if (inputValue4[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[2].ask) {

//         inputValue4[0].checked
//         if (inputValue4[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[3].ask) {

//         inputValue4[2].checked
//         if (inputValue4[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[4].ask) {

//         inputValue4[1].checked
//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[5].ask) {

//         inputValue4[1].checked
//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[6].ask) {

//         inputValue4[0].checked
//         if (inputValue4[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[7].ask) {

//         inputValue4[3].checked
//         if (inputValue4[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[8].ask) {

//         inputValue4[3].checked
//         if (inputValue4[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[9].ask) {

//         inputValue4[3].checked
//         if (inputValue4[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[10].ask) {
//         inputValue4[0].checked

//         if (inputValue4[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[11].ask) {
//         inputValue4[2].checked

//         if (inputValue4[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[12].ask) {
//         inputValue4[0].checked

//         if (inputValue4[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[13].ask) {
//         inputValue4[2].checked

//         if (inputValue4[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[14].ask) {
//         inputValue4[3].checked

//         if (inputValue4[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[15].ask) {
//         inputValue4[1].checked

//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[16].ask) {
//         inputValue4[1].checked

//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[17].ask) {
//         inputValue4[1].checked

//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[18].ask) {
//         inputValue4[3].checked

//         if (inputValue4[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[19].ask) {
//         inputValue4[1].checked

//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[20].ask) {
//         inputValue4[2].checked

//         if (inputValue4[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[21].ask) {
//         inputValue4[2].checked

//         if (inputValue4[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn4.textContent == qtn[22].ask) {
//         inputValue4[1].checked

//         if (inputValue4[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 5
// function answeredQtn5() {

//     let inputValues = document.querySelectorAll(".inputValue5")
//     let inputValue5 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn5.textContent == qtn[0].ask) {

//         inputValue5[1].checked
//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn5.textContent == qtn[1].ask) {

//         inputValue5[3].checked
//         if (inputValue5[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[2].ask) {

//         inputValue5[0].checked
//         if (inputValue5[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[3].ask) {

//         inputValue5[2].checked
//         if (inputValue5[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[4].ask) {

//         inputValue5[1].checked
//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[5].ask) {

//         inputValue5[1].checked
//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[6].ask) {

//         inputValue5[0].checked
//         if (inputValue5[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[7].ask) {

//         inputValue5[3].checked
//         if (inputValue5[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[8].ask) {

//         inputValue5[3].checked
//         if (inputValue5[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[9].ask) {

//         inputValue5[3].checked
//         if (inputValue5[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[10].ask) {
//         inputValue5[0].checked

//         if (inputValue5[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[11].ask) {
//         inputValue5[2].checked

//         if (inputValue5[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[12].ask) {
//         inputValue5[0].checked

//         if (inputValue5[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[13].ask) {
//         inputValue5[2].checked

//         if (inputValue5[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[14].ask) {
//         inputValue5[3].checked

//         if (inputValue5[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[15].ask) {
//         inputValue5[1].checked

//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[16].ask) {
//         inputValue5[1].checked

//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[17].ask) {
//         inputValue5[1].checked

//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[18].ask) {
//         inputValue5[3].checked

//         if (inputValue5[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[19].ask) {
//         inputValue5[1].checked

//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[20].ask) {
//         inputValue5[2].checked

//         if (inputValue5[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[21].ask) {
//         inputValue5[2].checked

//         if (inputValue5[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn5.textContent == qtn[22].ask) {
//         inputValue5[1].checked

//         if (inputValue5[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 6
// function answeredQtn6() {

//     let inputValues = document.querySelectorAll(".inputValue6")
//     let inputValue6 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn6.textContent == qtn[0].ask) {

//         inputValue6[1].checked
//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn6.textContent == qtn[1].ask) {

//         inputValue6[3].checked
//         if (inputValue6[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[2].ask) {

//         inputValue6[0].checked
//         if (inputValue6[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[3].ask) {

//         inputValue6[2].checked
//         if (inputValue6[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[4].ask) {

//         inputValue6[1].checked
//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[5].ask) {

//         inputValue6[1].checked
//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[6].ask) {

//         inputValue6[0].checked
//         if (inputValue6[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[7].ask) {

//         inputValue6[3].checked
//         if (inputValue6[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[8].ask) {

//         inputValue6[3].checked
//         if (inputValue6[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[9].ask) {

//         inputValue6[3].checked
//         if (inputValue6[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[10].ask) {
//         inputValue6[0].checked

//         if (inputValue6[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[11].ask) {
//         inputValue6[2].checked

//         if (inputValue6[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[12].ask) {
//         inputValue6[0].checked

//         if (inputValue6[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[13].ask) {
//         inputValue6[2].checked

//         if (inputValue6[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[14].ask) {
//         inputValue6[3].checked

//         if (inputValue6[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[15].ask) {
//         inputValue6[1].checked

//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[16].ask) {
//         inputValue6[1].checked

//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[17].ask) {
//         inputValue6[1].checked

//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[18].ask) {
//         inputValue6[3].checked

//         if (inputValue6[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[19].ask) {
//         inputValue6[1].checked

//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[20].ask) {
//         inputValue6[2].checked

//         if (inputValue6[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[21].ask) {
//         inputValue6[2].checked

//         if (inputValue6[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn6.textContent == qtn[22].ask) {
//         inputValue6[1].checked

//         if (inputValue6[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 7
// function answeredQtn7() {

//     let inputValues = document.querySelectorAll(".inputValue7")
//     let inputValue7 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn7.textContent == qtn[0].ask) {

//         inputValue7[1].checked
//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn7.textContent == qtn[1].ask) {

//         inputValue7[3].checked
//         if (inputValue7[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[2].ask) {

//         inputValue7[0].checked
//         if (inputValue7[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[3].ask) {

//         inputValue7[2].checked
//         if (inputValue7[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[4].ask) {

//         inputValue7[1].checked
//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[5].ask) {

//         inputValue7[1].checked
//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[6].ask) {

//         inputValue7[0].checked
//         if (inputValue7[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[7].ask) {

//         inputValue7[3].checked
//         if (inputValue7[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[8].ask) {

//         inputValue7[3].checked
//         if (inputValue7[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[9].ask) {

//         inputValue7[3].checked
//         if (inputValue7[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[10].ask) {
//         inputValue7[0].checked

//         if (inputValue7[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[11].ask) {
//         inputValue7[2].checked

//         if (inputValue7[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[12].ask) {
//         inputValue7[0].checked

//         if (inputValue7[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[13].ask) {
//         inputValue7[2].checked

//         if (inputValue7[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[14].ask) {
//         inputValue7[3].checked

//         if (inputValue7[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[15].ask) {
//         inputValue7[1].checked

//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[16].ask) {
//         inputValue7[1].checked

//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[17].ask) {
//         inputValue7[1].checked

//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[18].ask) {
//         inputValue7[3].checked

//         if (inputValue7[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[19].ask) {
//         inputValue7[1].checked

//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[20].ask) {
//         inputValue7[2].checked

//         if (inputValue7[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[21].ask) {
//         inputValue7[2].checked

//         if (inputValue7[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn7.textContent == qtn[22].ask) {
//         inputValue7[1].checked

//         if (inputValue7[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 8
// function answeredQtn8() {

//     let inputValues = document.querySelectorAll(".inputValue8")
//     let inputValue8 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn8.textContent == qtn[0].ask) {

//         inputValue8[1].checked
//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn8.textContent == qtn[1].ask) {

//         inputValue8[3].checked
//         if (inputValue8[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[2].ask) {

//         inputValue8[0].checked
//         if (inputValue8[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[3].ask) {

//         inputValue8[2].checked
//         if (inputValue8[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[4].ask) {

//         inputValue8[1].checked
//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[5].ask) {

//         inputValue8[1].checked
//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[6].ask) {

//         inputValue8[0].checked
//         if (inputValue8[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[7].ask) {

//         inputValue8[3].checked
//         if (inputValue8[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[8].ask) {

//         inputValue8[3].checked
//         if (inputValue8[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[9].ask) {

//         inputValue8[3].checked
//         if (inputValue8[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[10].ask) {
//         inputValue8[0].checked

//         if (inputValue8[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[11].ask) {
//         inputValue8[2].checked

//         if (inputValue8[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[12].ask) {
//         inputValue8[0].checked

//         if (inputValue8[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[13].ask) {
//         inputValue8[2].checked

//         if (inputValue8[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[14].ask) {
//         inputValue8[3].checked

//         if (inputValue8[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[15].ask) {
//         inputValue8[1].checked

//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[16].ask) {
//         inputValue8[1].checked

//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[17].ask) {
//         inputValue8[1].checked

//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[18].ask) {
//         inputValue8[3].checked

//         if (inputValue8[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[19].ask) {
//         inputValue8[1].checked

//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[20].ask) {
//         inputValue8[2].checked

//         if (inputValue8[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[21].ask) {
//         inputValue8[2].checked

//         if (inputValue8[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn8.textContent == qtn[22].ask) {
//         inputValue8[1].checked

//         if (inputValue8[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 9
// function answeredQtn9() {

//     let inputValues = document.querySelectorAll(".inputValue9")
//     let inputValue9 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn9.textContent == qtn[0].ask) {

//         inputValue9[1].checked
//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn9.textContent == qtn[1].ask) {

//         inputValue9[3].checked
//         if (inputValue9[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[2].ask) {

//         inputValue9[0].checked
//         if (inputValue9[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[3].ask) {

//         inputValue9[2].checked
//         if (inputValue9[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[4].ask) {

//         inputValue9[1].checked
//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[5].ask) {

//         inputValue9[1].checked
//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[6].ask) {

//         inputValue9[0].checked
//         if (inputValue9[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[7].ask) {

//         inputValue9[3].checked
//         if (inputValue9[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[8].ask) {

//         inputValue9[3].checked
//         if (inputValue9[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[9].ask) {

//         inputValue9[3].checked
//         if (inputValue9[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[10].ask) {
//         inputValue9[0].checked

//         if (inputValue9[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[11].ask) {
//         inputValue9[2].checked

//         if (inputValue9[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[12].ask) {
//         inputValue9[0].checked

//         if (inputValue9[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[13].ask) {
//         inputValue9[2].checked

//         if (inputValue9[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[14].ask) {
//         inputValue9[3].checked

//         if (inputValue9[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[15].ask) {
//         inputValue9[1].checked

//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[16].ask) {
//         inputValue9[1].checked

//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[17].ask) {
//         inputValue9[1].checked

//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[18].ask) {
//         inputValue9[3].checked

//         if (inputValue9[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[19].ask) {
//         inputValue9[1].checked

//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[20].ask) {
//         inputValue9[2].checked

//         if (inputValue9[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[21].ask) {
//         inputValue9[2].checked

//         if (inputValue9[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn9.textContent == qtn[22].ask) {
//         inputValue9[1].checked

//         if (inputValue9[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }

// // this is answers for shuffle for question 10
// function answeredQtn10() {

//     let inputValues = document.querySelectorAll(".inputValue10")
//     let inputValue10 = Array.from(inputValues)
//     let response = JSON.parse(xhttp.responseText)
//     let qtn = response
//     if (qstn10.textContent == qtn[0].ask) {

//         inputValue10[1].checked
//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }
//     }
//     else if (qstn10.textContent == qtn[1].ask) {

//         inputValue10[3].checked
//         if (inputValue10[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[2].ask) {

//         inputValue10[0].checked
//         if (inputValue10[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[3].ask) {

//         inputValue10[2].checked
//         if (inputValue10[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[4].ask) {

//         inputValue10[1].checked
//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[5].ask) {

//         inputValue10[1].checked
//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[6].ask) {

//         inputValue10[0].checked
//         if (inputValue10[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[7].ask) {

//         inputValue10[3].checked
//         if (inputValue10[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[8].ask) {

//         inputValue10[3].checked
//         if (inputValue10[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[9].ask) {

//         inputValue10[3].checked
//         if (inputValue10[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[10].ask) {
//         inputValue10[0].checked

//         if (inputValue10[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[11].ask) {
//         inputValue10[2].checked

//         if (inputValue10[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[12].ask) {
//         inputValue10[0].checked

//         if (inputValue10[0].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[13].ask) {
//         inputValue10[2].checked

//         if (inputValue10[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[14].ask) {
//         inputValue10[3].checked

//         if (inputValue10[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[15].ask) {
//         inputValue10[1].checked

//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[16].ask) {
//         inputValue10[1].checked

//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[17].ask) {
//         inputValue10[1].checked

//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[18].ask) {
//         inputValue10[3].checked

//         if (inputValue10[3].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[19].ask) {
//         inputValue10[1].checked

//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[20].ask) {
//         inputValue10[2].checked

//         if (inputValue10[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[21].ask) {
//         inputValue10[2].checked

//         if (inputValue10[2].checked) {
//             return 1
//         } else { return 0 }

//     }
//     else if (qstn10.textContent == qtn[22].ask) {
//         inputValue10[1].checked

//         if (inputValue10[1].checked) {
//             return 1
//         } else { return 0 }

//     }

// }



// for ease of use for other functions-------------------

function start() {



    document.querySelector(".start").style.
        backgroundColor = "green";
    document.querySelector(".start").textContent = 'Exams-in-Progress';



    // document.querySelector(".start").disabled = true
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
            const batchSize = 24;
            // Current index of loaded blocks
            let currentIndex = 0;



            // Template for the HTML structure
            const template = (index) => `
     <div class="mx-5 bg-success rounded-3 w-auto my-2 py-2 qstnHide No-hide">
         <h5 class="text-center mt-1 text-light qstNo" id="page${index}" value=${index}>Question ${index}</h5>
         <p class="fs-5 p-1 text-center text-light qstn1">${qstn1 = array.slice(index - 1, index)[0].ask}</p>

         <label for="optn1-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb1" title="Option A">
             <input type="radio" id="optn1-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option A" value="a">
             <label for="optn1-${index}" class="me-1 p-1 rounded-1 label1 lb1">${label1 = array.slice(index - 1, index)[0].a
                }</label>
         </label>
         <label for="optn2-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb2" title="Option B">
             <input type="radio" id="optn2-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option B" value="b">
             <label for="optn2-${index}" class="me-1 p-1 rounded-1 d-block label2 lb2">${label2 = array.slice(index - 1, index)[0].b
                }</label>
         </label>
         <label for="optn3-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb3" title="Option C">
             <input type="radio" id="optn3-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option C" value="c">
             <label for="optn3-${index}" class="me-1 p-1 rounded-1 d-block label3 lb3">${label3 = array.slice(index - 1, index)[0].c
                }</label>
         </label>
         <label for="optn4-${index}" class="d-flex mx-2 bg-white rounded-1 my-2 lb4" title="Option D">
             <input type="radio" id="optn4-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option D" value="d">
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
                /// set overflow-y & height
                qstsAll.style.overflowY = 'scroll';
                // qstsAll.style.overflowColor = 'green';
                qstsAll.style.height = '300px'
                qstsAll.style.scrollBehaviour = 'smooth';
                //////////
                const controlBtns = document.querySelector('.controlBtns');
                controlBtns.style.display = 'block';
                ////////to show previously hidden btns
                currentIndex += batchSize;

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
            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');
            let count = 1;

            next.addEventListener('click', () => {
                // console.log(count)
                count = count + 1
                if (count < batchSize + 1) {
                    const pgnext = document.querySelector(`#page${count}`)
                    pgnext.scrollIntoView({ behavior: 'smooth' });

                }
                else {

                    count = 0;

                }




            })////////scroll back
            prev.addEventListener('click', () => {
                count = count - 1;
                if (count != 0) {
                    const pgprev = document.querySelector(`#page${count}`);
                    pgprev.scrollIntoView({ behavior: 'smooth' })
                }
                else {
                    count = 1
                }

            })
            ////back scroll



            // Initial load
            loadBatch();


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
            let inputValue = document.querySelectorAll(".inputValue")
            inputValue.forEach(Eachinput => {
                Eachinput.disabled = true;
            });


        }





    }, 1000);
    let duration = 2 * 60;








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

                document.querySelector(".studentlogin").style.display = "block";

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
    // answeredQtn2()
    // answeredQtn3()
    // answeredQtn4()
    // answeredQtn5()
    // answeredQtn6()
    // answeredQtn7()
    // answeredQtn8()
    // answeredQtn9()
    // answeredQtn10()
    // -----------------------------------


    // 4 this is to add together the scores for each question 

    let allScore = (answeredQtn1()) * 10 + "%"

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


        // print();
        printMyResult.style.opacity = 0;
        setTimeout(() => {
            print()

        }, 1000);



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

        // reload the window location
        window.location.reload(); // just reload the current page
    })
}

//  2 Mathematics
let math = document.querySelector(".math")
let mathURL = "/allSubjects/mathematics.html";
if (math) {
    math.addEventListener('click', () => {
        window.open(mathURL, "mathematics")

        // reload the window location
        window.location.reload(); // just reload the current page
    });
}


//  2 Financial Accounting
let fina = document.querySelector(".fina")
let finaURL = "/allSubjects/Financial-Accounting.html";
if (fina) {
    fina.addEventListener('click', () => {
        window.open(finaURL, "Financial-Accounting")

        // reload the window location
        window.location.reload(); // just reload the current page
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
    let date = new Date()
    timeStamp.textContent = year + "-" + mymonth() + "-" + day + myday() + " (" + date.toLocaleString() + ")";

};



// console.log(day)

// sign-up btn initiated
let signUp = document.querySelector(".sign-up");
if (signUp) {
    signUp.addEventListener("click", () => {
        let url = "/html/signUp.html";
        window.open(url, "blank");
    })
};

let logind = document.getElementsByClassName('login')[0];
if (logind) {
    logind.addEventListener('click', () => {
        let url = "/html/signUp.html";
        window.open(url, "blank");
    })
}

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
if (waec) {

    waec.addEventListener("click", () => {
        window.open(waecURL)
    })
}


// neco URL directory defined
let neco = document.querySelector(".neco");
let necoURL = "https://results.neco.gov.ng/";
if (neco) {

    neco.addEventListener("click", () => {
        window.open(necoURL);
    })
}

// ------------------------------------------------



// sites under Constructions
// printall
// contacts
let printall = document.querySelector(".printall");
// printall.textContent = "working"
let contacts = document.querySelector(".contacts");
let dlcontacts = document.querySelector(".dlcontacts");
let contactsok = document.querySelector(".contactsok");
if (contacts) {
    contacts.addEventListener("click", () => {

        // dlcontacts.showModal();
        showmodal();
        // document.querySelector(".menuList").style.display = "none";

    })
}
// declare the function for showModal()
function showmodal() {
    dlcontacts.showModal();
}


// close the dialog 
if (contactsok) {
    contactsok.addEventListener("click", () => {

        dlcontacts.close();
    })
};

// printall is under contruction too
if (printall) {
    printall.addEventListener("click", () => {
        // dlcontacts.showModal();
        showmodal();
    })
}


console.log(window.innerHeight / 5 * 4)

// prevent Duplicate Page Load
// if (window.name !== "pageLoaded") {
//     window.name = "pageLoaded";
// }
// else {
//     window.close();
// };
// ------------------------------------

////splits the text
const letgotext = (document.getElementsByClassName('letgotext')[0]);
if (letgotext) {

    let seme = letgotext.textContent.split(" ");
    // seme[0].style.color = 'green';
    // seme[1].style.color = 'purple';
    // seme[2].style.color = 'red'

    const copyme = document.getElementById('copyme')
    seme.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;

        if (index === 0) {
            span.style.color = 'green';

        }
        else if (index === 1) {
            span.style.color = 'blue'
        }
        else {
            span.style.color = 'red'
        }

        copyme.appendChild(span);
        copyme.appendChild(document.createTextNode(" "));
        document.getElementById('origin').style.display = "none";
    })



}


////work with split() method




















// JQuery CODES for ogd.js
$(document).ready(function () {
    // $("html,body").animate({ scrollButtom: 
    // $(".header").hide() });





    $(".navBarIcon").click(function () {
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
    const rmsubjList = document.querySelectorAll(".rm-subjList");
    if (rmsubjList) {

        $(".rm-subjList").click(() => {
            $(".screenCover").hide()
        })
        // ----------
    }










});




/////playing with timer
// let duration = .10 * 60;
// let mytimer = setInterval(function () {
//     let minutes = Math.floor(duration / 60)
//     let seconds = duration % 60;


//     if (minutes < 10) {

//         minutes = "0" + minutes
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds
//     }
//     let dUserName = document.querySelector(".dUserName");
//     dUserName.style.color = "green"
//     dUserName.textContent = minutes + ":" + seconds;

//     if (--duration < 0) {
//         clearInterval(mytimer)
//         dUserName.textContent = "Sorry Time is UP!!!"
//         dUserName.style.color = "red"

//         let clrTimer = setTimeout(() => {
//             dUserName.style.display = "none"
//         }, 3000);
//         clrTimer();
//     }
//     console.log(minutes + " : " + seconds);


// }, 1000);
// console.log(mytimer)


///////testing
//// call for user name
async function urljson() {
    try {
        const urlf = await fetch('/url.json');
        const urlRes = await urlf.json();
        // console.log(urlRes);
        const insert = urlRes.insert;
        const getLogin = urlRes.getLogin;
        const getfina = urlRes.getfina;
        const getUserName = urlRes.getUserName;
        return { insert, getLogin, getfina, getUserName };

    }
    catch (error) {
        console.log("getUserName NOT available", error)
    }

}
//////////
// async function userNameLabel() {
//     const dUserName = document.querySelector(".dUserName");
//     const urljsonRes = await urljson();
//     const urljsonResult = urljsonRes.getUserName;
//     console.log(urljsonResult);
//     // dUserName.textContent = await urljsonRes.getUserName;

//     try {
//         const userNameF = await fetch(urljsonResult, {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify()
//         });
//         const userNameRes = await userNameF.json();
//     }
//     catch (error) {
//         console.log("server for getUserName failed")
//     }
// }
// userNameLabel();