const fs = require("fs");
fs.readFile("cu1.txt", (err, data) => {
  if (err) {
    console.log("error reading cu1.txt", err);
  } else {
    fs.writeFile("cu2.txt", data, (err) => {
      if (err) {
        console.error("error reading cu2.txt", err);
      } else {
        console.log("data transferred to cu2.txt");
      }
    });
  }
}) ;
