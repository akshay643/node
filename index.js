const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const dataArray = JSON.parse(data);

  const lengthsArray = dataArray.map((str) => str.length);

  console.log(lengthsArray);
});
