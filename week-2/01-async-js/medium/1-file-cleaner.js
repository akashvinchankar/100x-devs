const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "text.txt");

// Read the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Trim extra spaces
  const trimmedData = data.replace(/\s+/g, " ").trim();

  // Modify the same text.txt
  fs.writeFile(filePath, trimmedData, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File modified successfully!");
  });
});
