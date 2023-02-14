// const path = require("path");

// console.log(path.resolve("dateUtils.js"));

// ---2---
// const fs = require("fs");

// fs.readFile("./data.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });

// ---3---
// const fs = require("fs");
const path = require("path");

// const qwe = path.resolve("./qwe");
// const qwe1 = "./qwe";
// console.log(qwe, qwe1);

// fs.readFile(path.resolve("./data.txt"), "utf-8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });

// ---4---
const fs = require("fs/promises");

(async () => {
  try {
    // const data = await fs.readFile(path.resolve("./data.txt"), "utf-8");
    // console.log(data);

    //   запис файла
    // const newContent = `${data} school`;
    // await fs.writeFile("./data1.txt", newContent, "utf-8");

    //   перейменування
    await fs.rename("./workWithFiles.js", "./workWithFilesNew.js");
  } catch (error) {
    console.error(err);
  }
})();
