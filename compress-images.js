const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folder = "./src/images";

fs.readdirSync(folder).forEach(file => {
  if (file.endsWith(".jpg")) {
    sharp(path.join(folder, file))
      .resize(800)
      .jpeg({ quality: 75 })
      .toFile(path.join(folder, "new-" + file))
      .then(() => console.log("Done:", file));
  }
});