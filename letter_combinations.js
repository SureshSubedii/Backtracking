// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

var letterCombinations = function (digits) {
    if(!digits) return []
    
    let keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let result = []
    const backtrack = (start, path = []) => {
        let digit = digits[start]

        if (path.length === digits.length) {
            result.push(path.join(""))
            return
        }
        let counter = 0
        while (counter <= 3) {
            if (counter === 3 && digit != 7 &&  digit != 9)  break
            path.push(keyboard[digit][counter])
            backtrack(start + 1, path)
            path.pop()
            counter++
        }
    }
    backtrack(0)
    return result

};