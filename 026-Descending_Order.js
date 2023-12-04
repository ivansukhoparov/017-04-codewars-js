/*
Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */


function descendingOrder(n){
    return +n.toString().split("").sort((a,b) => {
        if (a>b) {return -1}
        else if (a<b) {return 1}
        else{ return 0}
    }).join("");
}

console.log(descendingOrder(54815654))
