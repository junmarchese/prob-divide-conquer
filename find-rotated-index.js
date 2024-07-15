function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === num) {
            return middle;
        }

        // Check if left half is sorted
        if (arr[left] <= arr[middle]) {
            if (num >= arr[left] && num < arr[middle]) {
                // Target is in left half
                right = middle - 1;
            } else {
                // Target is in right half
                left = middle + 1;
            }
        }
        // Check if right half is sorted
        else  {
            if (num > arr[middle] && num <= arr[right]) {
                // Target is in right half
                left = middle + 1;
            } else {
                // Target is in left half
                right = middle - 1;
            }
        }
    }
    return -1; // if Number not found
}

module.exports = findRotatedIndex