
// const array = [2, 3, 4, 5];
// let item =
//     array.map((item) => {
//         item = item * 3;

//         console.log(item);
//         return item;
//     }).find(item => item === 9);

// console.log(item)
//2
const dialogObj = {
    checkError: `Error! Check your Email Address or Password
     Use at least one Uppercase, Lowercase, Digit and 
     Special Characters e.g Az 09 @ $ & ! ?`,
    emailAlreadyExist: `  Already Exist!!! Check Emaill Address.`,
    emailcreated: ` , is Created Successfully`,
    spinner: `<i class='fas fa-spin fa-spinner fs-1 text-success'><i/>`,
    Loading: 'Loading...',
    checking: `Checking...`,
    movingLeaf: `<span class='fas fa-leaf fa-spin fs-5 text-light leaf'></span>`,
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
//3
const spinBanner = document.createElement('dialog');
spinBanner.className = 'mt-6 mx-auto border-0 rounded-1 msgBanner'
spinBanner.innerHTML = `<h2 class="text-success text-center mt-2 spinBannerHeader">Loading... ${dialogObj.fan}</h2>
     <p class="p-2 text-center w-75 mx-auto spinText text-success">
     we keep ${dialogObj.movingLeaf} you moving</p>
    `

document.body.append(spinBanner);


//4
function dialog() {
    const infoBanner = document.createElement('dialog');
    infoBanner.className = 'mt-6 mx-auto border-0 rounded-1 msgBanner'
    infoBanner.innerHTML = `<h2 class="text-success text-center mt-2 text-decoration-underline">Attention <span class="fas fa-warning text-danger"></span></h2>
     <p class="p-2 text-center mx-auto dialogMsg">
   
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

///5
async function delay(m) {
    //  const delay = (m) =>
    new Promise((resolve) =>
        setTimeout(resolve, m)

    )

}



///6confirm dialog
const confirmDialog = document.createElement('dialog');
confirmDialog.className = 'mt-6 mx-auto border-0 rounded-1 overflow-hidden msgBanner'
confirmDialog.innerHTML = `<h2 class="text-success text-center mt-2">Attention <span class="fas fa-warning text-danger"></span></h2>
     <p class="p-2 text-center mx-2 confirmDialogMsg">
     
     </p>
    <div class='d-flex justify-content-center'> <button class="btn btn-success d-block w-25  mb-2 confirmDialogYes">Yes</button>
    <button class="btn btn-secondary d-block w-25 ms-1 mb-2 confirmDialogNo" > No</button > 
    </div>`

document.body.append(confirmDialog);
// confirmDialog.showModal();


//dialogInput
const dialogInput = document.createElement('dialog');
dialogInput.className = `border-0 mt-7 rounded-2 bg-light mx-auto dialogContainer`;
// dialogObj.email;
dialogInput.innerHTML = `<i class='fas fa-times-circle btn btn-light fs-4
text-danger border d-block w-25 mx-auto mb-2 closeup' title='Close'></i>
<h3 class='text-success text-center'>tyktutor says... <span class='fas fa-envelope text-info'></span></h3>
<input type='email' id='viewDBemail' title='Enter School Registered Email ' class='text-center border p-2 mx-auto w-100 
no-outline ' required autocomplete='on' 
placeholder='Enter Registered Email'>
<button type='button' class='btn btn-light border mt-2 d-block fw-bold
 w-50 mx-auto text-success' title='Click to View School DataBase Name'>Ok</button>`
// confirmDialog.showModal();   
document.body.append(dialogInput);
// dialogInput.showModal()
///dialogInput
///color
const color = {
    green: '#009900',
    clay: '#ff8000',
    blue: '#0000ff',
    lightgreen: '#006000',
    purple: '#9900cc',
    ashes: '#999966',
    darkpink: '#cc0066',
    orange: '#ff8000',
    ashblue: '#75a3a3'
};

export { spinBanner, dialogObj, color, dialog, delay, confirmDialog, dialogInput };




// const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017"; // Update if using cloud or different port
// const client = new MongoClient(uri);

// async function findDatabase() {
//     try {
//         await client.connect();

//         const adminDb = client.db().admin();
//         const dbs = await adminDb.listDatabases();

//         for (const dbInfo of dbs.databases) {
//             const db = client.db(dbInfo.name);
//             const collections = await db.listCollections().toArray();

//             for (const coll of collections) {
//                 if (coll.name === "school_collection") {
//                     const result = await db.collection("school_collection").findOne({ email: "ajenifunja@gmail.com" });
//                     if (result) {
//                         console.log(`Found in database: ${dbInfo.name}`);
//                         return;
//                     }
//                 }
//             }
//         }

//         console.log("Document not found in any database.");
//     } catch (err) {
//         console.error(err);
//     } finally {
//         await client.close();
//     }
// }

// findDatabase();
