function containsDuplicate(nums) {
    return nums.length === (new Set(nums)).size;
}
console.log(containsDuplicate([1, 2, 3, 4]));