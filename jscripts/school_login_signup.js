import { spinBanner, dialogObj, dialog, delay, confirmDialog, dialogInput } from './freeAgents.js';
// import { stringify } from "path-to-regexp";
// confirmDialog.showModal();

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

window.addEventListener('load', () => {
    page2.style.display = "none"
});


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


//url
// url() getting all url
async function url() {
    const geturl = await fetch('/url.json');
    const okurl = await geturl.json();
    // console.log(okurl.submitsignup)
    return okurl
}
/////////////////////

async function fSubmitsignup(e) {

    /////
    spinBanner.showModal()

    await delay(3000);// cause delay 
    //
    //////
    const signupE = document.querySelector('#signupE').value;
    const signupP = document.querySelector('#signupP').value;
    ///////
    const getsubmitsignup = await url()

    const oksubmitsignup = await getsubmitsignup.submitsignup
    console.log(oksubmitsignup);
    ////////////////////////

    // const signupE = document.querySelector('#signupE').value;
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
            document.querySelector('.dialogMsg').textContent = `${signupE}` +
                dialogObj.emailcreated + ` Please Login to Continue`;

            document.querySelector('#signupP').value = '';
            document.querySelector('#signupE').value = '';
            // }, 1500)
            // }



        }


    } catch (error) {
        dialog()
        document.querySelector('.dialogMsg').textContent = `Failure to send request and Sign Up or ${error.message}`;

        // console.log("Failure to send request and Sign Up", error)
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


    // Validate inputs
    if (!Regex.test(signupP.value) || !regexx.test(signupE.value)) {
        e.preventDefault();
        dialog();

        const dialogMsg = document.querySelector('.dialogMsg');
        if (dialogMsg) {
            dialogMsg.textContent = dialogObj.checkError;
        }

        return;
    }
    else {

        // Yes button action
        confirmDialog.showModal();
        const confirmDialogMsg = document.querySelector('.confirmDialogMsg');
        confirmDialogMsg.textContent = `Are you sure you want to register the email: ${signupE.value}?`;


        // Add Yes/No button listeners (run once)
        const noBtn = document.querySelector('.confirmDialogNo');
        const yesBtn = document.querySelector('.confirmDialogYes');
        const signupForm = document.querySelector('.signupForm');
        function yesFtn() {

            yesBtn.addEventListener('click', () => {
                fSubmitsignup(e);
                confirmDialog.close();
            });
            // }
        }

        function noFtn() {

            noBtn?.addEventListener('click', () => {

                signupForm.reset()


                confirmDialog.close();
                // confirmDialog.remove()

                location.reload();
            });
        }
        // Call the functions
        // if () {
        yesFtn();

        // } else {
        noFtn();
        // }
    }
    // else {

    // }


});

////////submitsignup//////////
////////
async function checkEmail() {
    const signupE = document.querySelector('#signupE');

    if (signupE.value === '') {
        dialog();
        document.querySelector('.dialogMsg').textContent = `Please Enter a Valid Email Address`;
        return; //meaning dont proceed further
    } else {
        spinBanner.showModal()

        await delay(3000);/// to delay 3000;
    }
    ///asynchronous ()
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
        dialog();
        document.querySelector('.dialogMsg').textContent = `Check your Internet Connection or ${error.message}`
        signupE.value = ''


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
/////////////////////


/////////////////////////////
// schoollogin()
async function schoollogin() {

    ///////////////////
    const loginP = document.querySelector('#loginP').value;
    const loginE = document.querySelector('#loginE').value;
    if (loginE === '' || loginP === '') {
        dialog()
        document.querySelector('.dialogMsg').textContent = `Please Enter Email and Password`;
        return
    } else {
        // roling();
        spinBanner.showModal()



        await delay(3000)
        //cause delay
    };
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
        document.querySelector('.dialogMsg').textContent = `Check Internet Connection or ${error.message}`
        // console.log('failure to login', error)
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
            <span class='fas fa-times-circle fs-3 mt-2 text-danger btn cursor mx-auto closebtn border-1' title='Close'></span>
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
               <button type='button' title='Get Code' class='btn btn-primary me-1 getCode'>Get Code</button>
                <button type="button" title="Change Password" class="btn btn-secondary">Change
                Password</button>
            </div>
        </div>`;
document.body.append(changePW);

const forgotPwd = document.querySelector('.forgotPwd');

///click the forgot btn callback

forgotPwd.addEventListener('click', () => {
    changePW.showModal();
    const closebtn = document.querySelector('.closebtn');


    // changePW.remove();
})

const closebtn = document.getElementsByClassName('closebtn')[0];
closebtn.style.transition = 'all 0.5s ease-in-out';
closebtn.style.transform = 'scale(0.98)';

//closebtn closeModal
closebtn.addEventListener('click', () => {
    changePW.close();
    // changePW.remove();
})


//mouseover
closebtn.addEventListener('mouseover', () => {
    closebtn.classList.add('border-danger');

});
//mouseout
closebtn.addEventListener('mouseout', () => {
    closebtn.classList.remove('border-danger');

});
//////https://api.sendgrid.com/v3/

async function requestGridEmail() {
    const changeE = document.querySelector('#changeE');
    if (changeE.value === '') {
        dialog();
        document.querySelector('.dialogMsg').textContent = `Please Enter a Valid Email Address`;
        return; //meaning dont proceed further
    } else {
        spinBanner.showModal()

        await delay(3000);/// to delay 3000;
    }
    try {

        const fsendGrid = await url();
        const sendGridrequest = await fetch(fsendGrid.sendGridEmail, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ changeE: changeE.value })
        });

        sendGridrequest = await fsendGrid.json();
        if (sendGridrequest) {
            dialog();
            document.querySelector('.dialogMsg').textContent = `Code Sent to ${changeE.value} Successfully`;
            setTimeout(() => {
                changeE.value = '';
                changePW.close();
            }, 2000);

        } else {
            dialog();
            document.querySelector('.dialogMsg').textContent = `Server Error, Failure to send Code`;
        }
    }
    catch (error) {
        dialog();
        document.querySelector('.dialogMsg').textContent = `Check your Internet Connection`;
        changeE.value = '';
    }
    finally {
        spinBanner.close();
    }
}
////on click getCodebtn
const getCode = document.querySelector('.getCode');
getCode.addEventListener('click', () => {
    requestGridEmail();
    const changeE = document.querySelector('#changeE');
    changeE.value = '';
    changePW.close();
    // changePW.remove();
})