// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

const combinationSum2 = (candidates, target)=> {
    let combinations = []
    candidates.sort()
     const backtrack = (start, path , target) =>{
        if(target === 0){
            combinations.push([...path])
            return
        }
        if(target < 0) return

        for(let i = start; i < candidates.length; i++){
            if( i > start && candidates[i] === candidates[i - 1] ) continue // to skip duplicates
            path.push(candidates[i])
            backtrack(i + 1, path, target - candidates[i] )
            path.pop()

        }

     }
     backtrack(0, [], target)
     return combinations

}