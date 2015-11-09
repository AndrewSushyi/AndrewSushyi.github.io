function reverseIt(data) {
    switch (typeof(data)) {
        case 'string':
            return data.split("").reverse().join("");
        case 'number':
            return +reverseIt(data.toString());
    }
    return data;
}