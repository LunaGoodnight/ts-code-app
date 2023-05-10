export const groupConsecutiveDates = (dates: string[]) => {
  const sortedDates = dates
    .slice()
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const groups = [];
  let currentGroup = [sortedDates[0]];
  for (let i = 1; i < sortedDates.length; i++) {
    const currentDate = new Date(sortedDates[i]).getTime();
    const prevDate = new Date(sortedDates[i - 1]).getTime();
    const dayDiff = (currentDate - prevDate) / (1000 * 60 * 60 * 24);
    if (dayDiff <= 1) {
      // It's tomorrow
      currentGroup.push(sortedDates[i]);
    } else {
      // Not tomorrow
      groups.push(currentGroup);
      currentGroup = [sortedDates[i]];
    }
  }
  if (currentGroup.length >= 1) {
    groups.push(currentGroup);
  }
  return groups;
};
