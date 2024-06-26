function longestSubstring(s) {
   
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };