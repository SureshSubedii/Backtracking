// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.


var subsets = function(nums) {
    let result = [[]]

    const backtrack = (path, start) =>{
        if(path.length === nums.length) return
        for(let i = start; i < nums.length; i ++){
            path.push(nums[i])
            result.push([...path])
            backtrack(path, i + 1)
            path.pop()
        }
    }
    backtrack([], 0)
    return result
    
};