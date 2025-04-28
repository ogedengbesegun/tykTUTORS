async function getjson() {
    const jsons = await fetch("/url.json")
    const jsonResponse = await jsons.json()
    console.log(jsonResponse)
    return jsonResponse
}
// getjson()
////variable dc
const nameDB = document.querySelector('.nameDB');
const inputDB = document.querySelector(".inputDB");

function spinn() {
    const spin = document.createElement('span');
    spin.className = `fas fa-spinner fa-spin ms-2`;
    spin.style.color = "lightgreen";
    nameDB.append(spin);
}

////////////
nameDB.setAttribute('disabled', true);
nameDB.addEventListener("click", () => {

    async function Createdb() {


        const inputDB = document.querySelector(".inputDB").value;
        const dbName = document.querySelector("#dbName").value;

        const cleanInput = inputDB.replace(/\s+/g, '')
        try {
            const geturl = await getjson()
            const mydburl = geturl.createDB
            //console.log()
            console.log(mydburl)
            const getdbUrl = await fetch(mydburl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inputDB: cleanInput, dbName: dbName })
            })
            let result = await getdbUrl.json();
            return result
        } catch (error) {
            console.log(" create DB request Failed", error)
        }

        if (await result) { alert("Database Created Successfully") }


    }
    if (Createdb()) {
        const inter = setTimeout(() => {
            spinn();
        }, 300)

        // nameDB.textContent = 'Registring'
        setTimeout(() => {
            inputDB.value = '';
            clearTimeout(inter)

        }, 3000)
        // }
    }
}, { once: true });

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

async function validateEmail(validateEbtn) {
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
        if (response.success) {
            alert(response.message);

        }
        else {
            alert(response.message)
            validateEbtn.preventDefault()
        }
    } catch (error) {

    }

    // if (response.success) {
    //     alert(response.message)
    // } else { alert(response.message) }
    ////if that happens

}
///////validation btn
const validateEbtn = document.querySelector('#validateEbtn');
validateEbtn.addEventListener('click', () => {
    // const dbName = document.querySelector('#dbName').value
   if( validateEmail())
    // if (dbName === '') {
    //     e.preventDefault()
    //     alert("Please, provide School Name")
    // }
    // else if (validateEmail()) {
    nameDB.removeAttribute('disabled', true)
    //     //     alert("Email is validated, click Register Button")

    // }


})
///////check ifexisting
const schoolE = document.querySelector('#schoolE');

schoolE.addEventListener('focusout', () => {
    // checkEmail2()

})
////////

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

////////checkEmail to validate
async function checkEmail2() {
    const schoolE = document.querySelector('#schoolE').value;

    const geturl = await getjson()
    console.log(geturl.checkschoolE)
    try {
        const valMail = await fetch(geturl.checkschoolE,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ schoolE: schoolE })
            }
        );
        const response = valMail.json();
        ////if that happens
        if (response.success) {
            alert(response.message)
            // const schoolE = document.querySelector('#schoolE');
        }
        else {
            // alert(response.message)
        }
    } catch (error) {

    }

}
