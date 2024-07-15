function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        // If middle element is 1, move pointer to right half.
        if (arr[middle] === 1) {
            left = middle + 1;
        }

        // If element to left of middle is 1 or middle is first element, then middle element is the first zero, move pointer to left half.
        else {
            if (middle === 0 || arr[middle - 1] === 1) {
                return arr.length - middle;
            } else {
                right = middle - 1;
            }
        }
    }

    return 0;
}


module.exports = countZeroes