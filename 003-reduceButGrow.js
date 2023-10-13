//function given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x) {
    let el = 1;
    x.forEach((i) => { el = el * i; });
    return el;
}