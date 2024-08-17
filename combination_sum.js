// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input

const combinationSum = (candidates,target) =>{
    let combinations = []
    candidates.sort()
    const backtrack = (start, path, target) =>{
        if(!target){
            combinations.push([...path])
            return
        }
        if(target < 0)  return 
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backtrack(i, path, target - candidates[i] )
            path.pop()
            
        }
    }
    backtrack(0,[], target)
    return combinations


}