// export const mergeSubArrays = (subarrays: string[][]) => {
//   const merged = [subarrays[0]]; // Start with the first subarray
//
//   for (let i = 1; i < subarrays.length; i++) {
//     const currentSubarray = subarrays[i];
//     const lastMergedSubarray = merged[merged.length - 1];
//
//     const previousEnd = new Date(lastMergedSubarray[1]);
//     const currentStart = new Date(currentSubarray[0]);
//     previousEnd.setDate(previousEnd.getDate() + 1);
//
//     if (previousEnd.getTime() === currentStart.getTime()) {
//       lastMergedSubarray[1] = currentSubarray[1]; // Merge the subarrays
//     } else {
//       merged.push(currentSubarray); // Add the subarray as it is
//     }
//   }
//
//   return merged;
// };
export const checkShouldMerge = (arr: string[][]) => {
  for (let i = 0; i < arr.length; i++) {
    const currentSubarray = arr[i];
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
};

// export const mergeTimeRangeArrays = (subarrays: string[][]) => {
//   const merged = [];
//   let currentSubarray = subarrays[0];
//
//   for (let i = 1; i < subarrays.length; i++) {
//     const nextSubarray = subarrays[i];
//     const currentLastDate = new Date(
//       currentSubarray[currentSubarray.length - 1]
//     );
//     const nextFirstDate = new Date(nextSubarray[0]);
//
//     const currentDate = new Date();
//     const yesterday = new Date(currentDate);
//     yesterday.setDate(currentDate.getDate() - 1);
//
//     if (
//       currentLastDate.getTime() === nextFirstDate.getTime() ||
//       currentLastDate.getTime() === currentDate.getTime() ||
//       currentLastDate.getTime() === yesterday.getTime()
//     ) {
//       currentSubarray.push(...nextSubarray.slice(1)); // Merge the subarrays, excluding the first date of the next subarray
//     } else {
//       merged.push(currentSubarray); // Add the subarray as it is
//       currentSubarray = nextSubarray; // Move to the next subarray
//     }
//   }
//
//   merged.push(currentSubarray); // Add the last subarray
//
//   return merged;
// };
