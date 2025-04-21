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
nameDB.addEventListener("click", () => {

    async function Createdb() {


        const inputDB = document.querySelector(".inputDB").value;
        const cleanInput = inputDB.replace(/\s+/g, '')
        try {
            const geturl = await getjson()
            const mydburl = geturl.createDB
            //console.log()
            console.log(mydburl)
            const getdbUrl = await fetch(mydburl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inputDB: cleanInput })
            })
            let result = await getdbUrl.json()
            if (result) return alert("Database Created Successfully")
        } catch (error) {
            console.log(" create DB request Failed", error)
        }



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