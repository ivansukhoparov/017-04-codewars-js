/*
Beginner Series #3 Sum of Numbers

    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

function getSum(a, b) {

    let result = 0;
    let min = 0;
    let max = 0;

    if (a < b) { min = a; max = b }
    else { min = b, max = a };

    for (let i = min; i <= max; i++) {
        result = result + i;
    };

    return result;
}