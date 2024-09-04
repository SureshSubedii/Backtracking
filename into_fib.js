// You are given a string of digits num, such as "123456579". We can split it into a Fibonacci-like sequence [123, 456, 579].
// Formally, a Fibonacci-like sequence is a list f of non-negative integers such that:
// 0 <= f[i] < 231, (that is, each integer fits in a 32-bit signed integer type),
// f.length >= 3, and
// f[i] + f[i + 1] == f[i + 2] for all 0 <= i < f.length - 2.
// Note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.
// Return any Fibonacci-like sequence split from num, or return [] if it cannot be done.

var splitIntoFibonacci = function(num) {
    const result = []
        const n = num.length;
            const isValid = (s) => s.length === 1 || s[0] !== '0';



    const backtrack = (start, first, second, path) => {
        if(start === n){
            result.push(...path)
            return true
        }
        for(let i = start + 1; i <= n; i ++){
            let str = num.substring(start, i)

            if(!isValid(str)) continue

            let current = Number(str)
            let sum = Number(first) + Number(second)

            if( (sum >= (2 ** 31)) ||  sum !== current ){
            continue 
            }
            path.push(current)
           return backtrack( i, second, str, path)
            path.pop()

        }
        return false

    }

    for(let i = 1; i < n; i ++){
        let first = num.substring(0, i)
        if (num[0] === '0' && i > 1) break;


        for(let j  = i + 1; j < n; j ++){
            if (num[i] === '0' && j > i + 1) break;

            let second = num.substring(i, j)
            let output = backtrack(j , first, second,[])
            console.log(first,second)
            
            if(output){     
                result.unshift(first,second)
                return result
            }

        }
    }

    return result

    
};