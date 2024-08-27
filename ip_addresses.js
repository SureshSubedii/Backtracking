var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) return [];

    let result = [];
    
    const isValid = (str) => {
        if (str.length > 1 && str[0] === '0') return false; 
        let num = parseInt(str);
        return num >= 0 && num <= 255; 
    };

    const backtrack = (path, start) => {
        console.log(path, start)
        if (path.length === 4) {
            if (start === s.length ) { 
                result.push(path.join('.'));
            }
            return;
        }

        for (let i = start; i < s.length && i < start + 3; i++) {
            let segment = s.slice(start, i + 1);
            console.log(segment)

            if (isValid(segment)) {
                path.push(segment);

                backtrack(path, i + 1);
                path.pop();
            }
        }
    };

    backtrack([], 0);
    return result;
};
