const sum = (...params) => {
    return params.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 4, 5)); // 12