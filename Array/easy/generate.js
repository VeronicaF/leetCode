function generate(numRows) {
    const result = [];
    const arr = [];
    for (let i = 0; i < numRows; i++) {
        arr[i] = 1;
        for (let j = i - 1; j > 0; j--) {
            arr[j] += arr[j - 1];
        }
        result.push([...arr]);
    }
    return result;
}
console.log(generate(5));