// clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats -
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  console.log(`12 hrs: ${hours % 12}:${minutes}:${seconds} ${ampm}`);
  console.log(`24 hrs: ${hours}:${minutes}:${seconds}`);
}

setInterval(getTime, 1000);
