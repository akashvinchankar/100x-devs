## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



### Hint

```javascript
function counter() {
  // your code here

  let count = 0;

  count += 1;
  console.log(count);

  setTimeout(counter, 1000);
}

counter();
```





































































(Hint: setTimeout)