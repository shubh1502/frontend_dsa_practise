function longestSubarray(arr, target) {
    let left = 0
    let maxlength = -Infinity
    let currSum = 0

    for(let right = 0;right<arr.length;right++){
        currSum += arr[right];

        while (currSum > target) {
            currSum -= arr[left];
            left++;
        }   
        maxlength = Math.max(maxlength, right - left + 1);
    }
    return maxlength === -Infinity ? 0 : maxlength;
}

console.log(longestSubarray([1,2,3,4,5,6],10)); // Output: 2 
// console.log(longestSubarray([2,1,5,2,8],7)); // Output: 2
// console.log(longestSubarray([1,2,3,4,5],7)); // Output: 3