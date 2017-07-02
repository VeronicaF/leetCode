function twoSum2(numbers, target) {
    const dist = {};
    for (let [i, num] of numbers.entries()) {
        if (num in dist) {
            return [dist[num]++, i++];
        } else {
            dist[target - num] = i;
        }
    }
}
console.log(twoSum2([2, 7, 11, 19], 9));