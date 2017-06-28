function twoSum(nums,target) {
    const dist = {};
    for (let [i,num] of nums.entries()) {
        if (num in dist) {
            return [dist[num],i]
        }else {
            dist[target - num] = i;
        }
    }
}
console.log(twoSum([1,2,3,5,6,7], 7));