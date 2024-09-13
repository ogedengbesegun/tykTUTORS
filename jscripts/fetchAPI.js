getmyText("fetch_info.txt");
async function getmyText(file) {

    let x = await fetch(file)
    let y = await x.text()

    // console.log(y);
};



getmyJSON("subjectsJSON/english.json");
async function getmyJSON(file) {
    let x = await fetch(file)
    let y = await x.json()

    for (let i = 0; i < y.length; i++) {
    console.log(y[i].a);

    }

};