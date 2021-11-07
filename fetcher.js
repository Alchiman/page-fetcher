const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, respons, body) => {
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    const { size } = fs.statSync(filePath);
    console.log(`Downloaded and saved ${size} bytes to ${filePath}`);
    //file written successfully
  });
});
