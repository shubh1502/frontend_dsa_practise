function sumofsubarraysizek(arr, k) {

    let windowSum = 0;
    let result = [];

    for(let i = 0;i<k;i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    for(let i = k;i<arr.length;i++) {
        windowSum += arr[i] - arr[i - k];
        if(windowSum > maxSum){
            result = arr.slice(i - k + 1, i + 1);
        }
        maxSum = Math.max(maxSum, windowSum);
    }

    return result;
}
const arr = [2, 1, 5, 1, 3, 2, 6, 7, 8];
const k = 3;
console.log(sumofsubarraysizek(arr, k));