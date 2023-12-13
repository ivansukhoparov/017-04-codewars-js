// Abbreviate a Two Word Name
//
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F


function abbrevName(name) {
    let firstName = name.split(' ')[0];
    let lasttName = name.split(' ')[1];

    return `${firstName[0].toUpperCase()}.${lasttName[0].toUpperCase()}`;

}

console.log(abbrevName("ivan sukhoparov"))
