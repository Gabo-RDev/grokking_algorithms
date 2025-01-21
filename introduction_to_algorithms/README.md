# Binary Search Algorithm

This repository contains the implementation of the Binary Search algorithm in
JavaScript.

## File

- `binary_search.js`: Contains the implementation of the Binary Search
  algorithm.

## Description

Binary Search is an efficient algorithm for finding an item from a sorted list
of items. It works by repeatedly dividing in half the portion of the list that
could contain the item, until you've narrowed down the possible locations to
just one.

## Usage

To use the Binary Search algorithm, you can include the `binarySearch.js` file
in your project and call the `binarySearch` function with the appropriate
parameters.

### Example

```javascript
function binarySearch(arr, item) {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = arr[mid];
		if (guess === item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

const my_list = [1, 3, 5, 7, 9];
console.log(binarySearch(my_list, 3));
console.log(binarySearch(my_list, -1));
```

## Function Signature

```javascript
/**
 * Performs binary search on a sorted array.
 * @param {number[]} array - The sorted array to search.
 * @param {number} item - The item value to search for.
 * @returns {number} The index of the target value if found, otherwise null.
 */
function binarySearch(arr, item) {
	// Implementation here
}
```

## License

This project is licensed under the MIT License.
