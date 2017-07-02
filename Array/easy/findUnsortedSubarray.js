function findUnsortedSubarray(nums) {
    let next, start, end;
    for (let i = 0; i < nums.length - 1; i++) {
        next = nums[i + 1];
        if (nums[i] > next) {
            !start && (start = i);
            end = i + 1;
        } else if (nums[i] === next) {
            end = i === nums.length - 2 ? i : end;
        }
    }
    console.log(start,end)
    return end - start + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15,15,15]));