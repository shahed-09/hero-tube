function showtime(time) {
  const day = parseInt(time / 86400);
  const remainingSecond = time % 86400;
  const hour = parseInt(remainingSecond / 3600);
  const remainingSecond2 = remainingSecond % 3600;
  const minute = parseInt(remainingSecond2 / 60);
  const seconds = remainingSecond2 % 60;
  return `${day}day ${hour}hour ${minute}minute and ${seconds}seconds ago`;
}
const time = showtime(57984375);
console.log(time);
