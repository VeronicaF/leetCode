function maxSubArray(nums) {
    let totalMax, currMax;
    totalMax = currMax = nums[0];
    nums.shift();
    for (let num of nums) {
        currMax = Math.max(num, currMax + num);
        totalMax = Math.max(currMax, totalMax);
    }
    return totalMax;
}