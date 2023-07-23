import { saveProduct } from "@/handlerFunctions/getProductsPath";
import { readProductFile } from "@/handlerFunctions/readFile";


export default async function ProductsData(req, res) {
  // ========================= get request ================================
  if (req.method == "GET") {
    res.status(200).json(readProductFile())
  }
  // ======================= post request ================================
  else if (req.method == 'POST') {
    const { productname, price, description } = req.body
    const id = readProductFile().length + 1
    saveProduct(id, productname, price, description)
    res.status(200).json("sucess")
  }
  else {
    res.status(400).json("error")
  }
}