/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    x = nums.indexOf(target);
    if ( x != -1) 
        return x;
    else 
        nums.push(target);
        nums.sort(function(a, b){return a-b});
        return nums.indexOf(target);   
};