// An additive number is a string whose digits can form an additive sequence.
// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
// Given a string containing only digits, return true if it is an additive number or false otherwise.
// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.


var isAdditiveNumber = function(num) {
    const n = num.length;

    const isValid = (s) => s.length === 1 || s[0] !== '0';

    const backtrack = (start, first, second) => {
        if (start === n) {
            return true;
        }

        for (let end = start + 1; end <= n; end++) {
            const str = num.substring(start, end);

            if (!isValid(str)) continue;

            const current = BigInt(str);
            if (first !== null && second !== null && current !== first + second) {
                continue;
            }

            if (backtrack(end, second, current)) {
                return true;
            }
        }

        return false;
    };

    for (let i = 1; i < n; i++) {
        if (num[0] === '0' && i > 1) break;

        const first = BigInt(num.substring(0, i));
        for (let j = i + 1; j < n; j++) {
            if (num[i] === '0' && j > i + 1) break;

            const second = BigInt(num.substring(i, j));

            if (backtrack(j, first, second)) {
                return true;
            }
        }
    }

    return false;
};
