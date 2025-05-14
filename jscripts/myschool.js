import { array, item, spinBanner, dialogObj, dialog, delay } from './freeAgents.js';
// const url = import.meta.env.VITE_API_login4sch;
// dotenv.config();

////////
async function getjson() {
    const jsons = await fetch('/url.json');
    const jsonResponse = await jsons.json()
    console.log(jsonResponse)
    return jsonResponse
}
getjson()
////variable dc
const nameDB = document.querySelector('.nameDB');
const inputDB = document.querySelector(".inputDB");



////////////
// nameDB.setAttribute('title', 'Button Disabled')

if (nameDB.setAttribute('disabled', true)) {
    nameDB.setAttribute('title', 'Button Disabled')

} else {
    nameDB.setAttribute('title', 'Create Database')
}
///////////////////


nameDB.addEventListener("click", () => {


});

//////////panel && menubtn
const menubtn = document.querySelector('.menubtn');
const panel = document.querySelector('.panel');
panel.style.display = 'none'

//onclick menubtn
menubtn.addEventListener('click', () => {
    panel.style.display = "block"
})
const rmpanel = document.querySelector('.rmpanel');
rmpanel.addEventListener('click', () => {
    panel.style.display = 'none';
})
/////////////
// window with event handler to screen resizing
// window.addEventListener('resize', () => {
//     if (window.innerWidth > 786) {
//         panel.style.display = 'none';
//     }
// })

async function updateSchR() {
    const dbName = document.querySelector('#dbName').value
    const geturl = await getjson();

    const updatef = await fetch(geturl.updadteschN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dbName: dbName })
    })
    const respon = await updatef.json()

}
////////////

/////validate Email
// validateEmail() school Email
// const validateEbtn = document.querySelector('#validateEbtn');

async function validateEmail() {
    spinBanner.showModal()//modal
    //////
    await delay(3000)///cause some delay
    ///////////
    const schoolE = document.querySelector('#schoolE').value;
    const dbName = document.querySelector('#dbName').value
    try {
        const geturl = await getjson()
        console.log(geturl.validateEmail)
        const valMail = await fetch(geturl.validateEmail,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ schoolE: schoolE, dbName: dbName })
            }
        );
        const response = await valMail.json();
        ///////
        if (response.success) {
            dialog()
            document.querySelector('.dialogMsg').innerHTML = response.message;

            // alert(response.message);

        }
        else {
            dialog()
            document.querySelector('.dialogMsg').innerHTML = response.message;
            // alert(response.message)
            document.querySelector('#schoolE').value = '';
            document.querySelector('#dbName').value = '';
        }
    } catch (error) {
        dialog();
        document.querySelector('.dialogMsg').innerHTML = `Check your Network or ${error.message}`

    }
    finally {
        spinBanner.close();
    }
}
///////validation btn
const validateEbtn = document.querySelector('#validateEbtn');
validateEbtn.addEventListener('click', () => {
    // const dbName = document.querySelector('#dbName').value
    if (validateEmail()) {
        nameDB.removeAttribute('disabled', true)

    }

})
///////check ifexisting

////////// to upperCase
toupperCase()
function toupperCase() {
    const dbName = document.querySelector('#dbName');
    dbName.addEventListener('input', () => {
        dbName.value = dbName.value.toUpperCase()

    })

}
////////////////////////
///////////////

