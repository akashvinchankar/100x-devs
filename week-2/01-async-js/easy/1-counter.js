// Console log count every second and increment starting from now using setInterval.

let count = 0;
setInterval(() => {
  console.log(++count);
}, 1000);
