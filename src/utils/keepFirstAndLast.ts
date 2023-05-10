export const keepFirstAndLast = (arr: string[][]) =>
  arr.map((subarray) => [subarray[0], subarray[subarray.length - 1]]);
