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