import { open } from 'node:fs/promises';
import fs from "node:fs"
console.log(fs);
const path = await open("../app/data/products.json")

// async function getAllData() {
//   let data = []
//   for await (const line of path.readLines()) {
//     data.push(line)
//   }
//   return data
// }

const filePath = '../app/data/products.json';
const fileContent = readFileSync(filePath);
// export main function
export default async function ProductsData(req, res) {
  if (req.method == "GET" || fileContent !== null) {
      console.log(fileContent);
      res.status(200).json(fileContent)
  }
  else {
    res.status(400).json("error")
  }
}

function readFileSync(filePath) {
  try {
    const data = fs.readFileSync(filePath,{ encoding: 'utf8' });
    return data;
  } catch (err) {
    // Handle the error if the file couldn't be read
    console.error('Error reading file:', err);
    return null;
  }
}

