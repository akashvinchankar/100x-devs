const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "akash.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) console.error(err);

  console.log(data);
});
