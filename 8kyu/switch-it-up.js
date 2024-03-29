//
// Switch it Up!
//
// When provided with a number between 0-9, return it in words.
//
// Input :: 1
//
// Output :: "One".
//
// If your language supports it, try using a switch statement.
//


// SOLUTION:
function switchItUp(number) {
    const numberInWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return numberInWords[number];
}

console.log(switchItUp(4));
