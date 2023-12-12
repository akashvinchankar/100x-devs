const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "akash.txt");

// Replace the text in the file with "Hello Akash!!!"
fs.writeFile(filePath, "Hello Akash!!!", (err) => {
  if (err) console.error(err);

  console.log("File written!");
});

// Append the text "Hello Akash!!!" to the file
fs.appendFile(filePath, "Hello Akash!!!", (err) => {
  if (err) console.error(err);

  console.log("File written!");
});
