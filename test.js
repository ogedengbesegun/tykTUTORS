let one23 = ["one", "two", "three", "four", "five", "six"];
let abc = ["a", "b", "c", "d", "e", "f"]





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



let vang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let m = vang.length - 1; m > 0; m--) {
    const j = Math.floor(Math.random() * (m + 1));

    [vang[m], vang[j]] = [vang[j], vang[m]];

}
// console.log(vang[0]);
// console.log(vang[1]);
// console.log(vang[2]);
// console.log(vang[3]);
// console.log(vang[4]);
// console.log(vang[0]);






const days = []
console.log(days)
// console.log(ludo[0])
// let myKey = ludo.slice(0,1)[0];
let add = 0
function addArray() {
    let arrayText = document.querySelector(".arrayText")
    arrayText.textContent = add += 1
    days.push(arrayText.textContent);

}

