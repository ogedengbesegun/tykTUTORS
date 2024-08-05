

// Setting my Start button to disabled at onLoadState.
var xhttp3 = new XMLHttpRequest();
xhttp3.onreadystatechange = function () {



    if (this.readyState == 4 && this.status == 200) {

        // Typical action to be performed when the document is ready:

        console.log(xhttp3.responseText);


        // console.log(JSON.parse(xhttp.responseText)[0].ask)



    }



}

xhttp3.open("GET", "/subjectsJSON/english.json", true);
xhttp3.send();

var response3 = JSON.parse(xhttp3.responseText)
// let response = xhttp2.responseText;

// console.log(response[0].ask);
// console.log(response[0].ans);
// console.log(response[1].ask);

let myData = document.querySelector(".myData")
myData.textContent = response3[0].ask

let dataInput = document.querySelector(".dataInput");
dataInput.innerHTML = response3[0].d;
console.log(resData[0].d)
// console.log(JSON.parse(xhttp.responseText)[0].ask);
// let myData = document.querySelector(".myData");
// myData.value = resData[0].ask
// console.log(myData.value)




// let one23 = ["one", "two", "three", "four", "five", "six"];
// let abc = ["a", "b", "c", "d", "e", "f"]





let colors = ['red', 'green', 'blue', 'yellow'];
let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// colors.push(...week)
// console.log(colors)
// console.log(colors[6])
let newArray = [...colors, ...week]
console.log(newArray)
newArray.pop()
newArray.shift()
console.log(newArray)

// switches statement
let ludos = ["one", "two", "three", "four", "five", "six"]
let ludosC = ["one", "two", "three", "four", "five", "six"]
ludosC.push("seven")
ludosC.push("eight")

let takeArray = [];
for (const ans of ludosC) {
    console.log(ans);
    takeArray.push(ans)
}
console.log(takeArray)
// for (const x of ludo) {
//     console.log(x)
//     // let vex = Math.floor(Math.random().x)

// }
for (let f = ludos.length - 1; f > 0; f--) {
    const j = Math.floor(Math.random() * (f + 1));

    [ludos[f], ludos[j]] = [ludos[j], ludos[f]];


}
// console.log(ludos[0])
// console.log(ludos[1])
// console.log(ludos[2])

let myLudo;
myLudo = ludos.slice(0, 1)[0]
let str = { myLudo }
console.log(str.myLudo)

let myLudo1 = ludos.slice(1, 2)[0]
// console.log()
// let myludo1 = ludos[5]
switch (myLudo) {
    case "one":
        myValue = 1

        break;
    case "two":
        myValue = 2
        break;
    case "three":
        myValue = 3
        break
    case "four":
        myValue = 4
        break;
    case "five":
        myValue = 5
        break;
    case "six":
        myValue = 6
        break;
    default:
        myValue = "Sorry the value is unavailable"
        break;
}

switch (myLudo1) {
    case "one":
        myValue1 = 1

        break;
    case "two":
        myValue1 = 2
        break;
    case "three":
        myValue1 = 3
        break
    case "four":
        myValue1 = 4
        break;
    case "five":
        myValue1 = 5
        break;
    case "six":
        myValue1 = 6
        break;
    default:
        myValue1 = "Sorry the value is unavailable"
        break;
}
console.log(myValue)
console.log(myValue1)








const days = []
console.log(days)
// console.log(ludo[0])
// let myKey = ludo.slice(0,1)[0];
let add = 0;
let arrayText = document.querySelector(".arrayText")

function addArray() {
    arrayText.textContent = add += 1;
    days.push(arrayText.textContent);
    document.querySelector(".myCount").textContent = days.join(" ")
    // document.querySelector(".myCount").textContent = days.slice(11,21)


}

function clone() {

    let cloneBtn = document.querySelector(".addArray")
    let cloned = cloneBtn.cloneNode();
    // cloneBtn.className = "newBtn";
    cloned.textContent = "Sub Array";
    cloned.style.display = "block";
    cloned.className = "rounded-1 mt-3 text-light bg-secondary mx-auto w-1 border-1 fs-5 subArray";
    document.querySelector("div:nth-child(1)").append(cloned)

    cloned.classList.remove("addArray")
    cloned.removeAttribute("onclick");
    let subArray = document.querySelectorAll(".subArray")
    subArray.forEach(subArra => {
        subArra.addEventListener("click", () => {
            arrayText.textContent = add -= 1;
            if (arrayText.textContent == 0) {
                arrayText.setAttribute("min", "1");
                document.querySelector(".myCount").textContent = days.push(0)
            }
            document.querySelector(".myCount").textContent = days.pop(arrayText.textContent)
        });
    });

}
clone()


