





// Setting my Start button to disabled at onLoadState.
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {



    if (this.readyState == 4 && this.status == 200) {

        // Typical action to be performed when the document is ready:

        console.log(xhttp.responseText);






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

// let qstn2 = document.querySelector(".qstn2")
// let label21 = document.querySelector(".label21")
// let label22 = document.querySelector(".label22")
// let label23 = document.querySelector(".label23")
// let label24 = document.querySelector(".label24")

// let qstn3 = document.querySelector(".qstn3")
// let label31 = document.querySelector(".label31")
// let label32 = document.querySelector(".label32")
// let label33 = document.querySelector(".label33")
// let label34 = document.querySelector(".label34")

// let qstn4 = document.querySelector(".qstn4")
// let label41 = document.querySelector(".label41")
// let label42 = document.querySelector(".label42")
// let label43 = document.querySelector(".label43")
// let label44 = document.querySelector(".label44")

// let qstn5 = document.querySelector(".qstn5")
// let label51 = document.querySelector(".label51")
// let label52 = document.querySelector(".label52")
// let label53 = document.querySelector(".label53")
// let label54 = document.querySelector(".label54")

// let qstn6 = document.querySelector(".qstn6")
// let label61 = document.querySelector(".label61")
// let label62 = document.querySelector(".label62")
// let label63 = document.querySelector(".label63")
// let label64 = document.querySelector(".label64")

// let qstn7 = document.querySelector(".qstn7")
// let label71 = document.querySelector(".label71")
// let label72 = document.querySelector(".label72")
// let label73 = document.querySelector(".label73")
// let label74 = document.querySelector(".label74")

// let qstn8 = document.querySelector(".qstn8")
// let label81 = document.querySelector(".label81")
// let label82 = document.querySelector(".label82")
// let label83 = document.querySelector(".label83")
// let label84 = document.querySelector(".label84")

// let qstn9 = document.querySelector(".qstn9")
// let label91 = document.querySelector(".label91")
// let label92 = document.querySelector(".label92")
// let label93 = document.querySelector(".label93")
// let label94 = document.querySelector(".label94")

// let qstn10 = document.querySelector(".qstn10")
// let label101 = document.querySelector(".label101")
// let label102 = document.querySelector(".label102")
// let label103 = document.querySelector(".label103")
// let label104 = document.querySelector(".label104")




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




    // document.querySelector(".start").style.;
    // border-bottom-left-radius: 32px;
    // border-top-right-radius: 32px;
    // border-bottom-right-radius: 32px;}


    document.querySelector(".start").disabled = true
    let response = JSON.parse(xhttp.responseText);


    let array = response
    // let qtn = response








    // console.log(array[20].ask)
    for (let i = array.length - 1; i > 0; i--) {
        let m = Math.floor(Math.random() * (i + 1));

        [array[m], array[i]] = [array[i], array[m]];

    };
    console.log()
    // set value Attribute for each radio button
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
             <input type="radio" id="optn1-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option A" value=a>
             <label for="optn1-${index}" class="me-1 p-1 rounded-1 label1 lb1">${label1 = array.slice(index - 1, index)[0].a
        }</label>
         </label>
         <label for="optn2-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb2" title="Option B">
             <input type="radio" id="optn2-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option B" value=b>
             <label for="optn2-${index}" class="me-1 p-1 rounded-1 d-block label2 lb2">${label2 = array.slice(index - 1, index)[0].b
        }</label>
         </label>
         <label for="optn3-${index}" class="d-flex mx-2 bg-white rounded-1 mt-2 lb3" title="Option C">
             <input type="radio" id="optn3-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option C" value=c>
             <label for="optn3-${index}" class="me-1 p-1 rounded-1 d-block label3 lb3">${label3 = array.slice(index - 1, index)[0].c
        }</label>
         </label>
         <label for="optn4-${index}" class="d-flex mx-2 bg-white rounded-1 my-2 lb4" title="Option D">
             <input type="radio" id="optn4-${index}" class="ms-2 inputValue inputValue1" name="op-${index}" title="Option D" value=d>
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




    })////////
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




    // Initial load
    loadBatch();







    // qstn1.textContent = array.slice(0, 1)[0].ask
    // inputValue[0].value = label1.textContent = array.slice(0, 1)[0].a
    // inputValue[1].value = label2.textContent = array.slice(0, 1)[0].b
    // inputValue[2].value = label3.textContent = array.slice(0, 1)[0].c
    // inputValue[3].value = label4.textContent = array.slice(0, 1)[0].d

    // ///////////
    // const prev = document.querySelector('.prev');
    // prev.disabled = true;
    // prev.addEventListener('click', () => {
    // if (qstNo.textContent > 1) {
    //     qstNo.textContent = +qstNo.textContent - 1;
    //     console.log(qstNo.textContent);
    //     /////////////////
    //     let m = qstNo.textContent - 1;

    //     console.log(m)
    //     qstn1.textContent = array.slice(m, m + 1)[0].ask
    //     inputValue[0].value = label1.textContent = array.slice(m, m + 1)[0].a
    //     inputValue[1].value = label2.textContent = array.slice(m, m + 1)[0].b
    //     inputValue[2].value = label3.textContent = array.slice(m, m + 1)[0].c
    //     inputValue[3].value = label4.textContent = array.slice(m, m + 1)[0].d




    //     }
    // })
    // /////// click next fireUP
    // const next = document.querySelector('.next');
    // const qstNo = document.querySelector('.qstNo');// qstions numbering
    // // for (let c = 0;) {


    // qstNo.textContent = 1;

    // ///////////////

    // next.addEventListener('click', () => {
    //     // lb1.style.display = "none";
    //     prev.disabled = false;
    //     //////
    //     if (qstNo.textContent < array.length) {
    //         qstNo.textContent = +qstNo.textContent + 1;
    //         // console.log(qstNo.textContent);
    //         /////////////////
    //         let m = qstNo.textContent - 1;
    //         m = +m;

    //         const radioA = document.createElement('input');
    //         const radioB = document.createElement('input');
    //         const radioC = document.createElement('input');
    //         const radioD = document.createElement('input');

    //         Object.assign(radioA, {
    //             id: 'opt1',
    //             type: "radio", className: "ms-2",
    //             name: "option", title: 'Option A'
    //         });

    //         // console.log(radioA.outerHTML);

    //         // inputValues.forEach(inputValue => {
    //         // inputValue[0].style.display = 'none';
    //         const lb1 = document.querySelector('.lb1')
    //         // lb1.prepend(radioA);

    //         // })

    //         // /////////
    //         // lb1.forEach(elb1 => {

    //         //     elb1.removeAttribute('for')
    //         //     elb1.setAttribute('for', `opt${m}`);

    //         //     console.log(elb1)

    //         // });

    //         // lb2.forEach(elb2 => {
    //         //     elb2.removeAttribute('for')

    //         //     elb2.setAttribute('for', `opt${m + 1}`);

    //         //     console.log(elb2)
    //         // });

    //         // lb3.forEach(elb3 => {
    //         //     elb3.removeAttribute('for')

    //         //     elb3.setAttribute('for', `opt${m + 2}`);

    //         //     console.log(elb3)

    //         // });

    //         // lb4.forEach(elb4 => {
    //         //     elb4.removeAttribute('for')

    //         //     elb4.setAttribute('for', `opt${m + 3}`);

    //         //     console.log(elb4)

    //         // });



    //         // /////////////
    //         // inputValue[0].removeAttribute('id')
    //         // inputValue[1].removeAttribute('id')
    //         // inputValue[2].removeAttribute('id')
    //         // inputValue[3].removeAttribute('id')

    //         // inputValue[0].id = `opt${m}`
    //         // inputValue[1].id = `opt${m + 1}`
    //         // inputValue[2].id = `opt${m + 2}`
    //         // inputValue[3].id = `opt${m + 3}`
    //         // ////////////
    //         // //////////
    //         // inputValues.forEach(
    //         //     inputValue => {

    //         //         inputValue.setAttribute('name', `optns${m}`)
    //         //         console.log(inputValue)
    //         //     }
    //         // )



    //         // console.log(m)
    //         qstn1.textContent = array.slice(m, m + 1)[0].ask
    //         inputValue[0].value = label1.textContent = array.slice(m, m + 1)[0].a
    //         inputValue[1].value = label2.textContent = array.slice(m, m + 1)[0].b
    //         inputValue[2].value = label3.textContent = array.slice(m, m + 1)[0].c
    //         inputValue[3].value = label4.textContent = array.slice(m, m + 1)[0].d


    //         //////
    //         if (console.log(qstn1.textContent == qtn[m].ask),
    //             console.log(inputValue[0].value = label1.textContent),
    //             console.log(inputValue[1].value = label2.textContent),
    //             console.log(inputValue[2].value = label3.textContent),
    //             console.log(inputValue[3].value = label4.textContent),
    //             console.log(array.slice(m, m + 1)[0].ans)) {
    //             // inputValue[0].checked;
    //             inputValue[1].checked;
    //             // inputValue[2].checked;
    //             // inputValue[3].checked;


    //         }
    //         else {

    //         }
    //         /////uncheck



    //     } else {
    //         // qstNo.textContent = "Finish";
    //         // qstNo.classList.add('text-danger');
    //     }







    // });


    // qstn2.textContent = array.slice(1, 2)[0].ask
    // inputValue[4].value = label21.textContent = array.slice(1, 2)[0].a
    // inputValue[5].value = label22.textContent = array.slice(1, 2)[0].b
    // inputValue[6].value = label23.textContent = array.slice(1, 2)[0].c
    // inputValue[7].value = label24.textContent = array.slice(1, 2)[0].d


    // qstn3.textContent = array.slice(2, 3)[0].ask;
    // inputValue[8].value = label31.textContent = array.slice(2, 3)[0].a
    // inputValue[9].value = label32.textContent = array.slice(2, 3)[0].b
    // inputValue[10].value = label33.textContent = array.slice(2, 3)[0].c
    // inputValue[11].value = label34.textContent = array.slice(2, 3)[0].d



    // qstn4.textContent = array.slice(3, 4)[0].ask;
    // inputValue[12].value = label41.textContent = array.slice(3, 4)[0].a
    // inputValue[13].value = label42.textContent = array.slice(3, 4)[0].b
    // inputValue[14].value = label43.textContent = array.slice(3, 4)[0].c
    // inputValue[15].value = label44.textContent = array.slice(3, 4)[0].d


    // qstn5.textContent = array.slice(4, 5)[0].ask;
    // inputValue[16].value = label51.textContent = array.slice(4, 5)[0].a
    // inputValue[17].value = label52.textContent = array.slice(4, 5)[0].b
    // inputValue[18].value = label53.textContent = array.slice(4, 5)[0].c
    // inputValue[19].value = label54.textContent = array.slice(4, 5)[0].d


    // qstn6.textContent = array.slice(5, 6)[0].ask;
    // inputValue[20].value = label61.textContent = array.slice(5, 6)[0].a
    // inputValue[21].value = label62.textContent = array.slice(5, 6)[0].b
    // inputValue[22].value = label63.textContent = array.slice(5, 6)[0].c
    // inputValue[23].value = label64.textContent = array.slice(5, 6)[0].d


    // qstn7.textContent = array.slice(6, 7)[0].ask;
    // inputValue[24].value = label71.textContent = array.slice(6, 7)[0].a
    // inputValue[25].value = label72.textContent = array.slice(6, 7)[0].b
    // inputValue[26].value = label73.textContent = array.slice(6, 7)[0].c
    // inputValue[27].value = label74.textContent = array.slice(6, 7)[0].d


    // qstn8.textContent = array.slice(7, 8)[0].ask;
    // inputValue[28].value = label81.textContent = array.slice(7, 8)[0].a
    // inputValue[29].value = label82.textContent = array.slice(7, 8)[0].b
    // inputValue[30].value = label83.textContent = array.slice(7, 8)[0].c
    // inputValue[31].value = label84.textContent = array.slice(7, 8)[0].d



    // qstn9.textContent = array.slice(8, 9)[0].ask;
    // inputValue[32].value = label91.textContent = array.slice(8, 9)[0].a
    // inputValue[33].value = label92.textContent = array.slice(8, 9)[0].b
    // inputValue[34].value = label93.textContent = array.slice(8, 9)[0].c
    // inputValue[35].value = label94.textContent = array.slice(8, 9)[0].d


    // qstn10.textContent = array.slice(9, 10)[0].ask;
    // inputValue[36].value = label101.textContent = array.slice(9, 10)[0].a
    // inputValue[37].value = label102.textContent = array.slice(9, 10)[0].b
    // inputValue[38].value = label103.textContent = array.slice(9, 10)[0].c
    // inputValue[39].value = label104.textContent = array.slice(9, 10)[0].d;


    // console.log(array[0].ask)

    // console.log(array.slice(9, 10)[0].ask)


    // inputValue[0].value = label1.textContent
    // console.log(inputValue[0].value)
    // console.log(inputValue[1].value)



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
    let duration = 1 * 60;








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
async function userNameLabel() {
    const dUserName = document.querySelector(".dUserName");
    const urljsonRes = await urljson();
    const urljsonResult = urljsonRes.getUserName;
    console.log(urljsonResult);
    // dUserName.textContent = await urljsonRes.getUserName;

    try {
        const userNameF = await fetch(urljsonResult, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        });
        const userNameRes = await userNameF.json();
    }
    catch (error) {
        console.log("server for getUserName failed")
    }
}
// userNameLabel();