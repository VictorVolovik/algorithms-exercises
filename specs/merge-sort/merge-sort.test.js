/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  const length = nums.length;
  if (length < 2) return nums;

  const middle = Math.floor(length / 2);
  const left_side = nums.slice(0, middle);
  const right_side = nums.slice(middle);
  const sorted_left_side = mergeSort(left_side);
  const sorted_right_side = mergeSort(right_side);

  return merge(sorted_left_side, sorted_right_side);
};

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  result = result.concat(arr1.slice(i), arr2.slice(j));

  return result;
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
