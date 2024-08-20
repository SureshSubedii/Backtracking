// A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.
var readBinaryWatch = function(num) {
    const times = [];
    for (let h = 0; h < 12; h++) {
      for (let m = 0; m < 60; m++) {
        const hOnes = h ? h.toString(2).match(/1/g).length : 0;
        const mOnes = m ? m.toString(2).match(/1/g).length : 0;
        if (hOnes + mOnes === num) {
          times.push(`${h}:${m < 10 ? `0${m}` : m}`);
        }
      }
    }
    return times;
  };


// Using DFS 
  var readBinaryWatch = function (turnedOn) {
    const leds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const digits = {
        '0': [0, 1],
        '1': [0, 2],
        '2': [0, 4],
        '3': [0, 8],
        '4': [0, 16],
        '5': [0, 32],
        '6': [1, 0],
        '7': [2, 0],
        '8': [4, 0],
        '9': [8, 0],
    };
    const result = [];

    const dfs = (root, path = []) => {
        if (path.length >= turnedOn) {
            let hour = 0, mins = 0;
            for (const [h, m] of path) {
                hour += h;
                mins += m;
            }

            if (hour < 12 && mins < 60) {
                result.push([hour, mins]);
            }
            return;
        }

        for (let i = root; i < leds.length; i++) {
            dfs(i + 1, [...path, digits[i]]);
        }
    };

    dfs(0, []);

    return result.map(([hour, mins]) => (`${hour}:${mins < 10 ? "0" + mins : mins}`));
};