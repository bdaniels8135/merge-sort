#!/usr/bin/node

function fibs(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const fibsArray = [0, 1];
  for (let i=0; i < num - 2; i++) {
    const nextFibNum = fibsArray[i] + fibsArray[i + 1];
    fibsArray.push(nextFibNum);
  }
  return fibsArray;
}
console.log(fibs(1))
console.log(fibs(2))
console.log(fibs(8))

function fibsRec(num) {
  if (num === 1) return [0];
  if (num === 2) return [0 , 1];
  const fibsArray = fibsRec(num - 1);
  const nextFibNum = fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];
  fibsArray.push(nextFibNum);
  return fibsArray
}

console.log(fibsRec(1))
console.log(fibsRec(2))
console.log(fibsRec(8))