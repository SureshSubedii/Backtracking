// An n-bit gray code sequence is a sequence of 2n integers where:

// Every integer is in the inclusive range [0, 2n - 1],
// The first integer is 0,
// An integer appears no more than once in the sequence,
// The binary representation of every pair of adjacent integers differs by exactly one bit, and
// The binary representation of the first and last integers differs by exactly one bit.
// Given an integer n, return any valid n-bit gray code sequence.

const grayCode = (n) => {
    let result = []
    const generateSequence = (numbits) =>{
        if(numbits === 0) return [0]

        const prevSequence = generateSequence(numbits - 1)
        const leadingOne = 1 << (numbits - 1)
        let graySequence = [...prevSequence]
        for(let i = prevSequence.length - 1; i >= 0; i --){
            graySequence.push(leadingOne | prevSequence[i])
        }
        return graySequence

    }
    result.push(...generateSequence(n))
    return result
}
