import { readUserFile } from "@/handlerFunctions/readUserFile";
import { saveUser } from "@/handlerFunctions/writeUserFile";
import jwt from 'jsonwebtoken';

export default async function createUsers(req, res) {
    const secret = "secretkeywhereebveryonbeishere"
    // ======================= post request ================================
    if (req.method == "POST") {
        const { userName, userEmail, userPassword } = req.body
        const id = readUserFile().length + 1
        const user_data = readUserFile()
        const new_user = {id, userName, userEmail, userPassword}
        user_data.find(item => {
            if (item.userEmail != userEmail) {
                try {
                    const token = jwt.sign(new_user, secret, {expiresIn:"1h"})
                    console.log(token);
                    // res.setHeader('Authorization', `Bearer ${token}`);
                    saveUser(id, userName, userEmail, userPassword)
                    res.status(202).json({message:"User created sucessfully",token})
                } catch (error) {
                    console.log(error);
                    res.status(400).json(error)
                }
            }
            else {
                res.status(404).json("user ready exist")
            }
        })
    }
    else {
        res.status(400).json("error")
    }
}