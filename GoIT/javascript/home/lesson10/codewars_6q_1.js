function fibonacci(n) {
    var results = [];
    if (n < 0 || n === 0) return results;

    for (var i = 0; i < n; i++) {
        results.push(results.length > 1 ? results[i - 1] + results[i - 2] : i);
    }
    return results;
}