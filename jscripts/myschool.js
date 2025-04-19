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

        } catch (error) {
            console.log(" create DB request Failed", error)
        }



    }
    if (Createdb()) {
        alert(`Your DataBase Name ${inputDB.replace(/\s+/g,'')} created Succussfully`);
        if (alert(),1) {
            cleanInput = '';

        }
    }
});

