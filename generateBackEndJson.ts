import fs from "fs";
import process from "process";

const fd = fs.openSync("src/utils/backEnd.json", "w");
fs.writeSync(
  fd,
  JSON.stringify({
    url: process.env.BACK_END_URL || "localhost:3030",
  })
);
