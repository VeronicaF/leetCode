function searchInsert(nums, target) {
    let index = 0;
    for (let num of nums) {
        if (num < target) {
            index++
        } else {
            break;
        }
    }
    return index
}
console.log(searchInsert([1, 3, 5, 6], 6));