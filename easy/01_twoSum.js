/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {};

    for (let i = 0; i < nums.length; i++) {
        
        const complemento = target - nums[i];
        
        if (complemento in dict) {
           return [dict[complemento], i];
        }

        dict[nums[i]] = i;
    };
    return [];  
};

nums = [2,7,11,15]; 
target = 9;
console.log(twoSum(nums, target));