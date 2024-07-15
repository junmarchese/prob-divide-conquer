function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated any
    if (arr[left] <= arr[right]) return 0;
    
    while (left <= right) {
        // left side check conditions
        if (arr[left] <= arr[left + 1]) {
            left++;
        } else {
            // If rotation point is found
            return left + 1;
        }

        // right side check conditions
        if (arr[right - 1] <= arr[right]) {
            right--;
        } else {
            return right;
        }
    }
}

module.exports = findRotationCount