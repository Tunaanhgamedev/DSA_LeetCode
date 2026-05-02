export function calculateStreak(log) {
  const dates = Object.keys(log).sort().reverse();
  let streak = 0;
  let current = new Date();

  for (let d of dates) {
    const date = new Date(d);
    if (current.toISOString().slice(0,10) === date.toISOString().slice(0,10)) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else break;
  }

  return streak;
}