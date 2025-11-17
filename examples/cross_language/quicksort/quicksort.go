// QuickSort Implementation (Go)
// ==============================
//
// Classic divide-and-conquer sorting algorithm.
// Average time complexity: O(n log n)

package main

import "fmt"

// Quicksort sorts an array using the quicksort algorithm.
// Returns a new sorted slice without modifying the original.
func Quicksort(arr []int) []int {
	// Base case: arrays with 0 or 1 element are already sorted
	if len(arr) <= 1 {
		return arr
	}

	// Choose pivot (middle element for better average performance)
	pivot := arr[len(arr)/2]

	// Partition array into three parts
	var left, middle, right []int

	for _, x := range arr {
		if x < pivot {
			left = append(left, x)
		} else if x == pivot {
			middle = append(middle, x)
		} else {
			right = append(right, x)
		}
	}

	// Recursively sort left and right partitions
	result := make([]int, 0, len(arr))
	result = append(result, Quicksort(left)...)
	result = append(result, middle...)
	result = append(result, Quicksort(right)...)

	return result
}

// QuicksortInplace sorts an array in-place using quicksort.
// More memory efficient than the functional version.
func QuicksortInplace(arr []int, low, high int) {
	if low < high {
		// Partition and get pivot index
		pivotIndex := partition(arr, low, high)

		// Recursively sort left and right
		QuicksortInplace(arr, low, pivotIndex-1)
		QuicksortInplace(arr, pivotIndex+1, high)
	}
}

// partition rearranges the array around a pivot.
// Returns the final position of the pivot.
func partition(arr []int, low, high int) int {
	pivot := arr[high]
	i := low - 1

	for j := low; j < high; j++ {
		if arr[j] <= pivot {
			i++
			// Swap elements
			arr[i], arr[j] = arr[j], arr[i]
		}
	}

	// Place pivot in correct position
	arr[i+1], arr[high] = arr[high], arr[i+1]
	return i + 1
}

// Helper function to copy slice
func copySlice(arr []int) []int {
	result := make([]int, len(arr))
	copy(result, arr)
	return result
}

func main() {
	// Test data
	testArrays := [][]int{
		{64, 34, 25, 12, 22, 11, 90},
		{5, 1, 4, 2, 8},
		{1},
		{},
	}

	for _, arr := range testArrays {
		sorted := Quicksort(copySlice(arr))
		fmt.Printf("Original: %v\n", arr)
		fmt.Printf("Sorted:   %v\n", sorted)
		fmt.Println()
	}
}
