/* 

Supposed you're looking for a word in the dictionary. The dictionary has 240,000 words. In the worst case, how many steps do you think each search will take?

Simple search: 240k steps!!
Binary search: 18 steps // Binary search only works when your list is in sorted order

 240,000
 120,000
 60,000
 30,000
 15,000
 7,500
 3,750
 1,875
 938
 469
 235*
 118
 59
 30
 15
 8
 4
 2
 1

In general, for any list of n, binary search will take log^2 n steps to run in the worst case, whereas simple search will take n steps.

*/

function binary_search(arr, item) {
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
console.log(binary_search(my_list, 3));
console.log(binary_search(my_list, -1));

// Exercises
// 1.1 Suppose you have a sorted list of 128 names, and you're searching through it using binary search. What's the maximu number of steps it would take? 128, 64, 32, 16, 8, 4, 2, 1. 8 steps.
// 1.2 Suppose ou double the size of the list. What's the maximum number of steps now? 256, 128, 64, 32, 16, 8, 4, 2, 1 = Only 1 more step.

/* 
Some common big O run times

- O(log n), also known as log time. Example, Binary Search.
- O(n), also known as linear time. Example, Simple Search.
- O(n * log n). Example: a fast sorting algorithm, like quicksort.
- O(n^2). Example: a slow sorting algorithm, like selection sort.
- O(n!). Example: a really slow algorithm, like the traveling salesperson.
*/

// Exercises

// Give the run time for each of these scenarios in terms of big O.

/* 
1.3 You have a name, and you want to find the person's name in the phone book | O(log n)
1.4 You have a phone number, and you want to find the person's name in the phone book. (Hint: You'll have to search through the whole book!) | O(n)
1.5 You want to read the numbers of every person in the phone book. | O(n)
1.6 You want to read the numbers of just the As. (This is tricky one!) | O(n)
*/

// RECAP

/* 
1. Binary search is a lot faster than simple search as your array gets bigger.
2. O(log n) is faster than O(n), and it gets a lot faster one the list of items you're searching through grows
3. Algorithm speed isn't measured in seconds.
4. Algorithm time are measured in terms of growth of an algorithm.
5. Algorithm times are written in big O notation.

*/
