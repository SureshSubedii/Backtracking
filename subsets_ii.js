// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

var subsetsWithDup = function(nums) {
    let result = [[]]
    let set = new Set()
    nums.sort()

    const backtrack = (path, start) =>{
        if(path.length === nums.length) return
        for(let i = start; i < nums.length; i ++){
            path.push(nums[i])
            if(set.has(JSON.stringify(path))){
            path.pop()
            continue
            }
            set.add(JSON.stringify(path))
            result.push([...path])
            backtrack(path, i + 1)
            path.pop()
        }
    }
    backtrack([], 0)
    return result
    
};