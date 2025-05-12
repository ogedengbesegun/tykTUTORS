// import { stringify } from "path-to-regexp";


const eyeblind = document.querySelector('.eyeblind');
const eyeblind2 = document.querySelector('.eyeblind2');
///////////////
const signupP = document.querySelector('#signupP');
const signupE = document.querySelector('#signupE');
/////login
const loginP = document.querySelector('#loginP');
const loginE = document.querySelector('#loginE');
// ///////

// signupP attribute min=6 & maxlength to 18//////////////////
signupP.setAttribute("maxlength", "18");
signupP.setAttribute("minlength", "6");

//////////////////////////////////////

eyeblind.addEventListener('click', () => {
    if (eyeblind.classList.contains("fa-eye-slash")) {
        eyeblind.classList.remove("fa-eye-slash")
        eyeblind.classList.add("fa-eye");
        signupP.setAttribute("type", "text");

    }
    else {
        eyeblind.classList.add("fa-eye-slash")
        eyeblind.classList.remove("fa-eye")

        signupP.setAttribute("type", "password");

    }

});
//////////////////////////////////////////////////
//////////////////////////////////////

eyeblind2.addEventListener('click', () => {
    if (eyeblind2.classList.contains("fa-eye-slash")) {
        eyeblind2.classList.remove("fa-eye-slash")
        eyeblind2.classList.add("fa-eye");
        loginP.setAttribute("type", "text");

    }
    else {
        eyeblind2.classList.add("fa-eye-slash")
        eyeblind2.classList.remove("fa-eye")

        loginP.setAttribute("type", "password");

    }

});
//////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
const onpage1 = document.querySelectorAll('.onpage1');
const onpage2 = document.querySelectorAll('.onpage2');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

page2.style.display = "none"

onpage1.forEach(onpage => {

    //i 've 2 onpage1 let each of them do this
    onpage.addEventListener('click', () => {
        page2.style.display = "block";
        page1.style.display = "none"
    })
    ////
})
onpage2.forEach(onpage_2 => {
    onpage_2.addEventListener('click', () => {
        page2.style.display = "none";
        page1.style.display = "block"
    });
});

//////////////////signupE and validation
///////infrmation banner Dialog//////
const dialogObj = {
    checkError: `Error! Check your Email Address or Password
     Use at least one Uppercase, Lowercase, Digit and 
     Special Characters e.g Az 09 @ $ & ! ?`,
    emailAlreadyExist: `  Already Exist!!! Check Emaill Address.`,
    emailcreated: ` , is Created Successfully`,
    spinner: `<i class='fas fa-spin fa-spinner fs-1 text-success'></>`,
    Loading: 'Loading...',
    checking: `Checking...`,
    email: `<span class='fas fa-envelope fs-1'></span`,
    atom: `<span class='fas fa-atom fa-spin fs-1'></span>`,
    fan: `<span class='fas fa-fan fa-spin fs-1'></span>`,
    recycle: `<span class='fas fa-recycle fa-spin fs-1'></span>`,
    cog: `<span class='fas fa-cog fa-spin fs-1'></span>`,
    sync: `<span class='fas fa-sync fa-spin fs-1'></span>`,
    compact_disc: `<span class='fas fa-compact-disc fa-spin fs-1'></span>`,
    circle_notch: `<span class='fas fa-circle-notch fa-spin fs-1'></span>`,
    yin_yang: `<span class='fas fa-yin-yang fa-spin fs-1'></span>`
}
// dialog()
function dialog() {
    const infoBanner = document.createElement('dialog');
    infoBanner.className = 'mt-6 mx-auto border-0 rounded-1 msgBanner'
    infoBanner.innerHTML = `<h2 class="text-success text-center mt-2">Attention <span class="fas fa-warning text-danger"></span></h2>
     <p class="p-2 text-center w-75 mx-auto dialogMsg">
   
     </p>
     <button class="btn btn-secondary d-block mx-auto mb-2 close ">Close</button>`

    document.body.append(infoBanner);
    infoBanner.showModal()


    ///////////closex




    closex();
    function closex() {
        const close = document.getElementsByClassName('close')[0];

        close.addEventListener('click', () => {
            infoBanner.close()
            infoBanner.remove(); // Optional: clean up after closing


        })
    }



};

////////////dialog/////

//rolling()
// function roling() {

//////spinBanner()
const spinBanner = document.createElement('dialog');
spinBanner.className = 'mt-6 mx-auto border-0 rounded-1 msgBanner'
spinBanner.innerHTML = `<h2 class="text-success text-center mt-2 spinBannerHeader">Loading... ${dialogObj.fan}</h2>
     <p class="p-2 text-center w-75 mx-auto spinText text-success">
     ${dialogObj.circle_notch}</p>
    `

document.body.append(spinBanner);
// spinBanner.showModal()
// }
///spinner


//url
// url() getting all url
async function url() {
    const geturl = await fetch('/url.json');
    const okurl = await geturl.json();
    // console.log(okurl.submitsignup)
    return okurl
}
/////////////////////

async function fSubmitsignup() {
    /////
    spinBanner.showModal()

    await delay(3000);// cause delay 

    const getsubmitsignup = await url()

    const oksubmitsignup = await getsubmitsignup.submitsignup
    console.log(oksubmitsignup);
    ////////////////////////

    const signupP = document.querySelector('#signupP').value;
    const signupE = document.querySelector('#signupE').value;
    //////////
    try {


        const submitBtn = await fetch(oksubmitsignup,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ signupE: signupE, signupP: signupP })
            });

        const Respo = await submitBtn.json();
        if (Respo) {
            // if () {
            // setTimeout(() => {
            dialog()
            document.querySelector('.dialogMsg').textContent = `${signupE}` + dialogObj.emailcreated;

            document.querySelector('#signupP').value = '';
            document.querySelector('#signupE').value = '';
            // }, 1500)
            // }



        }


    } catch (error) {
        console.log("Failure to send request and Sign Up", error)
    }
    finally {
        spinBanner.close();
        // spinBanner.remove();
    }
}
//////////


//submitsignup
const submitsignup = document.querySelector('.submitsignup');
/////////////////
const regexx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//email
const Regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$&!?])[A-Za-z\d@$&!?]+$/;//password
submitsignup.addEventListener('click', (e) => {

    if (Regex.test(signupP.value) === false || regexx.test(signupE.value) === false) {


        e.preventDefault();
        dialog();


        document.querySelector('.dialogMsg').textContent = dialogObj.checkError;






    }


    else {
        fSubmitsignup()



    }


});

////////submitsignup//////////
////////
async function checkEmail() {
    spinBanner.showModal()

    await delay(3000);/// to delay 3000;
    try {
        const signupE = document.querySelector('#signupE').value;

        const geturl = await url()
        console.log(geturl.checksignupE)
        const valMail = await fetch(geturl.checksignupE,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ signupE: signupE })
            }
        );
        const response = await valMail.json();
        ////if that happens
        if (response) {
            const signupE = document.querySelector('#signupE');

            //callback ()
            dialog();

            //dialogMSg
            document.querySelector('.dialogMsg').textContent = `${signupE.value}` + dialogObj.emailAlreadyExist;

            signupE.value = '';
        } else if (!response) {
            dialog();
            document.querySelector('.dialogMsg').textContent = `Email is Available for use`;
        }
    } catch (error) {
        //allow the text back to statusco

        if (response.success === false) {
            dialog();
            document.querySelector('.dialogMsg').textContent = response.message;
        }

    }
    finally {
        spinBanner.close();
    }
};//////
//////////////////
////on focus out
signupE.addEventListener('focusout', () => {
    checkEmail()

});




async function delay(m) {
    //  const delay = (m) =>
    new Promise((resolve) =>
        setTimeout(resolve, m)

    )

}

//////////////////////////////
/////////////////////////////
// schoollogin()
async function schoollogin() {
    // roling();
    spinBanner.showModal()



    await delay(3000)



    ///////////////////
    const loginP = document.querySelector('#loginP').value;
    const loginE = document.querySelector('#loginE').value;
    try {
        const geturl = await url()
        const schlogin = geturl.login4sch
        console.log(schlogin)
        const schloginf = await fetch(schlogin, {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ loginP: loginP, loginE: loginE })
        })
        const respon = await schloginf.json()
        if (respon.success === true) {
            dialog();
            document.querySelector('.dialogMsg').textContent = respon.message
            document.querySelector('.close').addEventListener('click', () => {
                window.open('/html/myschool.html', '_blank');
                const loginP = document.querySelector('#loginP');
                loginP.value = ''

                // setTimeout(() => {
                //     window.close()
                // }, 2000);
            })

        }
        else {
            dialog()
            document.querySelector('.dialogMsg').textContent = respon.message
            /// clear the input fields
            document.querySelector('#loginP').value = '';
            document.querySelector('#loginE').value = ''
        }
    } catch (error) {
        dialog()
        document.querySelector('.dialogMsg').textContent = `Internet Error or ${error}`
        console.log('failure to login', error)
    }
    finally {

        spinBanner.close()

    }
}
//////////
///submitlogiin btn
const submitlogin = document.querySelector('.submitlogin');
submitlogin.addEventListener('click', () => {
    schoollogin()
});

//////FORGOT PASSWORD///////////
const changePW = document.createElement('dialog');

changePW.className = ` forgotPwBanner mx-auto mt-4 p-2 border-0 rounded-1`;
changePW.innerHTML = ` 
            <span class='fas fa-times-circle fs-3 mt-2 text-danger btn cursor mx-auto closebtn' title='Close'></span>
                     <div class=" mx-auto mt-5 pt-1">
            <h3 class="text-success text-center text-decoration-underline">forgot password?</h3>
          <h4 class='text-center text-danger'>Instruction:</h4>
            <p class=' text-center px-2'>1. Click the Get Code Button to have codes sent to your Registered Email.</p>
            <p class='text-center px-2'>2. Enter the Code and ckick Change Password Button</p>
            <div class="d-grid mx-auto my-4 px-2">
                
                <input type="email" name="changeE" id="changeE" placeholder="Enter Email"
                    class="p-2 border no-outline">
                <input type="text" name="twiloTx" id="twiloTx" class="no-outline border mt-1 p-2" placeholder="Enter Code">
            </div>
           <div class='d-flex justify-content-center mb-2'> 
               <button type='button' title='Get Code' class='btn btn-primary me-1'>Get Code</button>
                <button type="button" title="Change Password" class="btn btn-secondary">Change
                Password</button>
            </div>
        </div>`;
document.body.append(changePW);

const forgotPwd = document.querySelector('.forgotPwd');

///click the forgot btn callback

forgotPwd.addEventListener('click', () => {
    changePW.showModal();

})

const closebtn = document.getElementsByClassName('closebtn')[0];
closebtn.addEventListener('click', () => {
    changePW.close();
    // changePW.remove();
})
// function showM() {
//     changePW.showModal()
// };
// showM()