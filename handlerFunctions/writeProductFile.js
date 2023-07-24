import { readProductFile } from "./readProductFile";
import fs from "node:fs"
import path from "path";
const filePath = path.join(process.cwd(), "data", "products.json");

export function saveProduct(id, name, price, description) {
  const productData = readProductFile()
  productData.push({ id, productname: name, price, description });

  fs.writeFileSync(filePath, JSON.stringify(productData));
}