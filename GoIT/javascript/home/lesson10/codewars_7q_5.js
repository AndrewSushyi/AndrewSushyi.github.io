function duplicates(arr) {
    var dup = [];
    for (i = 0; i < arr.length; i++) {
        var n = arr[i];
        if (arr.indexOf(n, i + 1) >= 0 && dup.indexOf(n) < 0) {
            dup.push(n)
        }
    }
    return dup;
}