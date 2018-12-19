// import fs from "fs";
// import { join } from "path";
// import { promisify } from "util";
// import log from "./log";
//
// export const access = promisify(fs.access);
// export const read = promisify(fs.readFile);
//
// export const sanitize = string => {
//   const regex = /[<>:"\/\\|?*\x00-\x1F]/g;
//   return string.replace(regex, "-");
//   //TODO: Write a sanitize function to make filename safe
// };
// export const doesExist = async path => {
//   const fullPath = join(__dirname, path);
//
//   return await access(path, fs.constants.F_OK)
//     .then(() => true)
//     .catch(err => {
//       log(`${path} ${err ? "does not exist" : "exists"}`, "error");
//       return false;
//     });
// };
//
// export const getContents = async path => {
//   const fullPath = join(path);
//
//   return await read(fullPath, { encoding: "utf-8" });
// };
