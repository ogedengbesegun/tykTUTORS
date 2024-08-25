// declare the variable
let iconClose = document.querySelector(".icon-close");


// to close the page
if (iconClose) {
    iconClose.addEventListener("click", () => {
        let homepageUrl = "/ogd.html"
        window.open(homepageUrl, "ogd");
        setTimeout(() => {
            window.close();
        }, 1000);


    });
}