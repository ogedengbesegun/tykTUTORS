





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






// for ease of use for other functions-------------------



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








//
hidden = document.querySelector(".hide");
if (hidden) {
    hidden.style.display = 'none';

};///hide the screenCover first

//////////////////////////////
// 1 set to display="none"
// document.addEventListener("DOMContentLoaded", function () {
let QuizQuestn = document.querySelectorAll(".QuizQuestn");
QuizQuestn.forEach((QuizQuestns) => {
    if (QuizQuestns) {
        QuizQuestns.addEventListener("click", function () {
            let url = "/allSubjects/tykTutors-Subjects.html";
            window.open(url, 'tykTutors-Subjects')
            window.close()// close it up

            // document.querySelector(".menuList").style.display = "none";
            // document.querySelector(".screenCover").style.display = "block";
            // screenCover.classList.remove('hide');
        });
    }
})

// });














// signAdmin
let adminSign = document.querySelector(".adminSign");


if (adminSign) {
    adminSign.addEventListener("click", () => {
        let adminURL = "/Qstn-Admin/admin.html";

        window.open(adminURL, "admin");
        window.close()
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
        let allsubURL = "/allSubjects/tykTutors-Subjects.html";
        window.open(allsubURL, "All-tykTutors-Subjects")
        window.location.reload();
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
        window.close()
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


console.log(window.innerWidth)
// const mapping = [1, 2, 3, 4, 5, 6, 20, 200]
// const changeMap = mapping.map((event) => {
//     return event.toString().padStart(6, "a")
// })
// console.log(mapping.map((event) => {
//     return event.toString().padStart(8, "f").concat("joinMe")
// },));
// console.log(changeMap);

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
            span.style.color = 'white';

        }
        else if (index === 1) {
            span.style.color = 'blue'
        }
        else {
            span.className = "text-success";
            span.classList.add("opacity-100");
        }

        copyme.appendChild(span);
        copyme.appendChild(document.createTextNode(" "));
        document.getElementById('origin').style.display = "none";
    })



}
const details = (index) => `<details class='mx-auto 
    w-50 text-danger mb-1 p-2'><summary class='ms-1 h6'>
    Week ${index}...</summary>
    We cannot all do great things but greats things can always come to us all
    </details>`;
let details3 = document.getElementById('details3');
let details1 = document.getElementById('details1');

// details1.style.marginBottom='15px'
detail()
function detail() {
    let pgraph = document.createElement('p')
    pgraph.className = `text-danger h4 p-1 my-2
    text-center cursor border border-1 border-dark rounded-2`;
    pgraph.innerText = 'Greater things we "ALL" can Do.';
    if (details1) {
        details1.append(pgraph);

    }

    pgraph.addEventListener('mouseover', () => {
        if (pgraph.className.includes('text-danger')) {
            pgraph.classList.remove('text-danger')
        }
        // pgraph.classList.remove('text-danger')
        pgraph.style.color = 'green'
    });
    pgraph.addEventListener('mouseout', () => {
        pgraph.classList.add('text-danger')

    })


}

// for (let i = 2; i < 11; i++) {
//     if (details3) {
//         details3.insertAdjacentHTML('beforebegin', details(i))
//         // details(4).style.color = 'yellow'
//         details3.classList.remove("text-danger");
//     }


// }

let correct = []
let fals = []
let summary1 = document.querySelector(".summary1")
let summary2 = document.querySelector(".summary2")

// summary1.addEventListener('click', () => {
//     correct.push(1)
//     console.log(correct)
// })

// summary2.addEventListener('click', () => {
//     fals.push(1)

//     console.log(fals)
// })

eachbtn = document.querySelectorAll('.eachbtn');
eachbtn.forEach(eachbt => {
    eachbt.addEventListener('click', (event) => {
        // console.log(event.target.innerText)
        // event.target
        document.querySelector('.menuList').style.display = 'none';

    })
})












// JQuery CODES for ogd.js
$(document).ready(function () {
    // $("html,body").animate({ scrollButtom: 
    // $(".header").hide() });





    $(".navBarIcon").click(() => {
        $(".menuList").show(200)

    });


    $('.menuList').click(function (event) {
        // hide nav element for me
        // $('.menuList').hide(200);
        $(event.target.this).hide();
        // $(".contactsok").click();


    });

    $(".icon-menuList, .icon-close").click(function () {
        $(".menuList").hide();

    });

    // $(".contacts").click(function () {
    //     $(".contactMe").css( "z-index", 9999 )
    // })



    $(".picture").click(function () {
        $("html,body").animate({
            scrollTop: $(".sectionThree").offset().top

        }, "slow");
    });


    $(".viewMore, .schools").click(function () {
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