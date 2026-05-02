export function getLevel(total) {
  return Math.floor(total / 20) + 1;
}

export function getXP(total) {
  return total % 20;
}
