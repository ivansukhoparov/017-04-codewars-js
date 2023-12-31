/*

Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

 */

function solution(str){
    let res = [];
    for (let i=str.length-1; i>=0; i--) {
        res.push(str[i]);
    }
    return res.join("");
}

// better solution

function solutionAlt(str){
    return str.split('').reverse().join('');
}
