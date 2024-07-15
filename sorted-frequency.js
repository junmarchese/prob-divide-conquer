function sortedFrequency(arr, num) {

    function findFirstOccurence(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let firstOccurence = -1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);

            if (arr[middle] === num) {
                firstOccurence = middle;
                right = middle - 1;
            } else if (arr[middle] < num) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return firstOccurence;
    }

    function findLastOccurence(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let lastOccurence = -1;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);

            if (arr[middle] === num) {
                lastOccurence = middle;
                left = middle + 1;
            } else if (arr[middle] < num) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return lastOccurence;
    }

    let firstIndex = findFirstOccurence(arr, num);
    let lastIndex = findLastOccurence(arr, num);

    if (firstIndex !== -1 && lastIndex !== -1) {
        return lastIndex - firstIndex + 1;
    }

    return -1;
}

module.exports = sortedFrequency