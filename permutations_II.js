// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = []
    let set = new Set()
    const backtrack = (path, used) => {
        if (path.length === nums.length) {
            if(set.has(JSON.stringify(path))) return 

            set.add(JSON.stringify(path))
            result.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue

            used[i] = true
            path.push(nums[i])
            backtrack(path, used)
            path.pop()
            used[i] = false
        }
    }
    backtrack([], new Array(nums.length).fill(false))
    return result

};