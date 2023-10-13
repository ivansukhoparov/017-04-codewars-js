//function given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x) {
    let el = 1;
    for (let i = 0; i < x.length; i++) {
        el = el * x[i]
    };
    return el;
}