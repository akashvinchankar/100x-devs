// Console log a counter that counts up to 5, then stops.

let count = 0;
function counter() {
  console.log(++count);

  if (count < 5) {
    setTimeout(counter, 1000);
  }
}

counter();