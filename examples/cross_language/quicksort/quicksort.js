/**
 * QuickSort Implementation (JavaScript)
 * =====================================
 *
 * Classic divide-and-conquer sorting algorithm.
 * Average time complexity: O(n log n)
 */

/**
 * Sort an array using the quicksort algorithm.
 *
 * @param {Array} arr - Array of comparable elements
 * @returns {Array} Sorted array
 */
function quicksort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose pivot (middle element for better average performance)
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    // Partition array into three parts
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    // Recursively sort left and right partitions
    return [...quicksort(left), ...middle, ...quicksort(right)];
}

/**
 * In-place quicksort implementation (more efficient).
 *
 * @param {Array} arr - Array to sort in-place
 * @param {number} low - Starting index
 * @param {number} high - Ending index
 */
function quicksortInplace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition and get pivot index
        const pivotIndex = partition(arr, low, high);

        // Recursively sort left and right
        quicksortInplace(arr, low, pivotIndex - 1);
        quicksortInplace(arr, pivotIndex + 1, high);
    }
    return arr;
}

/**
 * Partition array around pivot.
 *
 * @param {Array} arr - Array to partition
 * @param {number} low - Starting index
 * @param {number} high - Ending index
 * @returns {number} Final position of pivot
 */
function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Swap elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Example usage
if (typeof require !== 'undefined' && require.main === module) {
    // Test data
    const testArrays = [
        [64, 34, 25, 12, 22, 11, 90],
        [5, 1, 4, 2, 8],
        [1],
        []
    ];

    testArrays.forEach(arr => {
        const sorted = quicksort([...arr]);
        console.log(`Original: [${arr.join(', ')}]`);
        console.log(`Sorted:   [${sorted.join(', ')}]`);
        console.log();
    });
}

// Export for use as module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quicksort, quicksortInplace };
}
