// declare the variable
let iconClose = document.querySelector(".icon-close");


// to close the page
if (iconClose) {
    iconClose.addEventListener("click", () => {
        let homepageUrl = "/index.html"
        window.open(homepageUrl, "index");
        setTimeout(() => {
            window.close();
        }, 1000);


    });
}