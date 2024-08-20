
// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

// For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums. 

// Note: Subsets with the same elements should be counted multiple times.

// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

var subsetXORSum = function(nums) {
    let result = 0
    for(let i  in nums){
        result |= nums[i]
    }

    return result * 2 **(nums.length - 1)  // Here, the xor sum of all the subsets of num array is same as OR of all the elements times 2  ** (arrayLength - 1)
    
};