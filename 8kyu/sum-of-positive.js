// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

// SOLUTION:

function positiveSum(numbers) {
    let sum = 0
    for (let number of numbers){
        if(number>0) sum+=number
    }
    return sum
}


console.log(positiveSum([1,1,-1])===2)

// ANOTHER SOLUTION:

function positiveSum2(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum2([1,1,-1])===2)