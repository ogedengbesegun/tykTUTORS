// document.querySelector(".start").disabled = true;
document.querySelector(".start").disabled = true;

let Nohide = document.querySelector(".No-hide");
Nohide.style.display = "none";

// turn hide4login class to Array-like object and hide ALL

let hide4login = document.querySelectorAll(".hide4login")

let Arrayhide4login = Array.from(hide4login);

hide4login.forEach(eachhide4login => {
    eachhide4login.style.display = "none";
});





// set the login class input attribute of maxlength t0 9 for security reasons
document.querySelector(".login #logid").setAttribute("maxlength", 9);
document.querySelector(".login #passwd").setAttribute("maxlength", 9)




var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = () => {



    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:

        console.log(xhttp1.responseText);

        // var response1 = JSON.parse(xhttp1.responseText)



        // console.log(class1AID)











    }



}

xhttp1.open("GET", "/subjectsJSON/studentLogin.json", true);
xhttp1.send();




let logid = document.querySelector('#logid')


let passwd = document.querySelector('#passwd')

function Login() {

    // let attribute = document.querySelector(".start")
    // attribute.setAttribute("title", "Click To Start, 'GoodLuck!!!'")

    let invalidmsg = document.querySelector(".invalidmsg");
    let okclose = document.querySelector(".okclose");
    // -------------------------------------------------
    var response1 = JSON.parse(xhttp1.responseText)

    for (let i = 0; i < response1.class1A.length; i++) {

        // ------------------------------------

        if ((logid.value === `${response1.class1A[i].ID}`) && (passwd.value === `${response1.class1A[i].password}`)
        ) {



            // the attributes needs to change as login becomes successful
            let attribute = document.querySelector(".start")

            attribute.setAttribute("title", "Click To Start, 'GoodLuck!!!'")


            // alert("The login is successful")
            let profilePic = document.querySelector(".img001")

            profilePic.setAttribute("src", `${response1.class1A[i].picture}`)


            // These events are fired after the login is done
            document.querySelector(".start").disabled = false;
            // ----------------------------------------------

            Arrayhide4login[0].style.display = "block";



            Nohide.style.display = "block"

            document.querySelector(".login").style.display = "none"

            let reportName = document.querySelector(".reportName")

            reportName.textContent = "Name: " + " " + (response1.class1A[i].firstName + " " + response1.class1A[i].lastName).toUpperCase();


            // the dialog is secretly opened, so close it up 
            invalidmsg.close();


            break
        }
        else {
            invalidmsg.showModal();

            okclose.addEventListener("click", () => {
                invalidmsg.close();
                logid.value = ""
                passwd.value = ""
                // window.location.reload()
            })
        }



    }


}












// Jquery 

$(document).ready(function () {
    // buttonX close
    $(".buttonX").click(function () {
        $(".scoreSheetHead").hide();
        window.location.reload();
    });

    $(".buttonX").mouseenter(function () {
        $(".labelClose").show();

    });
    $(".buttonX").mouseleave(function () {
        $(".labelClose").hide();

    })




    $(".hide").hide();


    $(".next1").click(function () {
        // $(".hide4login:nth-child(1)").show();

        $(".hide4login:nth-child(2)").show();
        $(".No-hide").hide()
        $(".present-Qst").val() = 1;

    })


    $(".next2").click(function () {
        $(".hide4login:nth-child(3)").show();
        $(".hide4login:nth-child(2)").hide();

    })
    $(".next3").click(function () {
        $(".hide4login:nth-child(4)").show();
        $(".hide4login:nth-child(3)").hide();

    })
    $(".next4").click(function () {
        $(".hide4login:nth-child(5)").show();
        $(".hide4login:nth-child(4)").hide();

    })
    $(".next5").click(function () {
        $(".hide4login:nth-child(6)").show();
        $(".hide4login:nth-child(5)").hide();

    })
    $(".next6").click(function () {
        $(".hide4login:nth-child(7)").show();
        $(".hide4login:nth-child(6)").hide();

    })
    $(".next7").click(function () {
        $(".hide4login:nth-child(8)").show();
        $(".hide4login:nth-child(7)").hide();

    })
    $(".next8").click(function () {
        $(".hide4login:nth-child(9)").show();
        $(".hide4login:nth-child(8)").hide();

    })

    $(".next9").click(function () {
        $(".hide4login:nth-child(10)").show();
        $(".hide4login:nth-child(9)").hide();
        $(".submit").show()
    });


    // back buttons commands i can runn more efficient codes than this

    $(".back2").click(function () {
        $(".hide4login:nth-child(2)").hide();
        $(".No-hide").show();

    })

    $(".back3").click(function () {
        $(".hide4login:nth-child(3)").hide();
        $(".hide4login:nth-child(2)").show();
    })


    $(".back4").click(function () {
        $(".hide4login:nth-child(4)").hide();
        $(".hide4login:nth-child(3)").show();
    })


    $(".back5").click(function () {
        $(".hide4login:nth-child(5)").hide();
        $(".hide4login:nth-child(4)").show();
    })


    $(".back6").click(function () {
        $(".hide4login:nth-child(6)").hide();
        $(".hide4login:nth-child(5)").show();
    })

    $(".back7").click(function () {
        $(".hide4login:nth-child(7)").hide();
        $(".hide4login:nth-child(6)").show();
    })


    $(".back8").click(function () {
        $(".hide4login:nth-child(8)").hide();
        $(".hide4login:nth-child(7)").show();
    })

    $(".back9").click(function () {
        $(".hide4login:nth-child(9)").hide();
        $(".hide4login:nth-child(8)").show();
    })




    $(".back10").click(function () {
        $(".hide4login:nth-child(10)").hide();
        $(".hide4login:nth-child(9)").show();
        $(".submit").hide();
    })


})


// let arraysam = ['a', 'b', 'c', 'd', 'e', 'f']
// for (let i = 0; i < arraysam.length; i++) {
//     let resu = arraysam[i]

//     if ("m") { console.log(resu+' hybrid') }
// }



