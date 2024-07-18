

// 1. convert the iput value to accept only numbers
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
