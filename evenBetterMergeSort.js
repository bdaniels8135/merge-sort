#!/usr/bin/node

function mergeHalfSortedArraySlice(arrayWithSliceToSort, arrayToStoreSortedSlice, startIndex, firstHalfEndIndex, endIndex) {
  let i = startIndex;
  let j = firstHalfEndIndex + 1;
  let k = startIndex;
  while ((i <= firstHalfEndIndex) && (j <= endIndex)) {
    if (arrayWithSliceToSort[i] <= arrayWithSliceToSort[j]) {
      arrayToStoreSortedSlice[k] = arrayWithSliceToSort[i];
      i++;
      k++;
    }
    else {
      arrayToStoreSortedSlice[k] = arrayWithSliceToSort[j];
      j++;
      k++;
    }
  }
  for (i; i <= firstHalfEndIndex; i++) {
    arrayToStoreSortedSlice[k] = arrayWithSliceToSort[i];
    k++;
  }
  for (j; j <= endIndex; j++) {
    arrayToStoreSortedSlice[k] = arrayWithSliceToSort[j];
    k++;
  }
}

function evenBetterMergeSort(arrayToSort, copyOfArrayToSort = [...arrayToSort], startIndex = 0, endIndex = arrayToSort.length - 1, depth = 0) {
  if ((endIndex - startIndex) >= 1) {
    const firstHalfEndIndex = Math.floor((endIndex + startIndex) / 2);
    depth++;
    evenBetterMergeSort(arrayToSort, copyOfArrayToSort, startIndex, firstHalfEndIndex, depth);
    evenBetterMergeSort(arrayToSort, copyOfArrayToSort, firstHalfEndIndex + 1, endIndex, depth);
    if (depth % 2 === 1) {
      mergeHalfSortedArraySlice(copyOfArrayToSort, arrayToSort, startIndex, firstHalfEndIndex, endIndex);
    } else {
      mergeHalfSortedArraySlice(arrayToSort, copyOfArrayToSort, startIndex, firstHalfEndIndex, endIndex);
    }
  }
  return arrayToSort;
}

// const a = [...Array(1000000)].map(() => Math.floor(Math.random()*100));
// const startTime = process.hrtime.bigint();
// evenBetterMergeSort(a);
// const endTime = process.hrtime.bigint();
// const memoryData = process.memoryUsage();
// console.log(`Processing Time:${endTime - startTime}`);
// console.log(`Heap Used: ${memoryData.heapUsed}, Heap Total: ${memoryData.heapTotal}`);

module.exports = evenBetterMergeSort;