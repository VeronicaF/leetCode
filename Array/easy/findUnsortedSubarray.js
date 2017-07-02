function findUnsortedSubarray(nums) {
    let length = nums.length, start = -1, end = -2, min = nums[length - 1], max = nums[0];
    for (let i = 0; i < length; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[length - 1 - i]);
        nums[i] < max && (end = i);
        nums[length - 1 - i] > min && (start = length - 1 - i);
    }
    return end - start + 1;
}

console.log(findUnsortedSubarray([2, 1]));
