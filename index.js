//document.getElementById("count-el").innerText = 5
// let count = 5 + 7;
//console.log(count);
// let myAge = 7;
// let dogYears = 7;
// let humanDogRatio = myAge *= dogYears;
// console.log(humanDogRatio);

//store count as 0
//listen for clicks on the count button
//increment the count variable when the button is clicked
//change count-el in the html to reflect the new count 

let saveEl = document.getElementById("save-el");
let incrementEl = document.getElementById("count-el");
let count = 0;
function increment() {

 count +=  1;
 incrementEl.textContent = count;
 }

 function save() {
    let remember = count + " - ";
    saveEl.textContent += remember;
    console.log(count);
 }
 function reset() {
    let reset_button = 0;
    incrementEl.textContent = reset_button; // another way to do this is set incrementEl to 0
    count = 0;
 }
// function increment() {
//     console.log("The button was clicked");
// }
/*let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;
function increment() {

count = count + 1;
countEl.innerText = count;
}
*/