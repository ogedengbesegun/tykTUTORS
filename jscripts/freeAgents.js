
const array = [2, 3, 4, 5];
let item =
    array.map((item) => {
        item = item * 3;

        console.log(item);
        return item;
    }).find(item => item === 9);

// console.log(item)
//2
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
//3
const spinBanner = document.createElement('dialog');
spinBanner.className = 'mt-6 mx-auto border-0 rounded-1 msgBanner'
spinBanner.innerHTML = `<h2 class="text-success text-center mt-2 spinBannerHeader">Loading... ${dialogObj.fan}</h2>
     <p class="p-2 text-center w-75 mx-auto spinText text-success">
     ${dialogObj.circle_notch}</p>
    `

document.body.append(spinBanner);


//4
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

///5
async function delay(m) {
    //  const delay = (m) =>
    new Promise((resolve) =>
        setTimeout(resolve, m)

    )

}
export { array, item, spinBanner, dialogObj, dialog, delay };
