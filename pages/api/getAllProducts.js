import { readFileSync } from "@/handlerFunctions/getProductsPath";
const filePath = '../app/data/products.json';
const fileContent = readFileSync(filePath);
export default async function ProductsData(req, res) {
  if (req.method == "GET" || fileContent !== null) {
      // res.setHeader('Content-Type', 'application/json');
      res.status(200).json(fileContent)
  }
  else {
    res.status(400).json("error")
  }
}