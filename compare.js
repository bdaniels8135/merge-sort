#!/usr/bin/node

const mergeSort = require("./mergeSort");
const betterMergeSort = require("./betterMergeSort");
const evenBetterMergeSort = require("./evenBetterMergeSort");

const a = [...Array(1000000)].map(() => Math.floor(Math.random()*100));
const originalStartTime = process.hrtime.bigint();
mergeSort(a);
const originalEndTime = process.hrtime.bigint();
const betterStartTime = process.hrtime.bigint();
betterMergeSort(a);
const betterEndTime = process.hrtime.bigint();
const evenBetterStartTime = process.hrtime.bigint();
evenBetterMergeSort(a);
const evenBetterEndTime = process.hrtime.bigint();
console.log(`Original Processing Time:${originalEndTime - originalStartTime}`);
console.log(`Better Processing Time:${betterEndTime - betterStartTime}`);
console.log(`Even Better Processing Time:${evenBetterEndTime - evenBetterStartTime}`);
console.log(`better/og: ${(betterEndTime - betterStartTime) * 100n / (originalEndTime - originalStartTime)}`)
console.log(`even better/better: ${(evenBetterEndTime - evenBetterStartTime) * 100n / (betterEndTime - betterStartTime)}`)
console.log(`even better/og: ${(evenBetterEndTime - evenBetterStartTime) * 100n / (originalEndTime - originalStartTime)}`)
