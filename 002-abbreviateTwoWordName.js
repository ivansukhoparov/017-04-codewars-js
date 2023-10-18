function abbrevName(name) {
    let firstName = name.split(' ')[0];
    let lasttName = name.split(' ')[1];

    return `${firstName[0].toUpperCase()}.${lasttName[0].toUpperCase()}`;

}
