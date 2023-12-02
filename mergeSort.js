#!/usr/bin/node

function mergeSortedArrays(firstArray, secondArray, storageArray) {
  let i = 0;
  let j = 0;
  let k = 0;
  while ((i < firstArray.length) && (j < secondArray.length)) {
    if (firstArray[i] <= secondArray[j]) {
      storageArray[k] = firstArray[i];
      i++;
      k++;
    }
    else {
      storageArray[k] = secondArray[j];
      j++;
      k++;
    }
  }
  for (i; i < firstArray.length; i++) {
    storageArray[k] = firstArray[i];
    k++;
  }
  for (j; j < secondArray.length; j++) {
    storageArray[k] = secondArray[j];
    k++;
  }
  return storageArray;
}

function splitArray(arrayToSplit) {
  const splitIndex = Math.floor(arrayToSplit.length / 2);
  return [arrayToSplit.slice(0, splitIndex), arrayToSplit.slice(splitIndex)];
}

function mergeSort(arrayToSort, storageArray = []) {
  if (arrayToSort.length < 2) return arrayToSort;
  const arrayToSortPieces = splitArray(arrayToSort);
  const storageArrayPieces = splitArray(storageArray);
  mergeSort(arrayToSortPieces[0], storageArrayPieces[0]);
  mergeSort(arrayToSortPieces[1], storageArrayPieces[1]);
  return mergeSortedArrays(arrayToSortPieces[0], arrayToSortPieces[1], arrayToSort);
}

// const a = [...Array(1000000)].map(() => Math.floor(Math.random()*100));
// const startTime = process.hrtime.bigint();
// mergeSort(a);
// const endTime = process.hrtime.bigint();
// const memoryData = process.memoryUsage();
// console.log(`Processing Time:${endTime - startTime}`);
// console.log(`Heap Used: ${memoryData.heapUsed}, Heap Total: ${memoryData.heapTotal}`)

module.exports = mergeSort;