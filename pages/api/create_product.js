import fs from "node:fs"
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const {productname, price, description} = req.body
        fs.writeFile('../data/products.json', (productname,price, description), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ error: 'Error writing to file.' });
      }
    });
        // return res.status(200).json({ message: req.body });

    }   
    else {
        res.status(400).json("error")
    }
}