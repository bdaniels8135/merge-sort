#!/usr/bin/node

function mergeHalfSortedArraySlice(arrayToSort, startIndex, leftEndIndex, endIndex) {
  const sliceFirstHalf = arrayToSort.slice(startIndex, leftEndIndex + 1);
  const sliceSecondHalf = arrayToSort.slice(leftEndIndex + 1, endIndex + 1);
  let i = 0
  let j = 0
  let k = startIndex
  while ((i < sliceFirstHalf.length) && (j < sliceSecondHalf.length)) {
    if (sliceFirstHalf[i] <= sliceSecondHalf[j]) {
      arrayToSort[k] = sliceFirstHalf[i];
      i++;
      k++;
    }
    else {
      arrayToSort[k] = sliceSecondHalf[j];
      j++;
      k++;
    }
  }
  for (i; i < sliceFirstHalf.length; i++) {
    arrayToSort[k] = sliceFirstHalf[i];
    k++;
  }
  for (j; j < sliceSecondHalf.length; j++) {
    arrayToSort[k] = sliceSecondHalf[j];
    k++;
  }
  return arrayToSort;
}

function betterMergeSort(arrayToSort, startIndex = 0, endIndex = arrayToSort.length - 1) {
  if ((endIndex - startIndex) >= 1) {
    const leftEndIndex = Math.floor((endIndex + startIndex) / 2);
    betterMergeSort(arrayToSort, startIndex, leftEndIndex);
    betterMergeSort(arrayToSort, leftEndIndex + 1, endIndex);
    mergeHalfSortedArraySlice(arrayToSort, startIndex, leftEndIndex, endIndex);
  }
  return arrayToSort;
}

// const a = [...Array(1000000)].map(() => Math.floor(Math.random()*100));
// const startTime = process.hrtime.bigint();
// betterMergeSort(a);
// const endTime = process.hrtime.bigint();
// const memoryData = process.memoryUsage();
// console.log(`Processing Time:${endTime - startTime}`);
// console.log(`Heap Used: ${memoryData.heapUsed}, Heap Total: ${memoryData.heapTotal}`)

module.exports = betterMergeSort;