function uniquelongestSubstring(s) {
    let unique = new Set();
    let left=0;
    let maxLength =0;


    for(let right = 0;right<s.length;right++) {
        while(unique.has(s[right])) {
            console.log(s[right])
            unique.delete(s[left]);
            left++;

    }
        unique.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return unique.size;
}

console.log(uniquelongestSubstring("abcabcbbcde")); // Output: 3
