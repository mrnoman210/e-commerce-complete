import fs from "node:fs"
import path from "path";

const filePath = path.join(process.cwd(), "data", "products.json");

export function readProductFile() {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
}
