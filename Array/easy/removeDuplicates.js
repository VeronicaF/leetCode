function removeDuplicates(nums) {
    for (let i =0; i < nums.length -1; i++ ) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));