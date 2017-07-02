function maximumProduct(nums) {
    const length = nums.length;
    nums.sort((num1,num2)=>num1 - num2);
    return Math.max(nums[0] * nums[1] * nums[length - 1], nums[length - 1] * nums[length - 2] * nums[length - 3])
}
console.log(maximumProduct([1000, 1000, 2, 1, 2, 5, 3, 1]));
