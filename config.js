const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your HASITHA MD V1
 session ID",
  MONGODB: process.env.MONGODB || "mongodb://mongo:PVDSiqtdMyyKYfJapaTGjHlBGyLqIHJp@shinkansen.proxy.rlwy.net:47484",
  OWNER_NUM: process.env.OWNER_NUM || "94710328168/94705847788",
};
