export const checkShouldMerge = (arr: string[][]) => {
  for (let i = 0; i < arr.length; i++) {
    const currentSubarray = arr[i];
    if (i + 1 >= arr.length) continue;
    const nextSubarray = arr[i + 1];
    const currentLastElement = new Date(
      currentSubarray[currentSubarray.length - 1]
    ).getTime();
    const nextFirstElement = new Date(nextSubarray[0]).getTime();
    const dayDiff =
      (nextFirstElement - currentLastElement) / (1000 * 60 * 60 * 24);

    if (dayDiff <= 1) {
      return true;
    }
  }
  return false;
};

export const mergeTimeRange = (arr: string[][]) => {
  const merged = []; // Start with the first subarray
  const skippedIndex: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const currentSubarray = arr[i];
    if (i + 1 >= arr.length) continue;
    const nextSubarray = arr[i + 1];

    const currentLastElement = new Date(
      currentSubarray[currentSubarray.length - 1]
    ).getTime();
    const nextFirstElement = new Date(nextSubarray[0]).getTime();
    const dayDiff =
      (nextFirstElement - currentLastElement) / (1000 * 60 * 60 * 24);

    if (dayDiff <= 1) {
      merged.push([...currentSubarray, ...nextSubarray]);
      skippedIndex.push(i + 1);
    } else {
      if (skippedIndex.includes(i)) {
        continue;
      }
      merged.push([...currentSubarray]);
    }
  }
  return merged;
};
