

// 1. convert the input value to accept only numbers
document.querySelector(".input-Val").addEventListener('input', function (e) {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
        e.target.value = value.replace(/\D/g, '');
        alert("Enter Valid Phone Numbers eg. (080*****123)")
    }
})

// 2. set the input password to maxLenght 10
document.querySelector("input[type = 'password']").setAttribute("maxlength", 15)

// 3.capitalise input text for firstName & lastName
document.querySelector("#regfirstName").style.textTransform = "capitalize";
document.querySelector(" #reglastName").style.textTransform = "capitalize";


// 4 reveal and toggle the password input to reveal the password
let reveal = document.querySelector(".reveal")
reveal.addEventListener("click", () => {
    if (reveal.classList.contains("fa-eye-slash")) {
        reveal.classList.remove("fa-eye-slash")
        reveal.classList.add("fa-eye");
        reveal.classList.remove("text-danger")
        reveal.style.color = "green";
        document.querySelector("#regPassword").setAttribute("type", "text");

    }
    else {
        reveal.classList.add("fa-eye-slash")
        reveal.classList.remove("fa-eye")
        reveal.classList.add("text-danger")

        document.querySelector("#regPassword").setAttribute("type", "password");

    }
})

