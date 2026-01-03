function miniMumSubArrayOfTargetSum(arr, target) {
    let left = 0;
    let minLnegth = Infinity;
    let currentSum = 0;

    for(let right = 0;right<arr.length;right++){
        currentSum += arr[right];

        while(currentSum >=target){            
            currentSum -= arr[left];
            minLnegth = Math.min(minLnegth, right - left + 1);
            left++; 
        }

    }
    return minLnegth === Infinity ? 0 : minLnegth;
}

console.log(miniMumSubArrayOfTargetSum([2,3,1,2,4,3],7)); // Output: 2